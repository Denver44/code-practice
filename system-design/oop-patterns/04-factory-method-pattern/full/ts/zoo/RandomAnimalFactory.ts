import type { Animal } from './Animal';
import type { AnimalFactory } from './AnimalFactory';
import { Dog } from './Dog';
import { Cat } from './Cat';
import { Duck } from './Duck';

export class RandomAnimalFactory implements AnimalFactory {
  createAnimal(): Animal {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return new Dog();
    if (choice === 1) return new Cat();
    return new Duck();
  }
}
