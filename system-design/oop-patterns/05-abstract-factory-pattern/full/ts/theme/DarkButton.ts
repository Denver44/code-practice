import type { Button } from './Button';

export class DarkButton implements Button {
  render(): string {
    return '[ Button: white text on black ]';
  }
}
