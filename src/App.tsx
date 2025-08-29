import React from 'react';
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Performance } from './components/Performance'
import { Contact } from './components/Contact'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
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

export default App;
