export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Financial Match | Apply for Your ERC Credit Today!',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Financial Match | Apply for Your ERC Credit Today!' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "facebook-domain-verification", content: "kiopg5rxifn74adikb3gbcqtbnreck" }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },
  styleResources: {
    scss: ['styles/_mixins.scss', 'styles/_vars.scss'],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/styles/global'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'nuxt-sweetalert2', '@nuxtjs/style-resources'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  env: {
    API: process.env.API,
    campid: process.env.campid,
    X_KEY: process.env.X_KEY,
  },
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },
  serverMiddleware: ['~/api/index.js'],
}
