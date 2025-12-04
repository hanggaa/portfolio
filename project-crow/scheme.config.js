/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0D0C12', 
        'brand-surface': '#1A1822', 
        'brand-background': '#0F0E14',
        'brand-outline': '#332E44',
        'brand-primary': '#A855F7', 'brand-secondary': '#6C3BAA',
        'brand-accent-yes': '#39D393', 'brand-accent-no': '#F87171',
        'brand-text-primary': '#E5E7EB', 'brand-text-secondary': '#9CA3AF',
      },
      fontFamily: { sans: ['"Space Grotesk"', 'sans-serif'] },
      boxShadow: {
        'glow-primary': '0 0 15px 5px rgba(168, 85, 247, 0.2)',
      },
      keyframes: { 'fade-in': { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } } },
      animation: { 'fade-in': 'fade-in 0.5s ease-out forwards' },
    },
  },
  plugins: [],
}