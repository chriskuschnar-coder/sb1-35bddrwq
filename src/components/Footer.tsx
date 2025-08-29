import { TrendingUp, Mail, Phone, MapPin, Calendar } from 'lucide-react'

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
              Institutional-grade algorithmic trading powered by the Nautilus Intelligent 
              Trading System. Delivering consistent alpha generation through advanced market 
              microstructure analysis and smart money concepts.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-navy-200">
                <Phone className="h-4 w-4" />
                <span>+1 (212) 555-0150</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <Mail className="h-4 w-4" />
                <span>institutional@globalmarketconsulting.com</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <MapPin className="h-4 w-4" />
                <span>200 West Street, Suite 2100, New York, NY 10282</span>
              </div>
              <div className="flex items-center space-x-2 text-navy-200">
                <Calendar className="h-4 w-4" />
                <span>calendly.com/gmc-institutional</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Technology</h3>
            <ul className="space-y-2 text-navy-200">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Nautilus System</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Smart Money Concepts</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Order Flow Analysis</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Risk Management</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Investors</h3>
            <ul className="space-y-2 text-navy-200">
              <li><a href="/portal" className="hover:text-gold-400 transition-colors">Investor Portal</a></li>
              <li><a href="#performance" className="hover:text-gold-400 transition-colors">Live Results</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">Technology Overview</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Schedule Demo</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-navy-300 text-sm mb-4 md:mb-0">
              © 2025 Global Market Consulting. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-navy-300">
              <a href="#" className="hover:text-gold-400 transition-colors">Risk Disclosures</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">SEC Compliance</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-navy-400 text-center">
            <p>
              <strong>Performance Disclaimer:</strong> Past performance is not indicative of future results. 
              Digital asset investments carry substantial risk including complete loss of capital. 
              Returns shown are net of all fees. Only suitable for qualified institutional and accredited investors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}