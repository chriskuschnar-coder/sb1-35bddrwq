import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-gold-600" />
              <span className="font-serif text-xl font-bold">
                Global Market Consulting
              </span>
            </div>
            <p className="text-navy-200 mb-6 max-w-md">
              Hedge fund management firm committed to delivering consistent, risk-adjusted 
              returns through disciplined investment strategies and advanced risk management 
              across global markets.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-navy-200">
                <Phone className="h-4 w-4" />
                <span>+1 (561) 555-0100</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <Mail className="h-4 w-4" />
                <span>investors@globalmarketconsulting.com</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <MapPin className="h-4 w-4" />
                <span>515 N Flagler Drive, West Palm Beach, FL 33401</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-navy-200">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Long/Short Equity</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Global Macro</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Event Driven</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Risk Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Limited Partners</h3>
            <ul className="space-y-2 text-navy-200">
              <li><a href="/portal" className="hover:text-gold-400 transition-colors">Investor Portal</a></li>
              <li><a href="#performance" className="hover:text-gold-400 transition-colors">Performance</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Fund Structure</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Investor Relations</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-navy-300 text-sm mb-4 md:mb-0">
              © 2025 Global Market Consulting. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-navy-300">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">LP Agreement</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Risk Disclosures</a>
              <a href="#" className="hover:text-gold-400 transition-colors">SEC Filings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}