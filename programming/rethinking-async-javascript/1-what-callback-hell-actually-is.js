function afterTimer() {
  console.log('Cart saved');
}

setTimeout(afterTimer, 1000);

// ---

// Nested (the "pyramid" everyone points at)
setTimeout(() => {
  console.log('Step 1');
  setTimeout(() => {
    console.log('Step 2');
    setTimeout(() => {
      console.log('Step 3');
    }, 300);
  }, 300);
}, 300);

// Continuation-passing style: same behavior, no pyramid
function step1() {
  console.log('Step 1');
  setTimeout(step2, 300);
}

function step2() {
  console.log('Step 2');
  setTimeout(step3, 300);
}

function step3() {
  console.log('Step 3');
}

setTimeout(step1, 300);
