function afterTimer() {
  console.log('Cart saved');
}

setTimeout(afterTimer, 1000);

// ---

function fakeAsync(label, cb) {
  setTimeout(() => cb(label), 300);
}

function loadCart(cb) {
  fakeAsync(['shirt', 'shoes'], cb);
}

function applyDiscount(items, cb) {
  fakeAsync([...items, 'discount applied'], cb);
}

function renderReceipt(items) {
  console.log('Receipt:', items);
}

// Nested (the "pyramid" everyone points at)
loadCart(function (items) {
  applyDiscount(items, function (discountedItems) {
    renderReceipt(discountedItems);
  });
});

// Continuation-passing style: same problems, no pyramid
function afterLoad(items) {
  applyDiscount(items, afterDiscount);
}

function afterDiscount(discountedItems) {
  renderReceipt(discountedItems);
}

loadCart(afterLoad);
