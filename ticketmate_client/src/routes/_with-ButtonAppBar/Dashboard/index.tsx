import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../../components/Dashboard'


export const Route = createFileRoute('/_with-ButtonAppBar/Dashboard/')({
  component: () => <Dashboard />,
})
