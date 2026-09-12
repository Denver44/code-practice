// Factory Method Pattern - final
//
// RandomAnimalFactory and BalancedAnimalFactory both implement AnimalFactory,
// so populateZoo can accept either one without ever mentioning Dog, Cat,
// Duck, or either factory by name.

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

interface AnimalFactory {
  createAnimal(): Animal;
}

class RandomAnimalFactory implements AnimalFactory {
  createAnimal(): Animal {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return new Dog();
    if (choice === 1) return new Cat();
    return new Duck();
  }
}

class BalancedAnimalFactory implements AnimalFactory {
  private dogCount = 0;
  private catCount = 0;
  private duckCount = 0;

  createAnimal(): Animal {
    if (this.dogCount <= this.catCount && this.dogCount <= this.duckCount) {
      this.dogCount++;
      return new Dog();
    }
    if (this.catCount <= this.duckCount) {
      this.catCount++;
      return new Cat();
    }
    this.duckCount++;
    return new Duck();
  }
}

function populateZoo(factory: AnimalFactory, count: number): void {
  for (let i = 0; i < count; i++) {
    console.log(factory.createAnimal().name());
  }
}

console.log('Random:');
populateZoo(new RandomAnimalFactory(), 6);

console.log('Balanced:');
populateZoo(new BalancedAnimalFactory(), 6);
