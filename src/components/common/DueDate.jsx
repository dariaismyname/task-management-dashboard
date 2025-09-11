import { Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

export const DueDate = ({ dueDate }) => {
  const isOverdue = dayjs().isAfter(dayjs(dueDate), 'day')

  return (
    <Text
      fontSize="sm"
      fontWeight={500}
      color={isOverdue ? 'red.500' : 'gray.600'}
    >
      {isOverdue ? 'Overdue: ' : 'Due: '}
      {dayjs(dueDate).format('MMM D, YYYY')}
    </Text>
  )
}
