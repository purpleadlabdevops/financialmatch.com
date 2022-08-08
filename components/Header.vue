<template>
  <header class="main-header">
    <div class="container">
      <nuxt-link to="/">
        <div class="main-header__logo">
          <img src="@/assets/img/logo-white.png" alt="logo" />
        </div>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.main-header {
  padding: 20px 0;
}
.main-header__logo {
  max-width: 250px;
  margin: 0 auto;
  img {
    height: auto;
    width: 100%;
  }
}
</style>
