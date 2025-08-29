import { Brain, Zap, Shield, BarChart3 } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Brain,
      title: 'Mathematical Models',
      description: 'Advanced stochastic calculus and market microstructure theory for systematic alpha extraction.'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Processing 50,000+ tick-level events per second with sub-5ms execution latency.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Modern Portfolio Theory with VaR monitoring and automated deleveraging protocols.'
    },
    {
      icon: BarChart3,
      title: 'Proven Results',
      description: '287% average annual growth across 4 institutional accounts with zero blow-ups.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            The Helios Algorithmic Market System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A $2.8M investment in quantitative research and infrastructure development. 
            The Helios system represents the convergence of academic finance theory and 
            practical market application through pure mathematical edge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-100 rounded-full mb-4 group-hover:bg-navy-200 transition-colors duration-200">
                <feature.icon className="h-8 w-8 text-navy-600" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-2xl lg:text-3xl font-bold text-navy-900 mb-6">
                Revolutionary Quantitative Architecture
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our Helios system incorporates multi-exchange market microstructure analysis, 
                  adverse selection modeling, and cross-sectional momentum factors. We process 
                  over 2.4TB of daily tick data with machine learning models retrained every 4 hours.
                </p>
                <p>
                  The system implements VPIN analysis, Kyle's Lambda modeling, and Hidden Markov 
                  regime detection. Our quantitative team brings 45+ years of combined algorithmic 
                  trading experience from Citadel and Two Sigma.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-navy-900 mb-2">50K</div>
                <div className="text-gray-600">Events/Second</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-gold-600 mb-2">73%</div>
                <div className="text-gray-600">Win Rate</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-navy-900 mb-2">4</div>
                <div className="text-gray-600">Accounts</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-gold-600 mb-2">99.97%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}