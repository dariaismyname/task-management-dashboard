// ==================
// Action Types
// ==================
export const FetchTasksActions = {
  REQUEST: 'tasks/fetchTasksRequest',
  SUCCESS: 'tasks/fetchTasksSuccess',
  FAILURE: 'tasks/fetchTasksFailure',
}

export const UpdateTaskStatusActions = {
  REQUEST: 'tasks/updateTaskStatusRequest',
  SUCCESS: 'tasks/updateTaskStatusSuccess',
  FAILURE: 'tasks/updateTaskStatusFailure',
}

export const GeneralActions = {
  SET_FILTER: 'setFilter',
  CLEAR_ERROR: 'clearError',
}

// ==================
// Action Creators
// ==================

// Fetch Tasks Actions
export const fetchTasksRequest = () => ({
  type: FetchTasksActions.REQUEST,
})

export const fetchTasksSuccess = (tasks) => ({
  type: FetchTasksActions.SUCCESS,
  payload: tasks,
})

export const fetchTasksFailure = (error) => ({
  type: FetchTasksActions.FAILURE,
  payload: error,
})

// Update Task Status Actions
export const updateTaskStatusRequest = (id, status) => ({
  type: UpdateTaskStatusActions.REQUEST,
  payload: { id, status },
})

export const updateTaskStatusSuccess = (id, status) => ({
  type: UpdateTaskStatusActions.SUCCESS,
  payload: { id, status },
})

export const updateTaskStatusFailure = (error) => ({
  type: UpdateTaskStatusActions.FAILURE,
  payload: error,
})

// Filters
export const setFilter = (filter) => ({
  type: GeneralActions.SET_FILTER,
  payload: filter,
})

// Clear error
export const clearError = () => ({ type: GeneralActions.CLEAR_ERROR })
