// A timer's delay is a minimum, not a guarantee, it still waits behind
// whatever the call stack is busy running.
console.log('Start');

setTimeout(() => console.log('Timer callback'), 0);

const start = Date.now();
while (Date.now() - start < 200) {} // deliberately blocking the chef for 200ms

console.log('End of synchronous work');

// ---

// Promise callbacks (microtasks) always run before the next regular
// callback, even when the timer's delay is 0.
console.log('Start');

setTimeout(() => console.log('Timer callback (regular queue)'), 0);

Promise.resolve().then(() => console.log('Promise callback (microtask queue)'));

console.log('End');
