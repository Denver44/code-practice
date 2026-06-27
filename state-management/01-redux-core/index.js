import { createStore } from 'redux'

// ─── Action type constants ────────────────────────────────────────────────────
const ANSWER_CORRECT = 'ANSWER_CORRECT'
const ANSWER_WRONG   = 'ANSWER_WRONG'

// ─── Action creators ─────────────────────────────────────────────────────────
function answerCorrect(points) {
  return { type: ANSWER_CORRECT, payload: { points } }
}

function answerWrong(points) {
  return { type: ANSWER_WRONG, payload: { points } }
}

// ─── Reducer ─────────────────────────────────────────────────────────────────
const defaultState = { score: 0, correct: 0, wrong: 0 }

function scoreReducer(state = defaultState, action) {
  switch (action.type) {
    case ANSWER_CORRECT:
      return { ...state, score: state.score + action.payload.points, correct: state.correct + 1 }
    case ANSWER_WRONG:
      return { ...state, score: state.score - action.payload.points, wrong: state.wrong + 1 }
    default:
      return state
  }
}

// ─── Store ────────────────────────────────────────────────────────────────────
const store = createStore(scoreReducer)

// ─── Subscribe ───────────────────────────────────────────────────────────────
store.subscribe(() => {
  const { score, correct, wrong } = store.getState()
  console.log(`Score: ${score}  |  Correct: ${correct}  |  Wrong: ${wrong}`)
})

// ─── Dispatches ───────────────────────────────────────────────────────────────
console.log('Initial state:', store.getState())

store.dispatch(answerCorrect(20))
store.dispatch(answerCorrect(10))
store.dispatch(answerWrong(5))
store.dispatch(answerCorrect(15))

console.log('Final state:', store.getState())
