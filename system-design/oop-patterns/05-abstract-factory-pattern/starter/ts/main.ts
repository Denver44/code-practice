// Abstract Factory Pattern - starter
//
// createButton() and createLabel() are two separate, unrelated factory
// functions. Nothing stops you from accidentally pairing a light button
// with a dark label, since the two calls have no connection to each other.
//
// Your task: refactor this using the abstract factory pattern (see the blog
// post for the walkthrough) so a single UIFactory shape guarantees the
// button and label it builds always match.

interface Button {
  render(): string;
}

interface Label {
  render(): string;
}

class LightButton implements Button {
  render(): string { return '[ Button: dark text on white ]'; }
}

class DarkLabel implements Label {
  render(): string { return 'Label: white text on black'; }
}

function createButton(): Button {
  return new LightButton();
}

function createLabel(): Label {
  return new DarkLabel();
}

const button = createButton();
const label = createLabel();

// Bug: a light button paired with a dark label, and nothing caught it.
console.log(button.render());
console.log(label.render());
