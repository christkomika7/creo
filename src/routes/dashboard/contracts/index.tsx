import ActionHeader from '@/components/header/action-header'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/contracts/')({
  component: RouteComponent,
})

function RouteComponent() {
  <div className='space-y-6'>
    <ActionHeader type="modal" component={<></>} />
    {/* <InvoiceCards />
    <InvoiceDataTable /> */}
  </div>
}
