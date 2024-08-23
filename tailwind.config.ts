import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'primary-main': 'var(--color-primary-main)',
        'primary-hovered': 'var(--color-primary-hovered)',
        'primary-disabled': 'var(--color-primary-disabled)',
        'secondary-main': 'var(--color-secondary-main)',
        'secondary-hovered': 'var(--color-secondary-hovered)',
        'secondary-disabled': 'var(--color-secondary-disabled)',
        'tertiary-main': 'var(--color-tertiary-main)',
        'tertiary-hovered': 'var(--color-tertiary-hovered)',
        'tertiary-disabled': 'var(--color-tertiary-disabled)',
        'red-main': 'var(--color-red-main)',
        'red-hovered': 'var(--color-red-hovered)',
        'red-disabled': 'var(--color-red-disabled)',
        'green-main': 'var(--color-green-main)',
        'green-hovered': 'var(--color-green-hovered)',
        'green-disabled': 'var(--color-green-disabled)',
        'blue-main': 'var(--color-blue-main)',
        'blue-hovered': 'var(--color-blue-hovered)',
        'blue-disabled': 'var(--color-blue-disabled)',
        'yellow-main': 'var(--color-yellow-main)',
        'yellow-hovered': 'var(--color-yellow-hovered)',
        'yellow-disabled': 'var(--color-yellow-disabled)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config