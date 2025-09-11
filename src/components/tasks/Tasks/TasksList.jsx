import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectError,
  selectIsLoading,
  selectTasksByStatus,
} from '../../../features/tasks/tasksSelectors'
import { fetchTasksRequest } from '../../../features/tasks/tasksActions'
import { ListView } from '../Views/ListView'
import { GridView } from '../Views/GridView'
import { Button, Center, Text, VStack } from '@chakra-ui/react'

export const TasksList = ({ view }) => {
  const dispatch = useDispatch()

  const tasks = useSelector(selectTasksByStatus)
  const loading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchTasksRequest())
  }, [])

  if (error) {
    return (
      <Center py={10}>
        <VStack spacing={4}>
          <Text color="red.500" fontWeight="bold">
            Failed to load tasks: {error}
          </Text>
          <Button
            colorScheme="teal"
            onClick={() => dispatch(fetchTasksRequest())}
          >
            Retry
          </Button>
        </VStack>
      </Center>
    )
  }

  if (!tasks || tasks.length === 0) {
    return (
      <Center py={10}>
        <Text color="gray.500">No tasks match the current filters.</Text>
      </Center>
    )
  }

  return (
    <div>
      {view === 'grid' ? (
        <GridView tasks={tasks} loading={loading} />
      ) : (
        <ListView tasks={tasks} loading={loading} />
      )}
    </div>
  )
}
