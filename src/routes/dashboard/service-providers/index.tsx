import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/service-providers/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/service-providers/"!</div>
}
