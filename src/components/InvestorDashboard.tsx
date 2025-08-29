'use client'

import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { 
  TrendingUp, 
  LogOut, 
  BarChart3, 
  PieChart, 
  FileText, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react'

export function InvestorDashboard() {
  const { data: session } = useSession()
  const [selectedTab, setSelectedTab] = useState('overview')

  const portfolioData = {
    totalValue: 3250000,
    monthlyReturn: 1.8,
    yearlyReturn: 11.8,
    totalReturn: 67.4
  }

  const holdings = [
    { name: 'Long/Short Equity Strategy', allocation: 65, value: 2112500, return: 13.7 },
    { name: 'Global Macro Strategy', allocation: 25, value: 812500, return: 9.2 },
    { name: 'Event Driven Strategy', allocation: 10, value: 325000, return: 15.8 }
  ]

  const recentTransactions = [
    { date: '2025-01-15', type: 'Performance Fee', amount: -18750, fund: 'Long/Short Equity Strategy' },
    { date: '2025-01-10', type: 'Capital Call', amount: 250000, fund: 'Global Macro Strategy' },
    { date: '2025-01-05', type: 'Distribution', amount: 45000, fund: 'Event Driven Strategy' }
  ]

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'holdings', name: 'Holdings', icon: PieChart },
    { id: 'documents', name: 'Documents', icon: FileText }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container-max section-padding">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-navy-600" />
              <span className="font-serif text-xl font-bold text-navy-900">
                Global Market Consulting
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  {session?.user?.name || 'Limited Partner'}
                </div>
                <div className="text-xs text-gray-600">
                  {session?.user?.email}
                </div>
              </div>
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-navy-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-max section-padding py-8">
        {/* Portfolio Summary */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">LP Investment Value</span>
              <DollarSign className="h-5 w-5 text-green-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-navy-900">
              ${portfolioData.totalValue.toLocaleString()}
            </div>
            <div className="text-xs text-gray-500 mt-1">Total capital contribution</div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Monthly Return</span>
              <ArrowUpRight className="h-5 w-5 text-green-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-green-600">
              +{portfolioData.monthlyReturn}%
            </div>
            <div className="text-xs text-gray-500 mt-1">Current month performance</div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Net Annual Return</span>
              <ArrowUpRight className="h-5 w-5 text-green-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-green-600">
              +{portfolioData.yearlyReturn}%
            </div>
          </div>
          
          <div className="card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Cumulative Return</span>
              <ArrowUpRight className="h-5 w-5 text-green-600" />
            </div>
            <div className="font-serif text-2xl font-bold text-green-600">
              +{portfolioData.totalReturn}%
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
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
                  <h3 className="font-serif text-xl font-bold text-navy-900">Limited Partnership Overview</h3>
                  <button 
                    onClick={() => window.open('/helios', '_blank')}
                    className="bg-navy-600 hover:bg-navy-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 inline-flex items-center"
                  >
                    <BarChart3 className="h-4 w-4 mr-2" />
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
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Recent LP Activity</h4>
                    <div className="space-y-3">
                      {recentTransactions.map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                          <div>
                            <div className="font-medium text-gray-900">{transaction.type}</div>
                            <div className="text-sm text-gray-600">{transaction.fund}</div>
                          </div>
                          <div className="text-right">
                            <div className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">{transaction.date}</div>
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
                <h3 className="font-serif text-xl font-bold text-navy-900">Strategy Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 font-medium text-gray-900">Strategy</th>
                        <th className="text-right py-3 font-medium text-gray-900">Allocation</th>
                        <th className="text-right py-3 font-medium text-gray-900">Market Value</th>
                        <th className="text-right py-3 font-medium text-gray-900">Net Return</th>
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
                <h3 className="font-serif text-xl font-bold text-navy-900">Limited Partner Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Monthly LP Report - January 2025',
                    'Quarterly Investment Letter - Q4 2024', 
                    'Annual K-1 Tax Statement - 2024',
                    'Limited Partnership Agreement',
                    'Risk Disclosure Statement',
                    'SEC Form ADV - Part 2A',
                    'Audited Financial Statements - 2024',
                    'Compliance & Regulatory Filings'
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