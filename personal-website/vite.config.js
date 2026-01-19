/**
 * vite.config.js - Vite Build Configuration
 * 
 * Configures the Vite bundler for this React application:
 * - Uses @vitejs/plugin-react for JSX/React support
 * - Sets base URL to '/my-website/' in production for GitHub Pages
 * - Uses '/' in development for local testing
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/my-website/' : '/',
})
