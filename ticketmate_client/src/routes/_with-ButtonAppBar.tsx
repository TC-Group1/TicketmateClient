import { createFileRoute, Outlet } from '@tanstack/react-router'
import { ButtonAppBar } from '../Shared/AppBar'

export const Route = createFileRoute('/_with-ButtonAppBar')({
  component: () => (
    <>
      <ButtonAppBar />
      <Outlet />
    </>
  ),
})
