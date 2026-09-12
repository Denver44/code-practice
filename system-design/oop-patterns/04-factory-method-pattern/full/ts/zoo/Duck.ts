import type { Animal } from './Animal';

export class Duck implements Animal {
  name(): string {
    return 'Duck';
  }
}
