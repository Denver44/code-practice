function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(`${name} data ready`), delay);
}

// Lifting: wrapping a callback-based utility in a promise.
function getStat(name) {
  return new Promise((resolve) => fakeFetchStat(name, resolve));
}

function output(text) {
  console.log(text);
}

// request all three at once, in parallel
const inventoryPromise = getStat('inventory');
const shippingPromise = getStat('shipping');
const paymentsPromise = getStat('payments');

function chainToShipping() {
  return shippingPromise;
}

function chainToPayments() {
  return paymentsPromise;
}

function complete() {
  output('All stats loaded');
}

inventoryPromise
  .then(output)
  .then(chainToShipping)
  .then(output)
  .then(chainToPayments)
  .then(output)
  .then(complete);

// Run this a few times, node solution.js. The arrival order changes every
// run, since the delay is random, the printed order never does.
