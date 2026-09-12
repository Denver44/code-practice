export class Duck {
  #flyBehavior;
  #quackBehavior;

  constructor(flyBehavior, quackBehavior) {
    this.#flyBehavior = flyBehavior;
    this.#quackBehavior = quackBehavior;
  }

  performFly() {
    this.#flyBehavior.fly();
  }

  performQuack() {
    this.#quackBehavior.quack();
  }
}
