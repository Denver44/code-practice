import type { Button } from './Button';
import type { Label } from './Label';

export interface UIFactory {
  createButton(): Button;
  createLabel(): Label;
}
