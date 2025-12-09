'use client'

export default function EventDetails() {
  return (
    <section
      id="detalles"
      className="section-container bg-gradient-to-b from-white to-wedding-beige"
    >
      <h2 className="section-title">Detalles del Evento</h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Día 1 - Sábado 16 de Mayo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Sábado, 16 de Mayo de 2026
          </h3>
          
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="p-6 bg-wedding-cream rounded-xl max-w-md mx-auto">
                <div className="text-wedding-gold text-3xl mb-3">⛪</div>
                <h4 className="font-semibold text-xl mb-2">Ceremonia Católica</h4>
                <p className="text-gray-700 text-lg">10:00 AM</p>
              </div>
            </div>

            {/* Ubicación Sábado */}
            <div className="border-t border-gray-200 pt-6">
              <h4 className="text-2xl font-elegant text-wedding-gold mb-4 text-center">
                Ubicación
              </h4>
              <div className="text-center space-y-4">
                <p className="text-xl font-semibold text-gray-800">
                  Parroquia Nuestra Señora de Chiquinquirá
                </p>
                <p className="text-lg text-gray-600">
                  Llanogrande, Antioquia
                </p>
                
                <div className="mt-4 bg-wedding-cream rounded-lg p-4 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📍</div>
                    <p className="text-gray-700 mb-4">
                      Haz clic en el botón para ver la ubicación en Google Maps
                    </p>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Parroquia+Nuestra+Señora+de+Chiquinquirá+Llanogrande+Antioquia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-secondary mt-4"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Día 2 - Domingo 17 de Mayo */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Domingo, 17 de Mayo de 2026
          </h3>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="p-6 bg-wedding-cream rounded-xl">
                <div className="text-wedding-gold text-2xl mb-2">💒</div>
                <h4 className="font-semibold text-lg mb-2">Ceremonia Simbólica</h4>
                <p className="text-gray-700">Por confirmar</p>
              </div>
              
              <div className="p-6 bg-wedding-cream rounded-xl">
                <div className="text-wedding-gold text-2xl mb-2">🥂</div>
                <h4 className="font-semibold text-lg mb-2">Cóctel</h4>
                <p className="text-gray-700">Por confirmar</p>
              </div>
              
              <div className="p-6 bg-wedding-cream rounded-xl">
                <div className="text-wedding-gold text-2xl mb-2">🎉</div>
                <h4 className="font-semibold text-lg mb-2">Fiesta</h4>
                <p className="text-gray-700">Por confirmar</p>
              </div>
            </div>

            {/* Ubicación Domingo */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <h4 className="text-2xl font-elegant text-wedding-gold mb-4 text-center">
                Ubicación
              </h4>
              <div className="text-center space-y-4">
                <p className="text-xl font-semibold text-gray-800">
                  SantaMonica Premium
                </p>
                <p className="text-lg text-gray-600">
                  Llanogrande, Antioquia
                </p>
                
                <div className="mt-4 bg-wedding-cream rounded-lg p-4 flex items-center justify-center min-h-[300px]">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📍</div>
                    <p className="text-gray-700 mb-4">
                      Haz clic en el botón para ver la ubicación en Google Maps
                    </p>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/search/?api=1&query=SantaMonica+Premium+Llanogrande+Antioquia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block btn-secondary mt-4"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Información Útil */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Información Útil
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-wedding-gold mr-2">🅿️</span>
                Estacionamiento
              </h4>
              <p className="text-gray-700">
                El salón cuenta con estacionamiento gratuito para todos los invitados.
                Te recomendamos llegar con 15 minutos de anticipación.
              </p>
            </div>
            
            <div className="p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-wedding-gold mr-2">⏰</span>
                Puntualidad
              </h4>
              <p className="text-gray-700">
                La ceremonia comenzará puntualmente a las 6:00 PM.
                Te agradecemos llegar a tiempo para no perderte ningún momento especial.
              </p>
            </div>
          </div>
        </div>

        {/* Dress Code */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Vestuario
          </h3>
          
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-xl font-semibold text-gray-800 mb-4">
                Formal Elegante
              </p>
              <p className="text-gray-700 mb-6">
                Queremos compartir contigo este día especial, por lo que te pedimos
                vestir de manera formal y elegante.
              </p>
            </div>

            <div className="mb-6 p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-3 text-center">
                👔 Para los Hombres
              </h4>
              <p className="text-gray-700 text-center">
                Smoking negro
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-400">
                <h4 className="font-semibold text-lg mb-3 text-green-800">
                  ✅ Colores Recomendados
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Tonos pastel suaves</li>
                  <li>• Beige, crema, rosa pálido</li>
                  <li>• Azul marino, gris elegante</li>
                  <li>• Dorado sutil como acento</li>
                </ul>
              </div>
              
              <div className="p-6 bg-red-50 rounded-xl border-l-4 border-red-400">
                <h4 className="font-semibold text-lg mb-3 text-red-800">
                  🚫 Colores Reservados
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Blanco (reservado para la novia)</li>
                  <li>• Negro total (preferimos colores más alegres)</li>
                  <li>• Colores muy brillantes o neón</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-6 bg-wedding-cream rounded-xl">
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <span className="text-wedding-gold mr-2">🌤️</span>
                Consideraciones del Clima
              </h4>
              <p className="text-gray-700">
                El evento será en interiores con clima controlado. Sin embargo,
                te recomendamos traer una chaqueta ligera por si acaso. El salón
                tiene piso de mármol, así que considera zapatos cómodos para bailar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

