import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/ProductsPage';
import PropertyDetailPage from './pages/ProductsDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from "./pages/PrivacyPolicy";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
             <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />

        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;