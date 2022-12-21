<template>
  <main class="screen-wrap">
    <ScreenHeader />
    <div class="screen-content">
      <Nuxt />
    </div>
    <ScreenFooter />
  </main>
</template>

<script>
export default {
  name: 'screens-info',
  head: {
    css: ['@/assets/scss/screen'],
  },
}
</script>

<style lang="scss" src="@/assets/scss/screen.scss"></style>