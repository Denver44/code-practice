import { Duck } from './duck/Duck';
import { SimpleFlyBehavior } from './duck/SimpleFlyBehavior';
import { JetFlyBehavior } from './duck/JetFlyBehavior';
import { NoFlyBehavior } from './duck/NoFlyBehavior';
import { SimpleQuackBehavior } from './duck/SimpleQuackBehavior';
import { NoQuackBehavior } from './duck/NoQuackBehavior';

const wildDuck = new Duck(new SimpleFlyBehavior(), new SimpleQuackBehavior());
const rubberDuck = new Duck(new NoFlyBehavior(), new NoQuackBehavior());
const mountainDuck = new Duck(new JetFlyBehavior(), new SimpleQuackBehavior());

wildDuck.performQuack();
wildDuck.performFly();

rubberDuck.performQuack();
rubberDuck.performFly();

mountainDuck.performQuack();
mountainDuck.performFly();
