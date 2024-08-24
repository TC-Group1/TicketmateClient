import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-ButtonAppBar/Dashboard/UsersTable')({
  component: () => <div>Hello /Dashboard/UsersTable!</div>
})