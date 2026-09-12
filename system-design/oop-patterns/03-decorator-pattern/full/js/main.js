import { Espresso } from './coffee/Espresso.js';
import { Caramel } from './coffee/Caramel.js';
import { Soy } from './coffee/Soy.js';

const espresso = new Espresso();
const caramel = new Caramel(espresso);
const soy = new Soy(caramel);

console.log('Espresso:', espresso.cost());
console.log('Espresso + Caramel:', caramel.cost());
console.log('Espresso + Caramel + Soy:', soy.cost());
