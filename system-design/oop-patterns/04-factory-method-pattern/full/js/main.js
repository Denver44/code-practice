import { RandomAnimalFactory } from './zoo/RandomAnimalFactory.js';
import { BalancedAnimalFactory } from './zoo/BalancedAnimalFactory.js';

function populateZoo(factory, count) {
  for (let i = 0; i < count; i++) {
    console.log(factory.createAnimal().name());
  }
}

console.log('Random:');
populateZoo(new RandomAnimalFactory(), 6);

console.log('Balanced:');
populateZoo(new BalancedAnimalFactory(), 6);
