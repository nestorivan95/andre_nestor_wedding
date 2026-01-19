'use client'

export default function TravelInfo() {
  return (
    <section
      id="viaje"
      className="section-container bg-gradient-to-b from-white to-wedding-beige"
    >
      <h2 className="section-title">Información de Viaje y Alojamiento</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Hoteles Sugeridos */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Hoteles Sugeridos
          </h3>
          
          <p className="text-center text-gray-700 mb-8">
            Estas son nuestras opciones sugeridas por cercanía y comodidad. Sin embargo,
            en la zona hay otros hoteles y Airbnbs disponibles, así que puedes escoger el
            hospedaje que mejor se ajuste a tus preferencias.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-wedding-cream rounded-xl border-l-4 border-wedding-gold">
              <h4 className="font-semibold text-xl mb-2">Hotel Lagoon</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-semibold">Dirección:</span> Km 13+800 vía JMC vereda El Tablazo, Rionegro, Antioquia
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Tel:</span> (604) 4406720
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Página web:</span>{' '}
                  <a
                    href="https://www.lagoonhotel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-gold hover:underline"
                  >
                    https://www.lagoonhotel.com/
                  </a>
                </p>
              </div>
            </div>

            <div className="p-6 bg-wedding-cream rounded-xl border-l-4 border-wedding-gold">
              <h4 className="font-semibold text-xl mb-2">Aparta Suite Hotel Rioverde Aeropuerto JMC</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-semibold">Dirección:</span> Aeropuerto José María Cordova - Llanogrande Suite 214, 054047 Rionegro, Colombia
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Tel:</span> 310 4169182
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Página web:</span> Booking o Airbnb
                </p>
              </div>
            </div>

            <div className="p-6 bg-wedding-cream rounded-xl border-l-4 border-wedding-gold">
              <h4 className="font-semibold text-xl mb-2">Movich Las Lomas</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-semibold">Dirección:</span> Glorieta Aeropuerto José María Córdova, Rionegro, Antioquia
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Tel:</span> (601) 4824466
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Página web:</span>{' '}
                  <a
                    href="https://www.movichhotels.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-wedding-gold hover:underline"
                  >
                    https://www.movichhotels.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cómo Llegar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Cómo Llegar
          </h3>
          
          <div className="space-y-6">
            <div className="p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-4 flex items-center">
                <span className="text-wedding-gold mr-2 text-2xl">✈️</span>
                Desde el Aeropuerto José María Córdova
              </h4>
              <p className="text-gray-700 mb-4">
                El Aeropuerto Internacional José María Córdova está ubicado en Rionegro.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">A la Parroquia Nuestra Señora de Chiquinquirá:</h5>
                  <ul className="text-gray-700 space-y-2 text-sm ml-4">
                    <li>• <strong>Taxi/Uber:</strong> Aproximadamente 10-15 minutos</li>
                    <li>• <strong>Transporte privado:</strong> Contacta con el hotel para opciones</li>
                    <li>• <strong>Renta de auto:</strong> Disponible en el aeropuerto</li>
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">A SantaMonica Premium:</h5>
                  <ul className="text-gray-700 space-y-2 text-sm ml-4">
                    <li>• <strong>Taxi/Uber:</strong> Aproximadamente 15 minutos</li>
                    <li>• <strong>Transporte privado:</strong> Contacta con el hotel para opciones</li>
                    <li>• <strong>Renta de auto:</strong> Disponible en el aeropuerto</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-4 flex items-center">
                <span className="text-wedding-gold mr-2 text-2xl">🚗</span>
                En Auto
              </h4>
              <p className="text-gray-700 mb-3">
                Te recomendamos usar aplicaciones de navegación como Google Maps o Waze
                para llegar a los lugares del evento.
              </p>
            </div>
          </div>
        </div>

        {/* Transporte Local */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Transporte Local Recomendado
          </h3>
          
          <div className="space-y-4 text-center">
            <p className="text-gray-700 mb-6">
              Para moverse por Llanogrande y alrededores, te recomendamos:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-wedding-cream rounded-lg">
                <p className="font-semibold mb-2">Uber / DiDi</p>
                <p className="text-sm text-gray-600">Aplicaciones de transporte</p>
              </div>
              <div className="p-4 bg-wedding-cream rounded-lg">
                <p className="font-semibold mb-2">Taxi</p>
                <p className="text-sm text-gray-600">Sitios oficiales recomendados</p>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg text-left">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Nota importante:</span> Un taxi desde Medellín hasta el lugar del evento 
                puede superar los $100.000 pesos por trayecto. Ten esto en cuenta al escoger tu hospedaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

