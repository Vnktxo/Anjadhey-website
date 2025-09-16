/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This is the most important part. It tells Tailwind where to look for classes.
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0D4C92',
        'primary-light': '#27B2DD',
        'accent-warm': '#FFC947',
        'accent-light': '#FEF9E7',
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08)',
        'custom-hover': '0 20px 30px -10px rgba(13, 76, 146, 0.25), 0 10px 15px -8px rgba(13, 76, 146, 0.2)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #0D4C92, #27B2DD)',
      },
       animation: {
        'bounce': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
}
