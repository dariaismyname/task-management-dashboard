import { Select } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { updateTaskStatusRequest } from '../../features/tasks/tasksActions'
import classNames from 'classnames'

const taskStatuses = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  done: 'Done',
}
export const TaskStatusSelect = ({ task }) => {
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const newStatus = e.target.value
    dispatch(updateTaskStatusRequest(task.id, newStatus))
  }

  return (
    <div>
      <Select
        value={task.status}
        onChange={handleChange}
        className={classNames('cursor-pointer text-teal-500 font-medium')}
        w="40"
        borderColor="teal.200"
        focusBorderColor="teal.500"
        _hover={{ borderColor: 'teal.200' }}
      >
        {Object.entries(taskStatuses).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </div>
  )
}
