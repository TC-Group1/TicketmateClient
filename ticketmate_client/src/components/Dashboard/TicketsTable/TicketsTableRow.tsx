import { FC, useState } from 'react'
import { Ticket } from '../../../types'
import {
  AvatarGroup,
  MenuItem,
  Select,
  SelectChangeEvent,
  TableCell,
  TableRow,
} from '@mui/material'
import { User } from '../../../client'
import UserAvatar from '../../../Shared/UserAvatar'

type Props = {
  ticket: Ticket
  users: User[]
}

const TicketsTableRow: FC<Props> = ({ ticket, users }) => {
  const priorityString =
    ticket.priorityId === 1
      ? 'High'
      : ticket.priorityId === 2
        ? 'Medium'
        : 'Low'

  const [status, setStatus] = useState<number>(ticket.statusId)

  const getUserNameByGuid = (userGuid: string) => {
    const user = users.find((user) => user.guid === userGuid)
    return `${user?.firstName} ${user?.lastName}`
  }
  const getTimeString = (timeStamp: string) => {
    const date = new Date(parseInt(timeStamp))
    return date.toLocaleDateString()
  }

  const handleStatusChange = (event: SelectChangeEvent) =>
    setStatus(parseInt(event.target.value))

  return (
    <TableRow>
      {/* TODO:  Add functionality to open ticket view when the title is clicked*/}
      <TableCell>{ticket.title}</TableCell>
      <TableCell>
        <AvatarGroup max={4}>
          {ticket.assignedTo.map((userGuid) => {
            const { firstName, lastName, avatar }: User = users.find(
              (user) => user.guid === userGuid
            )!

            return <UserAvatar {...{ firstName, lastName, avatar }} />
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
      <TableCell>{getUserNameByGuid(ticket.createdByUserGuid)}</TableCell>
      <TableCell>
        {ticket.modifiedOn.length > 0
          ? getTimeString(ticket.modifiedOn)
          : 'N/A'}
      </TableCell>
    </TableRow>
  )
}
export default TicketsTableRow
