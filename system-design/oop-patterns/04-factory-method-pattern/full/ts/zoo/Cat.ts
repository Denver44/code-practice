import type { Animal } from './Animal';

export class Cat implements Animal {
  name(): string {
    return 'Cat';
  }
}
