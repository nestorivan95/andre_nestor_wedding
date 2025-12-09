/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'wedding-cream': '#F2EDEB',      // Color base (mantener el original)
        'wedding-beige': '#E8F0E5',      // Verde claro suave
        'wedding-light': '#F5F9F0',      // Verde muy claro
        'wedding-rose': '#D5E5D0',       // Verde pastel suave
        'wedding-gold': '#7A9A7F',       // Verde medio elegante (acento principal)
        'wedding-accent': '#6B8A6F',     // Verde más oscuro para contrastes
        'wedding-green': '#8BAF8F',      // Verde suave medio
      },
      fontFamily: {
        'elegant': ['Playfair Display', 'serif'],
        'wedding': ['Dancing Script', 'cursive'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

