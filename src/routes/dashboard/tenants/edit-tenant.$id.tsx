import EditTenant from '@/components/forms/tenants/edit'
import ActionHeader from '@/components/header/action-header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/tenants/edit-tenant/$id')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div className='space-y-6'>
        <ActionHeader />
        <EditTenant />
    </div>
}
