<template>
  <footer class="main-footer">
    <div class="container">
      <div class="main-footer__inner">
        <div class="main-footer__logo">
          <img src="@/assets/img/logo-white.png" alt="logo" />
          <span>Employee Retention Tax Credit</span>
        </div>
        <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
        <div>All rights reserved</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss">
.main-footer {
  padding: 20px 0;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__logo {
    max-width: 248px;
    text-align: center;
    margin-right: 30px;
    img {
      width: 100%;
      height: auto;
    }
  }
  a{
    color: #000;
  }
}
</style>
