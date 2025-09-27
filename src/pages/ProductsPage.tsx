import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropertyFilter from '../components/ui/ProductFilter';
import PropertyCard from '../components/ui/ProductCard';
import { properties as allProperties } from '../data/products';
import { Property, PropertyFilter as PropertyFilterType } from '../types';

const normalizeText = (text: string) => {
  return text
    .normalize("NFD") // descompone letras con tilde
    .replace(/[\u0300-\u036f]/g, "") // quita las tildes
    .replace(/ñ/g, "n") // convierte ñ → n
    .replace(/[^a-z0-9\s]/gi, "") // elimina símbolos raros 
    .toLowerCase()
    .trim(); // limpia espacios extra
};


const PropertiesPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

const initialFilters: PropertyFilterType = {
  productType: queryParams.get("productType") || undefined,
  listingType: queryParams.get("listingType") || undefined,
  search: queryParams.get("search") || undefined, 
};



  const [filters, setFilters] = useState<PropertyFilterType>(initialFilters);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(allProperties);

  useEffect(() => {
    document.title = 'Catalogo | LuFer';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterProperties(filters);
  }, [filters]);

  const filterProperties = (currentFilters: PropertyFilterType) => {
  let result = [...allProperties];

  if (currentFilters.productType) {
    result = result.filter(
      property => property.productType === currentFilters.productType
    );
  }

  if (currentFilters.listingType) {
    result = result.filter(
      property => property.listingType === currentFilters.listingType
    );
  }

  if (currentFilters.search) {
    const searchTerm = normalizeText(currentFilters.search);

    result = result.filter(property =>
      normalizeText(property.title).includes(searchTerm) ||
      normalizeText(property.productType).includes(searchTerm) ||
      normalizeText(property.id.toString()).includes(searchTerm)
    );
  }

  setFilteredProperties(result);
};


  const handleFilterChange = (newFilters: PropertyFilterType) => {
    setFilters(newFilters);
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-serif font-bold mb-4">Catalogo</h1>
          <p className="text-primary-100 max-w-3xl text-lg">
            Explora nuestro gran catalogo de productos. Utiliza los filtros para encontrar lo que estes buscando.
          </p>
        </div>
      </div>

      <div className="container-custom py-10">
        {/* Filters */}
        <div className="mb-10">
          <PropertyFilter onFilterChange={handleFilterChange} initialFilters={initialFilters} />
        </div>

        {/* Results */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-semibold">
            {filteredProperties.length} Productos encontradaos
          </h2>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-serif font-semibold mb-2">No se encontraron productos</h3>
            <p className="text-neutral-600 max-w-md mx-auto">
              No hay productos que coincidan con tus criterios de búsqueda. Intenta ajustar los filtros para ver más opciones.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;