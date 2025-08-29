import { useState } from 'react'

export function Performance() {
  const [selectedPeriod, setSelectedPeriod] = useState('5Y')

  const periods = ['1Y', '3Y', '5Y', '10Y']
  
  const performanceData = {
    '1Y': { return: '8.2%', benchmark: '5.1%', volatility: '12.3%' },
    '3Y': { return: '11.7%', benchmark: '7.8%', volatility: '14.1%' },
    '5Y': { return: '12.4%', benchmark: '8.9%', volatility: '13.8%' },
    '10Y': { return: '10.9%', benchmark: '7.2%', volatility: '15.2%' }
  }

  const currentData = performanceData[selectedPeriod as keyof typeof performanceData]

  return (
    <section id="performance" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            Performance Track Record
          </h2>
          <p className="text-xl text-navy-200 max-w-3xl mx-auto">
            Consistent outperformance across market cycles with disciplined risk management 
            and institutional-grade investment processes.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                    selectedPeriod === period
                      ? 'bg-navy-600 text-white'
                      : 'text-gray-600 hover:text-navy-600'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-green-600 mb-2">
                {currentData.return}
              </div>
              <div className="text-gray-600 font-medium">Annual Return</div>
              <div className="text-sm text-gray-500">Net of fees</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-navy-900 mb-2">
                {currentData.benchmark}
              </div>
              <div className="text-gray-600 font-medium">Benchmark</div>
              <div className="text-sm text-gray-500">S&P 500 Index</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-gold-600 mb-2">
                {currentData.volatility}
              </div>
              <div className="text-gray-600 font-medium">Volatility</div>
              <div className="text-sm text-gray-500">Standard deviation</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h4 className="font-serif text-lg font-bold text-navy-900 mb-4">
              Risk-Adjusted Performance Metrics
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">1.24</div>
                <div className="text-gray-600">Sharpe Ratio</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">0.89</div>
                <div className="text-gray-600">Beta</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">-8.2%</div>
                <div className="text-gray-600">Max Drawdown</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}