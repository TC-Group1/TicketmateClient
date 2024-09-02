import { ChangeEvent, FC, MouseEvent, useState } from 'react'
import { DarkMode } from '../Lib/DarkMode'
import { User } from '../client'
import { Box, useMediaQuery } from '@mui/material'
import { registrationStyle } from '../styles/registrationStyle'
import { LabeledTextField } from './LabeledTextField'
import { MyHeadings } from './Headings'
import { MyButton } from './Button'
import { MyDivider } from './Divider'
import { AuthNavigationLink } from './AuthNavigationLink'
import GoogleIcon from '@mui/icons-material/Google'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import img from '../assets/registrationPlaceholderImg.png'
import { emailRegex, passwordRegex, phoneRegex } from '../Lib/Constants'
import { Footer } from '../Shared/Footer'

export const RegistrationForm: FC<User> = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
  })

  const [emailHelperText, setEmailHelperText] = useState<string>('')

  const showImageBox = useMediaQuery('(min-width:900px)')
  const { prefersDarkMode } = DarkMode()

  // Error handling state
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    emailError: false,
    phoneError: false,
    firstNameError: false,
    lastNameError: false,
    passwordError: false,
  })

  const handleError = (fieldName: string, value: boolean) => {
    setErrors({
      ...errors,
      [fieldName]: value,
    })
  }

  const handleSSOClick = (e: MouseEvent<Element>) => {
    e.preventDefault()
    console.log('Go to google SSO')
  }

  const handleInputField = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === 'email' ||
      e.target.name === 'phone' ||
      e.target.name === 'firstName' ||
      e.target.name === 'lastName' ||
      e.target.name === 'password'
    ) {
      handleError(`${e.target.name}Error`, false) // Sets error state to false
    }

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignUp = (e: MouseEvent<Element>) => {
    e.preventDefault()

    const newErrors = { ...errors } // Copy of errors object

    if (formData.email === '' || emailRegex.test(formData.email) === false) {
      newErrors.emailError = true
      setEmailHelperText('Please enter a valid email address')
    } else newErrors.emailError = false
    if (formData.phone !== '' && phoneRegex.test(formData.phone) === false) {
      console.log('Phone: ', phoneRegex.test(formData.phone))
      newErrors.phoneError = true
    } else newErrors.phoneError = false
    if (formData.firstName === '' || formData.firstName.length < 2) {
      newErrors.firstNameError = true
    } else newErrors.firstNameError = false

    if (formData.lastName === '' || formData.lastName.length < 2) {
      newErrors.lastNameError = true
    } else newErrors.lastNameError = false

    if (formData.password === '' || !formData.password.match(passwordRegex)) {
      newErrors.passwordError = true
      console.log(formData.phone.match(phoneRegex))
    } else newErrors.passwordError = false
    setErrors(newErrors) // Sets error state to true

    if (
      newErrors.emailError === false &&
      newErrors.phoneError === false &&
      newErrors.firstNameError === false &&
      newErrors.lastNameError === false &&
      newErrors.passwordError === false
    ) {
      // Check if email is unique
      // If phone number is provided check if phone is unique
      // If email and phone are unique, create user
      console.log('Form submitted: ', formData)
      // If email and phone are not unique, display error
      // throw new Error('Email or phone number already exists')
    } else {
      throw new Error("Form can't be submitted")
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
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
          <Box sx={registrationStyle.imageBox}>
            <img
              src={img}
              alt={'Abstract TicketMate Image'}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Box>
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
              <MyButton
                sx={[
                  registrationStyle.ssoButton,
                  {
                    border: prefersDarkMode
                      ? '1px solid #fff'
                      : '1px solid #bbb',
                  },
                ]}
                typography={registrationStyle.ssoTypography}
                // Should the label read 'Sign up with Google'?
                label={'Login with Google'}
                icon={<GoogleIcon />}
                func={handleSSOClick}
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <MyDivider
                sx={[
                  registrationStyle.divider,
                  {
                    color: prefersDarkMode
                      ? '1px solid #fff'
                      : '1px solid #eee',
                  },
                ]}
                text={'or'}
              />
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
                  {
                    width: { xs: '100%', md: '85%' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: prefersDarkMode
                          ? '1px solid #fff'
                          : '1px solid #eee',
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      fontSize: '.9rem',
                    },
                  },
                ]}
                error={errors.emailError}
                label={'Email'}
                name={'email'}
                value={formData.email}
                onChange={handleInputField}
                helperText={emailHelperText}
                icon={<EmailIcon />}
                position={'start'}
                type={'text'}
                prefersDarkMode={prefersDarkMode}
              />
              <LabeledTextField
                sx={[
                  registrationStyle.textField,
                  {
                    width: { xs: '100%', md: '85%' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: prefersDarkMode
                          ? '1px solid #fff'
                          : '1px solid #eee',
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      fontSize: '.9rem',
                    },
                  },
                ]}
                error={errors.phoneError}
                name={'phone'}
                value={formData.phone}
                onChange={handleInputField}
                label={'Phone Number (optional)'}
                helperText={errors.phoneError ? 'Invalid phone number' : ''}
                icon={<PhoneIcon />}
                position={'start'}
                type={'text'}
                prefersDarkMode={prefersDarkMode}
              />
              <LabeledTextField
                sx={[
                  registrationStyle.textField,
                  {
                    width: { xs: '100%', md: '85%' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: prefersDarkMode
                          ? '1px solid #fff'
                          : '1px solid #eee',
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      fontSize: '.9rem',
                    },
                  },
                ]}
                error={errors.firstNameError}
                name={'firstName'}
                label={'First Name'}
                helperText={
                  errors.firstNameError ? 'First name is required' : ''
                }
                value={formData.firstName}
                onChange={handleInputField}
                type={'text'}
                prefersDarkMode={prefersDarkMode}
              />
              <LabeledTextField
                sx={[
                  registrationStyle.textField,
                  {
                    width: { xs: '100%', md: '85%' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: prefersDarkMode
                          ? '1px solid #fff'
                          : '1px solid #eee',
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      fontSize: '.9rem',
                    },
                  },
                ]}
                error={errors.lastNameError}
                name={'lastName'}
                label={'Last Name'}
                helperText={errors.lastNameError ? 'Last name is required' : ''}
                value={formData.lastName}
                onChange={handleInputField}
                type={'text'}
                prefersDarkMode={prefersDarkMode}
              />
              <LabeledTextField
                sx={[
                  registrationStyle.textField,
                  {
                    width: { xs: '100%', md: '85%' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: prefersDarkMode
                          ? '1px solid #fff'
                          : '1px solid #eee',
                      },
                    },
                    '& .MuiFormHelperText-root': {
                      fontSize: '.9rem',
                    },
                  },
                ]}
                error={errors.passwordError}
                helperText={
                  errors.passwordError
                    ? 'Password does not meet requirements'
                    : ''
                }
                name={'password'}
                label={'Password'}
                value={formData.password}
                onChange={handleInputField}
                type={'text'}
                prefersDarkMode={prefersDarkMode}
              />
              <MyButton
                sx={[
                  registrationStyle.button.primary,
                  {
                    border: prefersDarkMode
                      ? '1px solid #fff'
                      : '1px solid #bbb',
                  },
                ]}
                typography={registrationStyle.buttonTypography}
                label={'Sign Up'}
                func={handleSignUp}
              />
              <AuthNavigationLink
                question={'Already have an account?'}
                cta={'Login here'}
                link={'/Login'}
                containerStyle={registrationStyle.authNavBox}
                textStyle={registrationStyle.authNavText}
                linkStyle={registrationStyle.authNavLink}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}
