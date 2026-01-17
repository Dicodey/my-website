import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-secondary)' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Diderik. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
