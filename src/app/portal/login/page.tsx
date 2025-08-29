import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/lib/auth'
import { LoginForm } from '@/components/LoginForm'

export default async function LoginPage() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/portal')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-white flex items-center justify-center section-padding">
      <div className="max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  )
}