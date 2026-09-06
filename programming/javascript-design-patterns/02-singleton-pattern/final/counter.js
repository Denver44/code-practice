class CartCounter {
  #count = 0;

  constructor() {
    if (CartCounter.instance) {
      throw new Error('Only one CartCounter can exist.');
    }
    CartCounter.instance = this;
  }
  increment() {
    this.#count += 1;
    return this.#count;
  }
  get count() {
    return this.#count;
  }
}

const instance = new CartCounter();
Object.freeze(instance);

export default instance;
