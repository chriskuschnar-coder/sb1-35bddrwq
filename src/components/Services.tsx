import { BarChart3, Shield, Briefcase, PieChart } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Equity Strategies',
      description: 'Long/short equity positions across global markets with sector-neutral approaches.',
      features: ['Global market access', 'Sector diversification', 'Risk-adjusted returns']
    },
    {
      icon: PieChart,
      title: 'Fixed Income',
      description: 'Government and corporate bond strategies with duration and credit risk management.',
      features: ['Yield optimization', 'Credit analysis', 'Duration hedging']
    },
    {
      icon: Briefcase,
      title: 'Alternative Investments',
      description: 'Private equity, real estate, and commodity investments for portfolio diversification.',
      features: ['Private markets', 'Real estate', 'Commodities']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and hedging strategies to protect capital.',
      features: ['VaR modeling', 'Stress testing', 'Hedge strategies']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Investment Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive investment solutions tailored for institutional investors 
            and high-net-worth individuals seeking sophisticated market exposure.
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