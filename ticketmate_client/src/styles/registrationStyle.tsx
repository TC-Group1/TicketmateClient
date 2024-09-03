import { StyleSheet } from '../CustomTypesAndInterfaces/types'

export const registrationStyle: StyleSheet = {
  authNavBox: {
    display: 'flex',
    width: '85%',
    justifyContent: 'flex-end',
    marginTop: 1,
  },
  authNavLink: {
    fontSize: '.85rem',
    fontStyle: 'italic',
  },
  authNavText: { fontSize: '.85rem' },
  button: {
    primary: {
      backgroundColor: 'blue',
      color: 'white',
      width: '65%',
      height: '36px',
      borderRadius: 1,
      padding: '8px 0',
    },
    // secondary: {},
  },
  buttonTypography: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
  },
  divider: { margin: '4px 0' },
  form: {
    padding: '10px 25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formDiv: {
    height: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    marginBottom: 1,
  },
  h2: { marginBottom: 2, color: 'gray' },
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
    borderRadius: 1,
    padding: '8px 4pt',
    maxWidth: '500px',
  },
  ssoTypography: { marginLeft: 1 },
  textField: {
    maxWidth: '500px',
    marginBottom: 2.2,
  },
  textFieldBox: { width: '100%', borderRadius: 1 },
  smallIcon: {},
  largeIcon: {},
}
