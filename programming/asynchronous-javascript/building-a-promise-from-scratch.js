// A basic promise, settles instantly (not really async yet).
const coinFlip = new Promise((resolve, reject) => {
  const outcome = Math.random();

  if (outcome >= 0.5) {
    resolve('🪙 Heads! You win.');
  } else {
    reject('💸 Tails, you lose.');
  }
});

coinFlip
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// ---

// Genuinely asynchronous, wrapped in setTimeout, with a real Error object.
const coinFlipDraw = new Promise((resolve, reject) => {
  console.log('🔮 Flipping the coin...');

  setTimeout(() => {
    const outcome = Math.random();

    if (outcome >= 0.5) {
      resolve('🪙 Heads! You win.');
    } else {
      reject(new Error('Tails, you lose.'));
    }
  }, 1000);
});

coinFlipDraw
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

// ---

// Promisifying setTimeout: a function that returns a Promise instead of
// taking a callback.
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => console.log('4 seconds passed'));
