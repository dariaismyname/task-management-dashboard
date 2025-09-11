import { tasksReducer } from '../features/tasks/tasksSlice'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  tasks: tasksReducer,
})
