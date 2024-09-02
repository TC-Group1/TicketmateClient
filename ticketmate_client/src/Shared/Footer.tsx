import { Box, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Box
      sx={{
        height: 40,
        width: '65vw',
        display: 'flex',
        justifyContent: 'space-evenly',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: 'inherit',
          bottom: 40,
          position: 'absolute',
          zIndex: 1,
        }}
      >
        <Typography variant="body2">Privacy Policy</Typography>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} TicketMate
        </Typography>
        <Typography variant="body2">Terms and Conditions</Typography>
      </Box>
    </Box>
  )
}
