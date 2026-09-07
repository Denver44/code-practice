import observable from './observable.js';

function logToAnalytics(data) {
  console.log('Logged to analytics:', data);
}
function logToErrorTracker(data) {
  console.log('Logged to error tracker:', data);
}
function sendReceiptEmail(data) {
  console.log('Sent receipt email:', data);
}

observable.subscribe(logToAnalytics);
observable.subscribe(logToErrorTracker);
observable.subscribe(sendReceiptEmail);
