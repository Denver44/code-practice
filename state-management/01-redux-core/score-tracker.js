// score-tracker.js
// Matches the code in: /blog/reducers-store-dispatch
// Basic reducer + store + dispatch — no action creators yet

import { createStore } from 'redux'

const defaultState = 0

function scoreReducer(state = defaultState, action) {
  switch (action.type) {
    case 'ANSWER_CORRECT':
      return state + 10
    case 'ANSWER_WRONG':
      return state - 5
    default:
      return state
  }
}

const store = createStore(scoreReducer)

console.log('Initial:', store.getState()) // 0

store.dispatch({ type: 'ANSWER_CORRECT' })
console.log(store.getState()) // 10

store.dispatch({ type: 'ANSWER_CORRECT' })
console.log(store.getState()) // 20

store.dispatch({ type: 'ANSWER_WRONG' })
console.log(store.getState()) // 15

// Unknown action — default case returns state unchanged
store.dispatch({ type: 'SOMETHING_ELSE' })
console.log(store.getState()) // 15, unchanged
