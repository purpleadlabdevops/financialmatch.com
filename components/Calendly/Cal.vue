<template>
  <div class="calendly-inline-widget" data-url="https://calendly.com/financialmatch?hide_landing_page_details=1&hide_gdpr_banner=1"></div>
</template>
<script>
export default {
  head: {
    script: [
      {
        src: 'https://assets.calendly.com/assets/external/widget.js',
        asnc: true
      }
    ]
  }
}
</script>
<style lang="scss">
.calendly-inline-widget{
  min-width:320px;
  height: 700px;
}
</style>
