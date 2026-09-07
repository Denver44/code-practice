// Same "unrelated analytics script" as before, now pointed at the
// IIFE-wrapped version of stock.js.
console.log('warehouseCount on window:', window.warehouseCount); // undefined, it's private now

// The one thing the module deliberately exposed still works fine:
console.log('reserveUnits still callable:', reserveUnits(20)); // 480
