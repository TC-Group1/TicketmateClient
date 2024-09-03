import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: { xs: '100vw', md: '40vw' },
        bottom: 10,
        position: 'absolute',
        zIndex: 1,
      }}
    >
      <Typography variant={'body2'}>Privacy Policy</Typography>
      <Typography variant={'body2'} align="center">
        &copy; {new Date().getFullYear()} TicketMate
      </Typography>
      <Typography variant={'body2'}>Terms and Conditions</Typography>
    </Box>
  )
}
