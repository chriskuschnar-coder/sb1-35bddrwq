import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { DashboardSelector } from '@/components/DashboardSelector'

export default async function PortalPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/portal/login')
  }

  return <DashboardSelector />
}