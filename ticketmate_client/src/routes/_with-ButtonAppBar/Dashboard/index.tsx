import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-ButtonAppBar/Dashboard/')({
  component: () => <div>Hello /Dashboard/!</div>
})