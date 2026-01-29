import Brochure from '@/components/dashboard/unit/brochure'
import ActionHeader from '@/components/header/action-header'
import DataTable from '@/components/table/data-table'
import { Button } from '@/components/ui/button'
import { columns, data } from '@/lib/tables/unit/units'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/units/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='space-y-6'>
    <div className='space-y-6'>
      <ActionHeader title='Nouveau unités' url='/dashboard/units/new-unit' type='url' secondComponnet={<Brochure />} />
      <DataTable data={data} columns={columns} filters={["reference", "building", "owner", "tenant"]} placeholder='Rechercher' />
      <div className='flex justify-center'>
        <Button variant="inset-action" className='max-w-md'>Envoyer un mail</Button>
      </div>
    </div>
  </div>
}
