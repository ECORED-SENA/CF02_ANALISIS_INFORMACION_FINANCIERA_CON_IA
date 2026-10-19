<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Estados financieros y análisis con estándares financieros
      p.mb-5 Los estados financieros constituyen una fuente estructurada para desarrollar análisis con IA, siempre que la información conserve relevancia, comparabilidad y verificabilidad (IFRS Foundation, s. f.). 
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Estados financieros: concepto, clases y características
      p.mb-5 Los estados financieros se caracterizan por su propósito, la información que aportan y su aplicación en el análisis con inteligencia artificial:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Concepto
                  p.mb-0 Los estados financieros son informes estructurados que organizan la información económica y financiera de una entidad correspondiente a un periodo determinado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Propósito
                  p.mb-0 Permiten analizar la situación financiera, el rendimiento, los cambios patrimoniales y la capacidad de la entidad para generar o utilizar efectivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información aportada
                  p.mb-0 Permiten establecer qué posee y debe la entidad, cuánto vendió, cuánto gastó, qué resultado obtuvo, cómo se financia y qué cambios ocurrieron.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Análisis con IA
                  p.mb-0 Las cifras deben relacionarse con su naturaleza contable, los soportes y el contexto. La IA apoya el análisis, pero no reemplaza la interpretación financiera.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Cada estado financiero aporta información específica y requiere diferentes criterios de análisis y validación cuando se emplea inteligencia artificial:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Estado de situación financiera")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estado de situación financiera
              p.mb-0 Presenta los activos, pasivos y el patrimonio. La IA puede identificar variaciones en recursos, obligaciones y estructura financiera. Los resultados deben contrastarse con auxiliares, saldos, soportes y políticas contables.
        .py-3.py-md-4(titulo="Estado de resultados")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estado de resultados
              p.mb-0 Contiene ingresos, costos, gastos y utilidad o pérdida. La IA puede calcular rentabilidad, márgenes y variaciones relevantes. La validación requiere comparar ventas, costos, facturas y registros contables.
        .py-3.py-md-4(titulo="Estado de cambios en el patrimonio")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estado de cambios en el patrimonio
              p.mb-0 Registra movimientos en capital, reservas, resultados y otros componentes del patrimonio. La IA puede explicar aumentos o disminuciones, pero estos deben verificarse con actas, decisiones administrativas y registros contables.
        .py-3.py-md-4(titulo="Estado de flujos de efectivo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img8.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estado de flujos de efectivo
              p.mb-0 Presenta entradas y salidas de efectivo por actividades de operación, inversión y financiación. La IA puede analizar liquidez y necesidades de financiación. Los resultados deben contrastarse con bancos, conciliaciones y registros de tesorería.
        .py-3.py-md-4(titulo="Notas a los estados financieros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img9.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Notas a los estados financieros
              p.mb-0 Contienen políticas, explicaciones, riesgos, estimaciones y detalles relevantes. La IA puede resumir y relacionar esta información con las cifras principales. La interpretación debe confirmarse mediante la consulta completa de las notas.
      p.mb-5 La comparación entre periodos permite identificar variaciones financieras que deben analizarse con notas, soportes y explicaciones administrativas, como plantea este ejemplo:
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa compara sus estados financieros de 2025 y 2026. La IA identifica que las cuentas por cobrar aumentaron, los gastos administrativos crecieron y la utilidad disminuyó. Estos hallazgos sirven como alerta inicial, pero no son suficientes para concluir que existe un problema financiero. Es necesario revisar si hubo aumento en ventas a crédito, cambios en plazos de pago, nuevos contratos, gastos extraordinarios, reclasificaciones contables o situaciones del mercado que expliquen las variaciones.
            p.mb-0 En este caso, la IA puede organizar la información en una tabla comparativa, calcular porcentajes de variación y sugerir posibles causas a revisar. Sin embargo, la persona responsable debe validar cada observación con auxiliares contables, facturas, cartera, presupuesto, notas financieras y explicaciones de la administración.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img10.png', alt='').m-auto
      p.mb-5 El siguiente #[i prompt] orienta a la IA para comparar periodos y rubros, calcular variaciones y señalar los soportes requeridos para validar los resultados:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img11.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] aplicado
          br
          br
          p Analice los estados financieros comparativos de 2025 y 2026. Identifique variaciones relevantes en activos, pasivos, patrimonio, ingresos, costos, gastos y utilidad. Presente una tabla con rubro, valor 2025, valor 2026, variación absoluta, variación porcentual, posible interpretación y soporte que debe revisarse. No emita conclusiones definitivas; cada hallazgo debe validarse con estados financieros, auxiliares, notas y contexto de la entidad.
      p.mb-0 Los estados financieros sustentan el análisis con IA, pero cada cifra debe interpretarse según su naturaleza, sus soportes y el contexto de la entidad.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Técnicas de presentación y tipos de registros
      p Las técnicas de presentación organizan la información financiera, mientras los registros permiten comprobar el origen, el detalle y el respaldo de las cifras.
      p.mb-5 La presentación y los registros cumplen funciones complementarias que favorecen la comparación, el análisis y la validación de la información financiera:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img12.png', alt="" ).m-auto
                  h4.text-center Presentación financiera
                  .caja-2_p
                    p.mb-0.text-center Organiza las cifras por periodos, rubros, grupos, subtotales, variaciones, indicadores y notas explicativas para facilitar su comparación y análisis.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img13.png', alt="" ).m-auto
                  h4.text-center Estándares financieros
                  .caja-2_p
                    p.mb-0.text-center IAS 1 establece requerimientos generales de presentación de estados financieros. IFRS 18 la reemplazará para los periodos anuales que comiencen a partir de 2027 (IFRS Foundation, s. f.).
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img14.png', alt="" ).m-auto
                  h4.text-center Análisis con IA
                  .caja-2_p
                    p.mb-0.text-center Una estructura organizada permite que la IA compare periodos, calcule variaciones, diferencie grupos financieros y genere alertas con menor riesgo de interpretación incorrecta.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t3/img15.png', alt="" ).m-auto
                  h4.text-center Registros financieros
                  .caja-2_p
                    p.mb-0.text-center Los asientos, auxiliares, comprobantes, registros de cartera, bancos, inventarios, nómina y ajustes permiten rastrear las cifras hasta sus movimientos y soportes.
      p La trazabilidad fortalece la verificabilidad, comparabilidad, oportunidad y comprensibilidad de la información financiera (IFRS Foundation, s. f.).
      p.mb-5 Cada técnica cumple una finalidad específica, se sustenta en determinados registros y permite desarrollar diferentes análisis mediante herramientas de inteligencia artificial:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación comparativa
                  p.mb-0 Permite comparar cifras de dos o más periodos. Se respalda con estados financieros, balances de prueba y reportes contables. La IA puede calcular variaciones absolutas y porcentuales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación clasificada
                  p.mb-0 Separa los rubros según su naturaleza financiera. Requiere auxiliares de activos, pasivos, patrimonio, ingresos, costos y gastos. La IA puede identificar cambios por grupo financiero.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación por rubros
                  p.mb-0 Organiza las cuentas o los conceptos principales. Se respalda con asientos contables, auxiliares y reportes de cuentas. La IA puede detectar rubros con aumentos o disminuciones relevantes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación por centros de costo
                  p.mb-0 Organiza gastos o ingresos por área, proyecto o dependencia. Se respalda con reportes de centros de costo y comprobantes internos. La IA puede comparar el consumo de recursos entre áreas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación de variaciones
                  p.mb-0 Expone las diferencias entre periodos o frente al presupuesto. Se respalda con estados financieros, presupuestos e informes de ejecución. La IA puede señalar desviaciones que requieren explicación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación de indicadores
                  p.mb-0 Resume liquidez, endeudamiento, rentabilidad o rotación. Se respalda con estados financieros y bases consolidadas. La IA puede calcular ratios y generar interpretaciones preliminares.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación mediante notas
                  p.mb-0 Explica políticas, riesgos, restricciones y detalles de las cifras. Se respalda con notas, contratos, políticas contables y otros soportes. La IA puede resumir información explicativa para revisión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación visual
                  p.mb-0 Organiza los datos mediante gráficos, tableros o alertas. Se respalda con bases depuradas, informes exportados y reportes de gestión. La IA puede resaltar tendencias, alertas y comportamientos atípicos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Un caso de gastos administrativos permite relacionar la presentación comparativa con los registros utilizados para explicar y validar una variación entre periodos:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img24.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa organiza sus gastos administrativos en una tabla comparativa de 2025 y 2026. La IA calcula que el rubro aumentó un 35 %. Antes de interpretar el resultado, la persona responsable consulta los registros auxiliares de gastos, los comprobantes, las facturas, los contratos y el presupuesto aprobado.
            p.mb-0 La revisión permite determinar que el aumento corresponde a un nuevo contrato de servicios y no necesariamente a un gasto irregular. En este caso, la presentación comparativa permite identificar la variación, los registros auxiliares explican el cambio y la IA apoya el cálculo inicial. La conclusión financiera se formula después de validar los documentos y el contexto de la operación.
      p.mb-5 El siguiente #[i prompt] orienta a la IA para calcular las variaciones e identificar los registros que deben consultarse antes de formular una conclusión financiera:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img25.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] aplicado
          br
          br
          p Analice la tabla comparativa de estados financieros. Calcule la variación absoluta y porcentual de cada rubro, identifique los cambios más relevantes y señale qué registros deben consultarse para validar cada variación. Presente el resultado en una tabla con rubro, variación, posible explicación, registro de respaldo y acción de revisión. No emita conclusiones definitivas sin validar auxiliares, comprobantes, notas y soportes documentales.
      p.mb-0 Las técnicas de presentación organizan la información financiera, mientras los registros permiten confirmar el origen, el detalle y el soporte de las cifras analizadas.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Generación y extracción de informes contables con IA
      p La extracción obtiene información de los sistemas financieros, mientras la generación organiza y transforma esos datos en informes preliminares para su posterior validación.
      p.mb-5 La elaboración de informes con IA comprende procesos diferentes que permiten obtener, preparar, analizar y validar la información contable y financiera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Extracción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Extracción
              p.mb-0 Consiste en obtener balances, auxiliares, estados financieros y bases de movimientos desde sistemas contables, aplicativos financieros u hojas de cálculo.
        .py-3.py-md-4(titulo="Preparación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Preparación
              p.mb-0 Requiere comprobar nombres de columnas, periodos, saldos, cuentas, terceros, fechas y valores antes de utilizar los datos en una herramienta de IA.
        .py-3.py-md-4(titulo="Generación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Generación
              p.mb-0 Comprende organizar, resumir, comparar e interpretar los datos para producir tablas, reportes, tableros o borradores de informes financieros.
        .py-3.py-md-4(titulo="Validación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Validación
              p.mb-0 Los informes deben contrastarse con las fuentes originales, los soportes y el contexto de la entidad para garantizar transparencia, comparabilidad y confiabilidad (IFRS Foundation, s. f.).
      p Antes de procesar archivos de Excel, CSV o PDF, se recomienda conservar una copia original, preparar una base depurada y documentar la información utilizada.
      p.mb-5 Los sistemas financieros permiten extraer diferentes informes contables, cada uno con información, aplicaciones de inteligencia artificial y requerimientos específicos de validación:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Balance de prueba").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene saldos por cuenta contable. La IA puede identificar variaciones, saldos inusuales o posibles reclasificaciones. Los resultados deben compararse con auxiliares, políticas contables y estados financieros.
            .row(titulo="Auxiliar de cartera").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene facturas, clientes, vencimientos, abonos y saldos. La IA puede identificar cartera vencida, clientes con saldos elevados o pagos pendientes. La validación requiere facturas, recibos de caja y acuerdos de pago.
            .row(titulo="Cuentas por pagar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene proveedores, facturas, vencimientos y pagos. La IA puede señalar facturas vencidas, posibles duplicados o pagos sin soporte. Los resultados deben contrastarse con facturas, comprobantes y extractos bancarios.
            .row(titulo="Estado de resultados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene ingresos, costos, gastos y utilidad. La IA puede calcular variaciones, márgenes y rubros con cambios significativos. La validación requiere auxiliares, presupuesto, soportes y explicaciones administrativas.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img30.png", alt="" style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img31.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Estado de situación financiera").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene activos, pasivos y patrimonio. La IA puede analizar la estructura financiera, el endeudamiento y los cambios entre periodos. Los saldos deben confirmarse con auxiliares, notas y soportes.
            .row(titulo="Reporte de bancos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene movimientos de entradas, salidas y saldos. La IA puede comparar registros contables con extractos y conciliaciones. La validación requiere partidas pendientes, comprobantes y movimientos bancarios.
            .row(titulo="Reporte de inventarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene entradas, salidas, costos y existencias. La IA puede identificar diferencias, rotación o productos con variaciones relevantes. Los resultados deben contrastarse con compras, ventas, conteos físicos y ajustes.
            .row(titulo="Informe preliminar con IA").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contiene hallazgos, variaciones, alertas y recomendaciones iniciales. La IA puede organizar los resultados para la revisión financiera. La validación requiere confirmar cifras, fuentes, interpretaciones y soportes documentales.
      p.mb-5 La extracción de un estado de resultados permite calcular variaciones y generar hallazgos preliminares que posteriormente requieren una revisión documental y financiera:
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa exporta del sistema contable el estado de resultados de 2025 y 2026 en una hoja de cálculo. La IA calcula las variaciones absolutas y porcentuales, identifica que los gastos de administración aumentaron de forma relevante y genera una explicación preliminar. Antes de incluir esa observación en un informe, el responsable financiero revisa el auxiliar de gastos, los contratos, las facturas y el presupuesto del periodo.
            p.mb-0 Después de la revisión, se confirma que el aumento se relaciona con un nuevo contrato de mantenimiento y no con un error de registro. En este caso, la IA permitió detectar rápidamente el rubro que requería análisis, pero la explicación válida surgió de la comparación entre el reporte extraído, los soportes y el contexto de la entidad.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img32.png', alt='').m-auto
      p.mb-5 El siguiente #[i prompt] orienta a la IA para calcular variaciones, organizar un informe preliminar y establecer los soportes necesarios para validar sus hallazgos:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img33.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] aplicado
          br
          br
          p Analice el estado de resultados comparativo suministrado. Calcule variaciones absolutas y porcentuales por rubro, identifique los cambios más relevantes y organice un informe preliminar con hallazgos, posibles causas a revisar y soportes requeridos. No emita conclusiones definitivas; cada observación debe validarse con auxiliares contables, facturas, contratos, presupuesto y explicación de la administración.
      p.mb-0 La generación y extracción de informes transforma datos contables en insumos para el análisis, pero la revisión profesional confirma la calidad y coherencia de los resultados.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Comparación de estados financieros y variaciones porcentuales automáticas
      p.mb-5 La comparación financiera permite identificar aumentos, disminuciones y tendencias entre periodos, pero cada variación debe interpretarse con información verificable y contexto financiero. La comparación entre periodos requiere diferenciar el cambio monetario, su proporción frente al valor anterior y las situaciones sin una base válida:
      .row.align-items-center.mb-3
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Comparación financiera").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite identificar cambios entre dos o más periodos. La IA puede calcular variaciones, ordenar los rubros según su magnitud y generar alertas preliminares para revisión.
            .row(titulo="Variación absoluta").ajuste-cajaAcordion.ajuste-vineta
              p Representa la diferencia monetaria entre el valor del periodo actual y el correspondiente al periodo anterior.
              p #[b Fórmula:] 
              p.mb-3 Variación absoluta = valor del periodo actual − valor del periodo anterior
            .row(titulo="Variación porcentual").ajuste-cajaAcordion.ajuste-vineta
              p Representa la proporción del cambio respecto al valor registrado en el periodo anterior.
              p #[b Fórmula:] 
              p.mb-3 Variación porcentual = variación absoluta ÷ valor del periodo anterior × 100
            .row(titulo="Valor anterior en cero").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cuando el valor del periodo anterior es cero, no existe una base válida para calcular el porcentaje. El rubro debe clasificarse como «nuevo», «sin base comparativa» o «requiere análisis especial».
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img34.png", alt="" style="width: 300px").m-auto
      p.mb-5 La interpretación debe conservar criterios de comparabilidad, verificabilidad y representación fiel de la información financiera (IFRS Foundation, s. f.). La siguiente tabla contiene un ejemplo de comparación entre dos periodos y la forma en que la IA puede apoyar la identificación de rubros que requieren revisión.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 8.
                span Comparación de estados financieros y variaciones porcentuales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Rubro
                      th.ajuste-border-tabla.texto-left Valor 2025
                      th.ajuste-border-tabla.texto-left Valor 2026
                      th.ajuste-border-tabla.texto-left Variación absoluta
                      th.ajuste-border-tabla.texto-left Variación porcentual
                      th.texto-left Interpretación preliminar
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Ingresos operacionales
                      td.ajuste-border-tabla.texto-left $120.000.000
                      td.ajuste-border-tabla.texto-left $150.000.000
                      td.ajuste-border-tabla.texto-left $30.000.000
                      td.ajuste-border-tabla.texto-left 25 %
                      td.texto-left Aumento en ventas o prestación de servicios.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Costos de venta
                      td.ajuste-border-tabla.texto-left $72.000.000
                      td.ajuste-border-tabla.texto-left $96.000.000
                      td.ajuste-border-tabla.texto-left $24.000.000
                      td.ajuste-border-tabla.texto-left 33 %
                      td.texto-left Crecimiento superior al ingreso; revisar márgenes.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos administrativos
                      td.ajuste-border-tabla.texto-left $20.000.000
                      td.ajuste-border-tabla.texto-left $26.000.000
                      td.ajuste-border-tabla.texto-left $6.000.000
                      td.ajuste-border-tabla.texto-left 30 %
                      td.texto-left Revisar contratos, nómina, servicios o gastos nuevos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                      td.ajuste-border-tabla.texto-left $4.000.000
                      td.ajuste-border-tabla.texto-left $7.000.000
                      td.ajuste-border-tabla.texto-left $3.000.000
                      td.ajuste-border-tabla.texto-left 75 %
                      td.texto-left Posible aumento de deuda o intereses.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad del periodo
                      td.ajuste-border-tabla.texto-left $18.000.000
                      td.ajuste-border-tabla.texto-left $15.000.000
                      td.ajuste-border-tabla.texto-left -$3.000.000
                      td.ajuste-border-tabla.texto-left -17 %
                      td.texto-left Disminución de utilidad pese al aumento de ingresos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas por cobrar
                      td.ajuste-border-tabla.texto-left $25.000.000
                      td.ajuste-border-tabla.texto-left $42.000.000
                      td.ajuste-border-tabla.texto-left $17.000.000
                      td.ajuste-border-tabla.texto-left 68 %
                      td.texto-left Revisar ventas a crédito, cartera vencida y recaudo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Obligaciones financieras
                      td.ajuste-border-tabla.texto-left $30.000.000
                      td.ajuste-border-tabla.texto-left $45.000.000
                      td.ajuste-border-tabla.texto-left $15.000.000
                      td.ajuste-border-tabla.texto-left 50 %
                      td.texto-left Revisar nuevos créditos o refinanciaciones.
          p La IA identifica aumentos relevantes en costos, cuentas por cobrar y gastos financieros, pero estos hallazgos deben validarse con soportes y explicaciones administrativas.
          p.mb-5 La relación entre ingresos, costos, gastos y cartera permite interpretar conjuntamente las variaciones antes de formular una conclusión sobre la situación financiera:
          .caja-3(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa observa que sus ingresos crecieron 25 %, pero su utilidad disminuyó 17 %. Al usar IA, la herramienta identifica que los costos de venta crecieron 33 %, los gastos financieros aumentaron 75 % y las cuentas por cobrar crecieron 68 %. Con esta información, el responsable financiero no concluye de inmediato que la empresa está en crisis, sino que revisa los soportes para entender si hubo aumento en compras, nuevos créditos, mayores ventas a crédito o dificultades de recaudo.
                p.mb-0 Después de revisar auxiliares y documentos, puede encontrar que la empresa vendió más, pero otorgó plazos más amplios a los clientes, aumentó el costo de los insumos y adquirió una obligación financiera nueva. En ese caso, la IA ayudó a enfocar el análisis en los rubros más sensibles, pero la explicación real surgió de la revisión financiera y documental.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t3/img35.png', alt='').m-auto
          p.mb-5 El siguiente #[i prompt] orienta a la IA para calcular las variaciones, priorizar los rubros relevantes y establecer los soportes requeridos para su validación:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img36.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] aplicado
          br
          br
          p Analice los estados financieros comparativos de 2025 y 2026. Calcule la variación absoluta y porcentual de cada rubro. Organice los resultados de mayor a menor variación porcentual e identifique los rubros que requieren revisión. Presente una tabla con rubro, valor 2025, valor 2026, variación absoluta, variación porcentual, posible interpretación y soporte que debe consultarse. Cuando el valor del periodo anterior sea cero, no calcule porcentaje y marque el rubro como “sin base comparativa”. No emita conclusiones definitivas sin validar auxiliares, notas, soportes y contexto de la entidad.
      p La comparación de estados financieros permite identificar cambios relevantes, mientras la revisión documental y el contexto del periodo sustentan la interpretación de cada variación.
      p.mb-5 Las variaciones requieren análisis y validación antes de formular conclusiones. Se invita a consultar el video y aplicar sus criterios en la comparación financiera:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/bmhvHFXVLAc?si=BQw1fgRNKsRMHFsR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Variaciones financieras con inteligencia artificial (IA): calcular, interpretar y validar
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Ratios financieras: cálculo, interpretación y alertas de análisis
      p.mb-5 Los ratios relacionan cifras financieras para analizar liquidez, endeudamiento, rentabilidad, eficiencia y capacidad de pago, pero requieren interpretación contextual y documental. El cálculo de ratios permite transformar las cifras contables en relaciones financieras que apoyan el análisis, la comparación y la identificación de alertas:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Relación financiera")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img37.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Relación financiera
              p.mb-0 Un ratio relaciona dos o más cifras para analizar la situación financiera. Por ejemplo, el efectivo disponible debe compararse con las obligaciones de corto plazo.
        .py-3.py-md-4(titulo="Análisis con IA")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img38.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Análisis con IA
              p.mb-0 La IA puede calcular ratios, comparar indicadores entre periodos, identificar variaciones y generar interpretaciones preliminares a partir de estados financieros o bases consolidadas.
        .py-3.py-md-4(titulo="Interpretación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img39.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interpretación
              p.mb-0 Los resultados pueden variar por decisiones administrativas, estacionalidad, inversiones, políticas contables o hechos extraordinarios. Por ello, no deben interpretarse de manera aislada.
        .py-3.py-md-4(titulo="Validación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t3/img40.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Validación
              p.mb-0 La información utilizada debe conservar relevancia, representación fiel, comparabilidad y verificabilidad, de acuerdo con el Marco Conceptual para la Información Financiera (IFRS Foundation, s. f.).
      p.mb-5 Los indicadores de liquidez y endeudamiento permiten analizar la capacidad de pago y la proporción de recursos financiados mediante obligaciones financieras:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Razón corriente").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] liquidez.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] activo corriente ÷ pasivo corriente.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] capacidad para cubrir obligaciones de corto plazo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] un valor bajo puede indicar presión de pago.
            .row(titulo="Capital de trabajo").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] liquidez. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] activo corriente − pasivo corriente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] recursos disponibles después de cubrir los pasivos corrientes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] un resultado negativo requiere revisar la liquidez.
            .row(titulo="Nivel de endeudamiento").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] endeudamiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] pasivo total ÷ activo total × 100. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] proporción de activos financiados con deuda. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] un aumento elevado puede indicar mayor dependencia de terceros.
            .row(titulo="Concentración de deuda corriente").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] endeudamiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] pasivo corriente ÷ pasivo total × 100. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] peso de las obligaciones de corto plazo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] una concentración elevada puede presionar el flujo de caja.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img41.png", alt="" style="width: 300px").m-auto
      p.mb-5 El análisis continúa con ratios que relacionan la utilidad, los activos, el patrimonio, la cartera y el movimiento de los inventarios:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img42.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Margen neto").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] rentabilidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] utilidad neta ÷ ingresos × 100. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] ganancia obtenida por cada peso vendido. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] su disminución puede indicar mayores costos o gastos.
            .row(titulo="Rentabilidad sobre activos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] rentabilidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] utilidad neta ÷ activo total × 100. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] capacidad de los activos para generar utilidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] un valor bajo puede indicar activos poco productivos.
            .row(titulo="Rentabilidad patrimonial").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] rentabilidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] utilidad neta ÷ patrimonio × 100. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] retorno generado sobre los recursos propios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] una disminución sostenida puede afectar las expectativas de los propietarios.
            .row(titulo="Rotación de cartera").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] rotación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] ventas a crédito ÷ cuentas por cobrar promedio. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] velocidad de recuperación de la cartera. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] una rotación baja puede indicar dificultades de recaudo.
            .row(titulo="Rotación de inventarios").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Tipo:] rotación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Fórmula:] costo de ventas ÷ inventario promedio. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Análisis:] movimiento de los inventarios durante el periodo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Alerta:] una rotación baja puede indicar acumulación o ventas lentas.
      p.mb-5 Un caso numérico permite relacionar los resultados de liquidez, endeudamiento y rentabilidad con los factores que requieren una revisión financiera complementaria:
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1__texto
            h5 Ejemplo aplicado:
            p.mb-0 Una empresa presenta los siguientes datos: activo corriente de $80.000.000, pasivo corriente de $50.000.000, pasivo total de $120.000.000, activo total de $250.000.000, ingresos de $300.000.000 y utilidad neta de $24.000.000. Con estos datos, la IA puede calcular una razón corriente de 1,6, un nivel de endeudamiento de 48 % y un margen neto de 8 %.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img43.png', alt='').m-auto
      p La razón corriente puede indicar capacidad inicial para cubrir obligaciones de corto plazo, pero requiere revisar la composición de la cartera y los inventarios. El endeudamiento puede ser manejable o riesgoso según el flujo de caja, los plazos y la capacidad de generar ingresos. El margen neto debe compararse con periodos anteriores, presupuestos, costos y condiciones del sector.
      p.mb-5 La siguiente tabla presenta cómo pasar del cálculo automático del ratio a una revisión financiera más completa:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 9.
                span Interpretación y validación de ratios con IA
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Resultado generado por IA
                      th.ajuste-border-tabla.texto-left Interpretación preliminar
                      th.ajuste-border-tabla.texto-left Revisión requerida
                      th.texto-left Soporte a consultar
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Razón corriente baja
                      td.ajuste-border-tabla.texto-left Posible dificultad para cubrir obligaciones de corto plazo.
                      td.ajuste-border-tabla.texto-left Revisar vencimientos, cartera, inventarios y bancos.
                      td.texto-left Estado de situación financiera, cartera, bancos y cuentas por pagar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento alto
                      td.ajuste-border-tabla.texto-left Mayor dependencia de recursos de terceros.
                      td.ajuste-border-tabla.texto-left Analizar tipo de deuda, plazo, tasa y capacidad de pago.
                      td.texto-left Obligaciones financieras, contratos, extractos y flujo de caja.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen neto disminuido
                      td.ajuste-border-tabla.texto-left Menor utilidad frente a las ventas.
                      td.ajuste-border-tabla.texto-left Revisar costos, gastos, descuentos o ingresos extraordinarios.
                      td.texto-left Estado de resultados, auxiliares, facturas y presupuesto.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Rentabilidad sobre activos baja
                      td.ajuste-border-tabla.texto-left Activos con bajo aporte a la utilidad.
                      td.ajuste-border-tabla.texto-left Revisar activos improductivos, inversiones o capacidad instalada.
                      td.texto-left Auxiliares de activos, depreciación y reportes de operación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cartera con baja rotación
                      td.ajuste-border-tabla.texto-left Recaudo lento o acumulación de cuentas por cobrar.
                      td.ajuste-border-tabla.texto-left Revisar edades de cartera, clientes y acuerdos de pago.
                      td.texto-left Auxiliar de cartera, facturas y recibos de caja.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios con baja rotación
                      td.ajuste-border-tabla.texto-left Acumulación de existencias o baja salida de productos.
                      td.ajuste-border-tabla.texto-left Verificar ventas, compras, deterioro o productos de baja demanda.
                      td.texto-left Inventarios, compras, ventas y conteos físicos.
          p.mb-5 El siguiente #[i prompt] orienta a la IA para calcular los ratios, generar interpretaciones preliminares y establecer los soportes requeridos para validar los resultados:
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img44.png')})` }")
            .bloque-texto-g__texto.p-4
              h5 #[i Prompt] aplicado
              br
              br
              p Calcule los principales ratios financieros de liquidez, endeudamiento, rentabilidad y rotación con la información suministrada. Presente una tabla con indicador, fórmula aplicada, resultado, interpretación preliminar, posible alerta y soporte que debe revisarse. Compare los resultados con el periodo anterior cuando haya datos disponibles. No emita conclusiones definitivas; cada indicador debe validarse con estados financieros, auxiliares, notas, presupuesto y contexto de la entidad.
          p.mb-0 Los ratios convierten cifras contables en indicadores útiles, pero su interpretación requiere datos confiables, fórmulas correctas, periodos comparables, soportes y contexto financiero.

</template>

<script>
export default {
  name: 'Tema3',
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
