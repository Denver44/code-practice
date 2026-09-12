import { AddOnDecorator } from './AddOnDecorator';

export class Soy extends AddOnDecorator {
  cost(): number {
    return this.beverage.cost() + 1;
  }
}
