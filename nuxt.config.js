export default {
  ssr: false,
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
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true },
      { href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap", rel: "stylesheet" }
    ],
    script: [
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
      }
    ]
  },
  css: ['@/styles/global'],
  components: true,
  router: {
    base: '/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  generate: {
    dir: './dist_server'
  },
  build: {
    target: 'static'
  }
}
