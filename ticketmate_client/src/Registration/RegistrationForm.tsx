import React from 'react'
import { Box } from '@mui/material'
import { registrationStyle } from '../styles/registrationStyle'

export const RegistrationForm = () => {
  return (
    <Box sx={registrationStyle.container}>
      <Box sx={registrationStyle.imageBox}>Image Box</Box>
      <Box sx={registrationStyle.formBox}>Input Fields Box</Box>
    </Box>
  )
}
