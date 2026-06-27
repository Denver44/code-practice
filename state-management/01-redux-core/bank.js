import { createStore } from 'redux'

// Practice file: bank account from the lectures
// Run: node 01-redux-core/bank.js

const DEPOSIT  = 'DEPOSIT'
const WITHDRAW = 'WITHDRAW'

function deposit(amount)  { return { type: DEPOSIT,  payload: { amount } } }
function withdraw(amount) { return { type: WITHDRAW, payload: { amount } } }

function balanceReducer(state = { balance: 0 }, action) {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.payload.amount }
    case WITHDRAW:
      return { balance: state.balance - action.payload.amount }
    default:
      return state
  }
}

const store = createStore(balanceReducer)

store.subscribe(() => console.log('Balance:', store.getState().balance))

store.dispatch(deposit(1000))
store.dispatch(deposit(450))
store.dispatch(withdraw(250))

// Try dispatching an unknown action — balance should stay unchanged
store.dispatch({ type: 'TRANSFER', payload: { amount: 500 } })

console.log('Final:', store.getState())
