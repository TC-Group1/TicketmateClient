// Regular expressions for form validation
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
export const phoneRegex = /^[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{2}[0-9]{4}$/
export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

// Color Theme:
export const BG_PRIMARY = 'rgb(238, 238, 238)'
export const LOGIN_BACKGROUND = 'rgb(255, 255, 255)'
export const LIGHT_BLUE = 'rgb(174, 228, 237)'
export const AQUA_BLUE = 'rgb(95, 183, 207)'
export const LIGHT_PURPLE = 'rgb(90, 121, 200)'
export const DARK_PURPLE = 'rgb(60, 51, 154)'
export const LIGHT_TEXT = 'rgb(255, 255, 255)'
export const DARK_TEXT = 'rgb(0, 0, 0)'

// Potential color theme:
export const NON_DECORATIVE_BOARDERS_2 = '#E0EBFC'
export const NON_DECORATIVE_BOARDERS = '#C2D6F9'
// Based on DARK_PURPLE
// export const PRIMARY = '#3c339a'
// export const SUCCESS = '#53770B'
// export const INFO = '#00A2AA'
// export const WARNING = '#AF7B01'
// export const DANGER = '#AF2018'
