// Run with: node sync-vs-async.js

console.log('Order placed: 1 burger');
console.log('Handed you buzzer #14');

// setTimeout hands this callback off to run once the timer finishes.
// It does not make the lines below wait for it.
setTimeout(() => {
  console.log('Buzzer #14 is buzzing, order ready!');
}, 3000);

console.log('You sit down at a table');
console.log('End of script (the kitchen is still working on your order)');
