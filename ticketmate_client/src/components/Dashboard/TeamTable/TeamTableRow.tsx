import { FC } from 'react'
import { User } from '../../../client'
import { TableCell, TableRow } from '@mui/material'
import UserAvatar from '../../../Shared/UserAvatar'

type Props = {
  user: User
}

const TeamTableRow: FC<Props> = ({ user }) => {
  const { firstName, lastName, avatar } = user

  return (
    <TableRow>
      <TableCell>
        <UserAvatar {...{ firstName, lastName, avatar }} />
      </TableCell>
      <TableCell>{`${firstName} ${lastName}`}</TableCell>
    </TableRow>
  )
}
export default TeamTableRow
