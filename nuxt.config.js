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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.css",
      },
    ],
    script: [
      {
        src: "https://www.gstatic.com/firebasejs/ui/4.8.1/firebase-ui-auth.js",
      },
      {
        src: "https://kit.fontawesome.com/e674c7fc1d.js",
        crossorigin: "anonymous",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/firebase",
  ],
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: "calendh-xyz.firebaseapp.com",
      projectId: "calendh-xyz",
      storageBucket: "calendh-xyz.appspot.com",
      messagingSenderId: "707209656771",
      appId: process.env.FIREBASE_APP_ID,
    },
    services: {
      auth: { ssr: true }, // Just as example. Can be any other service.
      firestore: true,
      functions: true,
      hosting: true,
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
