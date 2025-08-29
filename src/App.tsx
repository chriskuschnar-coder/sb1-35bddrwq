import React, { useState } from 'react';
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Performance } from './components/Performance'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { LoginForm } from './components/LoginForm'
import { InvestorDashboard } from './components/InvestorDashboard'
import { HeliosDashboard } from './components/HeliosDashboard'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Navigation handler
  const navigate = (page: string) => {
    setCurrentPage(page)
  }

  // Login handler
  const handleLogin = (email: string, password: string) => {
    if (email === 'investor@heliosquant.com' && password === 'HeliosDemo2025') {
      setIsLoggedIn(true)
      setCurrentPage('dashboard')
      return true
    }
    return false
  }

  // Logout handler
  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentPage('home')
  }

  // Render current page
  const renderPage = () => {
    switch (currentPage) {
      case 'portal':
        return <LoginForm onLogin={handleLogin} onNavigate={navigate} />
      case 'dashboard':
        return isLoggedIn ? <InvestorDashboard onLogout={handleLogout} /> : <LoginForm onLogin={handleLogin} onNavigate={navigate} />
      case 'helios':
        return <HeliosDashboard />
      default:
        return (
          <main className="min-h-screen bg-white">
            <Header onNavigate={navigate} />
            <Hero />
            <About />
            <Services />
            <Performance />
            <Contact />
            <Footer />
          </main>
        )
    }
  }

  return renderPage()
}

export default App;