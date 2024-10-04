import { FC, ReactNode } from 'react'
import { IconButton, Tooltip } from '@mui/material'

interface ToolTipProps {
  icon: ReactNode
  title: string | ReactNode
  placement: 'top' | 'bottom' | 'left' | 'right'
}

export const MyToolTip: FC<ToolTipProps> = ({ icon, title, placement }) => {
  return (
    <Tooltip title={title} placement={placement}>
      <IconButton>{icon}</IconButton>
    </Tooltip>
  )
}
