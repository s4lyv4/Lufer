import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Wrench,
  Share2,
  Phone,
  Mail
} from 'lucide-react';
import { properties } from '../data/products';
import { motion } from 'framer-motion';


const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const property = properties.find(p => p.id === Number(id));

  // Solo mensaje, inicializado dinámicamente
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (property) {
      setMessage(
        `Me interesa el producto "${property.title}" con referencia ID: ${property.id}. Quiero recibir más información.`
      );
      document.title = `${property.title} | Lufer`;
    } else {
      document.title = "Producto No Encontrado | Lufer";
    }
    window.scrollTo(0, 0);
  }, [property]);

  const sendToWhatsApp = () => {
    const phoneNumber = "573013411325"; // número de tu empresa

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  if (!property) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-serif font-bold mb-4">Producto no encontrado</h1>
        <p className="text-neutral-600 mb-8">
          Lo sentimos, el producto que estás buscando no existe o ha sido eliminado.
        </p>
        <Link to="/properties" className="btn btn-primary">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Volver a productos
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Echa un vistazo a este producto: ${property.title}`,
        url: window.location.href
      }).catch(err => console.error('Error sharing:', err));
    } else {
      alert('La función de compartir no está soportada en este navegador. Por favor, copia la URL manualmente.');
    };
    };

  const handlePrevImage = () => {
    setCurrentImageIndex(prev =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };



  return (
    <div className="bg-neutral-50 min-h-screen pb-16">
      {/* Property Images Gallery */}
      <div className="bg-neutral-900 relative">
        <div className="container-custom relative">
          <div className="h-[60vh] flex items-center justify-center overflow-hidden">
            <img 
              src={property.images[currentImageIndex]} 
              alt={property.title}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-neutral-800"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full text-neutral-800"
          >
            <ArrowLeft className="w-6 h-6 transform rotate-180" />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-0 right-0">
            <div className="flex justify-center space-x-2 overflow-x-auto py-2 px-4">
              {property.images.map((img, index) => (
                <div 
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden cursor-pointer transition-all ${
                    index === currentImageIndex ? 'ring-2 ring-accent-500 ring-offset-2' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link to="/properties" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a productos
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex flex-wrap items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      property.listingType === 'sale' ? 'bg-primary-600 text-white' : 'bg-accent-500 text-white'
                    }`}>
                      {property.listingType === 'sale' ? 'Disponible' : 'Agotado'}
                    </span>
                  </div>
                  <h1 className="text-3xl font-serif font-bold">{property.title}</h1>
                </div>
                <div className="mt-4 sm:mt-0">
                  <div className="flex items-center text-primary-600 font-bold">
                  </div>
                </div>
              </div>

              {/* Property Features */}
              <div className="flex flex-wrap justify-between gap-4 py-4 border-t border-b border-neutral-200 my-4">
                <div className="flex items-center">
                  < Wrench className="w-5 h-5 mr-2 text-primary-600" />
                  <div>
                    <span className="text-lg font-semibold capitalize">
                      {property.productType === 'valvulas' && 'Valvulas'}
                      {property.productType === 'repuestos' && 'Repuestos y Accesorios'}
                      {property.productType === 'mangueras' && 'Mangueras'}
                      {property.productType === 'acoples' && 'Acoples y Adaptadores'}
                      {property.productType === 'correas' && 'Correas'}
                      {property.productType === 'abrazaderas' && 'Abrazaderas'}
                      {property.productType === 'otros' && 'Otros'}
                    </span>
                    <p className="text-neutral-500 text-sm">Tipo</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary-600" />
                  <div>
                    <span className="text-lg font-semibold">
                      {new Date(property.createdAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <p className="text-neutral-500 text-sm">Publicado</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4 mb-6">
                
                <button
            className="btn bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5 mr-2" />
            Compartir
          </button>
              </div>

              {/* Description */}
              
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-semibold mb-4">Descripción</h2>
                {property.description.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
              </div>

              {/* Property Details */}
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Detalles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Tipo</span>
                      
                    <span className="font-medium">
                      {property.productType === 'valvulas' && ''}
                      {property.productType === 'repuestos' && ''}
                      {property.productType === 'mangueras' && ''}
                      {property.productType === 'acoples' && ''}
                      {property.productType === 'correas' && ''}
                      {property.productType === 'abrazaderas' && ''}
                      {property.productType === 'otros' && ''}
                      
                    </span>
                  </div>
                  <div className="border-b border-neutral-200 py-3 flex justify-between">
                    <span className="text-neutral-500">Estado</span>
                    <span className="font-medium">Disponible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            <motion.div 
              className="bg-white rounded-lg shadow-md overflow-hidden mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-800 text-white p-4">
                <h3 className="text-xl font-serif font-semibold">Contacta con el vendedor</h3>
              </div>
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div>
                    <h4 className="font-semibold text-lg">{'Luis Fernando Barbaran'}</h4>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <a href={`tel:${'+57 301 3411325'}`} className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                    <Phone className="w-5 h-5 mr-2 text-primary-600" />
                    {'+57 301 3411325'}
                  </a>
                  <a href={`mailto:${'myrlufer@gmail.com'}`} className="flex items-center text-neutral-700 hover:text-primary-600 transition-colors">
                    <Mail className="w-5 h-5 mr-2 text-primary-600" />
                    {'myrlufer@gmail.com'}
                  </a>
                </div>
                <form className="space-y-4">
                  <div>
                    <textarea 
                    placeholder="Mensaje" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="input" 
                    rows={4}
                    required
                  />

                  </div>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      sendToWhatsApp();
                    }}
                    type="submit" 
                    className="w-full btn btn-primary"
                  >
                    Enviar mensaje
                  </button>

                </form>
              </div>
            </motion.div>
          </div>
        </div>    
        {/* Similar Products */}
          <div className="bg-white rounded-lg shadow-md p-6 w-full">
            <h3 className="text-xl font-serif font-semibold mb-6 border-b-2 border-yellow-500 inline-block">
              Productos Similares
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {properties
                .filter(p => 
                  p.id !== property.id && 
                  p.productType === property.productType &&
                  p.listingType === property.listingType
                )
                .slice(0, 4) // puedes aumentar la cantidad
                .map(similarProperty => (
                  <Link 
                    key={similarProperty.id}
                    to={`/properties/${similarProperty.id}`}
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-neutral-50 transition-transform transform hover:scale-105 hover:shadow-md"
                  >
                    <div className="w-60 h-40 flex-shrink-0 rounded-md overflow-hidden">
                      <img 
                        src={similarProperty.mainImage} 
                        alt={similarProperty.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="mt-6 text-center text-sm font-medium font-semibold">
                      {similarProperty.title}
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default PropertyDetailPage;