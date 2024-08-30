import React, { FC, ReactNode } from 'react'
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  useMediaQuery,
} from '@mui/material'

interface TextFieldProps {
  label: string
  position?: 'end' | 'start'
  icon?: ReactNode
  sx: {}
  type: string
  prefersDarkMode: boolean
}

export const LabeledTextField: FC<TextFieldProps> = ({
  label,
  icon,
  position,
  type,
  sx,
  prefersDarkMode,
}) => {
  return (
    <>
      <TextField
        sx={[sx, { color: prefersDarkMode ? '#fff' : '#000' }]}
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
