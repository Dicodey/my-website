/**
 * App.jsx - Main Application Component
 * 
 * This is the root component that sets up:
 * - React Router for navigation (using HashRouter for GitHub Pages compatibility)
 * - HelmetProvider for SEO meta tags
 * - The overall page layout (Navbar, main content, footer)
 * - Background decoration (animated brain blobs)
 * 
 * Routes:
 * - / (and /about, /experience, /thoughts, /contact) -> Home page with scroll-to-section
 * - /blog/:id -> Individual blog post view
 */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Contact from './components/Contact';
import Background from './components/Background';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If the path is a section (like /about), scroll to it
    const id = pathname.substring(1);
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

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
        <Background />
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<Home />} />
              <Route path="/experience" element={<Home />} />
              <Route path="/thoughts" element={<Home />} />
              <Route path="/contact" element={<Home />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', backgroundColor: 'white', color: 'var(--text-secondary)' }}>
            <div className="container">
              <p>© {new Date().getFullYear()} Di. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
