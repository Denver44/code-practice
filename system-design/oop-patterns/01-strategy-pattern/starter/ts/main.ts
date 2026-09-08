// Strategy Pattern - starter
//
// MountainDuck and CloudDuck are cousins, not parent/child, but they fly the
// exact same special way. Because inheritance only shares code downward, that
// flying code had to be copy-pasted into both classes below.
//
// Your task: refactor this so the shared flying code lives in exactly one
// place, using the strategy pattern (see the blog post for the walkthrough).
// Hardcoding an if/else inside Duck.fly() does not count - the point is that
// Duck should not need to change when a new flying style is added.

abstract class Duck {
  quack() { console.log('Quack!'); }
  fly() { console.log('Flying...'); }
  abstract display(): void;
}

class WildDuck extends Duck {
  display() { console.log('A wild duck.'); }
}

class RubberDuck extends Duck {
  fly() { /* rubber ducks don't fly */ }
  display() { console.log('A rubber duck.'); }
}

class MountainDuck extends Duck {
  fly() { console.log('Soaring on mountain winds...'); }
  display() { console.log('A mountain duck.'); }
}

class CloudDuck extends Duck {
  fly() { console.log('Soaring on mountain winds...'); } // duplicated
  display() { console.log('A cloud duck.'); }
}

const ducks: Duck[] = [new WildDuck(), new RubberDuck(), new MountainDuck(), new CloudDuck()];

for (const duck of ducks) {
  duck.display();
  duck.quack();
  duck.fly();
}
