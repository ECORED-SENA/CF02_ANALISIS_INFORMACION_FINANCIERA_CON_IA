<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p El análisis financiero apoyado en inteligencia artificial permite transformar los datos derivados de hechos económicos en información útil para su revisión e interpretación y para la toma de decisiones. En este contexto, la IA puede apoyar procesos como la clasificación de transacciones, la verificación de asientos contables, la comparación de estados financieros, el cálculo de variaciones porcentuales, el análisis de ratios y la identificación de patrones, relaciones o discrepancias. Esta orientación se articula con la justificación del programa, que destaca la automatización de procesos contables, el análisis predictivo, la identificación de patrones en grandes volúmenes de datos y la generación de informes financieros precisos, oportunos y acordes con la normativa aplicable (IFRS, s. f.).
      .row.justify-content-center.align-items-center.mb-3
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.png', alt='').m-auto
              .col-xl.caja-1__texto
                p.mb-0 El uso de la IA en el análisis de datos financieros exige un enfoque técnico y responsable, debido a que los resultados generados por estas herramientas pueden contener errores, sesgos, alertas falsas o interpretaciones incompletas. Por ello, el procesamiento de la información no debe limitarse a la ejecución de consultas, sino que debe incluir revisiones cruzadas, verificación documental, comparación con la normativa, análisis de ratios, identificación de riesgos y validación humana. En este sentido, los marcos de gestión de riesgos de la IA resaltan la importancia de controlar los posibles efectos negativos de estas tecnologías en las personas, las organizaciones y los procesos en los que se aplican (NIST, 2023).
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
      p.mb-0 Además del análisis, la elaboración de informes de revelación requiere organizar los hallazgos, documentar las observaciones, ordenar las revelaciones, registrar las restricciones y los beneficios, verificar el cumplimiento normativo y presentar la información mediante herramientas de visualización de datos. La IA puede apoyar la consolidación de informes, la explicación inicial de variaciones, la generación de alertas y la formulación de recomendaciones preliminares. Sin embargo, su uso debe preservar los principios de ética, confidencialidad, trazabilidad y responsabilidad profesional. Esta orientación se relaciona con los principios de IA de la OCDE, que promueven sistemas confiables, respetuosos de los derechos humanos y sujetos a una supervisión responsable, así como con la Política Nacional de Inteligencia Artificial de Colombia, que impulsa la adopción ética y responsable de estas tecnologías (OECD, 2024).
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
