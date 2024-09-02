import { FC, MouseEvent } from 'react'
import { ButtonBase, Box, Typography } from '@mui/material'

interface MyButtonProps {
  sx?: {}
  typography?: {}
  label: string
  icon?: JSX.Element
  func: (e: MouseEvent) => void
}

export const MyButton: FC<MyButtonProps> = ({
  sx,
  typography,
  label,
  icon,
  func,
}) => {
  return (
    <ButtonBase sx={sx} onClick={func}>
      <Box>{icon}</Box>
      <Typography sx={typography}>{label}</Typography>
    </ButtonBase>
  )
}
