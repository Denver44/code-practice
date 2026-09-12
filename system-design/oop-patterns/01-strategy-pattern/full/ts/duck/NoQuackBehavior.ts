import type { IQuackBehavior } from './IQuackBehavior';

export class NoQuackBehavior implements IQuackBehavior {
  quack(): void {
    // stays silent
  }
}
