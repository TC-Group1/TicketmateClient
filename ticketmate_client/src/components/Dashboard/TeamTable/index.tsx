import { Box, Table, TableBody, TableContainer } from '@mui/material'
import { User } from '../../../client'
import { FC } from 'react'
import TeamTableRow from './TeamTableRow'

type Props = {
  users: User[]
}

const TeamTable: FC<Props> = ({ users }) => {
  return (
    <TableContainer component={Box}>
      <Table size="small">
        <TableBody>
          {users.map((user) => (
            <TeamTableRow {...{ user }} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default TeamTable
