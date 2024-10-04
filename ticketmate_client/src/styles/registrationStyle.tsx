import { StyleSheet } from '../CustomTypesAndInterfaces/types'
import { LIGHT_PURPLE } from '../Lib/Constants'

export const registrationStyle: StyleSheet = {
  authNavBox: {
    display: 'flex',
    width: '85%',
    justifyContent: 'center',
    marginTop: 2,
  },
  authNavLink: {
    fontSize: '.85rem',
    fontStyle: 'italic',
  },
  authNavText: { fontSize: '.85rem' },
  button: {
    primary: {
      backgroundColor: LIGHT_PURPLE,
      borderColor: LIGHT_PURPLE,
      color: 'white',
      width: '80%',
      height: '36px',
      borderRadius: 1,
      padding: '8px 0',
    },
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
  },
  textFieldBox: { width: '100%', borderRadius: 1 },
}
