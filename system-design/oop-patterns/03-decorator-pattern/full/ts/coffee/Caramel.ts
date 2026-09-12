import { AddOnDecorator } from './AddOnDecorator';

export class Caramel extends AddOnDecorator {
  cost(): number {
    return this.beverage.cost() + 2;
  }
}
