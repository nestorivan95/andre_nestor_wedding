'use client'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-wedding-cream via-wedding-beige to-white relative overflow-hidden"
    >
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-wedding-rose opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-wedding-gold opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center z-10 animate-fade-in-up px-4">
        <div className="mb-16 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-wedding text-gray-800 mb-4 italic">
            Andrea
          </h1>
          <div className="text-3xl md:text-4xl text-wedding-gold mb-4 font-wedding italic">&</div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-wedding text-gray-800 mb-8 italic">
            Néstor
          </h1>
        </div>

        <div className="mb-8 space-y-2">
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            Nos casamos
          </p>
          <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
            17 de Mayo
          </p>
          <p className="text-lg md:text-xl text-gray-600 font-light">
            Llanogrande, Antioquia
          </p>
        </div>
      </div>
    </section>
  )
}

