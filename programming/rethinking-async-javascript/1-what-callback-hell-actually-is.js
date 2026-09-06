function afterTimer() {
  console.log('Cart saved');
}

setTimeout(afterTimer, 1000);

// ---

function loadCart(cb) {
  setTimeout(() => {
    console.log('Cart loaded');
    cb();
  }, 300);
}

function applyDiscount(cb) {
  setTimeout(() => {
    console.log('Discount applied');
    cb();
  }, 300);
}

function chargeCard(cb) {
  setTimeout(() => {
    console.log('Card charged');
    cb();
  }, 300);
}

function renderReceipt() {
  setTimeout(() => {
    console.log('Receipt shown');
  }, 300);
}

// Nested (the "pyramid" everyone points at)
loadCart(function () {
  applyDiscount(function () {
    chargeCard(function () {
      renderReceipt();
    });
  });
});

// Continuation-passing style: same problems, no pyramid
function afterLoad() {
  applyDiscount(afterDiscount);
}

function afterDiscount() {
  chargeCard(afterCharge);
}

function afterCharge() {
  renderReceipt();
}

loadCart(afterLoad);
