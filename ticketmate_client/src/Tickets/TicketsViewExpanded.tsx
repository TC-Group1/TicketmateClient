import { getRouteApi, useRouter } from '@tanstack/react-router'
import { Ticket } from '../types'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from '@mui/material'
import PriorityBox from './PriorityBox'
import SideInfo from './SideInfo'
import Data from '../mockProjectData.json'
import { User } from '../client'
import getDateString from '../utils/getDateString'

const TicketsViewExpanded = () => {
  const { guid } = getRouteApi('/ticket').useSearch()
  const { history } = useRouter()

  const getTicket = () => {
    let ticket: Ticket | null = null

    Data.projects.forEach((project) => {
      const found = project.tickets.find((element) => element.guid === guid)
      found && (ticket = found)
    })
    // TODO: maybe throw an error if ticket is null?
    return ticket!
  }

  const getUserName = (userGuid: string) => {
    let user: User | null = null

    Data.projects.forEach((project) => {
      const found = project.users.find((element) => element.guid === userGuid)
      found && (user = found)
    })

    return `${user!.firstName} ${user!.lastName}`
  }

  const getUserListString = (userGuidArray: string[]) => {
    let result: string = ''
    userGuidArray.forEach((userGuid, i) => {
      result += getUserName(userGuid)
      userGuidArray.length !== i + 1 && (result += ', ')
    })
    return result
  }

  const {
    createdByUserGuid,
    description,
    priorityId,
    title,
    createdOn,
    modifiedOn,
    assignedTo,
  } = getTicket()

  return (
    <Container
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card sx={{ width: '90%', maxWidth: '900px' }}>
        <CardHeader
          title={title}
          action={<PriorityBox {...{ priorityId }} />}
        ></CardHeader>
        <CardContent
          sx={{
            display: 'flex',
            padding: '1rem',
          }}
        >
          {/* start left side */}
          <Box
            sx={{
              flex: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem',
              borderRight: '1px solid',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '1rem',
              }}
            ></Box>
            <Typography variant="h6">Description:</Typography>
            <Typography>{description}</Typography>
          </Box>
          {/* start right side */}

          <Box
            sx={{
              flex: 1,
              flexDirection: 'column',
              gap: '1rem',
              padding: '1rem',
            }}
          >
            <SideInfo>
              <Typography variant="h6">Assigned to:</Typography>
              <Typography>{getUserListString(assignedTo)}</Typography>
            </SideInfo>
            <SideInfo>
              <Typography variant="h6">Created:</Typography>
              <Typography>{getDateString(createdOn)}</Typography>
            </SideInfo>
            <SideInfo>
              <Typography variant="h6">Modified:</Typography>
              <Typography>{getDateString(modifiedOn)}</Typography>
            </SideInfo>
            <SideInfo>
              <Typography variant="h6">Created by:</Typography>
              <Typography>{getUserName(createdByUserGuid)}</Typography>
            </SideInfo>
          </Box>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* TODO: add functionality to buttons, is Cancel button necessary */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => history.back()}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Container>
  )
}
export default TicketsViewExpanded
