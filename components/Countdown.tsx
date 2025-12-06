'use client'

import { useState, useEffect } from 'react'

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Fecha del matrimonio - 17 de mayo de 2026 a las 10:00 AM
    // Usando UTC para evitar problemas de zona horaria
    const targetDate = new Date('2026-05-17T10:00:00')
    
    const updateCountdown = () => {
      const now = new Date()
      const diff = targetDate.getTime() - now.getTime()

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    // Ejecutar inmediatamente
    updateCountdown()
    
    // Actualizar cada segundo
    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds },
  ]

  return (
    <section
      id="countdown"
      className="section-container bg-white py-20"
    >
      <h2 className="section-title">Cuenta Regresiva</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
        <div className="text-center p-6 md:p-8 bg-gradient-to-br from-wedding-beige to-wedding-cream rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-bold text-wedding-gold mb-2">
            {String(timeLeft.days).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
            Días
          </div>
        </div>
        
        <div className="text-center p-6 md:p-8 bg-gradient-to-br from-wedding-beige to-wedding-cream rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-bold text-wedding-gold mb-2">
            {String(timeLeft.hours).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
            Horas
          </div>
        </div>
        
        <div className="text-center p-6 md:p-8 bg-gradient-to-br from-wedding-beige to-wedding-cream rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-bold text-wedding-gold mb-2">
            {String(timeLeft.minutes).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
            Minutos
          </div>
        </div>
        
        <div className="text-center p-6 md:p-8 bg-gradient-to-br from-wedding-beige to-wedding-cream rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-bold text-wedding-gold mb-2">
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-sm md:text-base text-gray-600 font-medium uppercase tracking-wider">
            Segundos
          </div>
        </div>
      </div>

      <p className="text-center text-gray-600 mt-12 text-lg">
        Nos vemos muy pronto
      </p>
    </section>
  )
}

