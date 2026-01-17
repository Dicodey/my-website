import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Blog />
      <Contact />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-secondary)' }}>
            <div className="container">
              <p>© {new Date().getFullYear()} Diderik. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
