import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './components/Nav.tsx'
import Footer from './components/Footer.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nav/>
    <App />
    <Footer/>
  </StrictMode>,
)
