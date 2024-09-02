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
  name: string
  helperText?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  position?: 'end' | 'start'
  icon?: ReactNode
  sx: {}
  type: string
  prefersDarkMode: boolean
  inputProps?: string
  error?: boolean
}

export const LabeledTextField: FC<TextFieldProps> = ({
  label,
  name,
  helperText,
  value,
  onChange,
  position,
  icon,
  sx,
  type,
  prefersDarkMode,
  inputProps,
  error,
}) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        helperText={helperText}
        value={value}
        onChange={onChange}
        sx={sx}
        type={type}
        error={error}
        // color is for the border when the input is focused
        // color={prefersDarkMode ? 'primary' : 'secondary'}
        inputProps={{
          style: { color: inputProps },
        }}
        InputProps={{
          endAdornment: position ? (
            <InputAdornment
              sx={{ color: prefersDarkMode ? '#fff' : '#000' }}
              position={position}
            >
              {icon}
            </InputAdornment>
          ) : undefined,
        }}
      />
    </>
  )
}
