function fakeFetchOrder(orderId, onSuccess, onError) {
  setTimeout(() => onSuccess({ orderId, total: 84 }), 300);
}

// Attempt one: split success/error callbacks.
// Unanswered: what if neither fires? what if both do?
fakeFetchOrder(
  'order-1',
  (order) => console.log(order),
  (err) => console.error(err)
);

function fakeFetchOrderErrFirst(orderId, cb) {
  setTimeout(() => cb(null, { orderId, total: 84 }), 300);
}

// Attempt two: Node-style error-first callback.
// Unanswered: what if this fires twice? what if err and order are both set?
fakeFetchOrderErrFirst('order-1', function (err, order) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(order);
});

// The real problem, untouched by either "fix": a genuine temporal
// dependency, nested three levels deep.
function fakeAsync(value, cb) {
  setTimeout(() => cb(value), 300);
}

function getBasePrice(sku, cb) {
  fakeAsync(120, cb);
}

function getDiscount(base, cb) {
  fakeAsync(base * 0.9, cb);
}

function getFinalTotal(discounted, cb) {
  fakeAsync(discounted * 1.08, cb);
}

getBasePrice('sofa-142', function (base) {
  getDiscount(base, function (discounted) {
    getFinalTotal(discounted, function (total) {
      console.log(`Final total: $${total.toFixed(2)}`);
    });
  });
});
