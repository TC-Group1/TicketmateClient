import { useMediaQuery } from '@mui/material'

export const DarkMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  return { prefersDarkMode }
}
