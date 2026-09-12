import type { IFlyBehavior } from './IFlyBehavior';

export class JetFlyBehavior implements IFlyBehavior {
  fly(): void {
    console.log('Soaring on mountain winds.');
  }
}
