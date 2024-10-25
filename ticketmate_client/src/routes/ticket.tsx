import { createFileRoute } from '@tanstack/react-router'
import TicketsViewExpanded from '../Tickets/TicketsViewExpanded'

export const Route = createFileRoute('/ticket')({
  component: () => <TicketsViewExpanded />,
})
