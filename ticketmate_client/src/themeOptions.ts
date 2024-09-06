// Theme options with example of adding a custom color.

import { createTheme, PaletteColor, ThemeOptions } from '@mui/material'

declare module '@mui/material/styles' {
  interface Palette {
    violet: PaletteColor
  }
  interface PaletteOptions {
    violet: PaletteColor
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    violet: true
  }
}

const getThemeOptions = (prefersDarkMode: boolean): ThemeOptions => ({
  palette: {
    violet: createTheme().palette.augmentColor({
      color: { main: '#7F00FF' },
    }),
    mode: prefersDarkMode ? 'dark' : 'light',
  },
  typography: {
    fontFamily: [
      'Inter',
      'system-ui',
      'Avenir',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(),
    fontWeightRegular: 400,
  },
})

export default getThemeOptions
