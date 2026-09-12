import type { UIFactory } from './theme/UIFactory';
import { LightThemeFactory } from './theme/LightThemeFactory';
import { DarkThemeFactory } from './theme/DarkThemeFactory';

function renderScreen(factory: UIFactory): void {
  console.log(factory.createButton().render());
  console.log(factory.createLabel().render());
}

console.log('Light theme:');
renderScreen(new LightThemeFactory());

console.log('Dark theme:');
renderScreen(new DarkThemeFactory());
