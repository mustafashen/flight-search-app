import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { initMockServer } from './lib/server/index.ts'
import './index.css'

initMockServer()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
