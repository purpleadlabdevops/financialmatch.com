<template>
    <div class="page page-index">
      <GreencallHeader />
      <GreencallContent />
      <Footer />
    </div>
  </template>
  <script>
  export default {
    layout: 'call',
    head(){
      return {
        script: [
          {
            ssr: false,
            hid: "everflow",
            defer: true,
            src: 'https://www.bls29trk.com/scripts/sdk/everflow.js',
            callback: () => {
              EF.click({
                offer_id: 135,
                affiliate_id: EF.urlParameter("affid"),
                sub1: EF.urlParameter("sub1"),
                sub2: EF.urlParameter("sub2"),
                sub3: EF.urlParameter("sub3"),
                sub4: EF.urlParameter("sub4"),
                sub5: EF.urlParameter("sub5"),
                uid: EF.urlParameter("uid"),
                source_id: EF.urlParameter("source_id"),
                transaction_id: EF.urlParameter("_ef_transaction_id")
              })
                .then(res => {
                  console.dir(res);
                  EF.conversion({
                    offer_id: 135,
                    event_id: 254
                  })
                })
            }
          }
        ]
      }
    },
    mounted(){
      if(this.$route.query.sub1){
        this.$store.dispatch('affiliates/getSub', this.$route.query)
      }
    }
  }
  </script>
  <style lang="scss" scoped>
  .page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  </style>