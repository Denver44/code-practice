import { Beverage } from './Beverage.js';

export class AddOnDecorator extends Beverage {
  constructor(beverage) {
    super();
    this.beverage = beverage;
  }
}
