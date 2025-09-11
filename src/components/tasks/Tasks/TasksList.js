import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTasksByStatus } from '../../../features/tasks/tasksSelectors'
import { fetchTasksRequest } from '../../../features/tasks/tasksActions'
import { ListView } from '../Views/ListView'

export const TasksList = ({ view }) => {
  const dispatch = useDispatch()

  const tasks = useSelector(selectTasksByStatus)
  const loading = useSelector((state) => state.tasks.loading)

  useEffect(() => {
    dispatch(fetchTasksRequest())
  }, [])

  return (
    <div>
      {view === 'grid' ? (
        <div>Grid View</div>
      ) : (
        <ListView tasks={tasks} loading={loading} />
      )}
    </div>
  )
}
