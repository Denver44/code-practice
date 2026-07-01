// Redux Saga: HTTP requests with put and yield
// Run: node tasks-with-http.js  (requires: npm install redux redux-saga axios)

const { createStore, applyMiddleware } = require('redux');
const createSagaMiddleware = require('redux-saga').default;
const { takeEvery, put } = require('redux-saga/effects');
const axios = require('axios');

// ── Action types ──────────────────────────────────────────────────────────────

const FETCH_TASKS           = 'FETCH_TASKS';
const FETCH_TASKS_PENDING   = 'FETCH_TASKS_PENDING';
const FETCH_TASKS_FULFILLED = 'FETCH_TASKS_FULFILLED';
const FETCH_TASKS_REJECTED  = 'FETCH_TASKS_REJECTED';

// ── Reducer ───────────────────────────────────────────────────────────────────

function rootReducer(state = { tasks: [], loading: false, error: null }, action) {
  switch (action.type) {
    case FETCH_TASKS_PENDING:
      return { ...state, loading: true, error: null };
    case FETCH_TASKS_FULFILLED:
      return { ...state, loading: false, tasks: action.payload.data.slice(0, 3) };
    case FETCH_TASKS_REJECTED:
      return { ...state, loading: false, error: action.payload.message };
    default:
      return state;
  }
}

// ── Worker saga ───────────────────────────────────────────────────────────────
// yield put()         = dispatch an action
// yield promise       = await the promise (like await in async functions)

function* fetchTasksWorker() {
  yield put({ type: FETCH_TASKS_PENDING });
  console.log('PENDING dispatched -- loading:', store.getState().loading);

  try {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/todos');
    yield put({ type: FETCH_TASKS_FULFILLED, payload: response });
    console.log('FULFILLED dispatched -- tasks:', store.getState().tasks.length);
  } catch (error) {
    yield put({ type: FETCH_TASKS_REJECTED, payload: error });
    console.log('REJECTED dispatched -- error:', store.getState().error);
  }
}

// ── Root saga ─────────────────────────────────────────────────────────────────

function* rootSaga() {
  yield takeEvery(FETCH_TASKS, fetchTasksWorker);
}

// ── Store setup ───────────────────────────────────────────────────────────────

const saga = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(rootSaga);

// ── Test: dispatch FETCH_TASKS ────────────────────────────────────────────────

store.dispatch({ type: FETCH_TASKS });

// Expected output (after network response):
//   PENDING dispatched -- loading: true
//   FULFILLED dispatched -- tasks: 3
