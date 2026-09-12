import { Espresso } from './coffee/Espresso';
import { Caramel } from './coffee/Caramel';
import { Soy } from './coffee/Soy';

const espresso = new Espresso();
const caramel = new Caramel(espresso);
const soy = new Soy(caramel);

console.log('Espresso:', espresso.cost());
console.log('Espresso + Caramel:', caramel.cost());
console.log('Espresso + Caramel + Soy:', soy.cost());
