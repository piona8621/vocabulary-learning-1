import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'animate.css';
import App from './App.jsx'

// import { Router, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import Router from './Router/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
 <HelmetProvider>
 <AuthProvider>
 <RouterProvider router={Router}>

 </RouterProvider>
 </AuthProvider>
 
 </HelmetProvider>
 
  
  </StrictMode>,
)
