import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { SpeedInsights } from '@vercel/speed-insights/react';
import ReactGa from 'react-ga'
ReactGa.initialize('G-7VD9KSTCK9')
import './components/i18n'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> 
      <BrowserRouter>
        <App />
        <SpeedInsights />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
