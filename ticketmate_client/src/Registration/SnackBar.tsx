import React, {
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
  SyntheticEvent,
  useState,
} from 'react'
import Button from '@mui/material/Button'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

interface MySnackbarProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
  duration?: number
  message: string
  undoAction?: boolean
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'center' | 'right'
}

export const MySnackbar: FC<MySnackbarProps> = ({
  setIsOpen,
  isOpen,
  duration,
  message,
  undoAction,
  vertical,
  horizontal,
}) => {
  const handleClose = () => {
    setIsOpen(false)
  }

  const action = (
    <Fragment>
      {undoAction ? (
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
      ) : null}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  )

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={isOpen}
      autoHideDuration={duration}
      onClose={handleClose}
      message={message}
      action={action}
    />
  )
}
