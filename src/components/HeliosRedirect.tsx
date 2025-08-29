'use client'

import { useEffect } from 'react'

export function HeliosRedirect() {
  useEffect(() => {
    // Open Helios dashboard in new tab
    window.open('/helios', '_blank')
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <div className="text-white text-lg font-medium">Opening Live Trading Dashboard...</div>
        <div className="text-gray-400 text-sm mt-2">Redirecting to Helios Capital Systems</div>
      </div>
    </div>
  )
}