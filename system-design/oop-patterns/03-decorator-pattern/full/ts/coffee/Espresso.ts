import { Beverage } from './Beverage';

export class Espresso extends Beverage {
  cost(): number {
    return 1;
  }
}
