import { LoginForm } from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-white flex items-center justify-center section-padding">
      <div className="max-w-md w-full">
        <LoginForm />
      </div>
    </div>
  )
}