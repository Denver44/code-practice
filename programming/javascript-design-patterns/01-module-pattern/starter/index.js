// Challenge: everything below lives in one file, and warehouseCount
// is reachable from anywhere that loads this script (try it: run this
// file, then require it a second time somewhere else in the same process
// and watch warehouseCount keep the value from the first run).
//
// Your job: split this into two files, stock.js and index.js, using
// export/import, so that warehouseCount is private to stock.js and only
// reserveUnits and checkStock are reachable from index.js.
//
// Check final/ once you're done, or if you get stuck.

let warehouseCount = 500;

function reserveUnits(amount) {
  warehouseCount -= amount;
  return warehouseCount;
}

function checkStock() {
  return warehouseCount;
}

reserveUnits(20);
console.log('Units left after reserving 20:', checkStock());

reserveUnits(75);
console.log('Units left after reserving 75 more:', checkStock());

// Anything else in this process can still read or overwrite
// warehouseCount directly, since it was never made private.
console.log('Direct access still works, and it should not:', warehouseCount);
