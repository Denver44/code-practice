import { Dog } from './Dog.js';
import { Cat } from './Cat.js';
import { Duck } from './Duck.js';

export class RandomAnimalFactory {
  createAnimal() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return new Dog();
    if (choice === 1) return new Cat();
    return new Duck();
  }
}
