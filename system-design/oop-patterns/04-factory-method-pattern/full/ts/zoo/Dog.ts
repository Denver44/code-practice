import type { Animal } from './Animal';

export class Dog implements Animal {
  name(): string {
    return 'Dog';
  }
}
