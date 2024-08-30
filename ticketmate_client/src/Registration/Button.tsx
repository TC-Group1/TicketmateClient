import React, { FC, MouseEvent } from 'react'
import { ButtonBase, Box, Typography } from '@mui/material'
import { registrationStyle } from '../styles/registrationStyle'

interface MySSOButtonProps {
  sx?: {}
  label: string
  icon: JSX.Element
}

export const MySSOButton: FC<MySSOButtonProps> = ({ sx, label, icon }) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('Button clicked')
  }
  return (
    <ButtonBase sx={sx} onClick={handleClick}>
      <Box>{icon}</Box>
      <Typography sx={registrationStyle.ssoTypography}>{label}</Typography>
    </ButtonBase>
  )
}
