import type { Config } from "tailwindcss";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      minHeight: {
        screen: "100dvh",
        nav: "var(--nav-size)",
        "nav-screen": "calc(100dvh - var(--nav-size))",
      },
      height: {
        screen: "100dvh",
        nav: "var(--nav-size)",
        "nav-screen": "calc(100dvh - var(--nav-size))",
      },
      colors: {
        blue: {
          paraiso: "#5DA0D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-syne)", ...defaultTheme.fontFamily.sans],
        cedarville: ["var(--font-cedarville)", ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        paper: "repeating-linear-gradient(white 0px, white 35px, teal 36px)",
        cone: "conic-gradient(from 45deg at 50% 50%, rgb(93 160 212) 0deg, rgb(93 160 212) 2deg, rgb(93 160 212 / 0.2) 3deg, rgb(93 160 212 / 0.2) 87deg, rgb(93 160 212) 88deg, transparent 90deg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
