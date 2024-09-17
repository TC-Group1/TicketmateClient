import { FC } from 'react'
import { Typography } from '@mui/material'

interface TypographyProps {
  text: string
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | undefined
  sx?: {}
}
export const MyHeadings: FC<TypographyProps> = ({ text, variant, sx }) => {
  return (
    <Typography sx={sx} variant={variant}>
      {text}
    </Typography>
  )
}
