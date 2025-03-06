import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{astro,html,js,ts,jsx,tsx,md,mdx,svelte}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        white: "#FFFFFF",
        black: "#000000",
        red: "#FF6156",
        yellow: "#FFBD2B",
        green: "#2CCA3E",
        teal: "#8DB4AF",
        pink: "#FFE4E9",
        grey: {
          "100": "#F3F3F3",
          "200": "#E8E8E8",
          "300": "#CED1D8",
          "400": "#90A0B0",
          "500": "#64748B",
          "600": "#4B5563",
          "700": "#3F3F46",
          "800": "#27272A",
          "900": "#18181B",
          "950": "#09090B",
        },
        screens: {
          xm: "376px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1920px",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        Pretendard: ["Pretendard", "sans-serif"],
        Overpass: ["Overpass", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function myPlugin({
      addUtilities,
    }: {
      addUtilities: (
        utilities: Record<string, Record<string, string>>,
        options?: {
          variants?: string[];
          respectPrefix?: boolean;
          respectImportant?: boolean;
        },
      ) => void;
    }) {
      addUtilities({
        ".theme-bg": {
          "@apply bg-grey-100 dark:bg-grey-900": "",
        },
        ".theme-nav": {
          "@apply text-grey-700 dark:text-grey-100": "",
        },
        ".theme-title": {
          "@apply bg-grey-100 dark:bg-black": "",
        },
        ".theme-content-bg": {
          "@apply bg-white dark:bg-grey-800": "",
        },
        ".theme-line": {
          "@apply border-grey-300 dark:border-grey-700": "",
        },
        ".theme-line-light": {
          "@apply border-grey-300 dark:border-grey-400": "",
        },
        ".theme-content-address": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-footer-bg": {
          "@apply bg-white dark:bg-grey-800": "",
        },
        ".theme-footer-nav": {
          "@apply text-grey-500 dark:text-grey-200": "",
        },
        ".theme-footer-menu": {
          "@apply text-grey-400 dark:text-grey-300": "",
        },
        ".theme-footer-rights": {
          "@apply text-grey-500 dark:text-grey-300": "",
        },
        ".theme-footer-catchphrase": {
          "@apply text-grey-500 dark:text-grey-300": "",
        },
        ".theme-footer-line": {
          "@apply border-grey-300 dark:border-grey-700": "",
        },
        ".theme-menu-nickname": {
          "@apply text-grey-700 dark:text-grey-100": "",
        },
        ".theme-nickname": {
          "@apply text-grey-700 dark:text-grey-100": "",
        },
        ".theme-menu-email": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-email": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-menu-line": {
          "@apply border-grey-300 dark:border-grey-700": "",
        },
        ".theme-menu-menu": {
          "@apply text-grey-500 dark:text-grey-300": "",
        },
        ".theme-menu-chevron": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-feedback-button-checked": {
          "@apply bg-grey-600 dark:bg-grey-400": "",
        },
        ".theme-feedback-button-unchecked": {
          "@apply bg-grey-300 text-grey-600 dark:bg-grey-800 dark:text-grey-300":
            "",
        },
        ".theme-feedback-nav": {
          "@apply text-grey-700 dark:text-grey-900": "",
        },
        ".theme-edit-icon": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-feedback-title": {
          "@apply text-black dark:text-white": "",
        },
        ".theme-feedback-content": {
          "@apply text-grey-600 dark:text-grey-300": "",
        },
        ".theme-content-text": {
          "@apply text-grey-600 dark:text-grey-300": "",
        },
        ".theme-content-text-dark": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-feedback-user": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-feedback-filter": {
          "@apply text-grey-500 dark:text-grey-300": "",
        },
        ".theme-feedback-filter-answer-checked": {
          "@apply text-grey-900 dark:text-white": "",
        },
        ".theme-feedback-filter-answer-unchecked": {
          "@apply text-grey-500 dark:text-grey-300": "",
        },
        ".theme-feedback-filter-category": {
          "@apply text-grey-500 dark:text-grey-300": "",
        },
        ".theme-feedback-filter-search": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-feedback-filter-search-button": {
          "@apply bg-grey-800 dark:bg-grey-400": "",
        },
        ".theme-my-profile": {
          "@apply text-grey-700 dark:text-grey-300": "",
        },
        ".theme-my-profile-name": {
          "@apply text-grey-700 dark:text-grey-200": "",
        },
        ".theme-my-profile-email": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-my-profile-location-name": {
          "@apply text-grey-800 dark:text-grey-200": "",
        },
        ".theme-my-profile-location-address": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-category-title": {
          "@apply text-grey-700 dark:text-grey-200": "",
        },
        ".theme-label": {
          "@apply text-grey-500 dark:text-grey-300": "",
        },
        ".theme-label-dark": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-map-bg": {
          "@apply bg-white dark:bg-grey-900": "",
        },
        ".theme-map-content-text": {
          "@apply text-grey-500 dark:text-grey-200": "",
        },
        ".theme-camera-border": {
          "@apply border-grey-400 dark:border-grey-700": "",
        },
        ".theme-login-border": {
          "@apply border-grey-300 dark:border-grey-400": "",
        },
        ".theme-feedback-subject": {
          "@apply text-grey-950 dark:text-grey-100": "",
        },
        ".theme-date-text": {
          "@apply text-grey-500 dark:text-grey-400": "",
        },
        ".theme-comment-text": {
          "@apply text-grey-500 dark:text-grey-300": "",
        },
        ".theme-header-text": {
          "@apply text-grey-700 dark:text-grey-300": "",
        },
      });
    },
  ],
} satisfies Config;
