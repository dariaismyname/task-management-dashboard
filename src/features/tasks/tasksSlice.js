import {
  FetchTasksActions,
  GeneralActions,
  UpdateTaskStatusActions,
} from './tasksActionsTypes'

// ==================
// Initial State
// ==================

export const initialState = {
  tasks: [],
  loading: false,
  error: '',
  filters: {
    status: 'all',
    assignee: 'all',
  },
}

// ==================
// Reducer
// ==================

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch Tasks
    case FetchTasksActions.REQUEST:
      return { ...state, loading: true, error: '' }

    case FetchTasksActions.SUCCESS:
      return { ...state, loading: false, tasks: action.payload }

    case FetchTasksActions.FAILURE:
      return { ...state, loading: false, error: action.payload }

    // Update Status
    case UpdateTaskStatusActions.REQUEST:
      return { ...state, loading: true, error: '' }

    case UpdateTaskStatusActions.SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, status: action.payload.status }
            : task
        ),
      }

    case UpdateTaskStatusActions.FAILURE:
      return { ...state, loading: false, error: action.payload }

    // Filters
    case GeneralActions.SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      }

    // Clear error
    case GeneralActions.CLEAR_ERROR:
      return { ...state, error: '' }

    default:
      return state
  }
}
