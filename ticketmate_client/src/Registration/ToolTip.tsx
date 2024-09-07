import React, { ReactNode, FC, useState, useEffect } from 'react'

import { Tooltip, ClickAwayListener, IconButton } from '@mui/material'

interface MyTooltipProps {
  title: ReactNode | string
  icon: ReactNode
  handleClose: () => void
  handleOpen: () => void
  open: boolean
  type: string
  placement:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
  prefersDarkMode: boolean
}

export const MyToolTip: FC<MyTooltipProps> = ({
  title,
  icon,
  handleClose,
  handleOpen,
  open,
  type,
  placement,
  prefersDarkMode,
}) => {
  const [disableForClickableType, setDisableForClickableType] = useState({
    focus: false,
    hover: false,
    touch: false,
    portal: false,
  })

  useEffect(() => {
    if (type === 'clickable') {
      setDisableForClickableType({
        focus: true,
        hover: true,
        touch: true,
        portal: true,
      })
    }
  }, [])

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Tooltip
        PopperProps={{
          disablePortal: disableForClickableType.portal,
        }}
        placement={placement}
        title={title}
        onClose={handleClose}
        open={open}
        disableFocusListener={disableForClickableType.focus}
        disableHoverListener={disableForClickableType.hover}
        disableTouchListener={disableForClickableType.touch}
      >
        <IconButton
          sx={{ color: prefersDarkMode ? 'white' : 'black' }}
          onClick={handleOpen}
        >
          {icon}
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  )
}
