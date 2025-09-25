import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 px-6 md:px-20 lg:px-40">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
        
        <h1 className="text-4xl font-bold mb-6 text-primary-700 text-center">
          Política de Privacidad
        </h1>
        <p className="text-gray-600 mb-8 text-center leading-relaxed">
          En Mangueras y Repuestos <span className="font-semibold text-primary-600">Lufer</span>, 
          respetamos y protegemos tu privacidad. Aquí te explicamos de manera clara 
          cómo manejamos tu información personal.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              1. Información que recopilamos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Recopilamos datos como tu nombre, correo electrónico, número de teléfono 
              y cualquier información que nos proporciones en formularios o al 
              solicitar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              2. Uso de la información
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Usamos tus datos únicamente para responder a tus solicitudes, 
              brindarte nuestros servicios y mejorar tu experiencia en 
              nuestra plataforma. Nunca venderemos tu información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              3. Protección de tus datos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Aplicamos medidas de seguridad técnicas y organizativas para 
              proteger tus datos contra accesos no autorizados, pérdida o alteración.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              4. Tus derechos
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Puedes solicitar acceso, corrección o eliminación de tus datos 
              personales en cualquier momento escribiéndonos a{" "}
              <a
                href="mailto:myrlufer@gmail.com"
                className="text-primary-600 font-medium hover:underline"
              >
                myrlufer@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
              5. Cambios en esta política
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nos reservamos el derecho de actualizar esta política en cualquier momento. 
              Te recomendamos revisarla periódicamente para mantenerte informado.
            </p>
          </section>
        </div>

        <div className="mt-10 text-center text-gray-500 text-sm">
          Última actualización: <span className="font-medium">Septiembre 2025</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
