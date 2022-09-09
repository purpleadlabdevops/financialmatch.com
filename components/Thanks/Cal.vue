<template>
  <div class="congrat">
    <h1 class="congrat__title">Congrats on qualifying for the ERC program!</h1>
    <p>Based on the information you submitted, we recommend you speak with an ERC Expert.</p>
    <h4 class="congrat__subtitle">
      <b>Schedule your brief consultation call below:</b>
    </h4>
    <Calendly />
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
