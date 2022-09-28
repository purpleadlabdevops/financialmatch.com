<template>
  <section class="section1">
    <div class="container">
      <div class="section1__inner">
        <div class="section1__num-item">
          <div class="section1__num">CPA</div>
          <div class="section1__num-title">Un CPA con licencia supervisa cada cuenta y brinda protección completa de auditoría de ERC</div>
        </div>
        <div class="section1__num-item">
          <div class="section1__num">+$26,000</div>
          <div class="section1__num-title">¡Es lo que puede recibir por cada empleado SIN límite de crédito máximo recibido!</div>
        </div>
        <div class="section1__num-item">
          <div class="section1__num">$200k</div>
          <div class="section1__num-title">Es el tamaño promedio de crédito por<br>Solicitud de ERC</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section1',
}
</script>

<style lang="scss">
.section1 {
  background: $global_color_1;
  color: #fff;
  padding: 80px 0 100px;
  margin-top: -20px;
  @include sm {
    width: auto;
    padding: 30px 0 100px;
  }
}
.section1__inner {
  display: flex;
  @include sm {
    display: block;
  }
}
.section1__num-item {
  width: calc(100% / 3);
  text-align: center;
  padding: 0 30px;
  @include sm {
    width: auto;
    padding: 10px 0;
  }
}
.section1__num {
  font-size: 50px;
  font-weight: 700;
  text-shadow: 6px 6px 0px #064a4e;
}
.section1__num-title {
  font-size: 20px;
}
</style>
