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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        switch: {
          background: "var(--color-switch-background)"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          main: 'var(--color-primary-main)',
          hovered: 'var(--color-primary-hovered)',
          disabled: 'var(--color-primary-disabled)'
        },
        secondary: {
          main: 'var(--color-secondary-main)',
          hovered: 'var(--color-secondary-hovered)',
          disabled: 'var(--color-secondary-disabled)'
        },
        tertiary: {
          main: 'var(--color-tertiary-main)',
          hovered: 'var(--color-tertiary-hovered)',
          disabled: 'var(--color-tertiary-disabled)'
        },
        red: {
          main: 'var(--color-red-main)',
          hovered: 'var(--color-red-hovered)',
          disabled: 'var(--color-red-disabled)'
        },
        green: {
          main: 'var(--color-green-main)',
          hovered: 'var(--color-green-hovered)',
          disabled: 'var(--color-green-disabled)'
        },
        blue: {
          main: 'var(--color-blue-main)',
          hovered: 'var(--color-blue-hovered)',
          disabled: 'var(--color-blue-disabled)'
        },
        yellow: {
          main: 'var(--color-yellow-main)',
          hovered: 'var(--color-yellow-hovered)',
          disabled: 'var(--color-yellow-disabled)'
        },
        neutral: 'var(--color-neutral)'
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