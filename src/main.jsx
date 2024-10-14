import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; 
import './components/i18n';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* Wrap with HelmetProvider */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
  </StrictMode>,
)
