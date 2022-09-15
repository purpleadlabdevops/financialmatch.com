<template>
  <div class="congrat">
    <h1 class="congrat__title">Great News! <br> You Qualified for the ERC Program!</h1>
    <p>Our ERC Experts will tell you exactly how much you can get. <br> Remember, there is no fee to sign up for our ERC filing service.</p>
    <h4 class="congrat__subtitle">
      <b>Schedule your free call below:</b>
    </h4>
    <CalendlyCalext />
  </div>
</template>

<script>
export default {
  computed: {
    money() {
      return this.$store.state.result > 1
        ? `$${this.$store.state.result * 26000}`
        : false
    }
  },
  mounted(){
    this.$store.commit('setPhone', '18555852025')
    window.scrollTo(0, 0)
  }
}
</script>

<style lang="scss">
.congrat {
  text-align: center;
  p {
    font-size: 18px;
    margin-bottom: 0px;
  }
}
.congrat__title {
  font-size: 40px;
  color: $global_color_1;
  margin-bottom: 15px;
  @include sm {
    font-size: 30px;
  }
}
.congrat__subtitle {
  font-size: 24px;
  margin: 0;
}
</style>
