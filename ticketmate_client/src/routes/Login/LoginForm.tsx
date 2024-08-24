import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Login/LoginForm')({
  component: () => <div>Hello /Login/LoginForm!</div>
})