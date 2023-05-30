import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import Home from './components/screens/home/Home'
import './fonts/Golos/GolosText-Black.ttf'
import Router from "./components/Router";
import AuthProvider from "./providers/AuthProvider";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
              <Router />
          </AuthProvider>
      </QueryClientProvider>

  </React.StrictMode>,
)
