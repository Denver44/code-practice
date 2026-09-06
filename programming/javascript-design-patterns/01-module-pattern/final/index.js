import { reserveUnits, checkStock } from './stock.js';

reserveUnits(20);
console.log('Units left after reserving 20:', checkStock());

reserveUnits(75);
console.log('Units left after reserving 75 more:', checkStock());

// This would throw: SyntaxError: The requested module './stock.js'
// does not provide an export named 'warehouseCount'
// import { warehouseCount } from './stock.js';
