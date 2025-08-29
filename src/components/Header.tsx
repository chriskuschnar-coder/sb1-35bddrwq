import { useState } from 'react'
import { Menu, X, TrendingUp } from 'lucide-react'

interface HeaderProps {
  onNavigate: (page: string) => void
}

export function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Performance', href: '#performance' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-navy-600" />
            <span className="font-serif text-xl font-bold text-navy-900">
              Helios Quantitative
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-navy-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => onNavigate('portal')}
              className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Investor Portal
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-navy-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 font-medium text-gray-700 hover:text-navy-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onNavigate('portal')
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-3 py-2 text-navy-600 bg-navy-50 rounded-lg font-medium"
              >
                Investor Portal
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}