import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Join the Future of Institutional Trading
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global Market Consulting's Nautilus system represents the convergence of traditional 
            quantitative finance and cutting-edge blockchain markets. Schedule a demonstration 
            of our live trading system and meet with our quantitative team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">
              Institutional Sales Team
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">Direct Line</div>
                  <div className="text-gray-600">+1 (212) 555-0150</div>
                  <div className="text-sm text-gray-500">Institutional sales team</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">Institutional Email</div>
                  <div className="text-gray-600">institutional@globalmarketconsulting.com</div>
                  <div className="text-sm text-gray-500">Qualified investors only</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">Schedule Demo</div>
                  <div className="text-gray-600">calendly.com/gmc-institutional</div>
                  <div className="text-sm text-gray-500">Live system demonstration</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">New York Office</div>
                  <div className="text-gray-600">
                    200 West Street, Suite 2100<br />
                    New York, NY 10282
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-navy-50 rounded-xl p-6">
              <h4 className="font-serif text-lg font-bold text-navy-900 mb-4">
                For Qualified Investors
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3"></div>
                  Schedule a demonstration of our live trading system
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3"></div>
                  Review detailed backtesting spanning 5 years
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3"></div>
                  Access sample monthly performance reports
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-gold-600 rounded-full mr-3"></div>
                  Meet with our quantitative development team
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-6">
              Institutional Inquiry Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Institution/Fund Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Investment Interest & AUM
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your investment objectives, AUM, and qualified investor status..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                Request Institutional Demo
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
            <div className="mt-4 text-xs text-gray-500 text-center">
              * Qualified institutional and accredited investors only. Minimum investment $1M.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}