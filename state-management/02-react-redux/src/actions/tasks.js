import * as actionTypes from '../constants/action-types';

const API_URL = 'http://localhost:7000/tasks';

// ─── Sync action creators (pre-async implementation) ─────────────────────────

export const createTask = (newTask) => ({
  type: actionTypes.CREATE_TASK,
  payload: newTask,
});

export const deleteTask = (taskId) => ({
  type: actionTypes.DELETE_TASK,
  payload: taskId,
});

// ─── Async action creators (thunks) ──────────────────────────────────────────

export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_TASKS_REQUEST });
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    dispatch({ type: actionTypes.FETCH_TASKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_TASKS_ERROR, payload: error.message });
  }
};

export const createTaskAsync = (newTask) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATE_TASK_REQUEST });
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    if (!response.ok) throw new Error(response.statusText);
    const data = await response.json();
    dispatch({ type: actionTypes.CREATE_TASK_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.CREATE_TASK_ERROR, payload: error.message });
  }
};

export const deleteTaskAsync = (taskId) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_TASK_REQUEST });
  try {
    await fetch(`${API_URL}/${taskId}`, { method: 'DELETE' });
    dispatch({ type: actionTypes.DELETE_TASK_SUCCESS, payload: taskId });
  } catch (error) {
    dispatch({ type: actionTypes.DELETE_TASK_ERROR, payload: error.message });
  }
};
