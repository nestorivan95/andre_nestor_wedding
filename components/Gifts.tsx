'use client'

import { useState } from 'react'
import Image from 'next/image'
import qrCode from '@/img/qr_code.jpeg'

export default function Gifts() {
  const [showQr, setShowQr] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopyBreB = async () => {
    try {
      await navigator.clipboard.writeText('@andreag0825')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

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
            Te compartimos algunas opciones:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Lista de Regalos */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-elegant text-wedding-gold mb-4">
                Lista de Regalos
              </h3>
              <p className="text-gray-700 mb-6">
                A continuación puedes ver nuestra lista de regalos ingresando a Kadolist.
              </p>
              <a
                href="https://kadolist.com/events/matrimonio-andre-nestor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-secondary"
              >
                Ver lista de regalos
              </a>
            </div>

            {/* Lluvia de Sobres */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-elegant text-wedding-gold mb-4">
              Lluvia de Sobres
              </h3>
              <p className="text-gray-700 mb-6">
                Si prefieres hacer una transferencia, puedes usar los siguientes datos.
              </p>
              <div className="bg-wedding-cream rounded-lg p-4 text-left">
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Llave Bre-b:</span>{' '}
                  <span className="font-mono">@andreag0825</span>{' '}
                  <span className="text-gray-500 text-sm">(Bancolombia)</span>
                </p>
                <button
                  type="button"
                  onClick={handleCopyBreB}
                  className="btn-secondary text-xs px-4 py-2 mx-auto block"
                >
                  {copied ? 'Copiado' : 'Copiar llave'}
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowQr(true)}
                className="btn-secondary mt-4"
              >
                Ver código QR
              </button>
            </div>
          </div>
        </div>
      </div>

      {showQr && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setShowQr(false)}
        >
          <div
            className="bg-white rounded-xl p-4 max-w-md w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-semibold text-gray-800">Código QR</h4>
              <button
                type="button"
                onClick={() => setShowQr(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
            <Image
              src={qrCode}
              alt="Código QR Bancolombia"
              className="w-full h-auto rounded-lg"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}

