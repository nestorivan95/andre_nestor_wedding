'use client'

import { useState } from 'react'

interface FAQ {
  question: string
  answer: string
}

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      question: '¿Hasta cuándo puedo confirmar mi asistencia?',
      answer: 'Agradecemos que puedas confirmar tu asistencia antes del 1 de abril del 2026, para poder organizar todos los detalles adecuadamente.',
    },
    {
      question: '¿Habrá comida vegetariana/vegana?',
      answer: 'Sí, contamos con opciones vegetarianas y veganas. Solo indícalo al registrar tu RSVP y lo tendremos considerado para tu menú.',
    },
    {
      question: '¿Dónde puedo estacionar?',
      answer: 'El lugar cuenta con estacionamiento. Los cupos son limitados, llega 30 minutos antes para poder asegurar tu cupo.',
    },
    {
      question: '¿Qué pasa si no puedo asistir?',
      answer: 'No te preocupes, solo te pedimos registrar tu respuesta en el RSVP.',
    },
    {
      question: '¿Puedo llevar niños?',
      answer: 'Por temas de logística y para que todos puedan disfrutar plenamente, el evento será exclusivamente para adultos. ¡Agradecemos tu comprensión!',
    },
    {
      question: '¿Qué tan lejos está el recinto de la ciudad/hoteles principales?',
      answer: 'Desde Medellín (Centro Comercial El Tesoro) está a 50 minutos - 1 hora del lugar. Ten en cuenta que pueden haber retrasos, así que planea bien tus recorridos. Desde Llanogrande son 10-15 minutos.',
    },
    {
      question: '¿La ceremonia y la recepción serán en el mismo lugar?',
      answer: 'La boda católica será en la Parroquia el sábado 16 de mayo. Mientras que la ceremonia simbólica, cóctel y la fiesta se van a realizar el 17 de mayo en el mismo lugar, en Santa Monica Premium.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section
      id="rsvp"
      className="section-container bg-white"
    >
      <h2 className="section-title">RSVP</h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Información de Contacto */}
        <div className="bg-gradient-to-br from-wedding-beige to-wedding-cream rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
            Confirmación de Asistencia
          </h3>
          
          <p className="text-center text-gray-700 mb-8 text-lg">
            Por favor, comunícate con alguno de los novios para confirmar tu asistencia.
            En tu confirmación, indícanos si asistirás a ambos días (16 y 17 de mayo) o solo a uno,
            especificando cuál día.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">👰🏻‍♀️</div>
              <h4 className="font-semibold text-xl mb-2">Andrea Guzmán</h4>
              <a
                href="mailto:andreitagga98@gmail.com"
                className="text-wedding-gold hover:underline block mt-4"
              >
                andreitagga98@gmail.com
              </a>
              <a
                href="tel:+573188896092"
                className="text-gray-700 hover:text-wedding-gold block mt-2"
              >
                +57 318 889-6092
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">🤵🏻‍♂️</div>
              <h4 className="font-semibold text-xl mb-2">Néstor Ramírez</h4>
              <a
                href="mailto:nestorivan00@gmail.com"
                className="text-wedding-gold hover:underline block mt-4"
              >
                nestorivan00@gmail.com
              </a>
              <a
                href="tel:+573046495050"
                className="text-gray-700 hover:text-wedding-gold block mt-2"
              >
                +57 304 649-5050
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300">
            <h4 className="text-2xl font-elegant text-wedding-gold mb-4 text-center">
              ¿Tienes alguna pregunta?
            </h4>
            <p className="text-center text-gray-700 text-lg">
              Si tienes alguna duda o necesitas más información, no dudes en contactarnos.
              Estaremos encantados de ayudarte.
            </p>
          </div>
        </div>

        {/* Preguntas Frecuentes */}
        <div id="faq" className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-8 text-center">
            Preguntas Frecuentes
          </h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 bg-wedding-cream hover:bg-wedding-beige transition-colors flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-wedding-gold text-xl flex-shrink-0">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {openFAQ === index && (
                  <div className="p-6 bg-white text-gray-700 animate-fade-in-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-16 pt-8 border-t border-gray-300">
        <p className="text-gray-600 mb-2">
          Hecho por Andrea & Néstor
        </p>
        <p className="text-gray-500 text-sm">
          © 2025 - Todos los derechos reservados
        </p>
      </footer>
    </section>
  )
}

