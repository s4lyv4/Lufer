export interface Property {
  id: number;
  title: string;
  description: string;
  productType: 'valvulas' | 'repuestos' | 'mangueras' | 'acoples' | 'correas' | 'abrazaderas'| 'otros';
  mainImage: string;
  images: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Agent {
  id: number;
  name: string;
  rol: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
}

export interface PropertyFilter {
  productType?: string;
  listingType?: string;
  search?: string;
}
