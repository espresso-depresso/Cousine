import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Layout } from './components/layout/layout';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Products from './app/productos/productos.jsx';
import AboutUs from './app/nosotros/about-us.jsx';
import ContactUs from './app/contacto/contact-us.jsx';

import Index  from './app/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Index/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
