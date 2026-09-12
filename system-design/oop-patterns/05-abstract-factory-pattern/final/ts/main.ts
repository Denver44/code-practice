// Abstract Factory Pattern - final
//
// UIFactory has one method per related product. LightThemeFactory and
// DarkThemeFactory each build their own matching set, so renderScreen can
// never end up with a mismatched button/label pair.

interface Button {
  render(): string;
}

interface Label {
  render(): string;
}

interface UIFactory {
  createButton(): Button;
  createLabel(): Label;
}

class LightButton implements Button {
  render(): string { return '[ Button: dark text on white ]'; }
}

class DarkButton implements Button {
  render(): string { return '[ Button: white text on black ]'; }
}

class LightLabel implements Label {
  render(): string { return 'Label: dark text on white'; }
}

class DarkLabel implements Label {
  render(): string { return 'Label: white text on black'; }
}

class LightThemeFactory implements UIFactory {
  createButton(): Button { return new LightButton(); }
  createLabel(): Label { return new LightLabel(); }
}

class DarkThemeFactory implements UIFactory {
  createButton(): Button { return new DarkButton(); }
  createLabel(): Label { return new DarkLabel(); }
}

function renderScreen(factory: UIFactory): void {
  console.log(factory.createButton().render());
  console.log(factory.createLabel().render());
}

console.log('Light theme:');
renderScreen(new LightThemeFactory());

console.log('Dark theme:');
renderScreen(new DarkThemeFactory());
