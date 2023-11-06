/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
    },
    extend: {
      maxWidth: {
        mobile: "435px",
        desktop: "1440px",
      },
      colors: {
        primary: "hsl(10, 79%, 65%)",
        secondary: "hsl(186, 34%, 60%)",
        neutral: {
          DEFAULT: "hsl(33, 100%, 98%) ",
          100: "hsl(27, 66%, 92%)",
          200: "hsl(28, 10%, 53%)",
          300: "hsl(25, 47%, 15%)",
        },
      },
    },
  },
  plugins: [],
};
