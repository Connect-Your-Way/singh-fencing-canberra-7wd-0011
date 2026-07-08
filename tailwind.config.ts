import type { Config } from "tailwindcss";

/**
 * Tailwind theme is a thin mapping over the CSS token layers in app/globals.css.
 * Utilities (bg-primary, text-foreground, border-border, ring-ring, ...) all
 * resolve to semantic tokens — components never carry raw hex/px values.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        border: "var(--color-border)",
        "border-strong": "var(--color-border-strong)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",

        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          hover: "var(--color-secondary-hover)",
          active: "var(--color-secondary-active)",
          foreground: "var(--color-secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          hover: "var(--color-accent-hover)",
          foreground: "var(--color-accent-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        surface: {
          warm: "var(--color-surface-warm)",
          muted: "var(--color-surface-muted)",
          dark: "var(--color-surface-dark)",
        },
        ondark: {
          DEFAULT: "var(--color-on-dark)",
          muted: "var(--color-on-dark-muted)",
          border: "var(--color-on-dark-border)",
        },
        // primitives exposed for the rare edge-case; prefer semantics above
        timber: {
          50: "var(--timber-50)",
          100: "var(--timber-100)",
          200: "var(--timber-200)",
          300: "var(--timber-300)",
          400: "var(--timber-400)",
          500: "var(--timber-500)",
          600: "var(--timber-600)",
          700: "var(--timber-700)",
          800: "var(--timber-800)",
          900: "var(--timber-900)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        base: "var(--transition-base)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
