import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/dashboard/communications/new-communication',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/communications/new-communication"!</div>
}
