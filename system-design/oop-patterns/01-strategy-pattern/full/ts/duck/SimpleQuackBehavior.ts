import type { IQuackBehavior } from './IQuackBehavior';

export class SimpleQuackBehavior implements IQuackBehavior {
  quack(): void {
    console.log('Quack!');
  }
}
