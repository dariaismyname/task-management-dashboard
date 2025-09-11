import {
  call,
  put,
  select,
  delay,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects'
import { tasksAPI } from '../../api/tasksAPI'
import {
  FetchTasksActions,
  fetchTasksFailure,
  fetchTasksSuccess,
  GeneralActions,
  UpdateTaskStatusActions,
  updateTaskStatusFailure,
  updateTaskStatusSuccess,
} from './tasksActions'
import { selectAllTasks } from './tasksSelectors'

const selectFilters = (state) => state.tasks.filters

export const fetchTasksSaga = function* () {
  const filters = yield select(selectFilters)

  let attempts = 0

  while (attempts < 3) {
    try {
      const tasks = yield call(tasksAPI.fetchTasks, filters)
      yield put(fetchTasksSuccess(tasks))
      return
    } catch (error) {
      attempts++

      if (attempts >= 3) {
        yield delay(2 ** attempts * 500)
      } else {
        yield put(fetchTasksFailure(error.message || 'Failed to fetch tasks'))
      }
    }
  }
}

export const updateTaskStatusSaga = function* (action) {
  const { id, status } = action.payload

  // Find task to get its previous status for potential rollback
  const task = yield select(selectAllTasks).find((t) => t.id === id)

  const previousStatus = task ? task.status : null

  try {
    yield put(updateTaskStatusSuccess(id, status))

    yield call(tasksAPI.updateTaskStatus, id, status)
  } catch (error) {
    if (previousStatus) {
      yield put(updateTaskStatusSuccess(id, previousStatus))
    }

    yield put(
      updateTaskStatusFailure(error.message || 'Failed to update task status')
    )
  }
}

function* handleFilterChangeSaga() {
  yield delay(300)
  yield call(fetchTasksSaga)
}

export function* watchTasksSaga() {
  yield takeEvery(FetchTasksActions.REQUEST, fetchTasksSaga)
  yield takeEvery(UpdateTaskStatusActions.REQUEST, updateTaskStatusSaga)
  yield takeLatest(GeneralActions.SET_FILTER, handleFilterChangeSaga)
}
