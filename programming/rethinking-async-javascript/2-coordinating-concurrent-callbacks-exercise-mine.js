// My solution to Exercise 1 (coordinate three concurrent callbacks).
// See 2-coordinating-concurrent-callbacks-exercise.js for the empty starter,
// and 2-coordinating-concurrent-callbacks.js for the reference solution.

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

  responses[name] = { data, printed: false };

  order.every((key) => {
    if (!responses[key]) return false;
    else if (responses[key]?.printed) return true;
    else {
      console.log(responses[key].data);
      responses[key].printed = true;
      return true;
    }
  });

  if (order.every((key) => responses[key])) console.log('All stats loaded');
}

fakeFetchStat('inventory', handleResponse);
fakeFetchStat('shipping', handleResponse);
fakeFetchStat('payments', handleResponse);
