import { AddOnDecorator } from './AddOnDecorator.js';

export class Caramel extends AddOnDecorator {
  cost() {
    return this.beverage.cost() + 2;
  }
}
