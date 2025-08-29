import { BarChart3, Shield, Briefcase, Brain, Zap, Target, TrendingUp } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Brain,
      title: 'Helios Alpha Fund',
      description: 'Primary quantitative strategy utilizing the complete HAMS framework.',
      features: ['$250K minimum investment', '35-45% annual target', '6-month lock-up period']
    },
    {
      icon: Shield,
      title: 'Market Neutral Strategy',
      description: 'Statistical arbitrage and relative value focused on capital preservation.',
      features: ['15-20% annual target', '3% maximum drawdown', 'Perfect for family offices']
    },
    {
      icon: TrendingUp,
      title: 'Quantitative Momentum Portfolio',
      description: 'High-conviction signals with up to 3x leverage during optimal conditions.',
      features: ['60-80% annual target', '15-20% volatility', 'Sophisticated investors']
    },
    {
      icon: Zap,
      title: 'Technology Infrastructure',
      description: 'High-performance computing stack with institutional-grade reliability.',
      features: ['Sub-5ms execution', '99.97% uptime', 'Colocation access']
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            Advanced Quantitative Models
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our Helios system implements cutting-edge quantitative finance methodologies including 
            VPIN analysis, Kyle's Lambda modeling, and Hidden Markov regime detection. 
            We don't use retail indicators - only pure mathematical models and statistical inference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        <div className="bg-navy-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
              Proprietary Quantitative Models
            </h3>
            <p className="text-navy-200 text-lg max-w-3xl mx-auto">
              Market maker inventory risk modeling, liquidity provision alpha, and statistical 
              arbitrage framework using Ornstein-Uhlenbeck processes and cointegration testing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-gold-400" />
              </div>
              <h4 className="font-serif text-lg font-bold mb-2">VPIN Analysis</h4>
              <p className="text-navy-200 text-sm">Real-time toxic flow identification through volume-bucketed analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-gold-400" />
              </div>
              <h4 className="font-serif text-lg font-bold mb-2">Kyle's Lambda Modeling</h4>
              <p className="text-navy-200 text-sm">Dynamic price discovery efficiency with 47% slippage reduction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-gold-400" />
              </div>
              <h4 className="font-serif text-lg font-bold mb-2">Hidden Markov Models</h4>
              <p className="text-navy-200 text-sm">Four-state regime detection with Baum-Welch parameter estimation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}