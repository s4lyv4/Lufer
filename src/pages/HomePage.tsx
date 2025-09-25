import React, { useEffect } from 'react';
import HeroSection from '../components/ui/HeroSection';
import FeaturedProperties from '../components/sections/Destacado';
import OurServices from '../components/sections/NuestrosServicios';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CallToAction from '../components/sections/Consulta';
import { properties } from '../data/products';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Lufer | Mangueras y Repuestos';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection />
      <FeaturedProperties properties={properties} />
      <OurServices />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
};

export default HomePage;