// Exercise: the same coordination problem as before, this time solved with
// promises instead of callbacks or thunks.
//
// fakeFetchStat below fakes a network call for one stat, with a random delay,
// same as always.
//
// Your job:
// 1. Write getStat(name), which "lifts" fakeFetchStat into a promise-aware
//    function: it should return a promise instead of taking a callback.
// 2. Create three promises (inventory, shipping, payments), right away, so
//    all three requests start at the same time.
// 3. Chain them together so each one prints as soon as it's safe to, in this
//    fixed order: inventory, shipping, payments. Log "All stats loaded" once
//    all three have printed.
//
// Hint: you can't pass a promise directly into .then(). You have to return
// it from inside a function.
//
// Run this with: node exercise.js
// Compare your answer against solution.js when you're done, or if you get stuck.

function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(`${name} data ready`), delay);
}

function getStat(name) {
  // what do we do here?
}

// request all three at once, in parallel
