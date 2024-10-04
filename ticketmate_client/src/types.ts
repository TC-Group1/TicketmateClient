// These types [Sprint, Ticket, Project] are here for using the mock data. They may not be necessary or useful when using the backend database

import { User } from "./client"

export type Sprint = {
  guid: string
  name: string
  startDate: string
  endDate: string
}

export type Ticket = {
  createdByUserGuid: string
  description: string
  guid: string
  priorityId: number
  projectGuid: string
  statusId: number
  title: string
  sprintGuid: string | null
  createdOn: string
  modifiedOn: string
  assignedTo: string[]
}

export type Project = {
  name: string
  guid: string
  users: User[]
  sprints: Sprint[]
  tickets: Ticket[]
}
