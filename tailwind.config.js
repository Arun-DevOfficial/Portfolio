/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-1': '#f0f0f0',
        'white-2': '#ffffff',
        'light-gray-70': '#b0b0b0',
        'light-gray': '#d0d0d0',
        'orange-yellow-crayola': '#ffca28',
        'onyx': '#353839',
        'jet': '#343a40',
        'bg-gradient-onyx': 'linear-gradient(to right, #434343, #000000)',
        'border-gradient-onyx': 'linear-gradient(to right, #434343, #000000)',
        'bg-gradient-yellow-1': 'linear-gradient(to right, #ffeb3b, #ffc107)',
        'bg-gradient-yellow-2': 'linear-gradient(to right, #ffc107, #ff9800)',
      },
      fontSize: {
        'fs-3': '1.875rem',
        'fs-7': '1.125rem',
        'fs-8': '1rem',
      },
      fontWeight: {
        'fw-300': 300,
        'fw-500': 500,
      },
      transitionDuration: {
        'transition-1': '150ms',
        'transition-2': '300ms',
      },
      boxShadow: {
        'shadow-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      spacing: {
        '15': '15px',
        '16': '16px',
      },
    },
  },
  plugins: [],
}
