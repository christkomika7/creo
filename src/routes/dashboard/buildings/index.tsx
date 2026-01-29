import ActionHeader from '@/components/header/action-header'
import DataTable from '@/components/table/data-table'
import { columns, data } from '@/lib/tables/building/buildings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/buildings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='space-y-6'>
    <div className='space-y-6'>
      <ActionHeader title='Nouveau bâtiments' url='/dashboard/buildings/new-building' type='url' />
      <DataTable data={data} columns={columns} filters={["reference", "name", "owner"]} placeholder='Rechercher un bâtiment' />
    </div>
  </div>
}
