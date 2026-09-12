import { Duck } from './duck/Duck.js';
import { SimpleFlyBehavior } from './duck/SimpleFlyBehavior.js';
import { JetFlyBehavior } from './duck/JetFlyBehavior.js';
import { NoFlyBehavior } from './duck/NoFlyBehavior.js';
import { SimpleQuackBehavior } from './duck/SimpleQuackBehavior.js';
import { NoQuackBehavior } from './duck/NoQuackBehavior.js';

const wildDuck = new Duck(new SimpleFlyBehavior(), new SimpleQuackBehavior());
const rubberDuck = new Duck(new NoFlyBehavior(), new NoQuackBehavior());
const mountainDuck = new Duck(new JetFlyBehavior(), new SimpleQuackBehavior());

wildDuck.performQuack();
wildDuck.performFly();

rubberDuck.performQuack();
rubberDuck.performFly();

mountainDuck.performQuack();
mountainDuck.performFly();
