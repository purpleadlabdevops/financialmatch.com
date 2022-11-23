<template>
  <section class="section3">
    <div class="section3__grid">
      <div class="section3__grid-row">
        <div class="section3__grid-img-col">
          <figure>
            <img src="@/assets/img/s3_1.jpg" alt="" />
          </figure>
        </div>
        <div class="section3__grid-dscr-col">
          <h4 class="section3__grid-title">El crédito fiscal por retención de empleados (ERC) se implementó con la Ley CARES, pero el PPP captó toda la atención</h4>
          <p class="section3__grid-text">La pandemia y el cierre que le siguió causaron estragos en las empresas, por lo que el Congreso aprobó múltiples leyes de estímulo para distribuir ayuda rápidamente.</p>
          <p class="section3__grid-text">Los dos programas que captaron toda la atención de los medios fueron los programas PPP y EIDL. La mayoría de las personas ni siquiera sabía del programa ERC y, si lo conocían, no creían ser candidatos para recibirlo (aunque era tan bueno o mejor que el PPP).</p>
        </div>
      </div>

      <div class="section3__grid-row reverse">
        <div class="section3__grid-img-col">
          <figure>
            <img src="@/assets/img/s3_2.jpg" alt="" />
          </figure>
        </div>
        <div class="section3__grid-dscr-col">
          <h4 class="section3__grid-title">El programa era difícil de entender (incluso para muchos CPA), por lo que pocos lo aprovecharon</h4>
          <p class="section3__grid-text">El programa ERC se ha modificado, lo que puede ayudar a más empresas a calificar.</p>
          <p class="section3__grid-text">A diferencia de PPP, no hay límite en la cantidad máxima que puede recibir. El ERC está recibiendo más atención, ya que los dueños de negocios se están dando cuenta de que aún lo pueden aprovechar.</p>
        </div>
      </div>

      <div class="section3__grid-row">
        <div class="section3__grid-img-col">
          <figure>
            <img src="@/assets/img/sp3_4.png" alt="" />
          </figure>
        </div>
        <div class="section3__grid-dscr-col">
          <h4 class="section3__grid-title">Muchas empresas no se dan cuenta de que pueden calificar (para recibir $200,000 en promedio), pero la ventana se está cerrando</h4>
          <p class="section3__grid-text">La mayoría de las empresas no se dan cuenta de que realmente pueden calificar, o sus CPA les dijeron incorrectamente que no podrían.</p>
          <p class="section3__grid-text">Realmente no es culpa del CPA, ya que las reglas eran confusas (y cambiaron varias veces), y este es un programa muy especializado de única ocasión.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section3',
}
</script>

<style lang="scss">
.section3 {
  background: $global_bg_color_1;
  padding-bottom: 80px;
}
.section3__grid {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}
.section3__grid-row {
  display: flex;
  align-items: flex-start;
  @include sm {
    display: block;
  }
  &:not(:first-child) {
    margin-top: 60px;
  }
  &.reverse {
    .section3__grid-dscr-col {
      order: -1;
      padding: 15px 30px 15px 80px;
      @include sm {
        width: 100%;
        padding: 0;
      }
    }
  }
}
.section3__grid-dscr-col {
  padding: 15px 80px 15px 30px;
  width: 60%;
  @include sm {
    width: 100%;
    padding: 0;
  }
}
.section3__grid-title {
  color: $global_color_1;
  font-size: 30px;
  margin: 0;
  font-weight: 600;
  line-height: 1.2;
}
.section3__grid-text {
  font-size: 18px;
}
.section3__grid-img-col {
  padding: 0px 15px 0px 0px;
  width: 40%;
  @include sm {
    width: 100%;
    padding: 0;
    margin-bottom: 30px;
  }
  figure {
    margin: 0;
  }
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 460px;
    box-shadow: 5px 5px 10px 0px rgb(0 0 0 / 15%);
    border: 10px solid white;
    @include sm {
      max-width: none;
    }
  }
}
</style>
