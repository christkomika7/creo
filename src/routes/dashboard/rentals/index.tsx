import RentalCards from '@/components/dashboard/rental/rental-cards'
import ActionHeader from '@/components/header/action-header'
import DataTable from '@/components/table/data-table'
import { columns, data } from '@/lib/tables/rental/rentals'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/rentals/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='space-y-6'>
    <ActionHeader title='Ongoing rental' url='/dashboard/rentals/new-rental' type='url' />
    <RentalCards />
    <DataTable data={data} columns={columns} filters={["name", "company"]} />
  </div>
}
