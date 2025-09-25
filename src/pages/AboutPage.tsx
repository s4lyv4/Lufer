import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield,  Smile,Users, Award, TrendingUp, Package  } from 'lucide-react';
import { agents } from '../data/agents';
import AgentCard from '../components/ui/AgentCard';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Sobre Nosotros | LuFer';
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { id: 1, label: 'Años de experiencia', value: '3+', icon: <TrendingUp className="w-8 h-8" /> , bgImage: "https://www.huade.com.br/wp-content/uploads/2024/03/falha-sistema-hidraulico.jpg" },
    { id: 2, label: 'Productos vendidos', value: '500+', icon: <Package className="w-8 h-8" />, bgImage: "https://media.istockphoto.com/id/887704262/es/foto/sistema-de-equipo-en-la-f%C3%A1brica-las-mangueras-y-el-grifo-circulaci%C3%B3n-de-l%C3%ADquido-a-trav%C3%A9s-de-las.jpg?s=612x612&w=0&k=20&c=WPcgmD9pBcDQNsmDUEzB-Ps2juLCv4DeiGAMD1tkl9E=" },
    { id: 3, label: 'Clientes satisfechos', value: '200+', icon: < Smile className="w-8 h-8" />, bgImage: "https://www.intermares.com.ar/images/00/servicio-cilindros-hidraulicos-05.jpg"},
  ];

  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-primary-800 text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: "url('https://aeromaquinados.com/wp-content/uploads/2024/12/industria-hidraulica.webp')" }}
        />
        <div className="container-custom relative py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-serif font-bold mb-6">
              Conoce a LuFer
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Impulsando la industria en Bello, con soluciones confiables en mangueras y conexiones hidráulicas, brindando atención personalizada y un servicio cercano a cada cliente.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Nuestra Historia</h2>
            <p className="text-neutral-700 mb-4">
              Mangueras y Repuestos Lufer nació en 2022 con la visión de consolidarnos como la empresa líder en el norte de Medellín, reconocida por la calidad, innovación y cercanía con nuestros clientes. A futuro, expandiremos nuestra presencia en toda la ciudad y el departamento, llevando nuestros productos/servicios a más personas y generando confianza y crecimiento sostenible en cada comunidad que impactemos.
            </p>
            <p className="text-neutral-700 mb-4">
              En el mediano plazo, nuestra misión es consolidarnos como aliados estratégicos de la industria del transporte y la maquinaria, entregando soluciones integrales con la más alta calidad, respaldo y atención personalizada. Queremos contribuir al crecimiento y la eficiencia de nuestros clientes, al mismo tiempo que ofrecemos a nuestros colaboradores un entorno de desarrollo, bienestar y oportunidades, donde su talento y compromiso sean reconocidos y valorados.
            </p>
            <p className="text-neutral-700">
              Hoy, con presencia en Bello, Antioquia, seguimos fieles a nuestros valores de honestidad y calidad. Combinamos nuestra experiencia en el sector industrial y automotriz con productos de marcas reconocidas y la más reciente tecnología, para ofrecer soluciones confiables en mangueras y repuestos que garantizan el mejor rendimiento.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://media.istockphoto.com/id/1831264613/photo/high-pressure-hydraulic-hoses-in-warehouse.jpg?s=612x612&w=0&k=20&c=VHUe0SZNnfOXpNsNF0dwAuErfViVJoHfMxYdX-sJvU0=" 
              alt="Edificio de oficinas" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://www.techvitas.com/file/2023/03/16/Servisas_2332_smaller_1.jpg" 
              alt="Equipo de trabajo" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://www.advancedtech.com/wp-content/uploads/2022/05/ATS_PreventiveMain_Hero.jpg" 
              alt="Reunión de negocios" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
            <img 
              src="https://media.istockphoto.com/id/1189913170/photo/engineer-and-businessman-handshake-at-construction-site.jpg?s=612x612&w=0&k=20&c=LAGNJv533KQKPrb71GiavOCaTKVI5IfR_QioV_t88hM=" 
              alt="Entrega de llaves" 
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-primary-800 text-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-3">Nuestros Logros</h2>
            <p className="max-w-2xl mx-auto text-primary-100">
              Con una visión fresca y en constante crecimiento, hemos alcanzado importantes logros en el sector, impulsados por la confianza de nuestros clientes y el respaldo de nuestro equipo..
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {stats.map((stat) => (
              <motion.div 
                key={stat.id}
                className="relative p-6 rounded-2xl shadow-lg text-white text-center "
                 style={{ backgroundImage: `url(${stat.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div> {/* filtro para legibilidad */}
                <div className="relative z-10 flex flex-col items-center">
                  {stat.icon}
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="container-custom py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold mb-3">Nuestros Valores</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Estos principios guían cada una de nuestras acciones y decisiones, definiendo quiénes somos como empresa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Integridad</h3>
            <p className="text-neutral-600">
              Nos enfocamos en ofrecer un servicio confiable y soluciones de calidad que respalden a nuestros clientes, construyendo relaciones duraderas basadas en eficiencia y compromiso.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Excelencia</h3>
            <p className="text-neutral-600">
              Nos esforzamos por superar las expectativas en cada venta, ofreciendo un servicio de calidad superior y atención al detalle.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-semibold mb-3">Compromiso</h3>
            <p className="text-neutral-600">
              Nos dedicamos a entender y satisfacer las necesidades de cada cliente, acompañándolos en todo el proceso.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-3">Nuestro Equipo</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Conoce a los profesionales que hacen posible ofrecerte un servicio de venta excepcional todos los días.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;