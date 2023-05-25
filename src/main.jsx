import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Home from './components/screens/home/Home.jsx'
import './fonts/Golos/GolosText-Black.ttf'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
