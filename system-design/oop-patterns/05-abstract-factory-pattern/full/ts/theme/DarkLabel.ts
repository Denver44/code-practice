import type { Label } from './Label';

export class DarkLabel implements Label {
  render(): string {
    return 'Label: white text on black';
  }
}
