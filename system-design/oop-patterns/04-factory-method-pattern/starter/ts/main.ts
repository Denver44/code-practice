// Factory Method Pattern - starter
//
// The random-creation logic lives directly inside populateZoo. There's no
// way to swap in a different creation strategy (like a balanced one) without
// duplicating this whole function.
//
// Your task: extract the creation logic behind a shared AnimalFactory shape,
// with RandomAnimalFactory and a new BalancedAnimalFactory both implementing
// it (see the blog post for the walkthrough), so populateZoo never mentions
// Dog, Cat, or Duck by name.

interface Animal {
  name(): string;
}

class Dog implements Animal {
  name(): string { return 'Dog'; }
}

class Cat implements Animal {
  name(): string { return 'Cat'; }
}

class Duck implements Animal {
  name(): string { return 'Duck'; }
}

function populateZoo(count: number): void {
  for (let i = 0; i < count; i++) {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
      console.log(new Dog().name());
    } else if (choice === 1) {
      console.log(new Cat().name());
    } else {
      console.log(new Duck().name());
    }
  }
}

populateZoo(6);
