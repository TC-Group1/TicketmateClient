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
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: '2rem',
    marginBottom: 2,
  },
  h2: { fontSize: '1.25rem', marginBottom: 4, color: 'gray' },
  h3: {},
  button: {
    // primary: {},
    // secondary: {},
  },
  ssoBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ssoButton: {
    width: '85%',
    border: '1px solid gray',
    borderRadius: 1,
    padding: '8px 0',
  },
  ssoTypography: { marginLeft: 1, fontSize: '1.25rem' },
  textField: {
    width: '85%',
    maxWidth: '800px',
    marginBottom: 3,
  },
  textFieldBox: { width: '100%' },
  divider: { color: 'gray', margin: '10px 0' },
  smallIcon: {},
  largeIcon: {},
}
