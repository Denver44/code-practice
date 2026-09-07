// Challenge: onCheckoutClick and onWishlistClick both call the exact
// same three functions, in the exact same order. Add a fourth thing to
// log (try it: a sendSlackAlert(data) function) and notice you have to
// remember to add it to BOTH handlers.
//
// Your job: build an observable (in a new file, observable.js) with
// subscribe, unsubscribe, and notify methods. Subscribe the three
// functions below to it once, then replace the bodies of both click
// handlers with a single observable.notify(data) call.
//
// Check final/ once you're done, or if you get stuck.

function logToAnalytics(data) {
  console.log('Logged to analytics:', data);
}
function logToErrorTracker(data) {
  console.log('Logged to error tracker:', data);
}
function sendReceiptEmail(data) {
  console.log('Sent receipt email:', data);
}

function onCheckoutClick(data) {
  logToAnalytics(data);
  logToErrorTracker(data);
  sendReceiptEmail(data);
}

function onWishlistClick(data) {
  logToAnalytics(data);
  logToErrorTracker(data);
  sendReceiptEmail(data);
}

onCheckoutClick('checkout-button-clicked');
onWishlistClick('wishlist-button-clicked');
