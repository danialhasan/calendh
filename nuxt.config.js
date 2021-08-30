module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Calendh - App",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/firebase",
  ],

  firebase: {
    config: {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "",
      appId: "",
    },
    services: {
      auth: true, // Just as example. Can be any other service.
      firestore: true,
      functions: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: "_nuxt",
    extractCss: true,
    babel: {
      presets: ({ isServer }) => [
        [
          "@nuxt/babel-preset-app",
          {
            targets: isServer
              ? { node: "14.17.5" }
              : { browsers: ["defaults"] },
          },
        ],
      ],
    },
  },
};
