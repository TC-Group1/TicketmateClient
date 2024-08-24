import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Login/LoginPage')({
  component: () => <div>Hello /Login/LoginPage!</div>
})