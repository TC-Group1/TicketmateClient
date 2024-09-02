import { StyleSheet } from '../CustomTypesAndInterfaces/types'

export const registrationStyle: StyleSheet = {
  authNavBox: {
    display: 'flex',
    width: '85%',
    justifyContent: 'flex-end',
    marginTop: 2,
  },
  authNavLink: {
    fontSize: '1.125rem',
    fontStyle: 'italic',
  },
  authNavText: { fontSize: '1.125rem' },
  button: {
    primary: {
      backgroundColor: 'blue',
      color: 'white',
      width: '85%',
      borderRadius: 1,
      padding: '8px 0',
    },
    // secondary: {},
  },
  buttonTypography: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
  },
  divider: { color: 'gray', margin: '10px 0' },
  form: {
    padding: '10px 25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formDiv: {
    width: '58%',
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '2rem',
    marginBottom: 2,
  },
  h2: { fontSize: '1.25rem', marginBottom: 4, color: 'gray' },
  h3: {},
  imageBox: {
    width: '42%',
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    boxShadow: '30px 0 50px rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  ssoBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ssoButton: {
    width: '85%',
    borderRadius: 1,
    padding: '8px 0',
  },
  ssoTypography: { marginLeft: 1, fontSize: '1.25rem' },
  textField: {
    maxWidth: '800px',
    marginBottom: 3,
  },
  textFieldBox: { width: '100%', borderRadius: 1 },
  smallIcon: {},
  largeIcon: {},
}
