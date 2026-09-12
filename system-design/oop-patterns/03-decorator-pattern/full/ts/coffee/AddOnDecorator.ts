import { Beverage } from './Beverage';

export abstract class AddOnDecorator extends Beverage {
  constructor(protected beverage: Beverage) {
    super();
  }
}
