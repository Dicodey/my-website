/**
 * main.jsx - React Application Entry Point
 * 
 * Mounts the App component to the DOM root element.
 * Wrapped in StrictMode for development warnings.
 * Imports global styles from index.css.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
