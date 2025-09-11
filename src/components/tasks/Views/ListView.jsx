import { Box, Flex, Stack } from '@chakra-ui/react'
import { DueDate, Loading, TaskPriority, TaskStatusSelect } from '../../common'

export const ListView = ({ tasks, loading }) => {
  return (
    <Stack spacing={4}>
      {tasks?.map((task) =>
        loading ? (
          <Loading key={task.id} />
        ) : (
          <Box
            className="border bg-teal-500/10 border-teal-800 rounded-md px-3 py-2 min-h-12 flex justify-between items-center"
            key={task.id}
          >
            <Flex direction="column" gap={1}>
              <Flex direction="row" align="center" gap={3}>
                <span className="font-medium">{task.title}</span>
                <TaskPriority priority={task.priority} />
              </Flex>
              <div className="text-sm text-gray-500 flex items-center gap-1 border-b border-gray-500 w-fit">
                <span className="font-semibold">Assignee:</span>
                <span>{task.assignee}</span>
              </div>
            </Flex>
            <DueDate dueDate={task.dueDate} />
            <TaskStatusSelect task={task} />
          </Box>
        )
      )}
    </Stack>
  )
}
