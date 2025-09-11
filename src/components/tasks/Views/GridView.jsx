import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { DueDate, Loading, TaskPriority, TaskStatusSelect } from '../../common'

export const GridView = ({ tasks, loading }) => {
  return (
    <SimpleGrid columns={3} spacing={4}>
      {tasks?.map((task) =>
        loading ? (
          <Card className="border border-teal-800 rounded-md p-10">
            <Loading key={task.id} />
          </Card>
        ) : (
          <Card className="border !bg-teal-500/10 !border-teal-800 rounded-md">
            <CardHeader>
              <Flex align="start" justify="space-between">
                <Heading size="sm" color="teal.700">
                  {task.title}
                </Heading>
                <TaskPriority priority={task.priority} />
              </Flex>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={3}>
                <Text fontSize="sm" color="gray.700">
                  Assignee: <b>{task.assignee}</b>
                </Text>

                <DueDate dueDate={task.dueDate} />
              </VStack>
            </CardBody>
            <CardFooter>
              <TaskStatusSelect task={task} />
            </CardFooter>
          </Card>
        )
      )}
    </SimpleGrid>
  )
}
