import { createSelector } from 'reselect'

export const selectTasksState = (state) => state.tasks

export const selectAllTasks = createSelector(
  [selectTasksState],
  (tasksState) => tasksState.tasks
)

// Filtered Tasks by Status
export const selectTasksByStatus = createSelector(
  [selectAllTasks, (state) => state.tasks.filters.status],
  (tasks, statusFilter) => {
    if (statusFilter === 'all') return tasks
    return tasks.filter((task) => task.status === statusFilter)
  }
)

// Task Statistics
export const selectTaskStats = createSelector([selectAllTasks], (tasks) => {
  return tasks.reduce((acc, task) => {
    acc[task.status] = (acc[task.status] || 0) + 1
    return acc
  }, {})
})

// Loading
export const selectIsLoading = createSelector(
  [selectTasksState],
  (tasksState) => tasksState.loading
)

// Error
export const selectError = createSelector(
  [selectTasksState],
  (tasksState) => tasksState.error
)
