import type { Button } from './Button';
import type { Label } from './Label';
import type { UIFactory } from './UIFactory';
import { LightButton } from './LightButton';
import { LightLabel } from './LightLabel';

export class LightThemeFactory implements UIFactory {
  createButton(): Button { return new LightButton(); }
  createLabel(): Label { return new LightLabel(); }
}
