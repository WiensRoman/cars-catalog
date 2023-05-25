import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Home from './components/screens/home/Home.jsx'
import './fonts/Golos/GolosText-Black.ttf'
import Router from "./components/Router.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
