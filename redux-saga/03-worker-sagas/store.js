// Redux Saga: Worker Sagas and takeEvery
// Run: node store.js

const { createStore, applyMiddleware } = require('redux');
const createSagaMiddleware = require('redux-saga').default;
const { takeEvery } = require('redux-saga/effects');

// ── Action types ──────────────────────────────────────────────────────────────

const FETCH_TASKS = 'FETCH_TASKS';

// ── Minimal reducer ───────────────────────────────────────────────────────────

function rootReducer(state = {}, action) {
  return state;
}

// ── Worker saga ───────────────────────────────────────────────────────────────

function* fetchTasksWorker() {
  console.log('fetchTasksWorker invoked -- action type matched FETCH_TASKS');
  // HTTP request added in the next example (tasks-with-http.js)
}

// ── Root saga ─────────────────────────────────────────────────────────────────

function* rootSaga() {
  console.log('root saga started -- watching for FETCH_TASKS');
  yield takeEvery(FETCH_TASKS, fetchTasksWorker);
  // yield keeps root saga alive; without it, the watcher exits immediately
}

// ── Store setup ───────────────────────────────────────────────────────────────

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);

// ── Test: dispatch FETCH_TASKS three times ────────────────────────────────────

console.log('\nDispatching FETCH_TASKS three times:');
store.dispatch({ type: FETCH_TASKS });
store.dispatch({ type: FETCH_TASKS });
store.dispatch({ type: FETCH_TASKS });

// Expected output:
//   root saga started -- watching for FETCH_TASKS
//   Dispatching FETCH_TASKS three times:
//   fetchTasksWorker invoked -- action type matched FETCH_TASKS
//   fetchTasksWorker invoked -- action type matched FETCH_TASKS
//   fetchTasksWorker invoked -- action type matched FETCH_TASKS
// Three dispatches produce three worker invocations (concurrent via takeEvery)
