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
      answer: 'Te pedimos que confirmes tu asistencia antes del 1 de Junio de 2024 para poder organizar mejor el evento.',
    },
    {
      question: '¿Puedo llevar acompañantes?',
      answer: 'Sí, puedes indicar el número de acompañantes en el formulario de RSVP. Por favor confirma solo el número de personas que realmente asistirán.',
    },
    {
      question: '¿Habrá comida vegetariana/vegana?',
      answer: 'Sí, por supuesto. Por favor indica tus restricciones alimentarias en el formulario de RSVP y nos aseguraremos de tener opciones para ti.',
    },
    {
      question: '¿Dónde puedo estacionar?',
      answer: 'El salón cuenta con estacionamiento gratuito para todos los invitados. Te recomendamos llegar con 15 minutos de anticipación.',
    },
    {
      question: '¿Puedo tomar fotos durante la ceremonia?',
      answer: 'Durante la ceremonia, preferimos que no se tomen fotos para que todos puedan disfrutar del momento. Tendremos un fotógrafo profesional. Sin embargo, durante la fiesta, ¡siéntete libre de tomar todas las fotos que quieras!',
    },
    {
      question: '¿Qué pasa si no puedo asistir?',
      answer: 'Entendemos que pueden surgir imprevistos. Por favor avísanos lo antes posible para que podamos ajustar los planes. Puedes contactarnos usando la información de contacto a continuación.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section
      id="contacto"
      className="section-container bg-white"
    >
      <h2 className="section-title">Contacto</h2>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Información de Contacto */}
        <div className="bg-gradient-to-br from-wedding-beige to-wedding-cream rounded-2xl shadow-lg p-8 md:p-12">
          <h3 className="text-3xl font-elegant text-wedding-gold mb-8 text-center">
            ¿Tienes alguna pregunta?
          </h3>
          
          <p className="text-center text-gray-700 mb-8 text-lg">
            Si tienes alguna duda o necesitas más información, no dudes en contactarnos.
            Estaremos encantados de ayudarte.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">👰</div>
              <h4 className="font-semibold text-xl mb-2">Andr</h4>
              <p className="text-gray-600 mb-3">Novia</p>
              <a
                href="mailto:andre@ejemplo.com"
                className="text-wedding-gold hover:underline block"
              >
                andre@ejemplo.com
              </a>
              <a
                href="tel:+5215512345678"
                className="text-gray-700 hover:text-wedding-gold block mt-2"
              >
                +52 55 1234 5678
              </a>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-md">
              <div className="text-4xl mb-4">🤵</div>
              <h4 className="font-semibold text-xl mb-2">Nestor</h4>
              <p className="text-gray-600 mb-3">Novio</p>
              <a
                href="mailto:nestor@ejemplo.com"
                className="text-wedding-gold hover:underline block"
              >
                nestor@ejemplo.com
              </a>
              <a
                href="tel:+5215598765432"
                className="text-gray-700 hover:text-wedding-gold block mt-2"
              >
                +52 55 9876 5432
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            * Reemplaza estos datos de contacto con tus datos reales
          </p>
        </div>

        {/* Preguntas Frecuentes */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
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

