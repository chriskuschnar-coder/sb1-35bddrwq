import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Performance } from './components/Performance'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { LoginForm } from './components/LoginForm'
import { InvestorDashboard } from './components/InvestorDashboard'
import { DashboardSelector } from './components/DashboardSelector'

function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Performance />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portal" element={<LoginForm />} />
        <Route path="/portal/dashboard" element={<DashboardSelector />} />
        <Route path="/helios" element={
          <div className="min-h-screen">
            <iframe 
              src="/helios/index.html" 
              className="w-full h-screen border-0"
              title="Helios Trading Dashboard"
            />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;