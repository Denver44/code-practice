import { LightButton } from './LightButton.js';
import { LightLabel } from './LightLabel.js';

export class LightThemeFactory {
  createButton() { return new LightButton(); }
  createLabel() { return new LightLabel(); }
}
