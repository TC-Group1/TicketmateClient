import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import Data from '../../mockProjectData.json'
import { Project } from '../../types'
import TeamTable from './TeamTable'
import TicketsTable from './TicketsTable'

const index = () => {
  const projects: Project[] = Data.projects
  const [currentProjectId, setCurrentProjectId] = useState<string>(
    projects[0].guid
  )
  const [currentProject, setCurrentProject] = useState<Project>(projects[0])

  const handleProjectSelectChange = (event: SelectChangeEvent) =>
    setCurrentProjectId(event.target.value)

  useEffect(() => {
    setCurrentProject(
      projects.find(({ guid }) => guid === currentProjectId) || projects[0]
    )
  }, [currentProjectId])

  return (
    <Box
      sx={{
        flex: 1,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Typography variant="h6">Dashboard</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <FormControl>
          <InputLabel id="project-select-label">Project</InputLabel>
          <Select
            labelId="project-select-label"
            id="project-select"
            value={currentProjectId}
            label="project"
            onChange={handleProjectSelectChange}
          >
            {projects &&
              projects.map(({ guid, name }) => (
                <MenuItem key={guid} value={guid}>
                  {name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        {/* TODO: add functionality to "new project" button */}
        <Button color="primary" variant="contained">
          New Project
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexGrow: 1, gap: '1rem' }}>
        {/* 🡣🡣 Left side Box 🡣🡣 */}
        <Box
          sx={{
            flexGrow: 4,
            borderRight: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingRight: '1rem',
            }}
          >
            {/* TODO: add functionality to "new sprint" button */}
            <Button variant="outlined">New Sprint</Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <TicketsTable
              {...{
                tickets: currentProject.tickets,
                users: currentProject.users,
              }}
            />
          </Box>
        </Box>
        {/* 🡣🡣 right side Box 🡣🡣 */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6">Team</Typography>
          <TeamTable users={currentProject.users} />
        </Box>
      </Box>
    </Box>
  )
}

export default index
