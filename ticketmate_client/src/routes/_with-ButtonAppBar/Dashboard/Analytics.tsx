import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_with-ButtonAppBar/Dashboard/Analytics')({
  component: () => <div>Hello /Dashboard/Analytics!</div>
})