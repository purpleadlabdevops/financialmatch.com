<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'default',
  head(){
    return {
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
              uid: EF.urlParameter('uid'),
              source_id: EF.urlParameter('source_id')
            })
            .then(res => {
              EF.conversion({
                offer_id: 1,
                event_id: 2
              })
            })
          }
        }
      ]
    }
  }
}
</script>

<style scoped></style>
