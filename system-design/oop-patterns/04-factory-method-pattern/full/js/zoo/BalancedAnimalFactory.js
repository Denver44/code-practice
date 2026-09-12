import { Dog } from './Dog.js';
import { Cat } from './Cat.js';
import { Duck } from './Duck.js';

export class BalancedAnimalFactory {
  #dogCount = 0;
  #catCount = 0;
  #duckCount = 0;

  createAnimal() {
    if (this.#dogCount <= this.#catCount && this.#dogCount <= this.#duckCount) {
      this.#dogCount++;
      return new Dog();
    }
    if (this.#catCount <= this.#duckCount) {
      this.#catCount++;
      return new Cat();
    }
    this.#duckCount++;
    return new Duck();
  }
}
