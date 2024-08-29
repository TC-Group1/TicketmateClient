import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { registrationStyle } from '../styles/registrationStyle'
import { LabeledTextField } from './LabeledTextField'
import EmailIcon from '@mui/icons-material/Email'
import { MyHeadings } from './Headings'

export const RegistrationForm = () => {
  const showImageBox = useMediaQuery('(min-width:900px)')

  return (
    <Box
      sx={[
        registrationStyle.container,
        {
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'center', md: 'space-evenly' },
        },
      ]}
    >
      {showImageBox ? (
        <Box sx={registrationStyle.imageBox}>Image Box</Box>
      ) : null}
      <Box sx={registrationStyle.formDiv}>
        <Box
          sx={[
            registrationStyle.form,
            {
              marginLeft: { xs: '0', md: '45px' },
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: { xs: 'center', md: 'flex-start' },
              width: { xs: '95%', md: '80%' },
            },
          ]}
        >
          <MyHeadings text={'Registration'} sx={registrationStyle.h1} />
          <MyHeadings text={'Registration'} sx={registrationStyle.h1} />
          <MyHeadings text={'Registration'} sx={registrationStyle.h1} />
          <LabeledTextField
            sx={[
              registrationStyle.textField,
              { width: { xs: '100%', md: '85%' } },
            ]}
            label={'Email'}
            icon={<EmailIcon />}
            position={'start'}
            type={'text'}
          />
        </Box>
      </Box>
    </Box>
  )
}
