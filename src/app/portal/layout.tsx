import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { AuthProvider } from '@/components/AuthProvider'

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <AuthProvider session={session}>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </AuthProvider>
  )
}