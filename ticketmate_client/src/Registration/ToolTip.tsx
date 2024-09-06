import React, { FC, ReactNode } from 'react'
import { IconButton, Tooltip } from '@mui/material'

interface ToolTipProps {
  icon: ReactNode
  title: string | ReactNode
  placement: 'top' | 'bottom' | 'left' | 'right'
  sx?: {}
  prefersDarkMode: boolean
}

export const MyToolTip: FC<ToolTipProps> = ({
  icon,
  title,
  placement,
  prefersDarkMode,
}) => {
  return (
    <Tooltip title={title} placement={placement}>
      <IconButton sx={{ color: prefersDarkMode ? '#fff' : '#000' }}>
        {icon}
      </IconButton>
    </Tooltip>
  )
}
