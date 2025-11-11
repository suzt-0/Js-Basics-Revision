import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
// calls the App component from App.jsx file and renders it to the DOM
// StrictMode is a wrapper component that helps to highlight potential problems in an application
// It helps us make js code more robust and future-proof by activating additional checks and warnings for its descendants
  <StrictMode>
    <App /> 
  </StrictMode>,
)
