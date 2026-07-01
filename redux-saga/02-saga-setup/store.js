// Redux Saga Store Setup
// Run: node store.js

const { createStore, applyMiddleware } = require('redux');
const createSagaMiddleware = require('redux-saga').default;

// ── 1. Minimal reducer ────────────────────────────────────────────────────────

function rootReducer(state = {}, action) {
  return state;
}

// ── 2. Create the saga middleware instance ────────────────────────────────────

const saga = createSagaMiddleware();

// ── 3. Create the store with saga in the middleware chain ─────────────────────

const store = createStore(
  rootReducer,
  applyMiddleware(saga)
);

// ── 4. Root saga (generator function) ─────────────────────────────────────────

function* rootSaga() {
  console.log('root saga invoked');
  // yield takeEvery(...) comes next
}

// ── 5. Run the root saga AFTER createStore ─────────────────────────────────────

saga.run(rootSaga);

console.log('store created:', typeof store.getState);
// Output:
//   root saga invoked
//   store created: function

// ── What happens if saga.run() is called before createStore? ───────────────────
// Uncomment to see the runtime error:
// const saga2 = createSagaMiddleware();
// saga2.run(rootSaga); // throws: Before running a Saga, you must mount the Saga middleware on the Store
