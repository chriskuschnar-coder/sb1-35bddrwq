import { useState } from 'react'

export function Performance() {
  const [selectedPeriod, setSelectedPeriod] = useState('2024')

  const periods = ['2024', '2023', '2022', 'Inception']
  
  const performanceData = {
    '2024': { return: '18.7%', sharpe: '2.84', drawdown: '4.2%', trades: '8,400+' },
    '2023': { return: '24.3%', sharpe: '2.91', drawdown: '3.8%', trades: '12,200+' },
    '2022': { return: '31.2%', sharpe: '3.12', drawdown: '2.9%', trades: '9,800+' },
    'Inception': { return: '287%', sharpe: '2.95', drawdown: '4.2%', trades: '30,400+' }
  }

  const currentData = performanceData[selectedPeriod as keyof typeof performanceData]

  return (
    <section id="performance" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white mb-4">
            Live Trading Results
          </h2>
          <p className="text-xl text-navy-200 max-w-3xl mx-auto">
            Proven performance across 4 institutional accounts with $2.7M AUM. 
            Our Helios system has achieved consistent profitability with zero account 
            blow-ups in 24 months of operation.
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

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-green-600 mb-2">
                {currentData.return}
              </div>
              <div className="text-gray-600 font-medium">Average Monthly Return</div>
              <div className="text-sm text-gray-500">Non-compounded</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-navy-900 mb-2">
                {currentData.sharpe}
              </div>
              <div className="text-gray-600 font-medium">Sharpe Ratio</div>
              <div className="text-sm text-gray-500">Risk-adjusted returns</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-gold-600 mb-2">
                {currentData.drawdown}
              </div>
              <div className="text-gray-600 font-medium">Maximum Drawdown</div>
              <div className="text-sm text-gray-500">Capital preservation</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-navy-900 mb-2">
                {currentData.trades}
              </div>
              <div className="text-gray-600 font-medium">Total Trades</div>
              <div className="text-sm text-gray-500">Executed</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-serif text-lg font-bold text-navy-900 mb-4">
                Quantitative Performance Metrics
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Data Processing Speed</span>
                  <span className="font-semibold text-navy-900">50,000 events/sec</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Execution Latency</span>
                  <span className="font-semibold text-navy-900">Sub-5ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">System Uptime</span>
                  <span className="font-semibold text-navy-900">99.97%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ML Model Accuracy</span>
                  <span className="font-semibold text-navy-900">Improving 2% monthly</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-serif text-lg font-bold text-navy-900 mb-4">
                Risk Management Excellence
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Profit Factor</span>
                  <span className="font-semibold text-green-600">3.2:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Win Rate</span>
                  <span className="font-semibold text-green-600">73%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Account Blow-ups</span>
                  <span className="font-semibold text-green-600">Zero</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">VaR Monitoring</span>
                  <span className="font-semibold text-navy-900">Every 5 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}