import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'

import App from './App.jsx'
import AppDevelopment from './pages/app_development/AppDevelopment.jsx'
import Odoo from './pages/odoo/Odoo.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<App />} />
        <Route path='app-development' element={<AppDevelopment />} />
        <Route path='odoo' element={<Odoo />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
