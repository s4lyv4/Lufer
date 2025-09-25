import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Página no encontrada | LuFer';
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-neutral-50 py-16">
      <div className="container-custom text-center">
        <h1 className="text-9xl font-bold text-primary-800 mb-4">404</h1>
        <h2 className="text-3xl font-serif font-bold mb-6">Página no encontrada</h2>
        <p className="text-neutral-600 max-w-md mx-auto mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida a otra ubicación.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn btn-primary">
            <Home className="w-5 h-5 mr-2" />
            Volver al inicio
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-secondary"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver atrás
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;