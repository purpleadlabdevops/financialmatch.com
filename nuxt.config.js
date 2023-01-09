export default {
  target: 'server',
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
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [
      {
        ssr: false,
        src: '/js/leadId.js',
        body: true,
        id: 'LeadiDscript'
      },
      {
        ssr: false,
        defer: true,
        hid: 'everflow',
        src: 'https://www.f98mmtrk.com/scripts/sdk/everflow.js',
        callback: () => {
          EF.click({
            offer_id: 1,
            affiliate_id: EF.urlParameter('affid'),
            sub1: EF.urlParameter('sub1'),
            sub2: EF.urlParameter('sub2'),
            sub3: EF.urlParameter('sub3'),
            sub4: EF.urlParameter('sub4'),
            sub5: EF.urlParameter('sub5'),
            uid: EF.urlParameter('uid'),
            source_id: EF.urlParameter('source_id'),
            transaction_id: EF.urlParameter('_ef_transaction_id')
          })
            .then(res => {
              console.dir(res)
              setTimeout(()=>{
                EF.conversion({
                  offer_id: 1,
                  event_id: 2
                })
                  .then(res => {
                    console.dir(res)
                  })
              }, 500);
            })
        }
      },
    ]
  },
  styleResources: {
    scss: ['~/assets/scss/_functions.scss']
  },
  plugins: [
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' },
    { src: '~/plugins/mg-animation.client.js' },
  ],
  css: ["~/assets/scss/global.scss"],
  components: true,
  router: {
    base: '/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },
  modules: ['@nuxtjs/axios', 'nuxt-sweetalert2', '@nuxtjs/style-resources'],
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
