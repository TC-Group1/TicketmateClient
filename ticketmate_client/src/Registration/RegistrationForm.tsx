import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { registrationStyle } from '../styles/registrationStyle'
import { LabeledTextField } from './LabeledTextField'
import EmailIcon from '@mui/icons-material/Email'
import { MyHeadings } from './Headings'
import { MySSOButton } from './Button'
import GoogleIcon from '@mui/icons-material/Google'
import { MyDivider } from './Divider'
import PhoneIcon from '@mui/icons-material/Phone'

export const RegistrationForm = () => {
  const showImageBox = useMediaQuery('(min-width:900px)')
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

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
              width: { xs: '95%', md: '80%' },
            },
          ]}
        >
          <Box
            sx={[
              registrationStyle.ssoBox,
              {
                width: { xs: '95%', md: '80%' },
              },
            ]}
          >
            <MyHeadings
              text={'Create your account'}
              sx={registrationStyle.h1}
            />
            <MyHeadings
              text={'Get started with TicketMate today'}
              sx={registrationStyle.h2}
            />
            <MySSOButton
              sx={registrationStyle.ssoButton}
              label={'Login with Google'}
              icon={<GoogleIcon />}
            />
          </Box>
          <Box sx={{ width: '100%' }}>
            <MyDivider sx={registrationStyle.divider} text={'or'} />
          </Box>
          <Box
            sx={[
              registrationStyle.form,
              {
                width: { xs: '95%', md: '80%' },
              },
            ]}
          >
            <LabeledTextField
              sx={[
                registrationStyle.textField,
                { width: { xs: '100%', md: '85%' } },
              ]}
              label={'Email'}
              icon={<EmailIcon />}
              position={'start'}
              type={'text'}
              prefersDarkMode={prefersDarkMode}
            />
            <LabeledTextField
              sx={[
                registrationStyle.textField,
                { width: { xs: '100%', md: '85%' } },
              ]}
              label={'Phone Number (optional)'}
              icon={<PhoneIcon />}
              position={'start'}
              type={'text'}
              prefersDarkMode={prefersDarkMode}
            />
            <LabeledTextField
              sx={[
                registrationStyle.textField,
                { width: { xs: '100%', md: '85%' } },
              ]}
              label={'First Name'}
              type={'text'}
              prefersDarkMode={prefersDarkMode}
            />
            <LabeledTextField
              sx={[
                registrationStyle.textField,
                { width: { xs: '100%', md: '85%' } },
              ]}
              label={'Last Name'}
              type={'text'}
              prefersDarkMode={prefersDarkMode}
            />
            <LabeledTextField
              sx={[
                registrationStyle.textField,
                { width: { xs: '100%', md: '85%' } },
              ]}
              label={'Password'}
              type={'text'}
              prefersDarkMode={prefersDarkMode}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
