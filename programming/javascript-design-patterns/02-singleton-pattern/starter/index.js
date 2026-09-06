import { CartCounter } from './counter.js';

// header.js and checkout.js each importing this class and calling
// `new` would build two unrelated counters. Simulated here in one
// file for simplicity:
const headerCounter = new CartCounter();
headerCounter.increment();

const checkoutCounter = new CartCounter();
checkoutCounter.increment();

console.log('Header count:', headerCounter.count); // 1
console.log('Checkout count:', checkoutCounter.count); // 1, should be 2 if shared

// Bug: these should be the exact same object, sharing the exact
// same count, since a cart only has one real item count.
console.log('Same instance?', headerCounter === checkoutCounter); // false, should be true
