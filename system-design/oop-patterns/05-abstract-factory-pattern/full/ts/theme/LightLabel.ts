import type { Label } from './Label';

export class LightLabel implements Label {
  render(): string {
    return 'Label: dark text on white';
  }
}
