import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './components/i18n'
import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights() // Inject Vercel Speed Insights

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
