'use client'

import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Target,
  Shield,
  Zap
} from 'lucide-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

interface DashboardData {
  account: {
    balance: number
    equity: number
    margin: number
    free_margin: number
    profit: number
    initial_balance: number
  }
  positions: Array<{
    ticket: string
    symbol: string
    type: 'BUY' | 'SELL'
    volume: number
    price_open: number
    price_current: number
    profit: number
    profit_pct: number
    time: string
  }>
  metrics: {
    win_rate: number
    profit_factor: number
    sharpe_ratio: number
    max_drawdown: number
    avg_win: number
    avg_loss: number
    sortino_ratio: number
    calmar_ratio: number
    total_trades: number
  }
  risk_metrics: {
    var_daily: number
    var_weekly: number
    leverage: number
    position_concentration: number
    exposure_net: number
  }
  active_signals: Array<{
    time: string
    symbol: string
    type: 'BUY' | 'SELL'
    strategy: string
    confidence: number
  }>
  chart_data: {
    timestamps: number[]
    balance: number[]
    equity: number[]
  }
}

export function HeliosDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [selectedPeriod, setSelectedPeriod] = useState('1D')
  const [isLoading, setIsLoading] = useState(true)

  // Mock data for demonstration
  const mockData: DashboardData = {
    account: {
      balance: 7850.00,
      equity: 7850.00,
      margin: 0,
      free_margin: 7850.00,
      profit: 0,
      initial_balance: 7700.00
    },
    positions: [
      {
        ticket: '12345',
        symbol: 'BTCUSD',
        type: 'BUY',
        volume: 0.1,
        price_open: 43250.00,
        price_current: 43420.00,
        profit: 17.00,
        profit_pct: 0.39,
        time: '14:32:15'
      },
      {
        ticket: '12346',
        symbol: 'ETHUSD',
        type: 'SELL',
        volume: 1.5,
        price_open: 2180.00,
        price_current: 2175.00,
        profit: 7.50,
        profit_pct: 0.23,
        time: '14:28:42'
      }
    ],
    metrics: {
      win_rate: 68.5,
      profit_factor: 1.42,
      sharpe_ratio: 1.18,
      max_drawdown: 3.2,
      avg_win: 45.20,
      avg_loss: 28.50,
      sortino_ratio: 1.65,
      calmar_ratio: 2.34,
      total_trades: 127
    },
    risk_metrics: {
      var_daily: 125.50,
      var_weekly: 280.75,
      leverage: 2.1,
      position_concentration: 15.8,
      exposure_net: 1250.00
    },
    active_signals: [
      {
        time: '14:35:22',
        symbol: 'BTCUSD',
        type: 'BUY',
        strategy: 'Trend Following',
        confidence: 85
      },
      {
        time: '14:33:18',
        symbol: 'XAUUSD',
        type: 'SELL',
        strategy: 'Mean Reversion',
        confidence: 72
      }
    ],
    chart_data: {
      timestamps: Array.from({ length: 50 }, (_, i) => Date.now() - (50 - i) * 60000),
      balance: Array.from({ length: 50 }, (_, i) => 7700 + Math.random() * 200 - 100),
      equity: Array.from({ length: 50 }, (_, i) => 7700 + Math.random() * 200 - 100)
    }
  }

  useEffect(() => {
    // Simulate loading and set mock data
    const timer = setTimeout(() => {
      setData(mockData)
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Real-time updates simulation
  useEffect(() => {
    if (!data) return

    const interval = setInterval(() => {
      setData(prevData => {
        if (!prevData) return prevData

        // Simulate small price movements
        const updatedPositions = prevData.positions.map(pos => ({
          ...pos,
          price_current: pos.price_current + (Math.random() - 0.5) * 2,
          profit: pos.profit + (Math.random() - 0.5) * 5
        }))

        // Add new chart data point
        const newTimestamp = Date.now()
        const newBalance = prevData.account.balance + (Math.random() - 0.5) * 10
        const newEquity = prevData.account.equity + (Math.random() - 0.5) * 10

        return {
          ...prevData,
          positions: updatedPositions,
          account: {
            ...prevData.account,
            balance: newBalance,
            equity: newEquity,
            profit: updatedPositions.reduce((sum, pos) => sum + pos.profit, 0)
          },
          chart_data: {
            timestamps: [...prevData.chart_data.timestamps.slice(-49), newTimestamp],
            balance: [...prevData.chart_data.balance.slice(-49), newBalance],
            equity: [...prevData.chart_data.equity.slice(-49), newEquity]
          }
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [data])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto animate-pulse">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <div className="text-white text-lg font-medium">Loading Helios Dashboard...</div>
          <div className="text-gray-400 text-sm mt-2">Connecting to trading systems</div>
        </div>
      </div>
    )
  }

  if (!data) return null

  const dailyPnl = data.account.balance - data.account.initial_balance
  const dailyPnlPct = (dailyPnl / data.account.initial_balance) * 100
  const totalGrowth = data.account.balance - 8000 // Initial investment
  const growthPct = (totalGrowth / 8000) * 100

  // Chart configuration
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
        labels: { 
          color: '#71717a',
          font: { family: 'Inter', size: 11 },
          padding: 20
        }
      },
      title: {
        display: false
      }
    },
    interaction: {
      intersect: false
    },
    scales: {
      x: {
        grid: { 
          color: '#27282c',
          drawBorder: false,
          lineWidth: 0.5
        },
        ticks: { 
          color: '#71717a',
          font: { size: 10, family: 'Inter' },
          maxRotation: 0,
          callback: function(value: any, index: number) {
            const timestamp = data.chart_data.timestamps[index]
            if (timestamp) {
              const date = new Date(timestamp)
              return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
            }
            return ''
          }
        }
      },
      y: {
        beginAtZero: false,
        grid: { 
          color: '#27282c',
          drawBorder: false,
          lineWidth: 0.5
        },
        ticks: { 
          color: '#71717a',
          font: { size: 10, family: 'Inter' },
          callback: function(value: any) {
            return '$' + value.toLocaleString()
          }
        }
      }
    }
  }

  const chartData = {
    labels: data.chart_data.timestamps.map(ts => {
      const date = new Date(ts)
      return `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`
    }),
    datasets: [
      {
        label: 'Balance',
        data: data.chart_data.balance,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: '#3b82f6'
      },
      {
        label: 'Equity',
        data: data.chart_data.equity,
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.2,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointHoverBackgroundColor: '#10b981'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">HELIOS CAPITAL</h1>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Quantitative Trading System</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Live Data</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Market Ticker */}
      <div className="bg-gray-800 border-b border-gray-700 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">BTC/USD</span>
              <span className="text-white font-medium">$43,420.00</span>
              <span className="text-green-400">+1.2%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">ETH/USD</span>
              <span className="text-white font-medium">$2,175.00</span>
              <span className="text-red-400">-0.8%</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">S&P 500</span>
              <span className="text-white font-medium">5,970.50</span>
              <span className="text-green-400">+0.3%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Account Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Balance</span>
              <DollarSign className="h-4 w-4 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              ${data.account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-gray-400">Available Capital</div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Daily P&L</span>
              {dailyPnl >= 0 ? (
                <ArrowUpRight className="h-4 w-4 text-green-400" />
              ) : (
                <ArrowDownRight className="h-4 w-4 text-red-400" />
              )}
            </div>
            <div className={`text-2xl font-bold mb-1 ${dailyPnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {dailyPnl >= 0 ? '+' : ''}${Math.abs(dailyPnl).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className={`text-xs ${dailyPnl >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {dailyPnl >= 0 ? '+' : ''}{dailyPnlPct.toFixed(2)}%
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Open P&L</span>
              <Activity className="h-4 w-4 text-yellow-400" />
            </div>
            <div className={`text-2xl font-bold mb-1 ${data.account.profit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {data.account.profit >= 0 ? '+' : ''}${Math.abs(data.account.profit).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className="text-xs text-gray-400">
              {data.positions.length} position{data.positions.length !== 1 ? 's' : ''}
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-wider">Total Return</span>
              <TrendingUp className="h-4 w-4 text-purple-400" />
            </div>
            <div className={`text-2xl font-bold mb-1 ${totalGrowth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {totalGrowth >= 0 ? '+' : ''}${Math.abs(totalGrowth).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
            <div className={`text-xs ${totalGrowth >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {totalGrowth >= 0 ? '+' : ''}{growthPct.toFixed(2)}%
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-4">Performance Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Win Rate</span>
              <span className="text-sm font-semibold text-white">{data.metrics.win_rate.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Profit Factor</span>
              <span className="text-sm font-semibold text-white">{data.metrics.profit_factor.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Sharpe Ratio</span>
              <span className="text-sm font-semibold text-white">{data.metrics.sharpe_ratio.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Max Drawdown</span>
              <span className="text-sm font-semibold text-red-400">{data.metrics.max_drawdown.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Avg Win</span>
              <span className="text-sm font-semibold text-green-400">${data.metrics.avg_win.toFixed(0)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Avg Loss</span>
              <span className="text-sm font-semibold text-red-400">${data.metrics.avg_loss.toFixed(0)}</span>
            </div>
          </div>
        </div>

        {/* Portfolio Performance Chart */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-sm font-semibold text-white">Portfolio Performance</h3>
              <p className="text-xs text-gray-400 mt-1">Real-time equity tracking</p>
            </div>
            <div className="flex space-x-2">
              {['1D', '1W', '1M', '3M', 'YTD'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 text-xs rounded border transition-colors ${
                    selectedPeriod === period
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-transparent border-gray-700 text-gray-400 hover:text-white'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="flex space-x-8 mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-0.5 bg-blue-500"></div>
              <span className="text-xs text-gray-400">Balance</span>
              <span className="text-xs text-white font-semibold">
                ${data.account.balance.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-0.5 bg-green-500"></div>
              <span className="text-xs text-gray-400">Equity</span>
              <span className="text-xs text-white font-semibold">
                ${data.account.equity.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
          <div className="h-80">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg mb-8 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h3 className="text-sm font-semibold text-white">Open Positions</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Ticket</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Volume</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Entry</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Current</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">P&L</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">P&L %</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {data.positions.length > 0 ? (
                  data.positions.map((position, index) => (
                    <tr key={index} className="hover:bg-gray-750">
                      <td className="px-6 py-4 text-sm text-gray-300">{position.ticket}</td>
                      <td className="px-6 py-4 text-sm font-medium text-white">{position.symbol}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          position.type === 'BUY' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                        }`}>
                          {position.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">{position.volume.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-gray-300">${position.price_open.toFixed(2)}</td>
                      <td className="px-6 py-4 text-sm text-white">${position.price_current.toFixed(2)}</td>
                      <td className={`px-6 py-4 text-sm font-medium ${
                        position.profit >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {position.profit >= 0 ? '+' : ''}${position.profit.toFixed(2)}
                      </td>
                      <td className={`px-6 py-4 text-sm font-medium ${
                        position.profit_pct >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {position.profit_pct >= 0 ? '+' : ''}{position.profit_pct.toFixed(2)}%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{position.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={9} className="px-6 py-8 text-center text-gray-500">
                      No open positions
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Advanced Metrics */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="text-xs text-gray-400 uppercase tracking-wider mb-4">Advanced Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Sortino Ratio</span>
              <span className="text-sm font-semibold text-white">{data.metrics.sortino_ratio.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Calmar Ratio</span>
              <span className="text-sm font-semibold text-white">{data.metrics.calmar_ratio.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Leverage</span>
              <span className="text-sm font-semibold text-white">{data.risk_metrics.leverage.toFixed(1)}x</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-900 rounded-lg border border-gray-700">
              <span className="text-xs text-gray-400 uppercase">Position Conc.</span>
              <span className="text-sm font-semibold text-white">{data.risk_metrics.position_concentration.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Active Trading Signals */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h3 className="text-sm font-semibold text-white">Active Trading Signals</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Symbol</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Strategy</th>
                  <th className="px-6 py-3 text-left text-xs text-gray-400 uppercase tracking-wider">Confidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {data.active_signals.length > 0 ? (
                  data.active_signals.map((signal, index) => (
                    <tr key={index} className="hover:bg-gray-750">
                      <td className="px-6 py-4 text-sm text-gray-300">{signal.time}</td>
                      <td className="px-6 py-4 text-sm font-medium text-white">{signal.symbol}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          signal.type === 'BUY' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                        }`}>
                          {signal.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">{signal.strategy}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`font-medium ${
                          signal.confidence > 75 ? 'text-green-400' : 
                          signal.confidence > 50 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                          {signal.confidence}%
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No active signals
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}