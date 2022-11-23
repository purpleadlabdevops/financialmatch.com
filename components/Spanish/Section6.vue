<template>
  <section class="section6">
    <div class="container">
      <h2 class="section6__title">Cómo funciona</h2>
      <div class="section6__steps">
        <div class="section6__step">
          <div class="section6__step-num">1</div>
          <h4 class="section6__step-title">Responda el cuestionario de elegibilidad</h4>
        </div>
        <div class="section6__step">
          <div class="section6__step-num">2</div>
          <h4 class="section6__step-title">Rellene la solicitud (en línea o por teléfono)</h4>
        </div>
        <div class="section6__step">
          <div class="section6__step-num">3</div>
          <h4 class="section6__step-title">Trabaje con nuestro equipo para reunir los documentos y la información</h4>
        </div>
        <div class="section6__step">
          <div class="section6__step-num">4</div>
          <h4 class="section6__step-title">Se procesa, se presenta y se recibe el pago del IRS</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section6',
}
</script>

<style lang="scss">
.section6 {
  background: $global_bg_color_1;
  padding: 60px 0;
}
.section6__title {
  color: $global_color_1;
  font-weight: 600;
  font-size: 30px;
  text-align: center;
  margin: 0;
}
.section6__steps {
  display: flex;
  margin-top: 30px;
  @include md {
    flex-wrap: wrap;
  }
}
.section6__step {
  width: calc(100% / 4);
  text-align: center;
  padding: 15px;
  @include md {
    width: calc(100% / 2);
  }
  @include xs {
    width: 100%;
  }
}
.section6__step-num {
  display: inline-flex;
  width: 126px;
  height: 126px;
  align-items: center;
  justify-content: center;
  border: 5px solid $global_color_1;
  border-radius: 50%;
  font-size: 80px;
  font-weight: 600;
  color: $global_color_1;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(95, 198, 193, 0.15);
    border-radius: 50%;
    left: 10%;
    top: 0;
  }
}
.section6__step-title {
  font-weight: 400;
  font-size: 24px;
  color: $global_color_1;
  line-height: 1.2;
  margin: 0.7em 0;
}
.section6__step-text {
  font-style: italic;
  font-size: 18px;
  color: gray;
  margin: 0;
}
</style>
