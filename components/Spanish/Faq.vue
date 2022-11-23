<template>
  <section class="faq">
    <div class="faq__container">
      <h3 class="faq__title">Preguntas frecuentes</h3>
      <ul class="faq__nav">
        <li><a href="#faq-qualification">Elegibilidad</a></li>
        <li><a href="#faq-tax-credit">Crédito fiscal</a></li>
        <!--        <li><a href="#faq-our-company">Our Company</a></li>-->
      </ul>
      <!--    TAX    -->
      <div id="faq-qualification" class="faq__group">
        <h3 class="faq__group-title">Elegibilidad</h3>
        <div class="faq__block">
          <blocks-faq v-for="(faq, i) in tax" :key="'tax_' + i">
            <template #title>{{ faq.title }}</template>
            <template #dscr>{{ faq.dscr }} </template>
          </blocks-faq>
        </div>
      </div>
      <!--    Tax Credit   -->
      <div id="faq-tax-credit" class="faq__group">
        <h3 class="faq__group-title">Crédito fiscal</h3>
        <div class="faq__block">
          <blocks-faq v-for="(faq, i) in credit" :key="'credit_' + i">
            <template #title>{{ faq.title }}</template>
            <template #dscr><div v-html="faq.dscr"></div></template>
          </blocks-faq>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'faq',
  data() {
    return {
      tax: [
        {
          title: `¿Soy elegible si soy un contratista 1090?`,
          dscr: `Lamentablemente, no. Este programa es solo para empresas que pagaron sueldos W2 a no propietarios.`
        },
        {
          title: `¿Soy elegible si no tengo empleados W2?`,
          dscr: `Lamentablemente, no. Este programa es solo para empresas que pagaron sueldos W2 a no propietarios.`
        },
        {
          title: `¿Soy elegible para el ERC teniendo un préstamo PPP?`,
          dscr: `¡Sí! Hay varios trimestres para los que puede ser elegible, aún con un préstamo PPP. Lamentablemente, no puede usar el período de cobertura que utilizó para el PPP, por lo que se podría reducir el ERC que reciba, pero definitivamente es elegible para el ERC.`
        },
        {
          title: `¿Qué pasa si mis ingresos aumentaron en 2020 o 2021? ¿Sigo siendo elegible?`,
          dscr: `¡Sí! Se llama crédito de "Retención de empleados", no crédito de "Reducción de ingresos". Su objetivo es ayudar a las empresas que mantuvieron a sus empleados durante los tiempos difíciles de la pandemia, así que es elegible incluso si sus ingresos incrementaron. Deberá buscar la elegibilidad utilizando otros de los conceptos disponibles: cierres/mandatos o interrupción de la cadena de suministro.`
        },
        {
          title: `¿Por cuánto tiempo se mantendrá abierto el programa ERC?`,
          dscr: `Para la mayoría de las personas, este programa permanecerá abierto hasta 2024 (a menos que las reglas cambien nuevamente). Estará disponible siempre que pueda presentar declaraciones 941-X enmendadas, que es hasta 8 después de la fecha en la que presentó su declaración original o 2 años a partir de la fecha en que pagó el impuesto sobre la nómina.`
        },
        {
          title: `¿Qué pasa si mi crédito es malo? ¿Se realiza una verificación de crédito?`,
          dscr: `No importa, porque no es un préstamo, es un crédito fiscal. No hay revisiones de crédito, avales ni garantías personales.`
        },
        {
          title: `¿Soy elegible para el ERC si mi negocio cerró?`,
          dscr: `Sí, es posible. Depende de cuándo haya cerrado el negocio.`
        }
      ],
      credit: [
        {
          title: `¿Qué documentos debo enviarles?`,
          dscr: `Para llevar a cabo su crédito fiscal, trabajaremos con usted y con su contador público acreditado (CPA) para obtener los siguientes documentos:<ul><li>Reportes de nómina detallando todos los pagos, deducciones, contribuciones de impuestos de cada empleado por cada cheque de nómina durante su período de elegibilidad para el ERC.</li><li>Informes de nómina 941, 943 o 944 que haya presentado.</li><li>Declaraciones de pérdidas y ganancias (P&L) de 2020 y 2021.</li><li>Declaraciones de impuestos de 2020 y 2021.</li><li>Solicitud de condonación de préstamos PPP (si corresponde)</li></ul>`
        },
        {
          title: `¿Tengo que reembolsar el crédito fiscal?`,
          dscr: `¡No! No hay nada que reembolsar cuando se trata de un crédito fiscal. No es un préstamo.`
        },
        {
          title: `¿En cuánto tiempo obtendré mi crédito?`,
          dscr: `En general, les decimos a nuestros clientes entre 7 y 9 meses. Tardamos unas semanas en hacer el trabajo, y el tiempo que tarda el IRS en procesar la solicitud es variable, pero en nuestra experiencia es entre 7 y 9 meses.`
        },
        {
          title: `¿Cuándo se agotarán los fondos del ERC?`,
          dscr: `No existe un monto establecido.`
        },
        {
          title: `¿Qué pasa si tengo impuestos atrasados en mi cuenta del IRS?`,
          dscr: `Si debe impuestos atrasados, el IRS deducirá la cantidad que debe de impuestos atrasados del monto del crédito y le pagará la diferencia.`
        },
        {
          title: `¿El crédito del ERC está sujeto a impuestos?`,
          dscr: `El crédito del ERC no se considera ingreso sujeto a impuestos a efectos fiscales federales. Pero, lo que podría pasar, es que se reduzcan los gastos salariales deducibles de manera proporcional al monto del crédito fiscal, lo que probablemente aumentará su ganancia neta y, por lo tanto, la cantidad de impuestos que deberá pagar. Verifique el crédito con su CPA o preparador de impuestos para recibir orientación sobre cómo proceder.`
        },
        {
          title: `¿Tendré problemas con el IRS por presentar mi solicitud?`,
          dscr: `¡De ninguna manera! El IRS creó este programa y redobló sus esfuerzos para volverlo más fácil y lucrativo para las empresas, por lo que verdaderamente quieren que presente su solicitud y lo utilice.`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.faq {
  padding: 60px 0;
  background: $global_bg_color_1;
}
.faq__container {
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
}
.faq__title {
  text-align: center;
  font-size: 30px;
  color: $global_color_1;
  font-weight: 600;
}
.faq__nav {
  margin: 0;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  @include xs {
    flex-direction: column;
  }

  a {
    font-size: 18px;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 10px 5px;
    color: #146c70;
    transition: 0.2s ease all;
    box-shadow: 1px 1px 5px rgb(0 0 0 / 10%);
    &:hover {
      box-shadow: 4px 4px 10px rgb(0 0 0 / 10%);
    }
    @include xs {
      display: block;
    }
  }
}
.faq__group-title {
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  margin-top: 30px;
  font-size: 28px;
}
.faq__block {
  background: #fff;
  padding: 25px;
  box-shadow: 0 3px 25px rgb(0 0 0 / 10%);
  border-radius: 20px;
}
</style>
