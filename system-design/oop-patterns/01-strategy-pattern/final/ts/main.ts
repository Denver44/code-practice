// Strategy Pattern - final
//
// Flying and quacking are pulled out into their own interfaces. A Duck no
// longer writes any flying or quacking code itself, it just holds a box for
// each and asks that box to do the work. There is no MountainDuck class or
// CloudDuck class anymore, just different combinations of the same boxes.
// Unlike the C++ version, there's no ownership question here, TypeScript's
// garbage collector handles cleanup, so a plain constructor parameter is enough.

interface IFlyBehavior {
  fly(): void;
}

interface IQuackBehavior {
  quack(): void;
}

class SimpleFlyBehavior implements IFlyBehavior {
  fly() { console.log('Flapping and flying.'); }
}

class JetFlyBehavior implements IFlyBehavior {
  fly() { console.log('Soaring on mountain winds.'); }
}

class NoFlyBehavior implements IFlyBehavior {
  fly() { /* stays on the ground */ }
}

class SimpleQuackBehavior implements IQuackBehavior {
  quack() { console.log('Quack!'); }
}

class NoQuackBehavior implements IQuackBehavior {
  quack() { /* stays silent */ }
}

class Duck {
  constructor(
    private flyBehavior: IFlyBehavior,
    private quackBehavior: IQuackBehavior,
  ) {}

  performFly() { this.flyBehavior.fly(); }
  performQuack() { this.quackBehavior.quack(); }
}

const wildDuck = new Duck(new SimpleFlyBehavior(), new SimpleQuackBehavior());
const rubberDuck = new Duck(new NoFlyBehavior(), new NoQuackBehavior());
const mountainDuck = new Duck(new JetFlyBehavior(), new SimpleQuackBehavior());
const cloudDuck = new Duck(new JetFlyBehavior(), new NoQuackBehavior());

for (const duck of [wildDuck, rubberDuck, mountainDuck, cloudDuck]) {
  duck.performQuack();
  duck.performFly();
}
