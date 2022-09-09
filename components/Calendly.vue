<template>
  <div class="calendly-inline-widget" data-url="https://calendly.com/financialmatch"></div>
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
