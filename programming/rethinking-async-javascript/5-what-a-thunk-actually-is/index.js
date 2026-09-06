// Synchronous thunk: a closure that already has everything it needs.
function add(x, y) {
  return x + y;
}

function makeAddThunk() {
  return function () {
    return add(10, 15);
  };
}

const thunk = makeAddThunk();
console.log(thunk()); // 25
console.log(thunk()); // 25, every single time

// Asynchronous thunk: takes a callback instead of returning directly.
function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(name, `${name} data ready`), delay);
}

function fetchStatThunk(name) {
  return function (cb) {
    fakeFetchStat(name, (_, data) => cb(data));
  };
}

const inventoryThunk = fetchStatThunk('inventory');
inventoryThunk((data) => console.log(data));

// A generalized way to make one from any function and its arguments.
function makeThunk(fn, ...args) {
  return function (cb) {
    fn(...args, cb);
  };
}

const shippingThunk = makeThunk(fakeFetchStat, 'shipping');
shippingThunk((name, data) => console.log(data));

// Pre-building thunks ahead of time, and the one that can't be.
function getBasePrice(sku, cb) {
  setTimeout(() => cb(120), 300);
}

function getShippingCost(sku, cb) {
  setTimeout(() => cb(15), 300);
}

function getFinalTotal(amount, cb) {
  setTimeout(() => cb(amount * 1.08), 300);
}

const baseThunk = makeThunk(getBasePrice, 'sofa-142');
const shippingCostThunk = makeThunk(getShippingCost, 'sofa-142');

baseThunk((base) => {
  shippingCostThunk((shipping) => {
    // Only now do both numbers exist, so only now can this thunk be built.
    const totalThunk = makeThunk(getFinalTotal, base + shipping);
    totalThunk((total) => console.log(`Total: $${total.toFixed(2)}`));
  });
});
