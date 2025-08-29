import { useState } from 'react'

export function Performance() {
  const [selectedPeriod, setSelectedPeriod] = useState('5Y')

  const periods = ['1Y', '3Y', '5Y', '10Y']
  
  const performanceData = {
    '1Y': { return: '11.8%', benchmark: '5.1%', volatility: '8.9%' },
    '3Y': { return: '13.2%', benchmark: '7.8%', volatility: '9.4%' },
    '5Y': { return: '14.7%', benchmark: '8.9%', volatility: '10.1%' },
    '10Y': { return: '12.9%', benchmark: '7.2%', volatility: '11.3%' }
  }

  const currentData = performanceData[selectedPeriod as keyof typeof performanceData]

  return (
    <section id="performance" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            Limited Partnership Performance
          </h2>
          <p className="text-xl text-navy-200 max-w-3xl mx-auto">
            Delivering consistent absolute returns for Limited Partners through disciplined 
            multi-strategy approach with institutional-grade risk controls since 2008.
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
              <div className="text-gray-600 font-medium">Net Annual Return</div>
              <div className="text-sm text-gray-500">Net of fees</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-navy-900 mb-2">
                {currentData.benchmark}
              </div>
              <div className="text-gray-600 font-medium">Benchmark</div>
              <div className="text-sm text-gray-500">HFRI Fund Weighted</div>
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
                <div className="text-2xl font-bold text-navy-900 mb-1">1.67</div>
                <div className="text-gray-600">Sharpe Ratio</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">0.23</div>
                <div className="text-gray-600">Market Beta</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-navy-900 mb-1">-4.1%</div>
                <div className="text-gray-600">Max Drawdown</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}