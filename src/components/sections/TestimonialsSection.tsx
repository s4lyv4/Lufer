import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Andrea Salazar ",
    role: "Ingeniera Agrónoma",
    image: "https://img.freepik.com/vector-premium/icono-perfil-simple-color-blanco-icono_1076610-50204.jpg",
    content: "Llevo años trabajando con maquinaria pesada y siempre tenía problemas para conseguir repuestos confiables. Desde que conocí esta empresa, no busco en otro lado. Excelente calidad y el servicio a domicilio me ha salvado más de una vez.",
    rating: 5
  },
  {
    id: 2,
    name: "Luis Fernando Ríos ",
    role: "Taller Automotriz Ríos",
    image: "https://img.freepik.com/vector-premium/icono-perfil-simple-color-blanco-icono_1076610-50204.jpg",
    content: "Muy buena atención y variedad de productos. Conseguí los repuestos que necesitaba rápido, y me los llevaron directo al taller. Eso me ahorró tiempo y dinero.",
    rating: 5
  },
  {
    id: 3,
    name: "María Camila Ortiz",
    role: "Compras, Constructora Orbe",
    image: "https://img.freepik.com/vector-premium/icono-perfil-simple-color-blanco-icono_1076610-50204.jpg",
    content: "La atención fue impecable. Pedimos mangueras industriales para una obra y llegaron el mismo día. La calidad es excelente y se nota que manejan productos certificados.",
    rating: 4
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-800 to-primary-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-3">Calificacion de nuestros clientes</h2>
          <p className="max-w-2xl mx-auto text-primary-100">
            La satisfacción de nuestros clientes es nuestro mayor orgullo. Estas son algunas de las experiencias que han compartido con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 relative shadow-lg"
            >
              <div className="absolute top-6 right-6 text-accent-400">
                <Quote className="w-10 h-10 opacity-50" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-600"
                />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-primary-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star 
                    key={index}
                    className={`w-5 h-5 ${index < testimonial.rating ? 'text-accent-400 fill-accent-400' : 'text-primary-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-primary-100">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;