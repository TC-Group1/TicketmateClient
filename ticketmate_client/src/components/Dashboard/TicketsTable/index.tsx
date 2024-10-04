import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { FC } from 'react'
import { Ticket } from '../../../types'
import TicketsTableRow from './TicketsTableRow'
import { User } from '../../../client'

type Props = {
  tickets: Ticket[]
  users: User[]
}

const TicketsTable: FC<Props> = ({ tickets, users }) => {


  return (
    <TableContainer component={Box}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Feature</TableCell>
            <TableCell>Assigned To</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>Date Created</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Created by</TableCell>
            <TableCell>Modified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket) => (
            <TicketsTableRow
              {...{ticket, users}}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default TicketsTable
