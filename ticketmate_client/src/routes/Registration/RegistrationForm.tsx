import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Registration/RegistrationForm')({
  component: () => <div>Hello /Registration/RegistrationForm!</div>
})