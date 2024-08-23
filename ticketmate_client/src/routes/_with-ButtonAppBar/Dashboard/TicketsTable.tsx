import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-ButtonAppBar/Dashboard/TicketsTable')({
  component: () => <div>Hello /Dashboard/TicketsTable!</div>
})