import { Container, Flex, Heading, VStack } from '@chakra-ui/react'
import classNames from 'classnames'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TasksList } from '../Tasks'

export const TaskDashboard = () => {
  // const dispatch = useDispatch()

  // const error = useSelector((state) => state.tasks.error)

  const [isGridView, setIsGridView] = useState(true)

  useEffect(() => {
    // dispatch(fetchTasksRequest()
  }, [])

  const toggleView = () => {
    setIsGridView((prev) => !prev)
  }

  return (
    <Container maxW="8xl" bg="gray.50" className="h-screen py-10 !px-20">
      <VStack spacing={4} align="stretch">
        <Heading color="teal.800">Task Dashboard</Heading>
        <Flex align={'center'} justify={'center'} className="w-full h-full">
          <Flex className="border border-teal-800 text-teal-500 font-medium rounded-full px-3 py-1">
            <span
              onClick={toggleView}
              className={classNames('rounded-full px-6 py-1 cursor-pointer', {
                'bg-teal-500 text-white': isGridView,
              })}
            >
              Grid
            </span>
            <span
              onClick={toggleView}
              className={classNames('rounded-full px-6 py-1 cursor-pointer', {
                'bg-teal-500 text-white': !isGridView,
              })}
            >
              List
            </span>
          </Flex>
        </Flex>
        <Flex justify="flex-end">Filters</Flex>
        <TasksList view={isGridView ? 'grid' : 'list'} />
      </VStack>
    </Container>
  )
}
