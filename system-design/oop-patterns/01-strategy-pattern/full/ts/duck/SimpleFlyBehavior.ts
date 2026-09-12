import type { IFlyBehavior } from './IFlyBehavior';

export class SimpleFlyBehavior implements IFlyBehavior {
  fly(): void {
    console.log('Flapping and flying.');
  }
}
