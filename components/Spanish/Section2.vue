<template>
  <section class="section2">
    <div class="container">
      <ul class="section2__list">
        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_1.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">Hasta $26,000 por empleado W2 que tenga en nómina</h4>
            <p class="section2__item-text">Puede optar a varios trimestres en 2020 y 2021, hasta $26,000 dólares por empleado W2. El crédito promedio es de $200,000+</p>
          </div>
        </li>
        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_2.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">Puede ser elegible aunque haya obtenido un préstamo PPP</h4>
            <p class="section2__item-text">Hay muchas maneras de ser elegible, incluso si su contador público certificado (CPA) cree que no es posible. Somos cautelosos, pero buscamos que sea elegible para recibir la mayor cantidad posible</p>
          </div>
        </li>
        <li class="section2__item">
          <figure class="section2__item-logo">
            <img src="@/assets/img/s2_3.png" alt="" />
          </figure>
          <div class="section2__item-dscr">
            <h4 class="section2__item-title">Tarifa razonable solo después de recibir el crédito</h4>
            <p class="section2__item-text">Solo cobramos una vez que haya recibido el dinero. La mayoría de las empresas reciben el cheque del IRS en 5 a 9 meses</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section2',
}
</script>

<style lang="scss">
.section2 {
  padding: 100px 0;
  background: $global_bg_color_1;
  @include sm {
    padding: 30px 0;
  }
}
.section2__list {
  display: flex;
  justify-content: space-between;
  margin: 0 -15px 0;
  padding: 0;
  list-style: none;
  @include sm {
    display: block;
  }
}
.section2__item {
  padding: 15px;
  width: calc(100% / 3);
  max-width: 460px;
  text-align: center;
  @include sm {
    width: 100%;
    margin: 0 auto;
  }
}
.section2__item-logo {
  margin: 0;
  display: block;
  position: relative;
  &:before {
    content: '';
    width: 120px;
    height: 120px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba(95, 198, 193, 0.15);
    border-radius: 50%;
  }

  img {
    display: block;
    max-width: 126px;
    margin: 0 auto;
  }
}
.section2__item-title {
  font-size: 24px;
  color: $global_color_1;
  margin: 0.3em 0 0;
  font-weight: 600;
  line-height: 1;
}
.section2__item-text {
  font-size: 18px;
  margin: 0.5em 0 0;
}
</style>
