/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '1/2': '50%',
        '3/2': '150%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
    },
  },
  daisyui: {
    themes: [
      {
        'mytheme': {
          "primary": "#073b4c",
          "secondary": "#118ab2",
          "accent": "#79bae0",
          "neutral": "#1d283a",
          "base-100": "#0f1729",
          "info": "#b7d3f2",
          "success": "#00798C",
          "warning": "#ffd166",
          "error": "#ef476f",
          "gray": "#C9CACF"
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
}
