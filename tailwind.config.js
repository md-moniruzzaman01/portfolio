module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        
        'custom-secondary':'rgb(109, 131, 242)',
        'custom-bg':'#EAF0FC',
      },
      daisyui: {
        themes: [
          {
            mytheme: {

              "primary": "#1e9ce9",

              "secondary": "#D926A9",

              "accent": "#0d2561",

              "neutral": "#191D24",

              "base-100": "#2A303C",

              "info": "#dff3fc",

              "success": "#dcf2ff",

              "warning": "#FBBD23",

              "error": "#F87272",
            },
          },
        ],
      },
    },
  },
  plugins: [require("daisyui")],
}
