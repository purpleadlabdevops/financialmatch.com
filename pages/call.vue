<template>
  <main>
    <Top />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <faq />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  head: {
    script: [
      {
        src: '/js/leadId.js',
        body: true,
        id: 'LeadiDscript',
      },
    ],
  },
  mounted(){
    this.$store.commit('setPhone', '18555851843')
  }
}
</script>
