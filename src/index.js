import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import { AuthProvider } from './Contexts/AuthProvider'
import { MessageProvider } from './Contexts/MessageProvider'

console.log('process.env.NODE_ENV :>> ', process.env.NODE_ENV)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <MessageProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </MessageProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
