import { useDispatch, useSelector } from 'react-redux'
import { selectTasksByStatus } from '../../features/tasks/tasksSelectors'
import { clearError, setFilter } from '../../features/tasks/tasksActions'
import { Button, HStack, Select } from '@chakra-ui/react'

const taskStatuses = {
  all: 'All',
  todo: 'To Do',
  'in-progress': 'In Progress',
  done: 'Done',
}

export const TaskFilters = () => {
  const dispatch = useDispatch()

  const filters = useSelector((state) => state.tasks.filters)
  const tasks = useSelector(selectTasksByStatus)

  const uniqueAssignees = Array.from(new Set(tasks.map((t) => t.assignee)))

  const handleStatusChange = (e) => {
    dispatch(setFilter({ ...filters, status: e.target.value }))
  }

  const handleAssigneeChange = (e) => {
    dispatch(setFilter({ ...filters, assignee: e.target.value }))
  }

  const handleClearFilters = () => {
    dispatch(setFilter({ status: 'all', assignee: 'all' }))
    dispatch(clearError())
  }

  return (
    <HStack spacing={4} mb={4}>
      <Select
        value={filters.status}
        onChange={handleStatusChange}
        w="200px"
        borderColor="teal.300"
        focusBorderColor="teal.500"
      >
        {Object.entries(taskStatuses).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>

      <Select
        value={filters.assignee}
        onChange={handleAssigneeChange}
        w="200px"
        borderColor="teal.300"
        focusBorderColor="teal.500"
      >
        <option value="all">All assignees</option>
        {uniqueAssignees.map((assignee) => (
          <option key={assignee} value={assignee}>
            {assignee}
          </option>
        ))}
      </Select>

      <Button onClick={handleClearFilters} colorScheme="teal" variant="outline">
        Clear Filters
      </Button>
    </HStack>
  )
}
