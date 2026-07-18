function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(name, `${name} data ready`), delay);
}

const responses = {};
const order = ['inventory', 'shipping', 'payments'];

function handleResponse(name, data) {
  if (name in responses) return; // already seen this one, ignore a duplicate
  responses[name] = data;

  for (let i = 0; i < order.length; i++) {
    const key = order[i];
    if (!(key in responses)) return; // hit a gap, stop here for now
    if (responses[key] === false) continue; // already printed this one
    console.log(responses[key]);
    responses[key] = false; // mark as printed, without deleting the key
  }

  const allPrinted = order.every((key) => responses[key] === false);
  if (allPrinted) console.log('All stats loaded');
}

fakeFetchStat('inventory', handleResponse);
fakeFetchStat('shipping', handleResponse);
fakeFetchStat('payments', handleResponse);

// Run this a few times, node file.js, the random delay means the
// arrival order changes every run, the printed order never does.
