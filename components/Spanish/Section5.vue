<template>
  <section class="section5">
    <div class="container">
      <!--      <div class="section5__video">-->
      <!--        <blocks-video-frame />-->
      <!--      </div>-->
      <div class="section5__rows">
        <div class="section5__row">
          <div class="section5__icon">
            <figure>
              <img src="@/assets/img/s5_1.png" alt="" />
            </figure>
          </div>
          <div class="section5__dscr">
            <h4 class="section5__dscr-title">Números conservadores y honestos para la protección de auditoría ERC "Dormir bien por la noche"</h4>
            <p class="section5__dscr-text">Nuestro equipo trabaja con usted durante todo el proceso de presentación de ERC. Nos aseguramos de que todos los números sean precisos y se ajusten a las normas del ERC.</p>
          </div>
        </div>
        <div class="section5__row">
          <div class="section5__icon">
            <figure>
              <img src="@/assets/img/s5_2.png" alt="" />
            </figure>
          </div>
          <div class="section5__dscr">
            <h4 class="section5__dscr-title">Nuestros profesionales autorizados hacen todo el trabajo pesado</h4>
            <p class="section5__dscr-text">Contamos con el mejor equipo de expertos en ERC que se encargan del papeleo para que usted pueda concentrarse en administrar su negocio.</p>
          </div>
        </div>
        <div class="section5__row">
          <div class="section5__icon">
            <figure>
              <img src="@/assets/img/s5_3.png" alt="" />
            </figure>
          </div>
          <div class="section5__dscr">
            <h4 class="section5__dscr-title">Sin aval, garantía personal o verificación de crédito</h4>
            <p class="section5__dscr-text">Debido a que se trata de un crédito fiscal del IRS y no de un préstamo, no se requieren avales, garantías personales o verificación de crédito para recibir el crédito fiscal.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section5',
}
</script>

<style lang="scss">
.section5 {
  padding: 0 0 40px;
}
.section5__video {
  max-width: 800px;
  margin: 0 auto;
  .video-border {
    margin-top: -40%;
  }
}
.section5__rows {
  max-width: 1100px;
  width: 100%;
  margin: 50px auto 0;
}
.section5__row {
  display: flex;
  &:not(:first-child) {
    margin-top: 30px;
  }
  @include xs {
    display: block;
    &:not(:first-child) {
      margin-top: 60px;
    }
  }
}
.section5__icon {
  width: 20%;
  text-align: center;
  @include xs {
    width: 100%;
  }
  figure {
    display: inline-block;
    margin: 0;
    position: relative;
    max-width: 126px;

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      border-radius: 50%;
      background: $global_bg_color_1;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
}
.section5__dscr {
  width: 80%;
  padding-left: 30px;
  @include xs {
    width: 100%;
    padding-left: 0;
    margin-top: 30px;
  }
}
.section5__dscr-title {
  font-size: 30px;
  color: $global_color_1;
  font-weight: 600;
  margin: 0;
  line-height: 1.2;
}
.section5__dscr-text {
  font-size: 18px;
  font-weight: 400;
}
</style>
