import { FC, useState } from 'react'
import { Ticket } from '../../../types'
import {
  Avatar,
  AvatarGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  TableCell,
  TableRow,
  useTheme,
} from '@mui/material'
import { User } from '../../../client'

type Props = {
  ticket: Ticket
  users: User[]
}

const TicketsTableRow: FC<Props> = ({ ticket, users }) => {
  const theme = useTheme()

  const priorityString =
    ticket.priorityId === 1
      ? 'High'
      : ticket.priorityId === 2
        ? 'Medium'
        : 'Low'

  const [status, setStatus] = useState<number>(ticket.statusId)

  const getUserName = (userGuid: string, initials: boolean = false) => {
    const user = users.find((user) => user.guid === userGuid)
    return initials
      ? `${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`
      : `${user?.firstName} ${user?.lastName}`
  }
  // TODO: this isn't working right now
  const getTimeString = (timeStamp: string) => {
    const date = new Date(parseInt(timeStamp))
    return date.toLocaleDateString()
  }

  const handleStatusChange = (event: SelectChangeEvent) =>
    setStatus(parseInt(event.target.value))

  return (
    <TableRow>
      <TableCell>{ticket.title}</TableCell>
      <TableCell>
        <AvatarGroup max={4}>
          {ticket.assignedTo.map((userGuid) => {
            const currentUser: User = users.find(
              (user) => user.guid === userGuid
            )!

            return currentUser.avatar ? (
              <Avatar
                sx={{ bgcolor: theme.palette.primary.main }}
                alt={getUserName(currentUser.guid!)}
                src={currentUser.avatar}
              >
                {}
              </Avatar>
            ) : (
              <Avatar
                sx={{ bgcolor: theme.palette.primary.main }}
                alt={getUserName(currentUser.guid!)}
              >
                {getUserName(currentUser.guid!, true)}
              </Avatar>
            )
          })}
        </AvatarGroup>
      </TableCell>
      <TableCell>{priorityString}</TableCell>
      <TableCell>{getTimeString(ticket.createdOn)}</TableCell>
      <TableCell>
        <Select value={status.toString()} onChange={handleStatusChange}>
          <MenuItem value={1}>New</MenuItem>
          <MenuItem value={2}>In Progress</MenuItem>
          <MenuItem value={3}>Complete</MenuItem>
        </Select>
      </TableCell>
      <TableCell>{getUserName(ticket.createdByUserGuid)}</TableCell>
      <TableCell>
        {ticket.modifiedOn.length > 0
          ? getTimeString(ticket.modifiedOn)
          : 'N/A'}
      </TableCell>
    </TableRow>
  )
}
export default TicketsTableRow
