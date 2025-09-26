import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Logo Lufer" className="h-20 rounded-full mr-4" />
¿
            </div>
            <p className="text-primary-100 mb-6">
               Expertos en mangueras y repuestos industriales. Calidad, confianza y soluciones a tu medida.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/properties?listingType=sale" className="text-primary-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Productos disponibles
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Contáctanos</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-accent-400" />
                <p className="text-primary-100">
                  Calle 22 #60-38 <br />
                   Bello<br />
                  Colombia
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0 text-accent-400" />
                <a href="tel:+573013411325" className="text-primary-100 hover:text-white transition-colors">
                  +57 301 341 1325
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0 text-accent-400" />
                <a href="mailto:info@inmovision.com" className="text-primary-100 hover:text-white transition-colors">
                  myrlufer@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6">Boletín Informativo</h3>
            <p className="text-primary-100 mb-4">
              Suscríbete para recibir las últimas novedades de los productos y ofertas exclusivas.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-2 rounded-md bg-primary-700 border border-primary-600 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
                />
              </div>
              <button type="submit" className="btn bg-accent-500 text-white hover:bg-accent-600 w-full">
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-8 text-center text-primary-300">
          <p>&copy; {new Date().getFullYear()} Lufer. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;