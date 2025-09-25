import React, {  useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const CallToAction: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);


  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_s8iggbo",
        "template_1p6zjdo",
        form.current,
        "jl58oue_sHYq9MIK6"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Mensaje enviado ",
            text: "Gracias por contactarnos, te responderemos pronto.",
          });
          form.current?.reset();
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Ups, algo salió mal ",
            text: error.text,
          });
        }
      );
  };
  return (
    <section className="py-16 bg-accent-500 text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-serif font-bold mb-4">
              ¿Aun no encuentras lo que estas buscando?
            </h2>
            <p className="text-accent-50 mb-6 text-lg">
              No esperes más y solicita una consulta. Nuestro equipo de expertos está listo para ayudarte en cada paso del proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/properties" className="btn bg-white text-accent-600 hover:bg-accent-50">
                Ver Productos
              </Link>
              <Link to="/contact" className="btn bg-accent-600 text-white hover:bg-accent-700 border border-accent-400">
                Contáctanos
              </Link>
            </div>
          </div>
          
          <motion.div 
            className="bg-white text-accent-700 p-8 rounded-lg shadow-lg max-w-md w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Clock className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-serif font-semibold">Solicita una consulta</h3>
            </div>
            <form  ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="input border-accent-200 focus:ring-accent-500" 
                  name= "fullName"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  name='email'
                  className="input border-accent-200 focus:ring-accent-500" 
                  required
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Número de teléfono" 
                  name='phone'
                  className="input border-accent-200 focus:ring-accent-500" 
                  required
                />
              </div>
              <div>
                <select 
                  className="select border-accent-200 focus:ring-accent-500" name='service'
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", 
                      backgroundPosition: "right 0.5rem center", 
                      backgroundSize: "1.5em 1.5em"
                      }}
                      required
                      defaultValue=""
                    >
                    <option value="" disabled hidden>
                      Tipo de servicio
                    </option>
                    <option value="Comprar">Comprar </option>
                    <option value="Cotizacion">Cotizacion </option>
                    <option value="Asesoria con un experto">Asesoría con un experto</option>
                    <option value="Otro servicio">Otro servicio</option>
                </select>

              </div>
              <button 
                type="submit" 
                className="w-full btn bg-accent-600 text-white hover:bg-accent-700"
              >
                Enviar Solicitud
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;