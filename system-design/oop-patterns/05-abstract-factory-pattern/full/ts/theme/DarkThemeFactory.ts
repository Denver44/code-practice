import type { Button } from './Button';
import type { Label } from './Label';
import type { UIFactory } from './UIFactory';
import { DarkButton } from './DarkButton';
import { DarkLabel } from './DarkLabel';

export class DarkThemeFactory implements UIFactory {
  createButton(): Button { return new DarkButton(); }
  createLabel(): Label { return new DarkLabel(); }
}
