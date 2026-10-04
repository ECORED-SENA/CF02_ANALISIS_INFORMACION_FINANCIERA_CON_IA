<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Sistemas integrados de información financiera
      p.mb-5 Los sistemas integrados articulan datos, documentos, registros y controles para sostener el análisis financiero con información organizada, verificable y relacionada (Ley 1314, 2009). Esta apertura presenta la función general del tema. Los componentes, aplicativos, flujos, registros y referentes normativos se desarrollan únicamente en los subtemas.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto de sistema integrado de información financiera
      p.mb-5 La integración financiera reúne elementos tecnológicos, documentales y operativos que intervienen desde el registro del hecho económico hasta la validación de sus resultados: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Integración financiera
                  p.mb-0 Un sistema integrado de información financiera combina herramientas, procesos, documentos, registros, bases de datos y controles. Su finalidad es capturar, procesar, organizar, consultar y reportar información relacionada con los hechos económicos de una organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img1.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alcance del sistema
                  p.mb-0 El sistema no se limita al programa contable. Puede incorporar facturación electrónica, cartera, tesorería, inventarios, nómina, bancos, compras, ventas, gestión documental, tableros de control y herramientas de análisis con inteligencia artificial.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conexión de la información
                  p.mb-0 Una venta puede originar una factura, un registro contable y una cuenta por cobrar. Posteriormente, el pago afecta bancos, cartera, flujo de efectivo y estados financieros. La conexión permite reconstruir la operación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Beneficios de la integración
                  p.mb-0 La integración reduce reprocesos, duplicidad de registros y diferencias entre archivos. También facilita la comparación de saldos, la consulta de soportes y la identificación de inconsistencias entre módulos financieros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Finalidad del sistema 
                  p.mb-0 La integración permite consultar información relacionada, comprobar la trazabilidad de las operaciones, comparar saldos e identificar diferencias entre documentos, módulos y registros financieros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Criterio financiero
                  p.mb-0 El sistema debe facilitar información útil, verificable y comparable. Los estándares internacionales promueven transparencia, rendición de cuentas y eficiencia mediante información financiera de calidad (IFRS Foundation, s. f.).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Un sistema integrado reúne componentes con funciones específicas que permiten registrar, controlar, relacionar y analizar la información derivada de los hechos económicos:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img7.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Facturación electrónica").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: generar y conservar soportes de ventas y compras. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: factura emitida a un cliente o recibida de un proveedor. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: extraer fecha, tercero, valor, impuesto y concepto.
            .row(titulo="Sistema contable").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: registrar hechos económicos y generar reportes contables. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: registro de ventas, compras, gastos, activos y obligaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: revisar asientos, clasificaciones, saldos y posibles inconsistencias.
            .row(titulo="Cartera").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: controlar cuentas por cobrar, vencimientos y recaudos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: facturas pendientes, abonos y saldos de clientes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: identificar cartera vencida, patrones de pago y alertas de mora.
            .row(titulo="Cuentas por pagar").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: organizar obligaciones con proveedores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: facturas pendientes, vencimientos y pagos realizados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: detectar posibles duplicados, vencimientos o pagos sin soporte. 
            .row(titulo="Tesorería y bancos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: controlar entradas, salidas y saldos de efectivo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: extractos bancarios, comprobantes de egreso y conciliaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: comparar movimientos bancarios con registros contables.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Inventarios").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: registrar entradas, salidas y existencias. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: compra de mercancía, consumo de insumos o venta de productos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: identificar diferencias entre compras, ventas y existencias.
            .row(titulo="Nómina").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: gestionar pagos laborales y obligaciones asociadas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: salarios, deducciones, aportes y pagos a trabajadores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: señalar inconsistencias en valores, periodos o registros.
            .row(titulo="Gestión documental").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: conservar soportes físicos o digitales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: facturas, contratos, comprobantes, actas y certificaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: buscar, resumir y relacionar documentos con registros financieros.
            .row(titulo="Herramientas de visualización").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: presentar datos mediante gráficos, tableros e informes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: indicadores de liquidez, endeudamiento, ventas o gastos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: apoyar la explicación preliminar de variaciones y alertas. 
            .row(titulo="Controles internos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Función: verificar accesos, autorizaciones, soportes y conciliaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Ejemplo: revisión de pagos, aprobaciones y registros. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Relación con IA: generar hallazgos preliminares que deben validarse antes de tomar decisiones.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img8.png", alt="" style="width: 500px").m-auto
      p.mb-5 Para facilitar la comprensión de tema, se presenta el siguiente ejemplo:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img9.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa comercial realiza ventas a crédito durante el mes. El proceso inicia cuando se emite la factura electrónica al cliente. Luego, el sistema contable registra el ingreso y la cuenta por cobrar. El módulo de cartera controla la fecha de vencimiento y el saldo pendiente. Cuando el cliente paga, tesorería registra el ingreso en bancos y el área contable realiza la conciliación correspondiente.
            p.mb-0 Si la empresa desea usar IA, puede exportar una base con cliente, factura, fecha de vencimiento, valor, abonos y saldo. Con esa información, puede solicitar a la herramienta que identifique facturas vencidas, clientes con saldos repetidos, pagos no aplicados o diferencias entre cartera y bancos. Sin embargo, cada alerta debe revisarse con la factura, el comprobante de pago, el extracto bancario y el registro contable antes de tomar decisiones.
      p.mb-5 El flujo financiero conecta cada hecho económico con su soporte, registro, consolidación, análisis y validación dentro de un sistema integrado, mediante las siguientes etapas:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Hecho económico
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción realizada:] ocurre el hecho económico.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato generado:] venta, compra, pago, cobro o gasto.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Uso posible con IA:] identificar la operación que será analizada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img10.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img11.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Generación del soporte
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción realizada:] se genera el soporte. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato generado:] factura, comprobante, contrato o extracto. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Uso posible con IA:] extraer los datos principales del documento.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registro de la operación
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción realizada:] se registra la operación. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato generado:] asiento contable o registro financiero. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Uso posible con IA:] revisar la clasificación, los valores y las cuentas utilizadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img12.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img13.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Actualización del módulo
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción realizada:] se actualiza el módulo relacionado. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato generado:] cartera, bancos, inventario, nómina o cuentas por pagar. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Uso posible con IA:] comparar saldos, vencimientos o movimientos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Consolidación de la información
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción realizada:] se consolida la información. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato generado:] base financiera, reporte o estado financiero. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Uso posible con IA:] filtrar datos y calcular variaciones o ratios. 
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img14.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img15.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Análisis con IA
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción realizada:]  se analiza la información con IA. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato generado:] alertas, patrones, discrepancias o recomendaciones preliminares. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Uso posible con IA:] orientar la revisión de los registros que requieren validación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Validación del resultado
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción realizada:] se valida el resultado. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato generado:] evidencia documental y conclusión revisada. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Uso posible con IA:] confirmar, descartar o ajustar el hallazgo generado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img16.png', alt='' style="width: 300px").m-auto
      p.mb-0 En síntesis, el sistema integrado organiza y relaciona los datos financieros, facilita su análisis con IA y fortalece la toma de decisiones con respaldo técnico.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Tipos de aplicativos contables y financieros
      p Los aplicativos contables y financieros apoyan el registro, procesamiento, control y análisis de la información generada por los hechos económicos. Permiten gestionar facturación, compras, ventas, bancos, cartera, cuentas por pagar, nómina, inventarios, activos, impuestos, presupuestos e informes financieros.
      p Algunos aplicativos registran operaciones cotidianas, mientras otros procesan información consolidada para identificar tendencias, variaciones e indicadores. En el análisis con inteligencia artificial (IA), ambos aportan los datos necesarios para clasificar transacciones, detectar inconsistencias y generar alertas preliminares. Por ello, la información debe estar completa, actualizada, estandarizada y relacionada con sus soportes.
      p.mb-5 Según su función y la información que aportan al análisis con IA, los principales aplicativos contables y financieros se clasifican así:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Sistema contable").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] registrar hechos económicos y generar reportes contables. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] registrar compras, ventas, gastos, pagos y obligaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] revisar asientos, clasificaciones, saldos o registros inconsistentes.
            .row(titulo="Aplicativo de facturación").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] emitir, recibir y conservar facturas o documentos equivalentes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] controlar facturas de venta y de proveedores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] extraer fecha, tercero, valor, impuesto y concepto.
            .row(titulo="Módulo de cartera").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] administrar cuentas por cobrar, vencimientos y recaudos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] efectuar seguimiento a facturas vencidas y saldos pendientes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] identificar mora, patrones de pago o alertas de recaudo.
            .row(titulo="Módulo de cuentas por pagar").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] controlar obligaciones con proveedores y fechas de pago. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] revisar facturas pendientes y pagos realizados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] detectar posibles duplicados, vencimientos o pagos sin soporte.
            .row(titulo="Tesorería").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] gestionar entradas, salidas, bancos y flujo de efectivo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] controlar pagos, consignaciones y conciliaciones bancarias. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] comparar movimientos bancarios con registros contables.
            .row(titulo="Nómina").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] liquidar salarios, deducciones, aportes y pagos laborales. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] revisar la nómina mensual y sus obligaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] identificar diferencias en valores, periodos o registros repetidos.
            .row(titulo="Inventarios").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] controlar existencias, entradas, salidas y costos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] efectuar seguimiento a compras, consumos y ventas de mercancía. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] detectar diferencias entre compras, ventas y saldos de inventario.
            .row(titulo="ERP financiero").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] integrar procesos contables, financieros, comerciales y administrativos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] relacionar ventas, compras, cartera, bancos e inventarios. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] analizar datos integrados y generar alertas cruzadas entre módulos.
            .row(titulo="Herramienta de analítica").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función principal:] procesar datos para identificar tendencias, variaciones e indicadores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo de uso:] comparar gastos, ingresos, márgenes o ratios entre periodos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Apoyo posible de IA:] interpretar variaciones, patrones o comportamientos atípicos.
      p.mb-5 La integración entre sistemas contables, cuentas por pagar, bancos y gestión documental permite analizar los gastos mensuales con apoyo de inteligencia artificial:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img17.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa comercial desea revisar sus gastos mensuales. Para hacerlo, descarga del sistema contable una base con fecha, tercero, concepto, cuenta contable, centro de costo y valor. Luego consulta el aplicativo de cuentas por pagar para verificar facturas pendientes, revisa el extracto bancario desde la plataforma financiera y organiza los soportes en una carpeta digital. Con estos insumos puede utilizar una herramienta de IA para clasificar gastos por categoría, identificar valores atípicos, comparar pagos con facturas y generar una tabla de alertas preliminares.
            p.mb-0 La IA puede indicar, por ejemplo, que existen dos pagos con el mismo valor a un proveedor, un gasto registrado sin soporte o una variación importante en el rubro de transporte. Sin embargo, la persona responsable debe revisar el sistema contable, la factura, el comprobante de egreso y el extracto bancario antes de aceptar el hallazgo. De esta manera, el aplicativo aporta los datos, la IA apoya el análisis inicial y el criterio profesional valida el resultado.
      p.mb-5 Las necesidades financieras determinan el aplicativo, los datos requeridos y el resultado que puede obtenerse con apoyo de IA. La siguiente tabla presenta ejemplos de necesidades financieras y el aplicativo que puede aportar información para analizarlas con apoyo de IA:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Relación entre aplicativos financieros y necesidades de análisis
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Necesidad de análisis
                      th.ajuste-border-tabla.texto-left Aplicativo que aporta información
                      th.ajuste-border-tabla.texto-left Datos requeridos
                      th.texto-left Resultado esperado con apoyo de IA
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisar cartera vencida.
                      td.ajuste-border-tabla.texto-left Módulo de cartera
                      td.ajuste-border-tabla.texto-left Cliente, factura, vencimiento, valor, abonos y saldo.
                      td.texto-left Listado de facturas vencidas y prioridad de revisión.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Detectar pagos duplicados.
                      td.ajuste-border-tabla.texto-left Cuentas por pagar y tesorería
                      td.ajuste-border-tabla.texto-left Proveedor, factura, comprobante, fecha, valor y referencia bancaria.
                      td.texto-left Alertas por coincidencias entre proveedor, factura o valor.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Analizar gastos del mes.
                      td.ajuste-border-tabla.texto-left Sistema contable
                      td.ajuste-border-tabla.texto-left Cuenta, concepto, tercero, centro de costo, fecha y valor.
                      td.texto-left Clasificación de gastos y valores atípicos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comparar ventas entre periodos.
                      td.ajuste-border-tabla.texto-left Facturación y sistema contable
                      td.ajuste-border-tabla.texto-left Fecha, cliente, producto, cantidad, valor e impuesto.
                      td.texto-left Variaciones porcentuales y tendencias de ventas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisar conciliación bancaria.
                      td.ajuste-border-tabla.texto-left Tesorería y bancos
                      td.ajuste-border-tabla.texto-left Extracto, comprobantes, fecha, valor, referencia y registro contable.
                      td.texto-left Diferencias entre banco y contabilidad para validar.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Verificar nómina.
                      td.ajuste-border-tabla.texto-left Módulo de nómina
                      td.ajuste-border-tabla.texto-left Trabajador codificado, periodo, devengos, deducciones y neto pagado.
                      td.texto-left Inconsistencias en valores, pagos o periodos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Controlar inventarios.
                      td.ajuste-border-tabla.texto-left Inventarios y compras
                      td.ajuste-border-tabla.texto-left Producto, entrada, salida, costo, existencia y factura.
                      td.texto-left Diferencias entre compras, ventas y saldos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Preparar indicadores financieros.
                      td.ajuste-border-tabla.texto-left Sistema contable y estados financieros
                      td.ajuste-border-tabla.texto-left Activos, pasivos, patrimonio, ingresos, costos y gastos.
                      td.texto-left Cálculo e interpretación inicial de ratios financieros.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Elaborar informe financiero.
                      td.ajuste-border-tabla.texto-left Sistema contable, analítica y visualización
                      td.ajuste-border-tabla.texto-left Estados financieros, indicadores, variaciones y observaciones.
                      td.texto-left Informe preliminar con hallazgos, gráficos y alertas.
          p.mb-0 En síntesis, los aplicativos aportan información organizada y verificable que permite a la IA identificar patrones, diferencias y alertas para fortalecer el análisis financiero.
          Separador
          #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.3 Flujo de documentos en procesos contables y financieros
          p.mb-5 El flujo documental integra soportes, registros y controles para conservar la trazabilidad de los hechos económicos y facilitar su análisis mediante las siguientes funciones:
          TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
            .py-3.py-md-4(titulo="Concepto")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Concepto
                  p.mb-0 Es la ruta que sigue un soporte desde su generación o recepción hasta su registro, revisión, aprobación, conservación y utilización en informes financieros (Ley 527, 1999).
            .py-3.py-md-4(titulo="Articulación contable")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img19.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Articulación contable
                  p.mb-0 Conecta el hecho económico con sus soportes y registros. Por ejemplo, una compra relaciona factura, cuenta por pagar, comprobante de egreso y extracto bancario.
            .py-3.py-md-4(titulo="Apoyo de IA")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img20.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Apoyo de IA
                  p.mb-0 Facilita revisiones cruzadas entre documentos y registros. Para obtener resultados confiables, la información debe estar completa, clasificada y vinculada con el hecho económico correspondiente.
            .py-3.py-md-4(titulo="Gestión electrónica")
              .row.justify-content-center.align-items-center
                .col-xl-5.order-2.order-lg-1
                  figure
                    img(src='@/assets/curso/temas/t1/img21.png', alt="" ).m-auto
                .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                  h4.txt--purpura.mb-4 Gestión electrónica
                  p.mb-0 Debe garantizar acceso, integridad, autenticidad y disponibilidad para administrar, consultar y proteger los archivos utilizados como evidencia financiera (Archivo General de la Nación, 2018; MinTIC, 2019).
      p.mb-5 El flujo documental organiza los soportes y registros mediante etapas relacionadas que conservan la trazabilidad del hecho económico hasta su validación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Generación del hecho económico
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] identificar la operación realizada. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] compra, venta, pago, cobro, gasto, contrato o nómina. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] definir la operación que será revisada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img22.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img23.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Recepción o emisión del soporte
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] obtener el documento principal de la operación. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] factura, recibo, comprobante, contrato o extracto. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] extraer fecha, tercero, valor y concepto.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificación inicial
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] comprobar que el documento esté completo y corresponda a la operación. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] soporte legible, válido y relacionado con el proceso. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] detectar documentos incompletos o inconsistentes.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img24.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img25.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Clasificación documental
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] organizar el soporte según proceso, periodo o tercero. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] carpeta de compras, ventas, bancos, cartera o nómina. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] facilitar búsquedas, comparaciones y trazabilidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registro contable
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] incorporar el hecho económico en el sistema. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] asiento contable, cuenta, tercero, valor y fecha. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] revisar clasificaciones, cuentas y valores registrados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img26.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img27.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Aprobación o control
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] verificar autorización, responsable y cumplimiento del procedimiento. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] orden de pago, aprobación, firma o visto bueno. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] identificar registros sin autorización o soporte asociado. 
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Movimiento financiero
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] relacionar el registro con el pago, recaudo o movimiento bancario. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] comprobante de egreso, recibo de caja o extracto. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] comparar pagos, cobros y registros contables.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img28.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img29.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Archivo y conservación
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] guardar documentos y evidencias del proceso. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] expediente físico o digital con soportes completos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] consultar documentos para validar los hallazgos generados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Análisis financiero
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] filtrar, comparar e interpretar la información. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] bases, reportes, estados financieros o indicadores. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] identificar patrones, diferencias, alertas o variaciones.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img30.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t1/img31.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Validación del resultado
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción principal:] confirmar los hallazgos con soportes y procedimiento técnico. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Documento o dato asociado:] evidencia documental y conclusión revisada. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Aplicación de IA:] aceptar, descartar o ajustar las alertas generadas.
      p.mb-5 La aplicación del flujo documental en una compra permite relacionar los soportes, registros y controles necesarios para validar el pago a un proveedor:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img32.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa recibe una factura de un proveedor por la compra de materiales. El flujo documental inicia con la recepción del documento y la verificación de su correspondencia con la orden de compra en aspectos como proveedor, fecha, concepto, cantidad, valor e impuestos. Posteriormente, el área contable registra la operación, cuentas por pagar controla el vencimiento, tesorería programa el pago y el extracto bancario registra la salida del dinero.
            p.mb-0 Si la empresa utiliza IA, puede solicitar que se comparen la factura, el registro contable, el comprobante de egreso y el extracto bancario. La herramienta puede identificar diferencias entre el valor pagado y el facturado, la ausencia del comprobante de egreso o dos pagos por el mismo valor al mismo proveedor. Estas alertas no constituyen conclusiones definitivas, sino indicios que orientan al responsable en la revisión de los documentos y la validación de lo ocurrido.
      p.mb-5 La tabla relaciona los documentos utilizados en la revisión automatizada y la validación humana de un pago a proveedor:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Flujo documental aplicado al pago de un proveedor
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Documento o registro
                      th.ajuste-border-tabla.texto-left Información que aporta
                      th.ajuste-border-tabla.texto-left Revisión que puede apoyar la IA
                      th.texto-left Validación humana requerida
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Orden de compra
                      td.ajuste-border-tabla.texto-left Bien o servicio solicitado, proveedor, cantidad y valor acordado.
                      td.ajuste-border-tabla.texto-left Comparar si la factura corresponde a lo autorizado.
                      td.texto-left Revisar aprobación y condiciones pactadas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Factura del proveedor
                      td.ajuste-border-tabla.texto-left Fecha, número, proveedor, concepto, impuestos y total.
                      td.ajuste-border-tabla.texto-left Extraer datos y detectar valores, fechas o conceptos faltantes.
                      td.texto-left Confirmar que la factura sea válida y corresponda al proceso.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registro contable
                      td.ajuste-border-tabla.texto-left Cuenta afectada, tercero, valor y fecha de reconocimiento.
                      td.ajuste-border-tabla.texto-left Identificar posibles errores de clasificación o valor.
                      td.texto-left Verificar cuenta contable, periodo y política interna.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cuenta por pagar
                      td.ajuste-border-tabla.texto-left Vencimiento, saldo pendiente y estado de pago.
                      td.ajuste-border-tabla.texto-left Señalar facturas vencidas o saldos duplicados.
                      td.texto-left Confirmar abonos, pagos aplicados y saldo real.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Comprobante de egreso
                      td.ajuste-border-tabla.texto-left Evidencia de autorización y salida de recursos.
                      td.ajuste-border-tabla.texto-left Comparar valor pagado con factura y cuenta por pagar.
                      td.texto-left Revisar autorización y soporte del pago.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Extracto bancario
                      td.ajuste-border-tabla.texto-left Movimiento real de salida de dinero.
                      td.ajuste-border-tabla.texto-left Cruzar fecha, valor y referencia bancaria.
                      td.texto-left Conciliar con el comprobante y el registro contable.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Expediente digital
                      td.ajuste-border-tabla.texto-left Conjunto de documentos relacionados con la operación.
                      td.ajuste-border-tabla.texto-left Facilitar búsqueda y relación entre soportes.
                      td.texto-left Confirmar que el expediente esté completo y protegido.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultado de IA
                      td.ajuste-border-tabla.texto-left Alertas, diferencias o coincidencias encontradas.
                      td.ajuste-border-tabla.texto-left Orientar la revisión de posibles inconsistencias.
                      td.texto-left Confirmar, descartar o documentar cada hallazgo.
          p.mb-0 En síntesis, el flujo documental conserva la trazabilidad financiera y facilita las revisiones con IA, sin sustituir la validación documental ni el procedimiento técnico.
          Separador
          #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.4 Clasificación de transacciones comerciales y tipos de registros
          p.mb-5 La clasificación relaciona cada operación con su naturaleza, efecto financiero, soporte y registro, lo que favorece un análisis con IA técnicamente sustentado:
          .bg-slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Clasificación
                      p.mb-0 Organiza las transacciones como ventas, compras, pagos, cobros, préstamos, gastos, ajustes u otras operaciones, según su naturaleza y efecto financiero (IFRS Foundation, s. f.).
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img33.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Criterios técnicos
                      p.mb-0 Cada transacción debe clasificarse de acuerdo con su soporte, tratamiento contable y efecto sobre activos, pasivos, patrimonio, ingresos, costos o gastos (Ley 1314, 2009).
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img34.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Tipos de registros
                      p.mb-0 Los asientos, auxiliares, comprobantes y módulos financieros incorporan las operaciones al sistema y deben relacionarse con documentos verificables (Decreto 2420, 2015).
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img35.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Aplicación de IA
                      p.mb-0 La clasificación permite identificar patrones, diferencias y alertas. Antes del análisis, deben comprobarse cuentas, conceptos, terceros, soportes, periodos y naturaleza de cada registro.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t1/img36.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Las transacciones comerciales pueden organizarse según su clasificación, efecto financiero, soporte y revisión requerida antes de utilizar inteligencia artificial:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Clasificación de transacciones comerciales
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Transacción comercial
                      th.ajuste-border-tabla.texto-left Clasificación posible
                      th.ajuste-border-tabla.texto-left Efecto financiero
                      th.ajuste-border-tabla.texto-left Soporte habitual
                      th.texto-left Revisión antes de usar IA
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta de mercancía de contado
                      td.ajuste-border-tabla.texto-left Ingreso operativo
                      td.ajuste-border-tabla.texto-left Aumenta ingresos y efectivo o bancos.
                      td.ajuste-border-tabla.texto-left Factura de venta y comprobante de pago.
                      td.texto-left Verificar fecha, cliente, valor, impuesto y medio de pago.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Venta a crédito
                      td.ajuste-border-tabla.texto-left Ingreso operativo y cuenta por cobrar
                      td.ajuste-border-tabla.texto-left Aumenta ingresos y cartera.
                      td.ajuste-border-tabla.texto-left Factura de venta y registro de cartera.
                      td.texto-left Revisar vencimiento, saldo y condiciones de pago.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de inventario
                      td.ajuste-border-tabla.texto-left Activo o costo según el proceso
                      td.ajuste-border-tabla.texto-left Aumenta inventarios o costos.
                      td.ajuste-border-tabla.texto-left Factura de proveedor y orden de compra.
                      td.texto-left Confirmar recepción, valor, impuesto y clasificación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago a proveedor
                      td.ajuste-border-tabla.texto-left Disminución de obligación
                      td.ajuste-border-tabla.texto-left Reduce bancos y cuentas por pagar.
                      td.ajuste-border-tabla.texto-left Comprobante de egreso y extracto bancario.
                      td.texto-left Cruzar factura, comprobante y movimiento bancario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de nómina
                      td.ajuste-border-tabla.texto-left Gasto laboral y salida de efectivo
                      td.ajuste-border-tabla.texto-left Reconoce gasto y disminuye bancos.
                      td.ajuste-border-tabla.texto-left Nómina, desprendibles y comprobantes de pago.
                      td.texto-left Validar periodo, trabajador, devengos, deducciones y neto pagado.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Préstamo bancario recibido
                      td.ajuste-border-tabla.texto-left Obligación financiera
                      td.ajuste-border-tabla.texto-left Aumenta bancos y pasivos.
                      td.ajuste-border-tabla.texto-left Contrato, pagaré y extracto bancario.
                      td.texto-left Evitar clasificarlo como ingreso operativo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Compra de equipo de cómputo
                      td.ajuste-border-tabla.texto-left Activo o gasto según política
                      td.ajuste-border-tabla.texto-left Puede aumentar activos o gastos.
                      td.ajuste-border-tabla.texto-left Factura, acta de entrega y política contable.
                      td.texto-left Revisar vida útil, materialidad y uso del bien.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Depreciación mensual
                      td.ajuste-border-tabla.texto-left Ajuste contable
                      td.ajuste-border-tabla.texto-left Reconoce gasto y disminución del valor del activo.
                      td.ajuste-border-tabla.texto-left Cálculo de depreciación y auxiliar de activos.
                      td.texto-left Confirmar método, vida útil y periodo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Devolución en ventas
                      td.ajuste-border-tabla.texto-left Menor ingreso o ajuste comercial
                      td.ajuste-border-tabla.texto-left Disminuye ingresos o cartera.
                      td.ajuste-border-tabla.texto-left Nota crédito o documento equivalente.
                      td.texto-left Relacionar con factura original y cliente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pago de impuesto
                      td.ajuste-border-tabla.texto-left Obligación tributaria cancelada
                      td.ajuste-border-tabla.texto-left Disminuye bancos y pasivos.
                      td.ajuste-border-tabla.texto-left Recibo oficial y comprobante de pago.
                      td.texto-left Verificar periodo, concepto tributario y valor pagado.
          p.mb-5 Para aplicar los conocimientos abordados, se realiza el siguiente ejemplo:
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img37.png', alt='').m-auto
              .col-xl.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa descarga del sistema contable una base con los movimientos del mes. En ella aparecen registros de ventas, compras, pagos, préstamos, nómina y ajustes. Antes de utilizar IA, la persona responsable revisa si cada operación tiene una clasificación adecuada: ventas como ingresos; compras de mercancía como inventarios o costos; pagos a proveedores como disminución de cuentas por pagar; préstamos como obligaciones financieras; y depreciaciones como ajustes contables.
                p Luego, formula el siguiente #[i prompt]: “Analice la base de transacciones del mes. Clasifique los registros por tipo de operación: ventas, compras, pagos, cobros, nómina, préstamos, impuestos y ajustes. Identifique los registros que podrían estar mal clasificados y presente fecha, tercero, valor, clasificación actual, posible reclasificación y razón de revisión. No realice ajustes definitivos; cada caso debe validarse con soporte documental y política contable”.
                p.mb-0 La IA puede señalar un préstamo bancario registrado como ingreso, una compra de equipo reconocida como gasto sin revisar la política de activos o un posible pago duplicado. Estas alertas orientan una revisión cruzada con facturas, comprobantes, extractos, auxiliares y políticas internas, pero no constituyen conclusiones definitivas.
          p.mb-5 Los registros financieros documentan las operaciones y aportan evidencia contable y de movimientos de efectivo para comprobar saldos y clasificaciones durante el análisis con IA:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Asiento contable")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img38.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Asiento contable
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] cuenta, tercero, fecha, débito, crédito y concepto. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] registro de una compra a proveedor. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso de IA:] revisar cuentas, valores y posibles inconsistencias.
        .py-3.py-md-4(titulo="Registro auxiliar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img39.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Registro auxiliar
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] detalle por tercero, cuenta, documento o centro de costo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] auxiliar de cuentas por cobrar por cliente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso de IA:] identificar saldos vencidos, duplicados o diferencias.
        .py-3.py-md-4(titulo="Comprobante de ingreso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img40.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comprobante de ingreso
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] evidencia de la entrada de recursos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] práctico: recaudo de una factura de venta. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso de IA:] relacionar los pagos recibidos con las facturas y los registros de cartera.
        .py-3.py-md-4(titulo="Comprobante de egreso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img41.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comprobante de egreso
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] evidencia de la salida de recursos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] pago a proveedor o pago de nómina. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso de IA:] comparar el valor pagado con la factura, la obligación y el extracto bancario.
        .py-3.py-md-4(titulo="Registro de bancos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img42.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Registro de bancos
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] movimientos de entradas, salidas y saldos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:]  extracto bancario o conciliación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso de IA:] detectar diferencias entre los movimientos bancarios y los registros contables.
      p.mb-5 La clasificación continúa con registros que complementan el control financiero mediante información sobre cartera, obligaciones, inventarios, nómina y ajustes contables:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Registro de cartera").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] facturas pendientes, abonos, vencimientos y saldos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo práctico:] control de clientes con pagos pendientes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso posible con IA:] priorizar cartera vencida y generar alertas de recaudo.
            .row(titulo="Registro de cuentas por pagar").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] obligaciones con proveedores y fechas de pago.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo práctico:] facturas pendientes de pago. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso posible con IA:] identificar vencimientos, posibles duplicados o pagos sin soporte.
            .row(titulo="Registro de inventarios").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] entradas, salidas, costos y existencias.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo práctico:] compra y venta de mercancía. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso posible con IA:] comparar compras, ventas y saldos disponibles.
            .row(titulo="Registro de nómina").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] devengos, deducciones, aportes y valor neto pagado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo práctico:] nómina mensual de trabajadores. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso posible con IA:] señalar variaciones inusuales o diferencias entre periodos.
            .row(titulo="Registro de ajustes").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Contenido:] correcciones, reclasificaciones o estimaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo práctico:] depreciación, provisión o corrección contable. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Uso posible con IA:] revisar si el ajuste cuenta con soporte, cálculo y autorización.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img43.png", alt="" style="width: 350px").m-auto
      p.mb-0 En síntesis, clasificar las transacciones y relacionarlas con sus registros prepara información confiable para el análisis con IA y reduce interpretaciones equivocadas.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Marco normativo de referencia para el análisis financiero con IA
      p.mb-5 El marco normativo establece criterios para procesar, interpretar y presentar información financiera con IA de forma responsable y verificable. Los principales referentes aplicables son:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img44.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ley 1314 de 2009").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué orienta:] principios y normas de contabilidad, información financiera y aseguramiento aceptados en Colombia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación con IA:] permite ubicar el análisis dentro de criterios técnicos y normativos (Ley 1314, 2009). 
            .row(titulo="Decreto 2420 de 2015").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué orienta:] marco técnico normativo de contabilidad, información financiera y aseguramiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación con IA:] permite identificar el grupo normativo y el estándar aplicable a la entidad (Decreto 2420, 2015).
            .row(titulo="Marco Conceptual IFRS").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué orienta:] objetivo de la información financiera, características cualitativas, elementos, reconocimiento y medición. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación con IA:] permite validar clasificaciones, mediciones y criterios de presentación (IFRS Foundation, s. f.).
            .row(titulo="Políticas contables internas").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué orienta:] criterios definidos por la organización para aplicar las normas a sus operaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación con IA:] permiten verificar si una clasificación o interpretación coincide con el procedimiento institucional.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Procedimientos contables y financieros").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué orienta:] actividades, responsables, soportes, aprobaciones y controles de cada proceso. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación con IA:] respaldan las revisiones cruzadas y la validación documental de los resultados.
            .row(titulo="Ley 1581 de 2012").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué orienta:] protección de los datos personales contenidos en bases de datos y archivos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación con IA:] exige revisar autorización, finalidad, confidencialidad y seguridad antes de procesar datos personales.
            .row(titulo="CONPES 4144 de 2025").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué orienta:] desarrollo y adopción ética, segura y sostenible de la inteligencia artificial en Colombia. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación con IA:] promueve un uso responsable, seguro y trazable de estas tecnologías (DNP, 2025).
            .row(titulo="Controles internos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué orienta:] medidas para prevenir errores, accesos indebidos, inconsistencias y usos inadecuados de la información. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Aplicación con IA:] permiten definir quién revisa, valida, aprueba y documenta los resultados generados.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img45.png", alt="" style="width: 500px").m-auto
      p.mb-5 El siguiente caso aplicado permite relacionar los referentes normativos con la revisión de estados financieros y la validación de alertas generadas por IA:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img46.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa desea analizar sus estados financieros con IA para identificar variaciones, calcular ratios y generar alertas preliminares. Antes de ejecutar la consulta, debe establecer el marco normativo de referencia: identificar el marco técnico contable que aplica, revisar sus políticas internas, verificar que los estados financieros correspondan al periodo correcto, proteger datos sensibles y definir qué resultados serán considerados solo como insumos de revisión.
            p Luego puede formular un #[i prompt] como el siguiente: “Analice los estados financieros comparativos de los años 2025 y 2026. Calcule variaciones porcentuales, identifique cambios relevantes en activos, pasivos, ingresos, costos y gastos, y señale posibles alertas para revisión. Presente los resultados en una tabla con rubro, variación, posible interpretación y soporte que debe revisarse. No emita conclusiones definitivas y tenga en cuenta que los resultados deben validarse con el marco contable aplicable, políticas internas y soportes documentales”.
            p.mb-0 Si la IA indica que el endeudamiento aumentó o que los gastos operacionales crecieron de forma significativa, esa alerta debe compararse con los estados financieros, notas, auxiliares, contratos, obligaciones financieras, políticas contables y explicaciones de la administración. De esta manera, el marco normativo ayuda a evitar que una respuesta automática se convierta en conclusión financiera sin validación.
      .bg-2
        .px-5
          p.mb-5 La definición del marco normativo requiere una secuencia que relacione las características de la entidad, los soportes disponibles y la validación profesional, como se presenta en la siguiente tabla:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Ruta para establecer el marco normativo antes de analizar información con IA
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Paso
                      th.ajuste-border-tabla.texto-left Acción
                      th.ajuste-border-tabla.texto-left Ejemplo práctico
                      th.texto-left Resultado esperado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 1
                      td.ajuste-border-tabla.texto-left Identificar el tipo de entidad.
                      td.ajuste-border-tabla.texto-left Empresa comercial, entidad sin ánimo de lucro, pyme o entidad vigilada.
                      td.texto-left Se reconoce el contexto del análisis.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 2
                      td.ajuste-border-tabla.texto-left Definir el marco técnico aplicable.
                      td.ajuste-border-tabla.texto-left Grupo normativo contable o estándar financiero correspondiente.
                      td.texto-left Se establece el referente para clasificar, medir y presentar información.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 3
                      td.ajuste-border-tabla.texto-left Revisar políticas contables internas.
                      td.ajuste-border-tabla.texto-left Política de activos, cartera, ingresos, provisiones o deterioro.
                      td.texto-left Se identifican criterios propios de la organización.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 4
                      td.ajuste-border-tabla.texto-left Verificar los soportes disponibles.
                      td.ajuste-border-tabla.texto-left Estados financieros, auxiliares, facturas, contratos, extractos y notas.
                      td.texto-left Se confirma que el análisis tenga evidencia documental.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 5
                      td.ajuste-border-tabla.texto-left Delimitar la finalidad del análisis.
                      td.ajuste-border-tabla.texto-left Calcular ratios, comparar periodos, identificar alertas o preparar informe.
                      td.texto-left Se evita usar datos para propósitos no definidos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 6
                      td.ajuste-border-tabla.texto-left Proteger datos sensibles.
                      td.ajuste-border-tabla.texto-left Anonimizar clientes, proveedores, empleados o cuentas bancarias.
                      td.texto-left Se reduce el riesgo de exposición de información.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 7
                      td.ajuste-border-tabla.texto-left Ejecutar la consulta con IA.
                      td.ajuste-border-tabla.texto-left Solicitar variaciones, ratios, alertas o interpretación preliminar.
                      td.texto-left Se obtienen hallazgos iniciales para revisión.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 8
                      td.ajuste-border-tabla.texto-left Comparar con normativa y políticas.
                      td.ajuste-border-tabla.texto-left Revisar si la alerta corresponde al marco contable y al procedimiento interno.
                      td.texto-left Se confirma si el resultado tiene coherencia técnica.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 9
                      td.ajuste-border-tabla.texto-left Validar con responsables y soportes.
                      td.ajuste-border-tabla.texto-left Contrastar con contabilidad, tesorería, cartera o gerencia.
                      td.texto-left Se acepta, ajusta o descarta el hallazgo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 10
                      td.ajuste-border-tabla.texto-left Documentar el análisis.
                      td.ajuste-border-tabla.texto-left Guardar base, #[i prompt], respuesta, revisión y decisión final.
                      td.texto-left Se conserva trazabilidad del uso de IA.
          p.mb-0   El marco normativo garantiza que el análisis financiero con IA tenga sustento técnico y responsabilidad, mediante la validación normativa, documental, institucional y profesional.

</template>

<script>
export default {
  name: 'Tema1',
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
