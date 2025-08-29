import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

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
            Investor Relations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with our investor relations team to discuss Limited Partnership 
            opportunities and learn about our accredited investor requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy-900 mb-6">
              Investor Relations Office
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">Phone</div>
                  <div className="text-gray-600">+1 (561) 555-0147</div>
                  <div className="text-sm text-gray-500">Monday - Friday, 9:00 AM - 5:00 PM EST</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">Email</div>
                  <div className="text-gray-600">investors@globalmarketconsulting.com</div>
                  <div className="text-sm text-gray-500">Accredited investor inquiries only</div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-navy-600" />
                </div>
                <div>
                  <div className="font-medium text-navy-900">Office</div>
                  <div className="text-gray-600">
                    515 N Flagler Drive, Suite 1200<br />
                    West Palm Beach, FL 33401
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-6">
              Accredited Investor Inquiry
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
                  Institution/Family Office
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
                  Investment Interest & Qualifications
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your investment objectives and confirm accredited investor status..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                Submit Inquiry
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
            <div className="mt-4 text-xs text-gray-500 text-center">
              * Limited to accredited investors only. Minimum investment $1M.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}