import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PizzaProvider from './components/context/ContextPizza.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PizzaProvider>
    <App />
    </PizzaProvider>   
    </BrowserRouter>
 
  </React.StrictMode>,
)
