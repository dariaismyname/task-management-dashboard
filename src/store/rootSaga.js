import { all } from 'redux-saga/effects'
import { watchTasksSaga } from '../features/tasks/tasksSaga'

export function* rootSaga() {
  yield all([watchTasksSaga()])
}
