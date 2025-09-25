import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { PropertyFilter as PropertyFilterType } from '../../types';

interface PropertyFilterProps {
  onFilterChange: (filters: PropertyFilterType) => void;
  initialFilters?: PropertyFilterType;
}

const PropertyFilter: React.FC<PropertyFilterProps> = ({ 
  onFilterChange, 
  initialFilters = {} 
}) => {
  const [filters, setFilters] = useState<PropertyFilterType>(initialFilters);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value || undefined, // si está vacío, se manda como undefined
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const resetFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* 🔎 Campo de búsqueda */}
          <div>
            <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-1">
              Buscar por nombre, categoría o código
            </label>
            <input
              id="search"
              name="search"
              type="text"
              value={filters.search || ''}
              onChange={handleInputChange}
              className="input"
              placeholder="Ej: manguera, válvula, código 123..."
            />
          </div>

          {/* Tipo de producto */}
          <div>
            <label htmlFor="productType" className="block text-sm font-medium text-neutral-700 mb-1">
              Tipo de producto
            </label>
            <select
              id="productType"
              name="productType"
              value={filters.productType || ''}
              onChange={handleInputChange}
              className="select"
              style={{ 
                backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", 
                backgroundPosition: "right 0.5rem center", 
                backgroundSize: "1.5em 1.5em" 
              }}
            >
              <option value="">Todos los tipos</option>
              <option value="valvulas">Válvulas</option>
              <option value="repuestos">Repuestos y Accesorios</option>
              <option value="mangueras">Mangueras</option>
              <option value="acoples">Acoples y Adaptadores</option>
              <option value="correas">Correas</option>
              <option value="abrazaderas">Abrazaderas</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
          <button
            type="submit"
            className="btn btn-primary flex-grow sm:flex-grow-0"
          >
            <Search className="w-5 h-5 mr-2" />
            Buscar Productos
          </button>
          <button
            type="button"
            onClick={resetFilters}
            className="btn btn-secondary"
          >
            Reiniciar Filtros
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyFilter;
