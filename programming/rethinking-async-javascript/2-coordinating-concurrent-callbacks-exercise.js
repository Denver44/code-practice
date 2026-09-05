// Exercise: coordinate three concurrent callbacks.
//
// fetchStat below fakes a network call for one stat, with a random delay
// so the three calls below finish in a different order every time you run
// this file.
//
// Your job: no matter what order they actually finish in, print them in
// this fixed order: inventory, shipping, payments. Print each one as soon
// as it's safe to, don't wait for all three if you don't have to. Once
// all three have printed, log "All stats loaded".
//
// Hint: one callback alone can't know whether it's safe to print, it needs
// to check what the other two have done. That means all three calls need
// to share something, a plain object works fine, that holds onto whatever
// has already arrived.
//
// Run this with: node 2-coordinating-concurrent-callbacks-exercise.js
// Compare your answer against 2-coordinating-concurrent-callbacks.js when
// you're done, or if you get stuck.

function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(name, `${name} data ready`), delay);
}

function handleResponse(name, data) {
  // what do we do here?
}

fakeFetchStat('inventory', handleResponse);
fakeFetchStat('shipping', handleResponse);
fakeFetchStat('payments', handleResponse);
