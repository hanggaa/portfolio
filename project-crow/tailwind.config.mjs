/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        // Menggunakan CSS Variables agar responsif terhadap Light/Dark mode
        'brand-bg': 'var(--color-brand-bg)', 
        'brand-surface': 'var(--color-brand-surface)', 
        'brand-background': 'var(--color-brand-background)',
        'brand-outline': 'var(--color-brand-outline)',
        'brand-text-primary': 'var(--color-brand-text-primary)', 
        'brand-text-secondary': 'var(--color-brand-text-secondary)',

        // Static colors
        'brand-primary': '#A855F7', 
        'brand-secondary': '#6C3BAA',
        'brand-accent-yes': '#39D393', 
        'brand-accent-no': '#F87171',
      },
      fontFamily: { sans: ['"Space Grotesk"', 'sans-serif'] },
      boxShadow: {
        'glow-primary': '0 0 15px 5px rgba(168, 85, 247, 0.2)',
      },
      keyframes: { 
        'fade-in': { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' }, // Jarak tempuh lebih jauh
        }
      },
      animation: { 
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'text-shimmer': 'text-shimmer 2.5s linear infinite', // Linear & Infinite loop (bukan bolak-balik) agar seperti sapuan cahaya
      },
    },
  },
  plugins: [],
}
