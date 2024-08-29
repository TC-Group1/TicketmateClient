import { StyleSheet } from '../CustomTypesAndInterfaces/types'

export const registrationStyle: StyleSheet = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    alignItems: 'center',
  },
  imageBox: {
    backgroundColor: 'lightblue',
    width: '42%',
    height: 'inherit',
    display: 'flex',
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
  form: {
    padding: '10px 25px',
    display: 'flex',
    flexDirection: 'column',
  },
  h1: {
    fontSize: '3.5rem',
    marginBottom: 0.5,
  },
  h2: {},
  h3: {},
  button: {
    primary: {},
    secondary: {},
  },
  textField: {
    width: '85%',
    maxWidth: '800px',
    marginBottom: 0.25,
  },
  divider: {},
  smallIcon: {},
  largeIcon: {},
  ssoButton: {},
}
