import ActionHeader from '@/components/header/action-header'
import DataTable from '@/components/table/data-table'
import { columns, data } from '@/lib/tables/owner/owners'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/owners/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='space-y-6'>
    <ActionHeader title='Nouveau propriétaire' url='/dashboard/owners/new-owner' type='url' />
    <DataTable data={data} columns={columns} filters={["reference", "company", "name", "email"]} />
  </div>
}
