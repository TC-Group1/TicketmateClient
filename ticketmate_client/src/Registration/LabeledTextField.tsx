import React, { FC, ReactNode } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'

interface TextFieldProps {
  id: string
  variant?: 'filled' | 'outlined' | 'standard' // may be unnecessary
  label: string
  name: string
  helperText?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  iconButton?: (e: React.MouseEvent<HTMLButtonElement>) => void
  position?: 'end' | 'start'
  icon?: ReactNode
  sx: {}
  type: string
  prefersDarkMode: boolean
  inputProps?: string
  error?: boolean
}

export const LabeledTextField: FC<TextFieldProps> = ({
  id,
  variant,
  label,
  name,
  helperText,
  value,
  onChange,
  iconButton,
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
        id={id}
        size={'small'}
        variant={variant}
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
            <IconButton
              onClick={iconButton}
              disabled={!iconButton ? true : false}
              sx={{ cursor: iconButton ? 'pointer' : 'default' }}
            >
              <InputAdornment
                sx={{ color: prefersDarkMode ? '#fff' : '#000' }}
                position={position}
              >
                {icon}
              </InputAdornment>
            </IconButton>
          ) : undefined,
        }}
      />
    </>
  )
}
