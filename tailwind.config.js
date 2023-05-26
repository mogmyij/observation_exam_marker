/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        baseBlue: "#273043",
        baseGrey: "#9197AE",
        baseWhite: "#EFF6EE",
        baseRed: "#B80C09",
        baseGreen: "#659157",
      },
      gridTemplateColumns:{
        "32": "repeat(32,minmax(0,1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
        "span-18": "span 18 / span 18",
        "span-19": "span 19 / span 19",
        "span-20": "span 20 / span 20",
        "span-21": "span 21 / span 21",
        "span-22": "span 22 / span 22",
        "span-23": "span 23 / span 23",
        "span-24": "span 24 / span 24",
        "span-25": "span 25 / span 25",
        "span-26": "span 26 / span 26",
        "span-27": "span 27 / span 27",
        "span-28": "span 28 / span 28",
        "span-29": "span 29 / span 29",
        "span-30": "span 30 / span 30",
        "span-31": "span 31 / span 31",
        "span-32": "span 32 / span 32",
      },
    },
  },
  plugins: [],
};
