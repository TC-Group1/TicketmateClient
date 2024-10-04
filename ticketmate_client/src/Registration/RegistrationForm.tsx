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
    },
  })

  const [emailHelperText, setEmailHelperText] = useState<string>('')
  const [phoneHelperText, setPhoneHelperText] = useState<string>('')

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleShowPasswordButton = () => setShowPassword((show) => !show)

  const showImageBox = useMediaQuery('(min-width:900px)')

  const { prefersDarkMode } = DarkMode()

  // Error handling state
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    EmailError: false,
    PhoneNumberError: false,
    FirstNameError: false,
    LastNameError: false,
    PasswordHashError: false,
  })

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
    const { name, value } = e.target
    if (
      e.target.name === 'Email' ||
      e.target.name === 'PhoneNumber' ||
      e.target.name === 'FirstName' ||
      e.target.name === 'LastName' ||
      e.target.name === 'PasswordHash'
    ) {
      handleError(`${e.target.name}Error`, false) // Sets error state to false
    }
    setFormData((formData) => ({
      ...formData,
      ['query']: { ...formData['query'], [name]: value },
    }))
  }

  const handleSignUp = async () => {
    const newErrors = { ...errors } // Copy of errors object

    // Gives user the ability to input their phone number in whatever format they want
    const stripSpecialChars = (number: string) => {
      return number.replace(/[^+\d]+/g, '')
    }

    //will have to update accessors to match the new schema that aligns to the request object -- example: formData.query.Email instead of formData.email
    if (formData.query?.Email === '' && formData.query?.PhoneNumber === '') {
      newErrors.EmailError = true
      newErrors.PhoneNumberError = true
      setPhoneHelperText('An email or phone number is required')
    } else {
      if (
        formData.query?.Email !== '' &&
        emailRegex.test(formData.query?.Email ?? '') === false
      ) {
        newErrors.EmailError = true
        setEmailHelperText('Please enter a valid email address')
      } else newErrors.EmailError = false
      if (
        formData.query?.PhoneNumber !== '' &&
        phoneRegex.test(
          stripSpecialChars(formData.query?.PhoneNumber ?? '')
        ) === false
      ) {
        newErrors.PhoneNumberError = true
        setPhoneHelperText('Please enter a valid phone number')
      } else newErrors.PhoneNumberError = false
    }
    if (
      formData.query?.FirstName === undefined ||
      formData.query?.FirstName === '' ||
      formData.query?.FirstName?.length < 2
    ) {
      newErrors.FirstNameError = true
    } else newErrors.FirstNameError = false

    if (
      formData.query?.LastName === undefined ||
      formData.query?.LastName === '' ||
      formData.query?.LastName.length < 2
    ) {
      newErrors.LastNameError = true
    } else newErrors.LastNameError = false

    if (
      formData.query?.PasswordHash === '' ||
      passwordRegex.test(formData.query?.PasswordHash ?? '') === false
    ) {
      newErrors.PasswordHashError = true
    } else {
      newErrors.PasswordHashError = false
    }

    setErrors(newErrors) // Sets error state to true

    if (
      newErrors.EmailError === false &&
      newErrors.PhoneNumberError === false &&
      newErrors.FirstNameError === false &&
      newErrors.LastNameError === false &&
      newErrors.PasswordHashError === false
    ) {
      // Format phone number: xxx-xxx-xxxx    //updated and corrected error state where phone number is null/undefined
      const formattedPhone = stripSpecialChars(
        formData.query?.PhoneNumber ?? ''
      ).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')

      const data = {
        ...formData,
        ['query']: { ...formData['query'], PhoneNumber: formattedPhone },
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
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100dvw',
          height: '100dvh',
          overflow: 'hidden',
        },
      ]}
    >
      <Box
        sx={[
          {
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: { xs: 'center', md: 'space-evenly' },
            alignItems: 'center',
            height: 'inherit',
            width: 'inherit',
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
            {
              width: { xs: '95%', sm: '70%', md: '58%' },
              overflowY: 'scroll',
            },
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
                text={'LOGO HERE'}
                sx={{ fontSize: 'large', fontWeight: 800, marginBottom: 3 }}
              />
              <MyHeadings
                text={'Create your account'}
                sx={[
                  registrationStyle.h1,
                  { fontSize: { xs: '1.5rem', md: '2rem' } },
                ]}
              />
              <MyHeadings
                text={'Get started with TicketMate today'}
                variant={'subtitle1'}
                sx={{ fontSize: { xs: '1.05rem', md: '1.25rem' } }}
              />
              <Box
                id="registration-sso-buttons"
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', lg: 'row' },
                  justifyContent: { xs: 'space-between', lg: 'space-evenly' },
                  alignItems: { xs: 'center', lg: 'center' },
                  width: { xs: '95%', lg: '100%' },
                  maxWidth: '500px',
                  marginBottom: 0.5,
                }}
              >
                <MyButton
                  sx={[
                    registrationStyle.ssoButton,
                    {
                      width: { xs: '230px', lg: '48%' },
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
                    { width: { xs: '230px', lg: '48%' } },
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

                  {
                    width: { xs: '100%', md: '86%' },
                    marginBottom: 1.5,
                  },
                ]}
                error={errors.EmailError}
                label={'Email'}
                name={'Email'}
                value={formData.query?.Email ?? ''}
                onChange={handleInputField}
                helperText={
                  errors.EmailError
                    ? emailHelperText
                    : "Don't worry, we won't spam you."
                }
                icon={<EmailIcon />}
                position={'end'}
                type={'text'}
              />
              <Box
                id="registration-divider"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <MyDivider
                  sx={[
                    registrationStyle.divider,
                    {
                      color: prefersDarkMode ? '#aaa' : '#333',
                      marginTop: -1,
                      width: '50%',
                    },
                  ]}
                  text={'or'}
                />
              </Box>
              <LabeledTextField
                id={'phone-registration'}
                sx={[
                  registrationStyle.textField,

                  {
                    width: { xs: '100%', md: '86%' },
                  },
                ]}
                error={errors.PhoneNumberError}
                name={'PhoneNumber'}
                value={formData.query?.PhoneNumber ?? ''}
                onChange={handleInputField}
                label={'Phone Number'}
                helperText={errors.PhoneNumberError ? phoneHelperText : ' '}
                icon={<PhoneIcon />}
                position={'end'}
                type={'text'}
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

                    { width: { xs: '100%', md: '48%' } },
                  ]}
                  error={errors.FirstNameError}
                  name={'FirstName'}
                  label={'First Name*'}
                  helperText={
                    errors.FirstNameError ? 'First name is required' : ' '
                  }
                  value={formData.query?.FirstName ?? ''}
                  onChange={handleInputField}
                  type={'text'}
                />
                <LabeledTextField
                  id={'last-name-registration'}
                  sx={[
                    registrationStyle.textField,

                    {
                      width: { xs: '100%', md: '48%' },
                    },
                  ]}
                  error={errors.LastNameError}
                  name={'LastName'}
                  label={'Last Name*'}
                  helperText={
                    errors.LastNameError ? 'Last name is required' : ' '
                  }
                  value={formData.query?.LastName ?? ''}
                  onChange={handleInputField}
                  type={'text'}
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
                    sx={[registrationStyle.textField, { width: '97%' }]}
                    error={errors.PasswordHashError}
                    helperText={
                      errors.PasswordHashError
                        ? 'Password does not meet requirements'
                        : ''
                    }
                    name={'PasswordHash'}
                    label={'Password*'}
                    value={formData.query?.PasswordHash ?? ''}
                    onChange={handleInputField}
                    type={showPassword ? 'text' : 'password'}
                    icon={showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                    iconButton={handleShowPasswordButton}
                    position={'end'}
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
    </Box>
  )
}
