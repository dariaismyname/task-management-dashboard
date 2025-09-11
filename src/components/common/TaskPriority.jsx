import { Box } from '@chakra-ui/react'
import classNames from 'classnames'

const taskPriorityTypes = {
  critical: 'Critical',
  high: 'High',
  low: 'Low',
  medium: 'Medium',
}

export const TaskPriority = ({ priority }) => {
  return (
    <Box
      className={classNames('rounded-full px-6 text-xs py-1 font-medium', {
        'bg-red-200 text-red-500': priority === 'critical',
        'bg-orange-200 text-orange-500': priority === 'high',
        'bg-green-200 text-green-600': priority === 'low',
        'bg-yellow-100 text-yellow-600': priority === 'medium',
      })}
    >
      {taskPriorityTypes[priority]}
    </Box>
  )
}
