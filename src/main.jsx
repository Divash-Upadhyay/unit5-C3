import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router-dom"
import App from './App'
import { EmpContextProvider } from './context/TheContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EmpContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </EmpContextProvider>
  </React.StrictMode>
)
