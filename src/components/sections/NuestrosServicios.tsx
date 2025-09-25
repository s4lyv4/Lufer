import React from 'react';
import { motion } from 'framer-motion';
import {  Settings, Users, Package } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 1,
    title: "Compra de Productos",
    description: "Te ayudamos a encontrar el repuesto o manguera perfecto según tus necesidades y presupuesto, guiándote durante todo el proceso de compra.",
    icon:<Package className="w-10 h-10" />
  },
  {
    id: 2,
    title: "Administración",
    description: "Supervisamos procesos contables, facturación, atención a proveedores y cumplimiento normativo, brindando soporte estratégico para que cada área pueda ofrecer un servicio ágil, confiable y orientado al cliente.",
    icon: <Settings className="w-10 h-10" />
  },
  {
    id: 3,
    title: "Asesoría Personalizada",
    description: "Ofrecemos asesoramiento personalizado adaptado a tus necesidades específicas y contamos con servicios a domicilio, facilitando el acceso a nuestras soluciones.",
    icon: <Users className="w-10 h-10" />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const OurServices: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-3">Nuestros Servicios</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Lufer – Ofrecemos soluciones en mangueras y repuestos para sectores industriales, automotrices y agrícolas. Asesoría, calidad y servicio técnico especializado.
          </p>
        </div>  

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="bg-neutral-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-neutral-100"
              variants={item}
            >
              <div className="text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
              <p className="text-neutral-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;