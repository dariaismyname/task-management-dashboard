import { combineReducers } from 'redux'
import { tasksReducer } from '../features/tasks/tasksSlice'

export const rootReducer = combineReducers({
  tasks: tasksReducer,
})
