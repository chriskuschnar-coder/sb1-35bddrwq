import { Award, Globe, Users, Target, Zap, Shield, BarChart3, Brain } from 'lucide-react'

export function About() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: '6 neural networks analyzing market microstructure with 2M+ historical trade patterns.'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Processing 50,000+ trades per second with sub-5ms execution latency.'
    },
    {
      icon: Shield,
      title: 'Institutional Security',
      description: 'SOC 2 Type II compliant with $100M insurance coverage and cold storage.'
    },
    {
      icon: BarChart3,
      title: 'Proven Performance',
      description: '287% average annual growth across 12 institutional accounts with zero blow-ups.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-navy-900 mb-4">
            The Nautilus Intelligent Trading System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A $12M+ investment in research and development, the Nautilus system represents 
            the convergence of traditional quantitative finance and cutting-edge blockchain 
            markets. Our technology doesn't just follow the market - it anticipates it.
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
                Revolutionary Technology Stack
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our Nautilus system incorporates real-time multi-exchange data aggregation, 
                  institutional order flow analysis, and smart money detection algorithms. 
                  We process over 2.4TB of daily market data with machine learning models 
                  retrained every 4 hours.
                </p>
                <p>
                  The system implements complete 2025 ICT methodology including order block 
                  detection, liquidity sweep analysis, and Fair Value Gap trading. Our 
                  quantitative team of 8 PhD researchers brings 120+ years of combined 
                  algorithmic trading experience from Goldman Sachs, Citadel, and Two Sigma.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-navy-900 mb-2">50K</div>
                <div className="text-gray-600">Trades/Second</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-gold-600 mb-2">73%</div>
                <div className="text-gray-600">Win Rate</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-navy-900 mb-2">12</div>
                <div className="text-gray-600">Accounts</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="font-serif text-3xl font-bold text-gold-600 mb-2">99.97%</div>
                <div class="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}