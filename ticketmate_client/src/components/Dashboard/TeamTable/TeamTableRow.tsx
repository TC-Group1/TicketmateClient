import { FC } from 'react'
import { User } from '../../../client'
import { Avatar, TableCell, TableRow, useTheme } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

type Props = {
  user: User
}

const TeamTableRow: FC<Props> = ({ user }) => {
  const userName = `${user.firstName} ${user.lastName}`
  const initials = `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`
  const theme = useTheme()

  return (
    <TableRow>
      <TableCell>
        {user.avatar ? (
          <Avatar alt={userName} src={user.avatar} />
        ) : (
          <Avatar
            sx={{
              bgcolor: theme.palette.primary.main,
            }}
          >
            {initials}
          </Avatar>
        )}
      </TableCell>
      <TableCell>{userName}</TableCell>
    </TableRow>
  )
}
export default TeamTableRow
