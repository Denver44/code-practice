import type { IFlyBehavior } from './IFlyBehavior';
import type { IQuackBehavior } from './IQuackBehavior';

export class Duck {
  constructor(
    private flyBehavior: IFlyBehavior,
    private quackBehavior: IQuackBehavior,
  ) {}

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }
}
