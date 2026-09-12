import type { IFlyBehavior } from './IFlyBehavior';

export class NoFlyBehavior implements IFlyBehavior {
  fly(): void {
    // stays on the ground
  }
}
