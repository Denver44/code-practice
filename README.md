# code-practice

Personal learning lab. One folder per track, each with its own `package.json` and dependencies.

## Tracks

| Folder | Topics |
|---|---|
| `state-management/` | Redux core, React-Redux, Redux Toolkit, Redux Saga, React Query |
| `react-hooks/` | useState, useEffect, useReducer, useMemo, custom hooks |
| `react-fundamentals/` | JSX, components, props, rendering, reconciliation |
| `system-design/` | LLD patterns, HLD concepts, design problems |

## How to run

Each track is a standalone Node project.

```bash
cd state-management
npm install
node 01-redux-core/index.js
```

## Structure inside each track

```
state-management/
  01-redux-core/       # createStore, reducer, dispatch, subscribe
  02-react-redux/      # Provider, useSelector, useDispatch
  03-redux-toolkit/    # configureStore, createSlice, createAsyncThunk
  04-redux-saga/       # takeEvery, call, put, generators
  05-react-query/      # useQuery, useMutation, queryClient
```
