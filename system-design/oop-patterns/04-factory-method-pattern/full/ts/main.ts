import type { AnimalFactory } from './zoo/AnimalFactory';
import { RandomAnimalFactory } from './zoo/RandomAnimalFactory';
import { BalancedAnimalFactory } from './zoo/BalancedAnimalFactory';

function populateZoo(factory: AnimalFactory, count: number): void {
  for (let i = 0; i < count; i++) {
    console.log(factory.createAnimal().name());
  }
}

console.log('Random:');
populateZoo(new RandomAnimalFactory(), 6);

console.log('Balanced:');
populateZoo(new BalancedAnimalFactory(), 6);
