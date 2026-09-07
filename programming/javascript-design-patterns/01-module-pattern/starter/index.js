// Challenge: everything below lives in one plain file, so warehouseCount
// is just a regular variable. Any function added to this same file,
// including ones that have nothing to do with stock, can read or
// overwrite it directly, the same way sibling <script> tags in a browser
// can read or overwrite each other's top-level `var` declarations.
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
