// Exercise 2: the same coordination problem as before (inventory, shipping,
// payments, printed in order regardless of arrival order), this time solved
// with thunks instead of a shared object and a for-loop.
//
// fakeFetchStat below fakes a network call for one stat, with a random delay.
//
// Your job: write getStatThunk(name). It needs to return a thunk (a function
// that takes one callback and eventually calls it with the result).
//
// The big question: should the thunk be lazy (start the fetch only when
// called) or active (start the fetch the instant it's created)? Only one of
// those actually keeps the three requests running in parallel. Pick wrong
// and you'll accidentally serialize them.
//
// Hint: whichever you pick, you don't know which will happen first, the
// fetch finishing, or someone calling the thunk wanting the result. You need
// two variables in closure to bridge both possible orderings.
//
// Run this with: node exercise.js
// Compare your answer against solution.js when you're done, or if you get stuck.

function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(name, `${name} data ready`), delay);
}

function getStatThunk(name) {
  // what do we do here?
}

const inventoryThunk = getStatThunk('inventory');
const shippingThunk = getStatThunk('shipping');
const paymentsThunk = getStatThunk('payments');

// coordinate them so they print in order: inventory, shipping, payments
