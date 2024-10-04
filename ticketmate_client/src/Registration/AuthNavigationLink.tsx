import { Box, Link, Typography } from '@mui/material'
import { FC } from 'react'

interface AuthNavigationLinkProps {
  question: string
  cta: string
  link?: string
  textStyle?: {}
  linkStyle?: {}
  containerStyle?: {}
}

export const AuthNavigationLink: FC<AuthNavigationLinkProps> = ({
  question,
  cta,
  link,
  textStyle,
  linkStyle,
  containerStyle,
}) => {
  return (
    <Box sx={containerStyle}>
      <Typography sx={textStyle}>
        {question}
        {` `}
        <Link sx={linkStyle} href={link}>
          {cta}
        </Link>
      </Typography>
    </Box>
  )
}
