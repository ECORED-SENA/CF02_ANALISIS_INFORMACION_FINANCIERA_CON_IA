<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta a manera de síntesis, un esquema que articula los elementos principales abordados en el desarrollo del componente formativo.
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual sintetiza el análisis financiero y la revelación de hechos económicos con inteligencia artificial en cinco temas: sistemas integrados de información financiera; procesamiento y validación de datos; estados financieros y análisis con estándares financieros; gestión del riesgo y controles; y revelación financiera, visualización de datos e informes. Estos temas comprenden el uso de aplicativos contables, la preparación y validación de información, la generación y comparación de informes, la aplicación de *ratios* financieros, la identificación de riesgos, el cumplimiento normativo y la consolidación de informes financieros. En conjunto, integran herramientas tecnológicas, criterios técnicos, controles y principios de trazabilidad y responsabilidad para apoyar la presentación de información financiera confiable.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
