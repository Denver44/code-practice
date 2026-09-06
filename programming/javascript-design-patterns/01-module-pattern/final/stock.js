let warehouseCount = 500;

export function reserveUnits(amount) {
  warehouseCount -= amount;
  return warehouseCount;
}

export function checkStock() {
  return warehouseCount;
}

// warehouseCount is never exported, so it stays private to this module.
// Try `import { warehouseCount } from './stock.js'` in index.js and see
// the "no export named" error Node throws at the module boundary.
