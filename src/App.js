import './App.css'
import { TaskDashboard } from './components'
import ErrorBoundary from './components/common/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <TaskDashboard />
    </ErrorBoundary>
  )
}

export default App
