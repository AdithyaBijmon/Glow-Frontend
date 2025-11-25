import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ShareContext from './contextAPI/ShareContext.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import AuthenticationContext from './contextAPI/AuthenticationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='912041076624-e6db66n0rhpdohcbb8loc284v603tb4s.apps.googleusercontent.com'>
        <ShareContext>
          <AuthenticationContext>
            <App />
          </AuthenticationContext>
        </ShareContext>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
