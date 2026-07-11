console.log('Start');

setTimeout(() => console.log('Timer callback'), 0);

Promise.resolve('Resolved promise').then((value) => {
  const start = Date.now();
  while (Date.now() - start < 300) {} // a deliberately slow microtask
  console.log(value);
});

console.log('End');

// Expected order: Start, End, Resolved promise (after ~300ms), Timer callback.
// The timer's own 0ms delay elapses long before the promise's callback
// finishes running, but it still has to wait: the event loop can't move on
// to the regular callback queue until the call stack is genuinely empty,
// and this slow microtask keeps it busy exactly like slow synchronous code
// would.
