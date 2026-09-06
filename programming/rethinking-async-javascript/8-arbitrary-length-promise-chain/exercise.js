// Exercise: the chain from the last exercise only works for exactly three
// promises, because it's written by hand, one .then() at a time. Your job
// is to make it work for a list of any length: 1, 5, or 100 items.
//
// getStat is already done for you, same as before.
//
// Your job:
// 1. Turn the `stats` array into an array of promises (hint: .map).
// 2. Fold that array of promises into one chain (hint: .reduce). The
//    initial value should be an already-resolved promise: Promise.resolve().
// 3. Each item should print as soon as it's safe to, in the array's order.
//    Log "All stats loaded" once everything has printed.
//
// Run this with: node exercise.js
// Compare your answer against solution.js when you're done, or if you get stuck.

function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(`${name} data ready`), delay);
}

function getStat(name) {
  return new Promise((resolve) => fakeFetchStat(name, resolve));
}

function output(text) {
  console.log(text);
}

const stats = ['inventory', 'shipping', 'payments', 'tax', 'insurance'];

// what do we do here?
