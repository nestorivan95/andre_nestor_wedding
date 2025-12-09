'use client'

import { useState, useEffect } from 'react'
import Hero from './Hero'

const CORRECT_PASSWORD = 'AndreaNestor2026' // Cambia esto por tu contraseña deseada

export default function PasswordProtection({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    // Verificar si ya está autenticado (en sessionStorage)
    const auth = sessionStorage.getItem('wedding_auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('wedding_auth', 'true')
      setError(false)
    } else {
      setError(true)
      setPassword('')
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="section-container bg-white py-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-elegant text-wedding-gold mb-6 text-center">
              Acceso a la Invitación
            </h2>
            <p className="text-gray-700 mb-6 text-center">
              Por favor ingresa la contraseña para ver todos los detalles del evento.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError(false)
                  }}
                  className={`w-full px-4 py-3 rounded-lg border-2 ${
                    error ? 'border-red-400' : 'border-gray-300'
                  } focus:outline-none focus:border-wedding-gold transition-colors`}
                  placeholder="Ingresa la contraseña"
                  autoFocus
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-sm">
                    ❌ Contraseña incorrecta. Si tienes problemas para acceder, 
                    por favor contáctanos a través de WhatsApp.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary mt-4"
              >
                Acceder
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm mb-2">
                ¿Tienes problemas para acceder?
              </p>
              <p className="text-gray-700">
                Contáctanos directamente a través de WhatsApp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

