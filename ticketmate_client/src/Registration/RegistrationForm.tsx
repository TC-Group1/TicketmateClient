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
import MicrosoftIcon from '@mui/icons-material/Microsoft'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import VisibilityIcon from '@mui/icons-material/Visibility'
import img from '../assets/registrationPlaceholderImg.png'
import { emailRegex, passwordRegex, phoneRegex } from '../Lib/Constants'
import { Footer } from '../Shared/Footer'
import { VisibilityOff } from '@mui/icons-material'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { MySnackbar } from './SnackBar'

export const RegistrationForm: FC<User> = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
  })

  const [emailHelperText, setEmailHelperText] = useState<string>('')
  const [phoneHelperText, setPhoneHelperText] = useState<string>('')
  const [successToast, setSuccessToast] = useState<boolean>(false)

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleShowPasswordButton = () => setShowPassword((show) => !show)

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

  const lightOrDarkmode = {
    '& .MuiOutlinedInput-root': {
      color: prefersDarkMode ? '#fff' : '#000',
    },
    '& .MuiInputLabel-outlined': {
      color: prefersDarkMode ? '#fff' : '#000',
    },
    '& .MuiFormHelperText-root': {
      fontSize: { xs: '.7rem', md: '.9rem' },
      color: prefersDarkMode ? '#fff' : '#000',
    },
  }

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

  const handleSignUp = async (e: MouseEvent<Element>) => {
    e.preventDefault()

    const newErrors = { ...errors } // Copy of errors object

    // Gives user the ability to input their phone number in whatever format they want
    const stripSpecialChars = (number: string) => {
      return number.replace(/[^+\d]+/g, '')
    }

    if (formData.email === '' && formData.phone === '') {
      newErrors.emailError = true
      newErrors.phoneError = true
      setPhoneHelperText('An email or phone number is required')
    } else {
      if (formData.email !== '' && emailRegex.test(formData.email) === false) {
        newErrors.emailError = true
        setEmailHelperText('Please enter a valid email address')
      } else newErrors.emailError = false
      if (
        formData.phone !== '' &&
        phoneRegex.test(stripSpecialChars(formData.phone)) === false
      ) {
        newErrors.phoneError = true
        setPhoneHelperText('Please enter a valid phone number')
      } else newErrors.phoneError = false
    }
    if (formData.firstName === '' || formData.firstName.length < 2) {
      newErrors.firstNameError = true
    } else newErrors.firstNameError = false

    if (formData.lastName === '' || formData.lastName.length < 2) {
      newErrors.lastNameError = true
    } else newErrors.lastNameError = false

    if (
      formData.password === '' ||
      passwordRegex.test(formData.password) === false
    ) {
      newErrors.passwordError = true
      console.log(passwordRegex.test(formData.password))
    } else {
      console.log(passwordRegex.test(formData.password))
      newErrors.passwordError = false
    }

    setErrors(newErrors) // Sets error state to true

    if (
      newErrors.emailError === false &&
      newErrors.phoneError === false &&
      newErrors.firstNameError === false &&
      newErrors.lastNameError === false &&
      newErrors.passwordError === false
    ) {
      // Format phone number: xxx-xxx-xxxx
      const formattedPhone = stripSpecialChars(formData.phone).replace(
        /(\d{3})(\d{3})(\d{4})/,
        '$1-$2-$3'
      )

      const data = {
        ...formData,
        phone: formattedPhone,
      }

      console.log(data, 'Data:')

      // const response = await registration.mutate(data)
    } else {
      throw new Error("Form can't be submitted")
    }
  }

  const registration = useMutation({
    mutationFn: (data: User) => {
      return axios.post('', data)
    },
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      if (error.message.includes('Email is already in use')) {
        console.error('Unable to create user, email already exists.')
        handleError('emailError', true)
        setEmailHelperText('Email is already in use')
        throw new Error('Email is already in use')
      }
      if (error.message.includes('Phone is already in use')) {
        console.error('Unable to create user, phone number already exists.')
        handleError('phoneError', true)
        setPhoneHelperText('Phone number already exists')
        throw new Error('Phone number already exists')
      }
    },
  })

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100vh',
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
        <Box
          sx={[
            registrationStyle.formDiv,
            { width: { xs: '95%', sm: '70%', md: '58%' } },
          ]}
        >
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
                sx={[
                  registrationStyle.h1,
                  { fontSize: { xs: '1.5rem', md: '2rem' } },
                ]}
              />
              <MyHeadings
                text={'Get started with TicketMate today'}
                sx={[
                  registrationStyle.h2,
                  { fontSize: { xs: '1.05rem', md: '1.25rem' } },
                ]}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'row' },
                  justifyContent: { xs: 'space-between', lg: 'space-evenly' },
                  alignItems: { xs: 'center', lg: 'center' },
                  width: { xs: '108%', lg: '95%' },
                  marginBottom: 0.5,
                }}
              >
                <MyButton
                  sx={[
                    registrationStyle.ssoButton,
                    {
                      border: prefersDarkMode
                        ? '1px solid #fff'
                        : '1px solid #bbb',
                      width: { xs: 152, md: '148pt' },
                      marginBottom: { xs: 1, lg: 0 },
                    },
                  ]}
                  typography={[
                    registrationStyle.ssoTypography,
                    { fontSize: { xs: '.75rem', sm: '1rem' } },
                  ]}
                  // Should the label read 'Sign up with Google'?
                  label={'Login with Google'}
                  icon={<GoogleIcon fontSize={'small'} />}
                  func={handleSSOClick}
                />
                <MyButton
                  sx={[
                    registrationStyle.ssoButton,
                    {
                      border: prefersDarkMode
                        ? '1px solid #fff'
                        : '1px solid #bbb',
                      width: { xs: 150, md: '148pt' },
                    },
                  ]}
                  typography={[
                    registrationStyle.ssoTypography,
                    { fontSize: { xs: '.75rem', sm: '1rem' } },
                  ]}
                  // Should the label read 'Sign up with Google'?
                  label={'Login with Microsoft'}
                  icon={<MicrosoftIcon fontSize={'small'} />}
                  func={handleSSOClick}
                />
              </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
              <MyDivider
                sx={[
                  registrationStyle.divider,
                  {
                    color: prefersDarkMode ? '#aaa' : '#eee',
                    '& .MuiDivider-root': {},
                  },
                ]}
                text={'or'}
              />
            </Box>
            <Box
              sx={[
                registrationStyle.form,
                {
                  width: { xs: '95%', md: '95%', lg: '80%' },
                },
              ]}
            >
              <LabeledTextField
                id={'email-registration'}
                variant={'outlined'}
                sx={[
                  registrationStyle.textField,
                  lightOrDarkmode,
                  {
                    width: { xs: '100%', md: '86%' },
                    marginBottom: 1.5,
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: errors.emailError
                        ? 'red'
                        : prefersDarkMode
                          ? '#fff'
                          : '#eee',
                    },
                    '& .MuiFormHelperText-root': {
                      color: !errors.emailError
                        ? prefersDarkMode
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'rgba(0, 0, 0, 0.7)'
                        : 'red',
                    },
                  },
                ]}
                error={errors.emailError}
                label={'Email'}
                name={'email'}
                value={formData.email}
                onChange={handleInputField}
                helperText={
                  errors.emailError
                    ? emailHelperText
                    : "Don't worry, we won't spam you."
                }
                icon={<EmailIcon />}
                position={'end'}
                type={'text'}
                prefersDarkMode={prefersDarkMode}
              />
              <LabeledTextField
                id={'phone-registration'}
                sx={[
                  registrationStyle.textField,
                  lightOrDarkmode,
                  {
                    width: { xs: '100%', md: '86%' },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: errors.phoneError
                        ? 'red'
                        : prefersDarkMode
                          ? '#fff'
                          : '#eee',
                    },
                    '& .MuiFormHelperText-root': {
                      color: !errors.phoneError
                        ? prefersDarkMode
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'rgba(0, 0, 0, 0.7)'
                        : 'red',
                    },
                  },
                ]}
                error={errors.phoneError}
                name={'phone'}
                value={formData.phone}
                onChange={handleInputField}
                label={'Phone Number (optional)'}
                helperText={errors.phoneError ? phoneHelperText : ''}
                icon={<PhoneIcon />}
                position={'end'}
                type={'text'}
                prefersDarkMode={prefersDarkMode}
              />
              <Box
                sx={[
                  registrationStyle.form,
                  {
                    width: { xs: '100%', md: '86%' },
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: { xs: 'center', md: 'space-between' },
                    padding: 0,
                  },
                ]}
              >
                <LabeledTextField
                  id={'first-name-registration'}
                  sx={[
                    registrationStyle.textField,
                    lightOrDarkmode,
                    {
                      width: { xs: '100%', md: '48%' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: errors.firstNameError
                          ? 'red'
                          : prefersDarkMode
                            ? '#fff'
                            : '#eee',
                      },
                      '& .MuiFormHelperText-root': {
                        color: !errors.firstNameError
                          ? prefersDarkMode
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(0, 0, 0, 0.7)'
                          : 'red',
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
                  id={'last-name-registration'}
                  sx={[
                    registrationStyle.textField,
                    lightOrDarkmode,
                    {
                      width: { xs: '100%', md: '48%' },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: errors.lastNameError
                          ? 'red'
                          : prefersDarkMode
                            ? '#fff'
                            : '#eee',
                      },
                      '& .MuiFormHelperText-root': {
                        color: !errors.lastNameError
                          ? prefersDarkMode
                            ? 'rgba(255, 255, 255, 0.7)'
                            : 'rgba(0, 0, 0, 0.7)'
                          : 'red',
                      },
                    },
                  ]}
                  error={errors.lastNameError}
                  name={'lastName'}
                  label={'Last Name'}
                  helperText={
                    errors.lastNameError ? 'Last name is required' : ''
                  }
                  value={formData.lastName}
                  onChange={handleInputField}
                  type={'text'}
                  prefersDarkMode={prefersDarkMode}
                />
              </Box>
              <LabeledTextField
                id={'password-registration'}
                sx={[
                  registrationStyle.textField,
                  lightOrDarkmode,
                  {
                    width: { xs: '100%', md: '86%' },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: errors.passwordError
                        ? 'red'
                        : prefersDarkMode
                          ? '#fff'
                          : '#eee',
                    },
                    '& .MuiFormHelperText-root': {
                      color: !errors.passwordError
                        ? prefersDarkMode
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'rgba(0, 0, 0, 0.7)'
                        : 'red',
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
                type={showPassword ? 'text' : 'password'}
                icon={showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                iconButton={handleShowPasswordButton}
                position={'end'}
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
