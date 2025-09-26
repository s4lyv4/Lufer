import React from 'react';
import { Link } from 'react-router-dom';
import { Property } from '../../types';


interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const {
    id,
    title,
    listingType,
    mainImage,
  } = property;

  return (
    <div className="card card-hover group">
      <div className="relative overflow-hidden">
        <Link to={`/productos/${id}`}>
          <div className="h-64 overflow-hidden">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Insignia*/}
          <div className="absolute top-4 right-4">
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
              listingType === 'sale' ? 'bg-primary-600 text-white' : 'bg-accent-500 text-white'
            }`}>
              {listingType === 'sale' ? 'Disponible' : 'Agotado'}
            </span>
          </div>
        </Link>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <Link to={`/productos/${id}`} className="hover:text-primary-600 transition-colors">
            <h3 className="text-xl font-serif font-semibold line-clamp-1">{title}</h3>
          </Link>
          <div className="flex items-center text-neutral-500 mt-1">
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;