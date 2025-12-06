'use client'

export default function Gifts() {
  return (
    <section
      id="regalos"
      className="section-container bg-white"
    >
      <h2 className="section-title">Regalos</h2>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-wedding-beige to-wedding-cream rounded-2xl shadow-lg p-8 md:p-12 text-center">
          <div className="text-5xl mb-6">🎁</div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Tu presencia es el mejor regalo que podemos recibir. Sin embargo,
            si deseas hacernos un obsequio, te compartimos algunas opciones.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Lista de Regalos */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-elegant text-wedding-gold mb-4">
                Lista de Regalos
              </h3>
              <p className="text-gray-700 mb-6">
                Puedes visitar nuestra lista de regalos en las siguientes tiendas:
              </p>
              <div className="space-y-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block btn-secondary"
                >
                  Ver Lista de Regalos
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Agrega aquí el enlace a tu lista de regalos
              </p>
            </div>

            {/* Lluvia de Sobres */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-elegant text-wedding-gold mb-4">
                Lluvia de Sobres
              </h3>
              <p className="text-gray-700 mb-6">
                Si prefieres hacer un regalo en efectivo, puedes entregarlo el día del evento
                o hacer una transferencia bancaria usando los siguientes datos:
              </p>
              <div className="text-left space-y-3 bg-wedding-cream p-6 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-800">Banco:</p>
                  <p className="text-gray-700">Por confirmar</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Número de cuenta:</p>
                  <p className="text-gray-700 font-mono">Por confirmar</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Titular:</p>
                  <p className="text-gray-700">Andrea & Néstor</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Los datos bancarios se actualizarán próximamente
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-lg text-gray-600 italic">
              "El mejor regalo es compartir este momento con nosotros"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

