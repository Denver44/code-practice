import { DarkButton } from './DarkButton.js';
import { DarkLabel } from './DarkLabel.js';

export class DarkThemeFactory {
  createButton() { return new DarkButton(); }
  createLabel() { return new DarkLabel(); }
}
