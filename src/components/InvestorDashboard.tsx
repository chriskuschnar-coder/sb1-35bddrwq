import { useState } from 'react'
import { 
  TrendingUp, 
  LogOut, 
  BarChart3, 
  PieChart, 
  FileText, 
  DollarSign,
  ArrowUpRight,
  Shield,
  Zap
} from 'lucide-react'

interface InvestorDashboardProps {
  onLogout: () => void
}

export function InvestorDashboard({ onLogout }: InvestorDashboardProps) {
  const [selectedTab, setSelectedTab] = useState('overview')

  const portfolioData = {
    totalValue: 2700000,
    monthlyReturn: 18.7,
    yearlyReturn: 287,
    sharpeRatio: 2.84
  }

  const holdings = [
    { name: 'Helios Alpha Fund', allocation: 70, value: 1890000, return: 18.7 },
    { name: 'Market Neutral Strategy', allocation: 20, value: 540000, return: 15.2 },
    { name: 'Quantitative Momentum Portfolio', allocation: 10, value: 270000, return: 62.4 }
  ]

  const tabs = [
    { id: 'overview', name: 'Portfolio Overview', icon: BarChart3 },
    { id: 'holdings', name: 'Fund Holdings', icon: PieChart },
    { id: 'documents', name: 'Reports & Documents', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-navy-600" />
              <span className="font-serif text-xl font-bold text-navy-900">
                Helios Investor Portal
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Institutional Investor</div>
                <div className="text-xs text-gray-600">investor@heliosquant.com</div>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-navy-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Investment Value</span>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-navy-900">
              ${portfolioData.totalValue.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 mt-1">Across all Helios strategies</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Monthly Return</span>
              <ArrowUpRight className="h-5 w-5 text-green-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-green-600">
              +{portfolioData.monthlyReturn}%
            </div>
            <div className="text-xs text-gray-500 mt-1">Average monthly performance</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Annual Return</span>
              <ArrowUpRight className="h-5 w-5 text-green-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-green-600">
              +{portfolioData.yearlyReturn}%
            </div>
            <div className="text-xs text-gray-500 mt-1">Since inception</div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Sharpe Ratio</span>
              <Shield className="h-5 w-5 text-gold-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-gold-600">
              {portfolioData.sharpeRatio}
            </div>
            <div className="text-xs text-gray-500 mt-1">Risk-adjusted returns</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                    selectedTab === tab.id
                      ? 'border-navy-600 text-navy-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="h-5 w-5" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'overview' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-navy-900">Helios System Performance</h3>
                  <button 
                    onClick={() => window.open('/helios', '_blank')}
                    className="bg-navy-600 hover:bg-navy-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center"
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Live Trading Dashboard
                  </button>
                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Strategy Allocation</h4>
                    <div className="space-y-4">
                      {holdings.map((holding, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-gray-900">{holding.name}</div>
                            <div className="text-sm text-gray-600">{holding.allocation}% allocation</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium text-gray-900">
                              ${holding.value.toLocaleString()}
                            </div>
                            <div className="text-sm text-green-600">+{holding.return}%</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'holdings' && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-navy-900">Fund Strategy Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 font-medium text-gray-900">Strategy</th>
                        <th className="text-right py-3 font-medium text-gray-900">Allocation</th>
                        <th className="text-right py-3 font-medium text-gray-900">Market Value</th>
                        <th className="text-right py-3 font-medium text-gray-900">Performance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holdings.map((holding, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 font-medium text-gray-900">{holding.name}</td>
                          <td className="py-4 text-right text-gray-600">{holding.allocation}%</td>
                          <td className="py-4 text-right font-medium text-gray-900">
                            ${holding.value.toLocaleString()}
                          </td>
                          <td className="py-4 text-right font-medium text-green-600">
                            +{holding.return}%
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {selectedTab === 'documents' && (
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-navy-900">Investor Documents & Reports</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Monthly Performance Report - January 2025',
                    'Helios System Technology Overview', 
                    'Quarterly Investment Letter - Q4 2024',
                    'Risk Management Framework',
                    'Market Microstructure Analysis',
                    'VPIN Implementation Research',
                    'Compliance & Regulatory Filings',
                    'Institutional Sales Presentation'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-gray-600" />
                        <span className="font-medium text-gray-900">{doc}</span>
                      </div>
                      <button className="text-navy-600 hover:text-navy-700 font-medium text-sm">
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}