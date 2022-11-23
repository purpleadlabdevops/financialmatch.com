<template>
  <div class="page page-index">
    <GreencallHeader />
    <GreencallContent />
    <Footer />
  </div>
</template>
<script>
export default {
  layout: 'call'
}
</script>
<style lang="scss" scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>