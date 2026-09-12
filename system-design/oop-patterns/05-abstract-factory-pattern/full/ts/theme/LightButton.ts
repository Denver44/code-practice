import type { Button } from './Button';

export class LightButton implements Button {
  render(): string {
    return '[ Button: dark text on white ]';
  }
}
