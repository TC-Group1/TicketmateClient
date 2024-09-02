// Regular expressions for form validation
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
export const phoneRegex = /^[2-9]{1}[0-9]{2}[2-9]{1}[0-9]{2}[0-9]{4}$/
export const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
