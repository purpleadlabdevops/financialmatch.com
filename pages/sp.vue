<template>
  <main>
    <SpanishTop />
    <SpanishSection1 />
    <SpanishSection2 />
    <SpanishSection3 />
    <SpanishSection4 />
    <SpanishSection5 />
    <SpanishSection6 />
    <SpanishSection7 />
    <SpanishFaq />
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
    this.$store.commit('setPhone', '18558558371')
  }
}
</script>
