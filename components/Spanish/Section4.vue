<template>
  <section class="section4">
    <div class="container">
      <h2 class="section4__title">Presentamos el servicio ERC 100 % hecho para usted de Financial Match</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section4',
}
</script>

<style lang="scss">
.section4 {
  //padding: 80px 0px 350px 0px;
  padding: 80px 0px 80px 0px;
  background: $global_color_1;
  //@include xl {
  //  padding-bottom: 35%;
  //}
  //@include sm {
  //  padding-top: 40px;
  //  padding-bottom: 40%;
  //}
}
.section4__title {
  color: #fff;
  font-size: 54px;
  font-weight: 700;
  text-align: center;
  line-height: 1;

  @include sm {
    font-size: 30px;
  }
}
</style>
