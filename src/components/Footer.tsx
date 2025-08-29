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
              Premier institutional investment management firm delivering exceptional 
              risk-adjusted returns through disciplined global market strategies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-navy-200">
                <Phone className="h-4 w-4" />
                <span>+1 (212) 555-0123</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <Mail className="h-4 w-4" />
                <span>info@globalmarketconsulting.com</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <MapPin className="h-4 w-4" />
                <span>200 Park Avenue, New York, NY 10166</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-navy-200">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Equity Strategies</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Fixed Income</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Alternative Investments</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Risk Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-navy-200">
              <li><a href="/portal" className="hover:text-gold-400 transition-colors">Investor Portal</a></li>
              <li><a href="#performance" className="hover:text-gold-400 transition-colors">Performance</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Contact</a></li>
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
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Risk Disclosures</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}