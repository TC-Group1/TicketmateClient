// Theme options with example of adding a custom color.

import { createTheme, PaletteColor, ThemeOptions } from '@mui/material/styles'
import { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  interface Palette {
    violet: PaletteColor
  }
  interface PaletteOptions {
    violet: PaletteColor
  }

  interface TypographyVariants {
    helperText: CSSProperties
  }
  interface TypographyVariantOptions {
    helperText?: CSSProperties
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    violet: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    helperText: true
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
    subtitle1: {
      marginBottom: '20px',
      color: prefersDarkMode ? '#E0E0E0' : '#333333',
      fontWeight: 600,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: prefersDarkMode ? '#B0B0B0' : '#c9c9c9',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          color: prefersDarkMode ? '#F5F5F5' : '#000',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: prefersDarkMode ? '#f5f5f5' : '#000',
          fontSize: '.7rem',
          marginLeft: '5px',
          '&.Mui-error': {
            marginBottom: '10px',
          },
        },
      },
    },

    MuiButtonBase: {
      styleOverrides: {
        root: {
          border: prefersDarkMode ? '1px solid #B0B0B0' : '1px solid #c9c9c9',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
  },
})

export default getThemeOptions
