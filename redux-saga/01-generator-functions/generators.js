// JavaScript Generator Functions
// Run: node generators.js

// ── 1. Calling a generator does not execute the body ──────────────────────────

function* doWork() {
  console.log('do work invoked');
}

const gen = doWork();
console.log('gen object:', gen); // GeneratorObject -- body not run yet

gen.next();            // "do work invoked" -- body runs now

// ── 2. yield returns a value and pauses ──────────────────────────────────────

function* withYield() {
  console.log('step 1');
  yield 1;
  console.log('step 2');
  yield 2;
}

const gen2 = withYield();
console.log(gen2.next()); // "step 1"  { value: 1, done: false }
console.log(gen2.next()); // "step 2"  { value: 2, done: false }
console.log(gen2.next()); //           { value: undefined, done: true }

// ── 3. yield vs return ───────────────────────────────────────────────────────

function* withReturn() {
  yield 1;
  yield 2;
  return 'work done';
}

const gen3 = withReturn();
console.log(gen3.next()); // { value: 1,           done: false }
console.log(gen3.next()); // { value: 2,           done: false }
console.log(gen3.next()); // { value: 'work done', done: true  }
console.log(gen3.next()); // { value: undefined,   done: true  }

// ── 4. Practical use: stepwise addition ─────────────────────────────────────

function* addInSteps(a, b, c) {
  let sum = 0;

  sum += a;
  yield sum; // 100

  sum += b;
  yield sum; // 300

  sum += c;
  yield sum; // 600
}

const gen4 = addInSteps(100, 200, 300);
console.log(gen4.next()); // { value: 100, done: false }
console.log(gen4.next()); // { value: 300, done: false }
console.log(gen4.next()); // { value: 600, done: false }
console.log(gen4.next()); // { value: undefined, done: true }
