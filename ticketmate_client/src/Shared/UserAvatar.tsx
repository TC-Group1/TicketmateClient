import { Avatar, useTheme } from '@mui/material'
import { FC } from 'react'

type Props = {
  firstName: string | null | undefined
  lastName: string | null | undefined
  avatar: string | null | undefined
}

const UserAvatar: FC<Props> = ({ firstName, lastName, avatar }) => {
  const theme = useTheme()

  const getUserName = (initials: boolean = false) => {
    return initials
      ? `${firstName?.charAt(0)}${lastName?.charAt(0)}`
      : `${firstName} ${lastName}`
  }

  return avatar ? (
    <Avatar
      sx={{ bgcolor: theme.palette.primary.main }}
      alt={getUserName()}
      src={avatar}
    >
      {}
    </Avatar>
  ) : (
    <Avatar sx={{ bgcolor: theme.palette.primary.main }} alt={getUserName()}>
      {getUserName(true)}
    </Avatar>
  )
}
export default UserAvatar
