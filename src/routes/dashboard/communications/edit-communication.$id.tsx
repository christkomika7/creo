import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/communications/edit-communication/$id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/communications/edit-communication/$id"!</div>
}
