// Challenge: this class is exported directly, so anything that imports it
// can build its own separate instance with `new`. Fix this file so that:
//
// 1. Only one CartCounter instance can ever be created (throw if a second
//    `new CartCounter()` is attempted).
// 2. The exported value is frozen, so it can't be mutated from outside.
// 3. The file exports the single instance by default, not the class itself,
//    so importing files can't call `new` on it at all.
//
// Check final/ once you're done, or if you get stuck.

export class CartCounter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count += 1;
    return this.count;
  }
}
