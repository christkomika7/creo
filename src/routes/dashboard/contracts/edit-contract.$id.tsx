import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/contracts/edit-contract/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/contracts/edit-contract/$id"!</div>
}
