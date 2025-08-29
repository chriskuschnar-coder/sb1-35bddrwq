import type { Metadata } from 'next'
import { Inter, Georgia } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const georgia = Georgia({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-georgia',
})

export const metadata: Metadata = {
  title: 'Global Market Consulting - Institutional Investment Management',
  description: 'Premier hedge fund specializing in global market opportunities with institutional-grade investment strategies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${georgia.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}