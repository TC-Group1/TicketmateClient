import { ChangeEvent, FC, useState } from 'react'
import { DarkMode } from '../Lib/DarkMode'
import { PostUserInsertUserData, User } from '../client'
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
import InfoIcon from '@mui/icons-material/Info'
import img from '../assets/registrationPlaceholderImg.png'
import { emailRegex, passwordRegex, phoneRegex } from '../Lib/Constants'
import { Footer } from '../Shared/Footer'
import { VisibilityOff } from '@mui/icons-material'
import { MyToolTip } from './ToolTip'


export const RegistrationForm: FC<User> = () => {
  const [formData, setFormData] = useState<PostUserInsertUserData>({
    // Query is required for the mutation
    query: {
      Avatar: '',
      Email: '',
      PhoneNumber: '',
      FirstName: '',
      LastName: '',
      PasswordHash: '',
    }
  })

  const [emailHelperText, setEmailHelperText] = useState<string>('')
  const [phoneHelperText, setPhoneHelperText] = useState<string>('')

  // const [successToast, setSuccessToast] = useState<boolean>(false)

  const [openTooltip, setOpenTooltip] = useState<boolean>(false)

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleShowPasswordButton = () => setShowPassword((show) => !show)

  const showImageBox = useMediaQuery('(min-width:900px)')

  const { prefersDarkMode } = DarkMode()

  // Error handling state
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    emailError: false,
    phoneNumberError: false,
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

  const handleSSOClick = (endpoint: string) => {
    console.log(`Redirecting to ${endpoint}`)
  }

  const handleInputField = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.name === 'email' ||
      e.target.name === 'phoneNumber' ||
      e.target.name === 'firstName' ||
      e.target.name === 'lastName' ||
      e.target.name === 'password'
    ) {
      handleError(`${e.target.name}Error`, false) // Sets error state to false
    }

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSignUp = async () => {
    const newErrors = { ...errors } // Copy of errors object

    // Gives user the ability to input their phone number in whatever format they want
    const stripSpecialChars = (number: string) => {
      return number.replace(/[^+\d]+/g, '')
    }
    //will have to update accessors to match the new schema that aligns to the request object -- example: formData.query.Email instead of formData.email
    if (formData.query?.Email === '' && formData.query?.PhoneNumber === '') {
      newErrors.emailError = true
      newErrors.phoneNumberError = true
      setPhoneHelperText('An email or phone number is required')
    } else {
      if (formData.query?.Email !== '' && emailRegex.test(formData.query?.Email ?? '') === false) {
        newErrors.emailError = true
        setEmailHelperText('Please enter a valid email address')
      } else newErrors.emailError = false
      if (
        formData.query?.PhoneNumber !== '' &&
        phoneRegex.test(stripSpecialChars(formData.query?.PhoneNumber ?? '')) === false
      ) {
        newErrors.phoneNumberError = true
        setPhoneHelperText('Please enter a valid phone number')
      } else newErrors.phoneNumberError = false
    }
    if (formData.query?.FirstName === undefined || formData.query?.FirstName === '' || formData.query?.FirstName?.length < 2) {
      newErrors.firstNameError = true
    } else newErrors.firstNameError = false

    if (formData.query?.LastName === undefined ||formData.query?.LastName === '' || formData.query?.LastName.length < 2) {
      newErrors.lastNameError = true
    } else newErrors.lastNameError = false

    if (
      formData.query?.PasswordHash === '' ||
      passwordRegex.test(formData.query?.PasswordHash ?? '') === false
    ) {
      newErrors.passwordError = true
    } else {
      newErrors.passwordError = false
    }

    setErrors(newErrors) // Sets error state to true

    if (
      newErrors.emailError === false &&
      newErrors.phoneNumberError === false &&
      newErrors.firstNameError === false &&
      newErrors.lastNameError === false &&
      newErrors.passwordError === false
    ) {
      // Format phone number: xxx-xxx-xxxx    //updated and corrected error state where phone number is null/undefined
      const formattedPhone = stripSpecialChars(formData.query?.PhoneNumber ?? '').replace(
        /(\d{3})(\d{3})(\d{4})/,
        '$1-$2-$3'
      )

      const data = {
        ...formData,
        phoneNumber: formattedPhone,
      }

      console.log(data, 'Data:')

      // const response = await registration.mutate(data)
    } else {
      throw new Error("Form can't be submitted")
    }
  }

  // const registration = useMutation({
  //   mutationFn: (data: User) => {
  //     return postUserInsertUser(data)
  //   },
  //   onSuccess: (data) => {
  //     console.log(data)
  //   },
  //   onError: (error) => {
  //     if (error.message.includes('Email is already in use')) {
  //       console.error('Unable to create user, email already exists.')
  //       handleError('emailError', true)
  //       setEmailHelperText('Email is already in use')
  //       throw new Error('Email is already in use')
  //     }
  //     if (error.message.includes('Phone is already in use')) {
  //       console.error('Unable to create user, phone number already exists.')
  //       handleError('phoneNumberError', true)
  //       setPhoneHelperText('Phone number already exists')
  //       throw new Error('Phone number already exists')
  //     }
  //   },
  // })

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
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
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
              id="registration-main-header"
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
                id="registration-sso-buttons"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'row' },
                  justifyContent: { xs: 'space-between', lg: 'space-evenly' },
                  alignItems: { xs: 'center', lg: 'center' },
                  //width: { xs: '108%', lg: '95%' },
                  width: { xs: '95%', lg: '92%' },
                  maxWidth: '500px',
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
                      width: { xs: '230px', lg: '45%' },
                      marginBottom: { xs: 1, lg: 0 },
                    },
                  ]}
                  typography={[
                    registrationStyle.ssoTypography,
                    { fontSize: { xs: '1rem' } },
                  ]}
                  // Should the label read 'Sign up with Google'?
                  label={'Login with Google'}
                  icon={<GoogleIcon fontSize={'small'} />}
                  func={() => handleSSOClick('google')}
                />
                <MyButton
                  sx={[
                    registrationStyle.ssoButton,
                    {
                      border: prefersDarkMode
                        ? '1px solid #fff'
                        : '1px solid #bbb',
                      width: { xs: '230px', lg: '45%' },
                    },
                  ]}
                  typography={[
                    registrationStyle.ssoTypography,
                    { fontSize: { xs: '1rem' } },
                  ]}
                  // Should the label read 'Sign up with Google'?
                  label={'Login with Microsoft'}
                  icon={<MicrosoftIcon fontSize={'small'} />}
                  func={() => handleSSOClick('microsoft')}
                />
              </Box>
            </Box>
            <Box id="registration-divider" sx={{ width: '100%' }}>
              <MyDivider
                sx={[
                  registrationStyle.divider,
                  {
                    color: prefersDarkMode ? '#aaa' : '#333',
                  },
                ]}
                text={'or'}
              />
            </Box>
            <Box
              id="registration-form"
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
                          : '#c9c9c9',
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
                value={formData.query?.Email ?? ''}
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
                      borderColor: errors.phoneNumberError
                        ? 'red'
                        : prefersDarkMode
                          ? '#fff'
                          : '#c9c9c9',
                    },
                    '& .MuiFormHelperText-root': {
                      color: !errors.phoneNumberError
                        ? prefersDarkMode
                          ? 'rgba(255, 255, 255, 0.7)'
                          : 'rgba(0, 0, 0, 0.7)'
                        : 'red',
                    },
                  },
                ]}
                error={errors.phoneNumberError}
                name={'phoneNumber'}
                value={formData.query?.PhoneNumber ?? ''}
                onChange={handleInputField}
                label={'Phone Number (optional)'}
                helperText={errors.phoneNumberError ? phoneHelperText : ''}
                icon={<PhoneIcon />}
                position={'end'}
                type={'text'}
                prefersDarkMode={prefersDarkMode}
              />
              <Box
                id="registration-name-fields"
                sx={[
                  registrationStyle.form,
                  {
                    width: { xs: '100%', md: '86%' },
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: { xs: 'center', md: 'space-between' },
                    padding: 0,
                    maxWidth: '500px',
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
                            : '#c9c9c9',
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
                  value={formData.query?.FirstName ?? ''}
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
                            : '#c9c9c9',
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
                  value={formData.query?.LastName ?? ''}
                  onChange={handleInputField}
                  type={'text'}
                  prefersDarkMode={prefersDarkMode}
                />
              </Box>
              <Box
                id="registration-password-field-div"
                sx={{
                  display: 'flex',
                  width: { xs: '100%', md: '86%' },
                  maxWidth: '500px',
                  justifyContent: { xs: 'space-between', md: '' },
                }}
              >
                <Box
                  id="registration-password-field"
                  sx={{
                    width: { xs: '92%', sm: '95%' },
                    display: 'flex',
                  }}
                >
                  <LabeledTextField
                    id={'password-registration'}
                    sx={[
                      registrationStyle.textField,
                      lightOrDarkmode,
                      {
                        width: '98%',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: errors.passwordError
                            ? 'red'
                            : prefersDarkMode
                              ? '#fff'
                              : '#c9c9c9',
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
                    value={formData.query?.PasswordHash ?? ''}
                    onChange={handleInputField}
                    type={showPassword ? 'text' : 'password'}
                    icon={showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                    iconButton={handleShowPasswordButton}
                    position={'end'}
                    prefersDarkMode={prefersDarkMode}
                  />
                </Box>
                <Box
                  id="registration-password-tooltip"
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '5%',
                    marginBottom: 2.2,
                  }}
                >
                  <MyToolTip
                    handleClose={() => setOpenTooltip(false)}
                    handleOpen={() => setOpenTooltip(true)}
                    type={'clickable'}
                    open={openTooltip}
                    placement={'top'}
                    title={
                      <>
                        At least one uppercase letter
                        <br />
                        At least one lowercase letter
                        <br />
                        At least one digit
                        <br />
                        At least one special character among #?!@$%^&*-
                        <br />A minimum length of 8 characters
                      </>
                    }
                    icon={<InfoIcon />}
                    prefersDarkMode={prefersDarkMode}
                  />
                </Box>
              </Box>
              <MyButton
                sx={[registrationStyle.button.primary]}
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
