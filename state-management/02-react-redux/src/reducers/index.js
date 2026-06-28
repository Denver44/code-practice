import { combineReducers } from 'redux';
import { tasksReducer } from './tasks';

const allReducers = combineReducers({
  tasks: tasksReducer,
});

export default allReducers;
