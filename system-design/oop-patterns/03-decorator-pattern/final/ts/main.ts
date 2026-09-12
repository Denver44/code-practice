// Decorator Pattern - final
//
// AddOnDecorator both is a Beverage and has a Beverage. Each concrete
// decorator asks the beverage it wraps for its cost, then adds its own on
// top. Wrapping Espresso in Caramel, then wrapping that in Soy, stacks the
// costs without Beverage or Espresso ever needing to change.

abstract class Beverage {
  abstract cost(): number;
}

class Espresso extends Beverage {
  cost(): number {
    return 1;
  }
}

abstract class AddOnDecorator extends Beverage {
  constructor(protected beverage: Beverage) {
    super();
  }
}

class Caramel extends AddOnDecorator {
  cost(): number {
    return this.beverage.cost() + 2;
  }
}

class Soy extends AddOnDecorator {
  cost(): number {
    return this.beverage.cost() + 1;
  }
}

const espresso = new Espresso();
const caramel = new Caramel(espresso);
const soy = new Soy(caramel);

console.log('Espresso:', espresso.cost()); // 1
console.log('Espresso + Caramel:', caramel.cost()); // 3
console.log('Espresso + Caramel + Soy:', soy.cost()); // 4
