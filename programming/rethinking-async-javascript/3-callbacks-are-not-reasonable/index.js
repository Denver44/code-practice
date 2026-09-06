// The pseudocode dream, pause/resume don't actually exist:
//
// placeOrder();
// pause;
// sendConfirmationEmail(); // picks up here once resumed

function fakeAsync(value, cb) {
  setTimeout(() => cb(value), 300);
}

function placeOrder(cb) {
  fakeAsync({ orderId: 42 }, cb);
}

function sendConfirmationEmail(order, cb) {
  fakeAsync(`Confirmation sent for order ${order.orderId}`, cb);
}

function logResult(message) {
  console.log(message);
}

// Nesting is the only tool plain callbacks give you for this temporal
// dependency: sendConfirmationEmail can't run until placeOrder hands
// back an order to send a confirmation for.
placeOrder(function (order) {
  sendConfirmationEmail(order, function (message) {
    logResult(message);
  });
});
