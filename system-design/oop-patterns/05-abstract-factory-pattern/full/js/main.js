import { LightThemeFactory } from './theme/LightThemeFactory.js';
import { DarkThemeFactory } from './theme/DarkThemeFactory.js';

function renderScreen(factory) {
  console.log(factory.createButton().render());
  console.log(factory.createLabel().render());
}

console.log('Light theme:');
renderScreen(new LightThemeFactory());

console.log('Dark theme:');
renderScreen(new DarkThemeFactory());
