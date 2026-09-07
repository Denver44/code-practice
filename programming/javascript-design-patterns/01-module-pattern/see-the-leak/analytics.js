// This file never declared warehouseCount and never imported anything.
// Open the browser console on leak.html and watch it read the exact
// value stock.js and sell.js left behind.
console.log('analytics.js reading warehouseCount:', warehouseCount); // 480

console.log('Same value via window:', window.warehouseCount); // 480

// Now watch this "unrelated" script overwrite the inventory system's data:
window.warehouseCount = 'oops';
console.log('stock.js and sell.js now see:', warehouseCount); // 'oops'
