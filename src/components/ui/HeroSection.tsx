import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Briefcase ,MessageCircle } from 'lucide-react';
import heroImage from '../../assets/background lufer.png';

const HeroSection: React.FC = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/properties?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/properties"); // si no escribe nada, lleva a todos
    }
  };

  return (
    <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover" 
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: "brightness(0.8)"
        }}
      ></div>


      {/* Content */}
      <div className="container-custom relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-lg sm:text-xl mb-8 max-w-3xl">
            Descubre soluciones en mangueras y repuestos con la calidad que tu equipo necesita. En Lufer, nuestro equipo especializado te acompaña en cada paso para brindarte asesoría y atención personalizada.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white rounded-lg p-1 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row">
              <div className="flex-grow p-3">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar por nombre, categoría o código"
                  className="w-full border-0 focus:ring-0 text-neutral-800 text-lg"
                />
              </div>
              <button 
                type="submit"
                className="btn btn-primary m-1 text-center py-4 md:py-3 flex items-center justify-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Buscar
              </button>
            </div>
          </form>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link to="/productos?listingType=sale" className=" backgrouncolor bg-yellow-600/70 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-yellow-500/90 transition-colors flex items-center justify-center">
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span>Nuestro Catalogo</span>
            </Link>
            <a
              href="/portafolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="backgrouncolor bg-yellow-600/70 bg-white/10 backdrop-blur-sm 
                        border border-white/20 rounded-lg p-4 hover:bg-yellow-500/90 
                        transition-colors flex items-center justify-center"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              <span>Portafolio</span>
            </a>

            <Link to="https://wa.me/573013411325" className=" backgroundcolor bg-green-600/70 bg-green/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-green-600/90 transition-colors flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Whatsapp</span>
            </Link> 
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
