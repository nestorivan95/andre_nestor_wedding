'use client'

import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  guests: string
  dietaryRestrictions: string
  message: string
}

export default function RSVP() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    guests: '1',
    dietaryRestrictions: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo electrónico válido'
    }

    if (!formData.guests || parseInt(formData.guests) < 1) {
      newErrors.guests = 'Debe haber al menos 1 invitado'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulación de envío - En producción, aquí harías una llamada a tu API
    // Opciones:
    // 1. Usar un servicio como Formspree, EmailJS, o similar
    // 2. Crear un endpoint en tu backend
    // 3. Usar un servicio serverless (Vercel Functions, Netlify Functions)
    
    try {
      // Ejemplo con Formspree (necesitarías crear una cuenta y obtener un endpoint)
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Por ahora, simulamos el envío exitoso
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log('RSVP Data:', formData) // En desarrollo, puedes ver los datos en la consola
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        guests: '1',
        dietaryRestrictions: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Hubo un error al enviar tu confirmación. Por favor intenta de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section
        id="rsvp"
        className="section-container bg-gradient-to-b from-wedding-beige to-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <div className="text-6xl mb-6">💕</div>
            <h2 className="text-4xl font-elegant text-wedding-gold mb-4">
              ¡Gracias por confirmar!
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Tu confirmación ha sido recibida. Estamos muy emocionados de
              celebrar este día especial contigo.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Enviar otra confirmación
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="rsvp"
      className="section-container bg-gradient-to-b from-wedding-beige to-white"
    >
      <h2 className="section-title">Confirmación de Asistencia</h2>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-center text-gray-700 mb-8 text-lg">
            Por favor confirma tu asistencia antes del 1 de Junio de 2024.
            Tu respuesta nos ayudará a organizar mejor este día especial.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name ? 'border-red-400' : 'border-gray-300'
                } focus:outline-none focus:border-wedding-gold transition-colors`}
                placeholder="Tu nombre completo"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.email ? 'border-red-400' : 'border-gray-300'
                } focus:outline-none focus:border-wedding-gold transition-colors`}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Número de Acompañantes */}
            <div>
              <label htmlFor="guests" className="block text-gray-700 font-semibold mb-2">
                Número de Acompañantes *
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.guests ? 'border-red-400' : 'border-gray-300'
                } focus:outline-none focus:border-wedding-gold transition-colors`}
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'persona' : 'personas'}
                  </option>
                ))}
              </select>
              {errors.guests && (
                <p className="text-red-500 text-sm mt-1">{errors.guests}</p>
              )}
            </div>

            {/* Restricciones Alimentarias */}
            <div>
              <label htmlFor="dietaryRestrictions" className="block text-gray-700 font-semibold mb-2">
                Restricciones Alimentarias
              </label>
              <input
                type="text"
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-wedding-gold transition-colors"
                placeholder="Ej: Vegetariano, Sin gluten, Alergias, etc."
              />
              <p className="text-gray-500 text-sm mt-1">
                Por favor indícanos si tienes alguna restricción alimentaria
              </p>
            </div>

            {/* Mensaje Opcional */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Mensaje (Opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-wedding-gold transition-colors resize-none"
                placeholder="Déjanos un mensaje especial..."
              />
            </div>

            {/* Botón de Envío */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
              </button>
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            * Campos obligatorios
          </p>
        </div>
      </div>
    </section>
  )
}

