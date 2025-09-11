// BuggyTaskCounter.jsx

/*
  Bug/Improvement => Unused imports; In React versions 17 and above, importing React is not necessary if it's not used directly.
  Fix => Remove unused imports
*/
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, Text, Button } from '@chakra-ui/react'
import { selectAllTasks } from '../../../features/tasks/tasksSelectors'

/*
  Bug => Missing export statement
  Fix => Add export statement
*/
export const BuggyTaskCounter = () => {
  /*
    Bug => the tasks is not tasks array, but an object with tasks array inside.
    Fix => Use (state) => state.tasks.tasks or just selector from store
  */

  const tasks = useSelector(selectAllTasks)
  const [count, setCount] = useState(0)

  /*
    Bug => dependency array is missing
    Fix => add tasks as a dependency
  */
  useEffect(() => {
    setCount(tasks.length)
  }, [tasks])

  const incrementCount = () => {
    /*
      Bug => Changing `count` directly doesn’t work with React state
      Fix => Use the functional form of setCount
    */
    setCount((prev) => prev + 1)
  }

  return (
    <Box>
      <Text>Total Tasks: {count}</Text>
      {/*       
        Bug => The button is calling the function immediately instead of on click
        Fix => Wrap the function in an arrow function or just pass the function reference
       */}
      <Button onClick={incrementCount}>Add Manual Count</Button>
      {tasks.map((task) => (
        /* 
          Bug => Missing key prop in list rendering
          Fix => Add a key prop to each rendered element
        */
        <Text key={task.id}>{task.title}</Text>
      ))}
    </Box>
  )
}
