import type { Animal } from './Animal';

export interface AnimalFactory {
  createAnimal(): Animal;
}
