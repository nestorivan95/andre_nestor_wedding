# 💕 Página Web de Boda - Andrea & Nestor

Una página web elegante, minimalista y moderna para celebrar nuestra boda. Desarrollada con Next.js, React y Tailwind CSS.

## ✨ Características

- 🎨 Diseño minimalista, moderno y romántico
- 📱 Completamente responsive (móvil, tablet, desktop)
- ⏰ Cuenta regresiva animada hacia la fecha del matrimonio
- 📝 Formulario RSVP con validaciones
- 🗺️ Integración con Google Maps
- 🎁 Sección de regalos y datos bancarios
- 🏨 Información de viaje y alojamiento
- ❓ FAQ interactivo
- 🚀 Optimizado para producción

## 🚀 Instalación y Ejecución Local

### Prerrequisitos

- Node.js 18.x o superior
- npm, yarn o pnpm

### Pasos

1. **Instalar dependencias:**
   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

4. **Compilar para producción:**
   ```bash
   npm run build
   npm start
   ```

## 📝 Personalización

### Cambiar la Fecha del Matrimonio

1. **En `components/Countdown.tsx`:**
   ```typescript
   const weddingDate = new Date('2024-06-15T18:00:00').getTime()
   ```
   Cambia la fecha y hora según tu evento.

2. **En `components/Hero.tsx`:**
   ```typescript
   <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
     15 de Junio, 2024
   </p>
   ```

3. **En `components/EventDetails.tsx`:**
   Actualiza la fecha y horarios del evento.

### Cambiar Nombres de los Novios

Edita `components/Hero.tsx`:
```typescript
<h1 className="...">Andrea</h1>
<h1 className="...">Néstor</h1>
```

### Actualizar Ubicación

1. **En `components/Hero.tsx`:**
   ```typescript
   <p className="...">Ciudad de México</p>
   ```

2. **En `components/EventDetails.tsx`:**
   Actualiza la dirección y el enlace de Google Maps.

### Configurar el Formulario RSVP

El formulario RSVP actualmente muestra los datos en la consola. Para enviar los datos a un servidor, tienes varias opciones:

#### Opción 1: Usar Formspree (Recomendado para empezar rápido)

1. Crea una cuenta en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario y obtén tu endpoint
3. En `components/RSVP.tsx`, descomenta y actualiza:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```

#### Opción 2: Usar EmailJS

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email
3. Instala el SDK: `npm install @emailjs/browser`
4. Actualiza `components/RSVP.tsx` para usar EmailJS

#### Opción 3: Crear un API Route (Next.js)

1. Crea `app/api/rsvp/route.ts`:
   ```typescript
   import { NextResponse } from 'next/server'
   
   export async function POST(request: Request) {
     const data = await request.json()
     // Enviar email o guardar en base de datos
     return NextResponse.json({ success: true })
   }
   ```

2. En `components/RSVP.tsx`:
   ```typescript
   const response = await fetch('/api/rsvp', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   })
   ```

### Actualizar Información de Contacto

Edita `components/Contact.tsx` con tus datos reales:
- Emails
- Teléfonos
- Nombres

### Actualizar Datos Bancarios

Edita `components/Gifts.tsx` con:
- Enlaces reales a mesas de regalos
- Datos bancarios reales (CLABE, cuenta, banco)

### Actualizar Hoteles

Edita `components/TravelInfo.tsx` con:
- Hoteles reales en tu ciudad
- Tarifas especiales
- Información de contacto

## 🚀 Despliegue

### Vercel (Recomendado - Gratis)

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Despliega:**
   ```bash
   vercel
   ```

3. **O conecta tu repositorio GitHub:**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio
   - Vercel detectará Next.js automáticamente
   - ¡Listo! Tu sitio estará en línea

### Netlify

1. **Instala Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Compila el proyecto:**
   ```bash
   npm run build
   ```

3. **Despliega:**
   ```bash
   netlify deploy --prod
   ```

4. **O usa la interfaz web:**
   - Ve a [netlify.com](https://netlify.com)
   - Arrastra la carpeta `.next` después de `npm run build`
   - O conecta tu repositorio GitHub

### Otros Proveedores

- **GitHub Pages:** Requiere configuración adicional (usar `next export`)
- **AWS Amplify:** Soporta Next.js nativamente
- **Railway:** Fácil despliegue con Docker

## 📁 Estructura del Proyecto

```
andre_nestor_wedding/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y Tailwind
├── components/
│   ├── Navigation.tsx      # Barra de navegación
│   ├── Hero.tsx            # Portada/Inicio
│   ├── Countdown.tsx       # Cuenta regresiva
│   ├── EventDetails.tsx    # Detalles del evento
│   ├── RSVP.tsx            # Formulario de confirmación
│   ├── Gifts.tsx           # Sección de regalos
│   ├── TravelInfo.tsx      # Información de viaje
│   └── Contact.tsx         # Contacto y FAQ
├── package.json
├── tailwind.config.js      # Configuración de Tailwind
└── README.md
```

## 🎨 Personalización de Colores

Los colores están definidos en `tailwind.config.js`:

```javascript
colors: {
  'wedding-beige': '#F5F1EB',
  'wedding-rose': '#F4E6E6',
  'wedding-gold': '#D4AF37',
  'wedding-cream': '#FFF8F0',
}
```

Puedes cambiar estos valores según tu paleta de colores preferida.

## 📱 Responsive Design

La página está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1280px+)

## 🔧 Tecnologías Utilizadas

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utility-first
- **Google Fonts** - Playfair Display & Lato

## 📄 Licencia

Este proyecto es de uso personal para la boda de Andrea & Nestor.

## 💡 Notas

- Todos los datos de ejemplo (emails, teléfonos, direcciones) deben ser reemplazados con información real
- El formulario RSVP necesita configuración adicional para enviar emails (ver sección de personalización)
- Las imágenes pueden ser agregadas en la carpeta `public/` y referenciadas desde los componentes
- Considera agregar un favicon personalizado en `app/icon.png` o `app/favicon.ico`

## 🆘 Soporte

Si tienes preguntas o necesitas ayuda, revisa la documentación de:
- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev)

---

Hecho con 💕 para Andrea & Nestor
