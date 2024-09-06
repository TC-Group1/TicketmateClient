import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useMemo } from 'react'
import { useMediaQuery } from '@mui/material'
import getThemeOptions from './themeOptions'

const App = () => {
  const router = createRouter({ routeTree })

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = useMemo(() => createTheme(getThemeOptions(prefersDarkMode)), [prefersDarkMode])

  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <RouterProvider {...{ router }} />
    </ThemeProvider>
  )
}
export default App
