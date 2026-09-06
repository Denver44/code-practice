// My solution to Exercise 1 (coordinate three concurrent callbacks).
// See exercise.js in this same folder for the empty starter,
// and solution.js for the reference solution.

function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(name, `${name} data ready`), delay);
}

const responses = {};
const order = ['inventory', 'shipping', 'payments'];

function handleResponse(name, data) {
  if (responses[name]) {
    return;
  }

  responses[name] = data;

  const reachedTheEnd = order.every((key) => {
    if (!(key in responses)) return false;
    if (responses[key] == false) return true;
    console.log(responses[key]);
    responses[key] = false;
    return true;
  });

  if (reachedTheEnd) console.log('All stats loaded');
}

fakeFetchStat('inventory', handleResponse);
fakeFetchStat('shipping', handleResponse);
fakeFetchStat('payments', handleResponse);
