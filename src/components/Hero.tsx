import { ArrowRight, Shield, TrendingUp, Users, Zap, BarChart3 } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-navy-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-navy-900 leading-tight mb-6">
              The Nautilus
              <span className="text-gold-600"> Trading System</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Global Market Consulting has developed the most sophisticated institutional-grade 
              trading system in the digital asset space. Our proprietary Nautilus Intelligent 
              Trading System combines cutting-edge machine learning with real-time market 
              microstructure analysis to deliver consistent alpha generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="/portal" className="bg-navy-600 hover:bg-navy-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center">
                Investor Portal Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#about" className="bg-white hover:bg-gray-50 text-navy-600 border border-navy-200 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center">
                View Technology
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-navy-600" />
                </div>
                <div className="font-serif text-2xl font-bold text-navy-900">$847M</div>
                <div className="text-sm text-gray-600">Assets Under Management</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-gold-600" />
                </div>
                <div className="font-serif text-2xl font-bold text-navy-900">18.7%</div>
                <div className="text-sm text-gray-600">Average Monthly Return</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <BarChart3 className="h-8 w-8 text-navy-600" />
                </div>
                <div className="font-serif text-2xl font-bold text-navy-900">2.84</div>
                <div className="text-sm text-gray-600">Sharpe Ratio</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-navy-900">Nautilus Performance</h3>
                  <span className="text-green-600 font-semibold">+287% Annual</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Multi-Exchange Data</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-navy-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-sm font-medium">50K/sec</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Win Rate</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-gold-600 h-2 rounded-full" style={{ width: '73%' }}></div>
                      </div>
                      <span className="text-sm font-medium">73%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Max Drawdown</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '4.2%' }}></div>
                      </div>
                      <span className="text-sm font-medium">4.2%</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Zap className="h-4 w-4 text-gold-600" />
                    <span>$12M+ Technology Investment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}