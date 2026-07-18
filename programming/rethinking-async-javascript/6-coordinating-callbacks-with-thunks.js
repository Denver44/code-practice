function fakeFetchStat(name, cb) {
  const delay = 300 + Math.random() * 700;
  setTimeout(() => cb(name, `${name} data ready`), delay);
}

// Active thunk: the fetch starts the instant this is called, not the
// instant the returned thunk itself is called.
function getStatThunk(name) {
  let data; // holds the result, if it arrives before anyone's listening
  let waitingCb; // holds the callback, if someone's listening before it arrives

  fakeFetchStat(name, (_, result) => {
    if (waitingCb) {
      waitingCb(result);
    } else {
      data = result;
    }
  });

  return function (cb) {
    if (data !== undefined) {
      cb(data);
    } else {
      waitingCb = cb;
    }
  };
}

const inventoryThunk = getStatThunk('inventory');
const shippingThunk = getStatThunk('shipping');
const paymentsThunk = getStatThunk('payments');

inventoryThunk((data) => {
  console.log(data);
  shippingThunk((data) => {
    console.log(data);
    paymentsThunk((data) => {
      console.log(data);
      console.log('All stats loaded');
    });
  });
});

// Run this a few times, node file.js. The three fetches all start
// together (active), but the printed order never changes, inventory,
// shipping, payments, no matter which one actually finishes first.
