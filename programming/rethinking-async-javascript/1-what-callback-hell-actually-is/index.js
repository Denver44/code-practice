// Nested (the "pyramid" everyone points at)
setTimeout(() => {
  console.log('Step 1');
  setTimeout(() => {
    console.log('Step 2');
    setTimeout(() => {
      console.log('Step 3');
    }, 300);
  }, 350);
}, 300);

// Continuation-passing style: same behavior, no pyramid
function step1() {
  console.log('New Step 1');
  setTimeout(step2, 1000);
}

function step2() {
  console.log('New Step 2');
  setTimeout(step3, 1000);
}

function step3() {
  console.log('New Step 3');
}

setTimeout(step1, 1000);
