import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/contracts/new-contract')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/contracts/new-contract"!</div>
}
