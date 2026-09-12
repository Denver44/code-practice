// Decorator Pattern - starter
//
// Every extra is a boolean flag on Beverage, and cost() has to know about
// every single one of them to compute a price. Adding a new extra means
// editing this class, and an extra that needs a count (like espresso shots)
// doesn't even fit as a boolean.
//
// Your task: refactor this using the decorator pattern (see the blog post
// for the walkthrough) so that adding a new extra never touches Beverage,
// Espresso, or any existing extra's code.

abstract class Beverage {
  hasCaramel = false;
  hasSoy = false;

  cost(): number {
    let total = this.baseCost();
    if (this.hasCaramel) total += 2;
    if (this.hasSoy) total += 1;
    return total;
  }

  abstract baseCost(): number;
}

class Espresso extends Beverage {
  baseCost(): number {
    return 1;
  }
}

const espresso = new Espresso();
espresso.hasCaramel = true;
espresso.hasSoy = true;

console.log('Cost:', espresso.cost()); // 4
