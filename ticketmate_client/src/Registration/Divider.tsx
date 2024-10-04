import { Divider } from '@mui/material'
import { FC } from 'react'

interface MyDividerProps {
  sx?: {}
  text: string
}

export const MyDivider: FC<MyDividerProps> = ({ sx, text }) => {
  return (
    <Divider sx={sx} aria-hidden="true">
      {text}
    </Divider>
  )
}
