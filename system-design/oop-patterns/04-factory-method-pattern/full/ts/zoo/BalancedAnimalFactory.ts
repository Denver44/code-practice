import type { Animal } from './Animal';
import type { AnimalFactory } from './AnimalFactory';
import { Dog } from './Dog';
import { Cat } from './Cat';
import { Duck } from './Duck';

export class BalancedAnimalFactory implements AnimalFactory {
  private dogCount = 0;
  private catCount = 0;
  private duckCount = 0;

  createAnimal(): Animal {
    if (this.dogCount <= this.catCount && this.dogCount <= this.duckCount) {
      this.dogCount++;
      return new Dog();
    }
    if (this.catCount <= this.duckCount) {
      this.catCount++;
      return new Cat();
    }
    this.duckCount++;
    return new Duck();
  }
}
