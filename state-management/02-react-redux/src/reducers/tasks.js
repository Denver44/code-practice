import * as actionTypes from '../constants/action-types';

const initialState = {
  data:    [],
  loading: false,
  error:   '',
};

export function tasksReducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.FETCH_TASKS_REQUEST:
      return { data: [], loading: true, error: '' };

    case actionTypes.FETCH_TASKS_SUCCESS:
      return { data: action.payload, loading: false, error: '' };

    case actionTypes.FETCH_TASKS_ERROR:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.CREATE_TASK_REQUEST:
      return { ...state, loading: true, error: '' };

    case actionTypes.CREATE_TASK_SUCCESS:
      return { data: [...state.data, action.payload], loading: false, error: '' };

    case actionTypes.CREATE_TASK_ERROR:
      return { ...state, loading: false, error: action.payload };

    case actionTypes.DELETE_TASK_REQUEST:
      return { ...state, loading: true, error: '' };

    case actionTypes.DELETE_TASK_SUCCESS:
      return {
        data: state.data.filter(task => task.id !== action.payload),
        loading: false,
        error: '',
      };

    case actionTypes.DELETE_TASK_ERROR:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
}
