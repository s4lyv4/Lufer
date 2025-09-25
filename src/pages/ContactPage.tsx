import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send} from 'lucide-react';
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactPage: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.title = 'Contacto | Inmo-Visión';
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_fwn4cp2",
        "template_lbnwkdo",
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
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
              Ponte en contacto con nosotros
            </h1>
            <p className="text-xl text-primary-100">
              Estamos aquí para ayudarte con tus necesidades. No dudes en contactarnos.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                    <p className="text-neutral-600">
                      Calle 22 #60-38<br />
                      Bello<br />
                      Colombia
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+573001234567" className="hover:text-primary-600 transition-colors">
                        +57 301 341 1325
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:info@inmovision.com" className="hover:text-primary-600 transition-colors">
                        myrlufer@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Horario</h3>
                    <p className="text-neutral-600">
                      Lunes a Viernes: 7:30 AM - 5:30 PM<br />
                      Sábados: 8:00 AM - 1:00 PM<br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-serif font-semibold mb-6">Envíanos un mensaje</h2>
              <p className="text-neutral-600 mb-6">
                Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.
              </p>
              
              <form   ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="name"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="input"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="input"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="title"
                    className="input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="input"
                    required
                  ></textarea>
                </div>
                
                <label className="flex items-start space-x-2 text-sm text-gray-600">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    Acepto la{" "}
                    <a
                      href="/politica-de-privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      política de privacidad
                    </a>{" "}
                    y el tratamiento de mis datos personales.
                  </span>
                </label>

                
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="py-8">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-semibold mb-6">Nuestra Ubicación</h2>
          <div className="rounded-lg overflow-hidden shadow-md h-96 bg-neutral-200">
            {/* Here you would integrate a map component */}
            <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6317480573193!2d-75.5727957241229!3d6.312012793677326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442f1f1312dc89%3A0xe32d90fb05edec6d!2sCl.%2022%20%2360-38%2C%20Nuevo%2C%20Bello%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1758509604574!5m2!1sen!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;