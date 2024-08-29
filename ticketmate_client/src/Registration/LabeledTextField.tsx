import React, { FC, ReactNode } from 'react'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material'

interface TextFieldProps {
  label: string
  position?: 'end' | 'start'
  icon?: ReactNode
  sx: {}
  type: string
}

export const LabeledTextField: FC<TextFieldProps> = ({
  label,
  icon,
  position,
  type,
  sx,
}) => {
  return (
    <>
      <TextField
        sx={sx}
        type={'text'}
        label={label}
        InputProps={{
          endAdornment: position ? (
            <InputAdornment position={position}>{icon}</InputAdornment>
          ) : undefined,
        }}
      />
    </>
  )
}
