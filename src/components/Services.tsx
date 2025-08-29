import { BarChart3, Shield, Briefcase, PieChart } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Long/Short Equity',
      description: 'Systematic long/short equity strategies across developed and emerging markets.',
      features: ['Market neutral approach', 'Sector diversification', 'Alpha generation']
    },
    {
      icon: PieChart,
      title: 'Global Macro',
      description: 'Directional strategies based on macroeconomic trends and policy shifts.',
      features: ['Currency strategies', 'Interest rate trades', 'Commodity exposure']
    },
    {
      icon: Briefcase,
      title: 'Event Driven',
      description: 'Merger arbitrage, distressed securities, and special situations investing.',
      features: ['M&A arbitrage', 'Distressed debt', 'Special situations']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Institutional-grade risk controls and portfolio hedging strategies.',
      features: ['VaR monitoring', 'Stress testing', 'Dynamic hedging']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Investment Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            High-level description of strategy focus combining global macro, equities, and 
            alternatives. We stress disciplined risk management, global perspective, and 
            consistent methodology for long-term wealth creation through prudent investing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 group hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center group-hover:bg-navy-200 transition-colors duration-200">
                  <service.icon className="h-6 w-6 text-navy-600" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gold-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}