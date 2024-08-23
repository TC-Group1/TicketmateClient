import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const App = () => {
  const router = createRouter({ routeTree })

  return <RouterProvider {...{ router }} />
}
export default App
