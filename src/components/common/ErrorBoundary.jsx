import React from 'react'
import { Box, Text } from '@chakra-ui/react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  // If the render of a child throws an error → update state
  static getDerivedStateFromError() {
    return { hasError: true }
  }

  // Log the error
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI — what to show instead of the broken component
      return (
        <Box className="w-screen h-screen" p={4} borderRadius="md">
          <Text color="red.800" fontWeight="bold">
            Something went wrong.
          </Text>
        </Box>
      )
    }

    // If there is no error — render children
    return this.props.children
  }
}

export default ErrorBoundary
