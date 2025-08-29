'use client'

import { useState } from 'react'
import { TrendingUp, Eye, EyeOff, Shield } from 'lucide-react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simple demo authentication
    if (email === 'investor@heliosquant.com' && password === 'HeliosDemo2025') {
      // Simulate loading
      setTimeout(() => {
        window.location.href = '/portal/dashboard'
      }, 1000)
    } else {
      setError('Invalid credentials. Please use demo account.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-700 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="font-serif text-2xl font-bold text-navy-900 mb-2">
              Helios Investor Portal
            </h1>
            <p className="text-gray-600">
              Secure access to your quantitative investment dashboard and live trading system performance
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent pr-12 transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-navy-600 to-navy-700 hover:from-navy-700 hover:to-navy-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {isLoading ? 'Accessing Portal...' : 'Access Investor Portal'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-navy-50 to-gold-50 rounded-lg p-6 border border-navy-200">
              <div className="flex items-center justify-center mb-3">
                <Shield className="h-5 w-5 text-navy-600 mr-2" />
                <p className="text-sm font-semibold text-navy-900">Demo Access Credentials</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-navy-700 font-mono bg-white px-3 py-2 rounded border">
                  investor@heliosquant.com
                </p>
                <p className="text-sm text-navy-700 font-mono bg-white px-3 py-2 rounded border">
                  HeliosDemo2025
                </p>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                * Institutional and qualified investors only
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}