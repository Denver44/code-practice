import counter from './counter.js';

// Both "imports" below are the same module load, cached by Node,
// so they're really the same object.
counter.increment();
counter.increment();

console.log('Count:', counter.count); // 2, shared correctly

try {
  const CartCounter = Object.getPrototypeOf(counter).constructor;
  new CartCounter();
} catch (error) {
  console.log('Blocked second instance:', error.message);
}
