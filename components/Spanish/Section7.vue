<template>
  <section class="section7">
    <div class="container">
      <h2 class="section7__title">¿Listo para recibir hasta $26,000 por empleado W2?</h2>
      <h4 class="section7__subtitle">El Programa ERC está actualmente abierto, pero ha sido modificado en el pasado. Le recomendamos que reclame el suyo antes de que algo cambie.</h4>
      <div class="section7__btn-row">
        <a href="#quiz" class="accent-btn" role="button">
          <span class="accent-btn-content-wrapper">
            <span class="elementor-button-text"><b>Responder el cuestionario solo toma 60 segundos</b></span>
            <span class="accent-btn-chevron">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                width="24"
                height="24"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 298 511.93"
              >
                <path
                  fill-rule="nonzero"
                  d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"
                />
              </svg>
            </span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section7',
}
</script>

<style lang="scss">
.section7 {
  background: $global_color_1;
  padding: 80px 0;
}
.section7__title {
  color: #fff;
  font-size: 54px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  @include sm {
    font-size: 30px;
  }
}
.section7__subtitle {
  color: #f98080;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  max-width: 900px;
  margin: 1em auto;
  @include sm {
    font-size: 18px;
  }
}
.section7__btn-row {
  text-align: center;
}
</style>
