import { AddOnDecorator } from './AddOnDecorator.js';

export class Soy extends AddOnDecorator {
  cost() {
    return this.beverage.cost() + 1;
  }
}
