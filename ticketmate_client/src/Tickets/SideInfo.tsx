import { Box } from '@mui/material'
import { ReactNode } from 'react'

const SideInfo = ({ children }: { children: ReactNode }) => {
  return <Box sx={{ display: 'flex', gap: '1rem' }}>{children}</Box>
}
export default SideInfo
