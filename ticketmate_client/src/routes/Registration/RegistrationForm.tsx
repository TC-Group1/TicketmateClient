import { createFileRoute } from '@tanstack/react-router'
import { RegistrationForm } from '../../Registration/RegistrationForm'

export const Route = createFileRoute('/Registration/RegistrationForm')({
  component: RegistrationForm,
})
