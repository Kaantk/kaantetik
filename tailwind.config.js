/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          lighest: "#f3f7fb",
          dark: "#004990",
        },
        black: {
          light: "#24262f",
          lightest: "#000000cc",
        },
        purple: {
          light: "#6e06f266",
          dark: "#6e06f2",
        },
      },
      transitionDuration: {
        800: "800ms",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      perspective: {
        1000: "1000px",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      rotateY: {
        180: "180deg",
      },
    },
    variants: {
      extend: {
        transform: ["group-hover"],
      },
    },
  },
  plugins: [],
};
