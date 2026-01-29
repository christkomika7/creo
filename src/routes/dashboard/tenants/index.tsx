import ActionHeader from '@/components/header/action-header'
import DataTable from '@/components/table/data-table'
import { columns, data } from '@/lib/tables/tenant/tenants'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/tenants/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='space-y-6'>
    <ActionHeader title='Ajouter locataire' url='/dashboard/tenants/new-tenant' type='url' />
    <DataTable data={data} columns={columns} filters={["name", "company"]} />
  </div>
}
