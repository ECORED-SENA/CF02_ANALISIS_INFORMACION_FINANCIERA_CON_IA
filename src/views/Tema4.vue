<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Gestión del riesgo financiero y controles con IA
      p La gestión del riesgo financiero integra controles y criterios de validación para utilizar la IA como apoyo, sin convertirla en una fuente automática de decisiones.
      p.mb-5 Este capítulo relaciona la identificación de riesgos, el cumplimiento normativo, la actualización de controles y la trazabilidad con el uso responsable de la inteligencia artificial.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Sistemas normativos de gestión del riesgo: SARLAFT, SAGRILAFT y SARO
      p Los sistemas de gestión del riesgo permiten prevenir y controlar eventos que pueden generar pérdidas, incumplimientos, sanciones o afectaciones reputacionales.
      p.mb-5 Los principales sistemas se diferencian por los riesgos que gestionan, las entidades obligadas, sus aplicaciones y los controles requeridos para utilizar inteligencia artificial:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="SARLAFT")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 SARLAFT
              p El Sistema de Administración del Riesgo de Lavado de Activos y Financiación del Terrorismo comprende la identificación, medición, control y monitoreo del riesgo.
              p.mb-0 Su aplicación incluye la revisión de clientes, productos, canales, jurisdicciones y operaciones. La IA puede identificar patrones inusuales, operaciones repetitivas o cambios atípicos. Cada alerta debe validarse con soportes, perfiles de terceros, procedimientos internos y reportes de cumplimiento (UIAF, 2024).
        .py-3.py-md-4(titulo="SAGRILAFT")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 SAGRILAFT
              p El Sistema de Autocontrol y Gestión del Riesgo Integral de Lavado de Activos, Financiación del Terrorismo y Financiamiento de la Proliferación de Armas de Destrucción Masiva aplica a empresas obligadas del sector real.
              p.mb-0 Comprende la evaluación de contrapartes, beneficiarios finales, proveedores, clientes y señales de alerta. La IA puede clasificar alertas y cruzar información con matrices de riesgo. Los resultados requieren documentación, debida diligencia y validación conforme a las políticas internas.
        .py-3.py-md-4(titulo="SARO")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 SARO
              p El Sistema de Administración del Riesgo Operativo gestiona eventos derivados de fallas en procesos, personas, tecnología, sistemas de información o situaciones externas.
              p.mb-0 En procesos apoyados por IA, este riesgo puede relacionarse con bases incompletas, accesos indebidos, errores de procesamiento, registros duplicados o ausencia de trazabilidad. Cada hallazgo debe validarse mediante la identificación de su causa, responsable, control afectado y acción correctiva.
      p.mb-5 Un caso relacionado con pagos a proveedores permite vincular las alertas generadas por IA con diferentes sistemas y criterios de gestión del riesgo:
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa revisa sus pagos a proveedores y utiliza IA para identificar alertas. La herramienta señala tres situaciones: un proveedor con varios pagos fraccionados en fechas cercanas, una factura sin soporte completo y dos registros con el mismo valor. Estas alertas pueden relacionarse con diferentes tipos de riesgo. El pago fraccionado puede requerir revisión desde la gestión LA/FT; la factura sin soporte puede evidenciar una debilidad de control; y los registros repetidos pueden corresponder a un riesgo operativo por error de digitación o falta de conciliación.
            p.mb-0 El responsable no debe aceptar automáticamente la alerta generada por IA. Primero debe revisar el expediente del proveedor, los soportes de contratación, la factura, los comprobantes, el extracto bancario, las políticas internas y la matriz de riesgos aplicable. Después de esa revisión, cada alerta puede clasificarse como confirmada, descartada o pendiente de ampliación.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img4.png', alt='').m-auto
      p.mb-5 El siguiente #[i prompt] orienta a la IA para identificar alertas, relacionarlas con posibles riesgos y establecer los soportes necesarios para validar cada resultado:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img5.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] aplicado
          br
          br
          p Analice la base de pagos a proveedores e identifique alertas relacionadas con riesgo financiero, operativo o de cumplimiento. Revise posibles pagos repetidos, fraccionamientos, terceros con información incompleta, facturas sin soporte, valores atípicos y registros sin comprobante. Presente una tabla con tercero codificado, operación, alerta identificada, tipo de riesgo posible, soporte que debe revisarse y acción sugerida. No emita conclusiones definitivas; cada alerta debe validarse con documentos, políticas internas, matriz de riesgo y responsable del proceso.
      p.mb-0 SARLAFT, SAGRILAFT y SARO permiten ubicar el análisis con IA dentro de un marco de prevención, control, validación profesional y cumplimiento normativo.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 dentificación de riesgos financieros a partir de datos y documentos
      p La identificación de riesgos permite reconocer situaciones que pueden afectar la liquidez, el endeudamiento, la rentabilidad, el cumplimiento o la confiabilidad de los registros.
      p.mb-5 Los datos y documentos aportan información complementaria para identificar riesgos, generar alertas preliminares y establecer los soportes necesarios para su validación:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img6.png', alt="" ).m-auto
                  h4.text-center Datos financieros
                  .caja-2_p
                    p.mb-0.text-center Permiten analizar cifras, fechas, terceros, cuentas, saldos, variaciones y porcentajes provenientes de pagos, cartera, bancos, inventarios, gastos y estados financieros.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img7.png', alt="" ).m-auto
                  h4.text-center Documentos
                  .caja-2_p
                    p.mb-0.text-center Permiten comprobar soportes, autorizaciones, condiciones pactadas, restricciones, obligaciones y la trazabilidad de las operaciones financieras.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img8.png', alt="" ).m-auto
                  h4.text-center Apoyo de la IA
                  .caja-2_p
                    p.mb-0.text-center La IA puede comparar información, identificar patrones repetidos, señalar valores atípicos, relacionar registros y detectar documentos o campos faltantes.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img9.png', alt="" ).m-auto
                  h4.text-center Validación
                  .caja-2_p
                    p.mb-0.text-center Las alertas no constituyen conclusiones. Un pago repetido puede corresponder a obligaciones diferentes y una cartera vencida puede contar con un acuerdo de pago vigente.
      p.mb-5 Cada riesgo puede identificarse mediante datos o documentos específicos, pero las alertas generadas por IA requieren una revisión financiera y documental posterior:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 10.
                span Identificación de riesgos financieros a partir de datos y documentos
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Riesgo posible
                      th.ajuste-border-tabla.texto-left Dato o documento que permite identificarlo
                      th.ajuste-border-tabla.texto-left Alerta que puede generar la IA
                      th.texto-left Validación requerida
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de liquidez
                      td.ajuste-border-tabla.texto-left Bancos, flujo de caja, cuentas por pagar y cartera.
                      td.ajuste-border-tabla.texto-left Obligaciones próximas a vencer sin recursos suficientes.
                      td.texto-left Revisar saldos bancarios, recaudos esperados y pagos programados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de endeudamiento
                      td.ajuste-border-tabla.texto-left Obligaciones financieras, contratos de crédito y estados financieros.
                      td.ajuste-border-tabla.texto-left Aumento significativo de deuda o gastos financieros.
                      td.texto-left Verificar créditos, tasas, plazos, cuotas y capacidad de pago.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de cartera
                      td.ajuste-border-tabla.texto-left Auxiliar de cartera, facturas, recibos de caja y acuerdos de pago.
                      td.ajuste-border-tabla.texto-left Facturas vencidas, clientes con saldos altos o baja rotación.
                      td.texto-left Confirmar abonos, acuerdos, vencimientos y gestión de cobro.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de pagos duplicados
                      td.ajuste-border-tabla.texto-left Cuentas por pagar, comprobantes y extractos bancarios.
                      td.ajuste-border-tabla.texto-left Coincidencias por proveedor, valor, factura o fecha.
                      td.texto-left Comparar factura, comprobante de egreso y movimiento bancario.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de soporte incompleto
                      td.ajuste-border-tabla.texto-left Expediente digital, facturas, contratos y comprobantes.
                      td.ajuste-border-tabla.texto-left Registros sin documento asociado o con campos faltantes.
                      td.texto-left Buscar soporte original y confirmar autorización del proceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de clasificación contable
                      td.ajuste-border-tabla.texto-left Asientos contables, auxiliares y políticas internas.
                      td.ajuste-border-tabla.texto-left Cuentas inusuales o registros en rubros no esperados.
                      td.texto-left Revisar naturaleza de la operación, política contable y soporte.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de gasto atípico
                      td.ajuste-border-tabla.texto-left Estado de resultados, auxiliares y presupuesto.
                      td.ajuste-border-tabla.texto-left Aumentos significativos frente a periodos anteriores.
                      td.texto-left Revisar facturas, contratos, autorizaciones y explicación del área.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de inventario
                      td.ajuste-border-tabla.texto-left Reportes de inventarios, compras, ventas y conteos físicos.
                      td.ajuste-border-tabla.texto-left Diferencias entre existencias, compras y salidas.
                      td.texto-left Verificar conteos, ajustes, deterioro, devoluciones y registros.
          p.mb-5 Un caso relacionado con gastos permite vincular las alertas generadas por IA con los documentos requeridos para explicar y validar cada situación:
          .caja-3(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa utiliza IA para revisar la base de gastos del trimestre. La herramienta identifica tres alertas: un aumento del 45 % en gastos de transporte, varias facturas sin centro de costo y dos pagos con el mismo valor al mismo proveedor. Estos resultados permiten orientar la revisión, pero no prueban por sí solos que exista error o incumplimiento.
                p.mb-0 El responsable financiero revisa los documentos asociados. En el primer caso, encuentra que el aumento en transporte se relaciona con entregas extraordinarias por ampliación de ventas. En el segundo, confirma que las facturas sin centro de costo deben corregirse porque afectan el análisis por áreas. En el tercero, verifica que los dos pagos corresponden a facturas diferentes. Así, la IA ayudó a priorizar el análisis, pero la decisión se tomó con base en documentos, registros y explicación del proceso.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t4/img10.png', alt='').m-auto
          p.mb-5 El siguiente #[i prompt] orienta a la IA para identificar riesgos preliminares y establecer los datos, documentos y acciones requeridos para validar cada alerta:
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img11.png')})` }")
            .bloque-texto-g__texto.p-4
              h5 #[i Prompt] aplicado
              br
              br
              p Analice la base financiera suministrada e identifique posibles riesgos relacionados con liquidez, endeudamiento, cartera, pagos duplicados, soportes incompletos, clasificación contable, gastos atípicos e inventarios. Presente una tabla con rubro o tercero codificado, dato observado, riesgo posible, razón de la alerta, documento que debe revisarse y acción sugerida. No emita conclusiones definitivas; cada alerta debe validarse con soportes, registros auxiliares, políticas internas y responsable del proceso.
          p.mb-0 La identificación de riesgos con IA facilita la organización de alertas, pero la revisión profesional determina su validez mediante datos, documentos y procedimientos internos.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Verificación de cumplimiento normativo con apoyo de IA
      p.mb-5 La verificación de cumplimiento compara datos, registros, documentos y procedimientos con las normas, políticas internas y requisitos aplicables a la organización. El cumplimiento normativo requiere relacionar la revisión automatizada con evidencia documental, criterios legales, procedimientos internos y responsabilidad profesional:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revisión financiera
                  p.mb-0 Comprueba si las operaciones cuentan con soportes, los registros corresponden al marco contable y los informes conservan trazabilidad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Apoyo de la IA
                  p.mb-0 La IA puede procesar documentos, comparar bases, identificar campos faltantes, detectar operaciones inusuales y organizar evidencias para una revisión preliminar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Validación profesional
                  p.mb-0 La IA no determina por sí sola el cumplimiento. Cada alerta debe contrastarse con la norma, los documentos, el procedimiento interno y el criterio profesional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Marco normativo
                  p.mb-0 La revisión debe considerar las normas de información financiera y protección de datos aplicables (Ley 1314, 2009; Decreto 2420, 2015; Ley 1581, 2012).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La verificación comprende diferentes aspectos, cada uno con alertas automatizadas, evidencias específicas y decisiones que deben confirmarse mediante validación profesional:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img16.png", alt="" style="width: 500px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Soporte documental").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué revisa la IA:] registros sin factura, contrato, comprobante o extracto asociado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evidencia requerida:] documento original o expediente digital. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación humana:] confirmar existencia, validez y relación con la operación. 
            .row(titulo="Clasificación contable").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué revisa la IA:]  cuentas inusuales o registros que no corresponden con la naturaleza del hecho económico. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evidencia requerida:] asiento, auxiliar, soporte y política contable. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación humana:] determinar si corresponde mantener, corregir o reclasificar el registro.
            .row(titulo="Políticas internas").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué revisa la IA:]  operaciones sin autorización, centro de costo, responsable o procedimiento aplicado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evidencia requerida:] manuales, aprobaciones, formatos y registros internos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación humana:] confirmar si se cumplió el procedimiento institucional.
            .row(titulo="Protección de datos").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué revisa la IA:]  presencia de datos personales o sensibles innecesarios para el análisis. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evidencia requerida:] base financiera, autorización y finalidad del tratamiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación humana:] definir la anonimización, restricción de acceso o eliminación de los datos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Riesgo financiero").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué revisa la IA:]  variaciones, pagos duplicados, cartera vencida o endeudamiento elevado. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evidencia requerida:] estados financieros, auxiliares, facturas y contratos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación humana:] confirmar la causa, el impacto y la acción de seguimiento. 
            .row(titulo="Riesgo operativo").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué revisa la IA:]  errores repetidos, campos vacíos, documentos faltantes o fallas de registro. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evidencia requerida:] reportes del sistema, comprobantes y bitácoras. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación humana:] identificar la causa y el control que debe fortalecerse. 
            .row(titulo="Trazabilidad del análisis").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué revisa la IA:]  existencia de la base original, la base depurada, el #[i prompt], la respuesta y la revisión. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evidencia requerida:] carpeta de evidencias del proceso. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación humana:] confirmar que el análisis pueda reconstruirse posteriormente.
            .row(titulo="Informe financiero").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Qué revisa la IA:]  cifras, hallazgos y recomendaciones generados mediante inteligencia artificial. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Evidencia requerida:] estados financieros, notas, soportes y revisión profesional. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación humana:] aprobar, ajustar o descartar el contenido antes de su presentación.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img17.png", alt="" style="width: 500px").m-auto
      p.mb-5 Un caso de pagos a proveedores permite relacionar las alertas de cumplimiento con la evidencia y las acciones necesarias para validar cada situación:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img18.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa usa IA para revisar una base de pagos a proveedores. La herramienta identifica registros sin comprobante de egreso, facturas sin centro de costo, pagos con valores repetidos y datos bancarios visibles en la base. Estos hallazgos se organizan en una tabla de alertas, pero no se aceptan automáticamente como incumplimientos.
            p.mb-0 El responsable financiero revisa cada caso. Los registros sin comprobante se contrastan con el expediente digital; las facturas sin centro de costo se envían para corrección; los pagos repetidos se comparan con facturas y extractos; y los datos bancarios se retiran de la copia usada para análisis porque no eran necesarios para la finalidad definida. De esta forma, la IA apoya la verificación, pero la decisión se toma con base en evidencia, norma y procedimiento interno.
      p.mb-5 El siguiente #[i prompt] orienta a la IA para identificar alertas de cumplimiento y establecer la evidencia necesaria para validar cada posible incumplimiento:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img19.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] aplicado
          br
          br
          p Revise la base financiera suministrada e identifique posibles alertas de cumplimiento relacionadas con soportes faltantes, clasificación contable, autorizaciones, datos personales, trazabilidad y riesgos financieros. Presente una tabla con registro, alerta identificada, norma o política que debe revisarse, evidencia requerida y acción sugerida. No concluya incumplimiento definitivo; cada caso debe validarse con documentos, marco normativo aplicable, políticas internas y responsable del proceso.
      p.mb-0 La IA organiza alertas y evidencias, pero el cumplimiento normativo solo se confirma mediante revisión documental, interpretación jurídica, políticas internas y responsabilidad profesional.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Actualización de políticas y controles contables
      p La incorporación de IA requiere actualizar políticas, procedimientos y controles para gestionar nuevos riesgos y conservar la confiabilidad de la información financiera.
      p.mb-5 La actualización permite definir cómo se preparan los datos, quién valida los resultados y qué controles regulan el uso de inteligencia artificial:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Políticas contables")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Políticas contables
              p.mb-0 Deben establecer criterios para reconocer, medir y presentar operaciones, así como las fuentes autorizadas, los soportes requeridos y los límites del uso de IA.
        .py-3.py-md-4(titulo="Nuevos riesgos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Nuevos riesgos
              p.mb-0 El uso de IA puede generar riesgos relacionados con datos incompletos, herramientas externas, confidencialidad, falta de trazabilidad e interpretaciones sin validación.
        .py-3.py-md-4(titulo="Controles contables")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Controles contables
              p.mb-0 Permiten reducir errores, omisiones, duplicados, accesos indebidos e interpretaciones equivocadas mediante revisiones, aprobaciones y conservación de evidencias.
        .py-3.py-md-4(titulo="Responsabilidad profesional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Responsabilidad profesional
              p.mb-0 La IA genera alertas preliminares, pero la confirmación exige soportes, normativa, políticas internas y validación de la persona responsable.
      p.mb-5 La siguiente tabla presenta políticas y controles que pueden actualizarse para preparar bases, regular herramientas, proteger datos y validar resultados generados con IA:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 11.
                span Políticas y controles contables que pueden actualizarse con el uso de IA
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto a actualizar
                      th.ajuste-border-tabla.texto-left Riesgo que busca controlar
                      th.ajuste-border-tabla.texto-left Ajuste sugerido
                      th.texto-left Evidencia requerida
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Preparación de bases financieras
                      td.ajuste-border-tabla.texto-left Datos incompletos, duplicados o mezclados entre periodos.
                      td.ajuste-border-tabla.texto-left Definir campos mínimos, formato de fechas, valores y versión de trabajo.
                      td.texto-left Base original, base depurada y registro de cambios.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Uso de herramientas de IA
                      td.ajuste-border-tabla.texto-left Cargar información sin finalidad clara o sin control.
                      td.ajuste-border-tabla.texto-left Establecer qué herramientas se pueden usar y para qué tipo de análisis.
                      td.texto-left Instrucción interna o procedimiento aprobado.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Protección de datos
                      td.ajuste-border-tabla.texto-left Exposición de datos personales, bancarios o sensibles.
                      td.ajuste-border-tabla.texto-left Anonimizar terceros, retirar datos innecesarios y limitar accesos.
                      td.texto-left Copia anonimizada y responsable del tratamiento.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Validación de resultados
                      td.ajuste-border-tabla.texto-left Aceptar respuestas automáticas sin revisión.
                      td.ajuste-border-tabla.texto-left Exigir comparación con soportes, auxiliares, normativa y políticas internas.
                      td.texto-left Lista de chequeo o matriz de validación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisión de asientos contables
                      td.ajuste-border-tabla.texto-left Clasificaciones incorrectas o registros sin soporte.
                      td.ajuste-border-tabla.texto-left Incorporar control sobre cuenta, tercero, valor, periodo y documento asociado.
                      td.texto-left Asiento, auxiliar, factura y comprobante.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Conciliaciones
                      td.ajuste-border-tabla.texto-left Diferencias entre bancos, cartera, cuentas por pagar y contabilidad.
                      td.ajuste-border-tabla.texto-left Programar cruces periódicos con apoyo de IA y revisión humana.
                      td.texto-left Conciliación, alertas y decisión final.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Trazabilidad del análisis
                      td.ajuste-border-tabla.texto-left No poder reconstruir cómo se obtuvo un hallazgo.
                      td.ajuste-border-tabla.texto-left Guardar prompt, archivo usado, respuesta de IA y validación realizada.
                      td.texto-left Carpeta de evidencias del análisis.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aprobación de informes
                      td.ajuste-border-tabla.texto-left Presentar conclusiones sin revisión responsable.
                      td.ajuste-border-tabla.texto-left Definir quién revisa, corrige y aprueba informes generados con apoyo de IA.
                      td.texto-left Informe revisado, observaciones y aprobación.
          p.mb-5 Un caso de gastos mensuales permite relacionar las alertas generadas por IA con la actualización de procedimientos y el fortalecimiento de controles:
          .caja-3(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa empieza a usar IA para revisar gastos mensuales. En los primeros análisis, la herramienta identifica facturas sin centro de costo, gastos registrados en cuentas inusuales y documentos sin soporte completo. A partir de estos hallazgos, la organización actualiza su procedimiento contable y establece que todo gasto debe registrarse con cuenta contable, tercero, fecha, centro de costo, soporte digital y responsable de aprobación.
                p.mb-0 También define que los análisis con IA deben realizarse sobre copias de trabajo, sin datos personales innecesarios, y que cada alerta debe clasificarse como confirmada, descartada o pendiente de revisión. Con este ajuste, la IA no solo ayuda a detectar errores, sino que permite fortalecer el control interno y mejorar la calidad de los registros financieros.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t4/img24.png', alt='').m-auto
          p.mb-5 El siguiente #[i prompt] orienta a la IA para identificar controles que requieren fortalecimiento y establecer los ajustes y las evidencias necesarias para su actualización:
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img25.png')})` }")
            .bloque-texto-g__texto.p-4
              h5 #[i Prompt] aplicado
              br
              br
              p Revise la base contable suministrada e identifique controles que deberían fortalecerse. Tenga en cuenta registros sin soporte, campos vacíos, cuentas contables inusuales, terceros duplicados, fechas fuera del periodo, valores atípicos y ausencia de centro de costo. Presente una tabla con control afectado, riesgo identificado, evidencia requerida y ajuste sugerido a la política o procedimiento contable. No emita conclusiones definitivas; cada recomendación debe ser validada por el responsable contable y financiero.
          p.mb-0 La actualización de políticas y controles permite utilizar la IA de forma ordenada, proteger la información, documentar decisiones y mantener la responsabilidad profesional.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Límites, trazabilidad y responsabilidad en el análisis de riesgos con IA
      p El análisis de riesgos con IA requiere límites claros, evidencia verificable y responsables definidos para evitar que las alertas automáticas se conviertan en decisiones.
      p.mb-5 El uso responsable de la inteligencia artificial exige reconocer sus límites, conservar la trazabilidad y definir responsabilidades durante todo el análisis:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Límites
                  p.mb-0 La IA puede identificar patrones, duplicados, variaciones, documentos faltantes e inconsistencias, pero no reemplaza la interpretación normativa, la validación profesional ni la decisión humana.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trazabilidad
                  p.mb-0 Permite reconstruir cómo se obtuvo un resultado mediante la conservación de la base, el archivo utilizado, el #[i prompt], la respuesta, los soportes y la decisión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Responsabilidad
                  p.mb-0 Debe establecerse quién prepara los datos, ejecuta el análisis, valida los resultados, aprueba los informes y responde por las decisiones adoptadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Uso confiable
                  p.mb-0 Los sistemas de IA deben ser confiables, responsables y contar con supervisión humana, protección de datos y documentación del proceso (OECD, 2024; DNP, 2025).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La siguiente tabla presenta aspectos que deben controlarse cuando se utiliza inteligencia artificial para analizar riesgos financieros:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 12.
                span Límites, trazabilidad y responsabilidad en el uso de IA
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Aspecto
                      th.ajuste-border-tabla.texto-left Riesgo si no se controla
                      th.texto-left Acción recomendada
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Calidad de los datos
                      td.ajuste-border-tabla.texto-left La IA puede generar alertas equivocadas por datos incompletos o desordenados.
                      td.texto-left Revisar bases, campos, periodos, formatos y soportes antes del análisis.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Alcance del análisis
                      td.ajuste-border-tabla.texto-left La herramienta puede responder sobre temas que no fueron delimitados.
                      td.texto-left Definir objetivo, periodo, proceso y tipo de riesgo a revisar.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Interpretación de resultados
                      td.ajuste-border-tabla.texto-left Una alerta preliminar puede confundirse con una conclusión definitiva.
                      td.texto-left Validar cada hallazgo con documentos, auxiliares y responsable del proceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Protección de información
                      td.ajuste-border-tabla.texto-left Se pueden exponer datos personales, financieros o sensibles.
                      td.texto-left Anonimizar datos innecesarios y limitar la información cargada.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Trazabilidad
                      td.ajuste-border-tabla.texto-left No se puede demostrar cómo se obtuvo el resultado.
                      td.texto-left Guardar base usada, #[i prompt], respuesta, revisión y decisión final.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responsabilidad
                      td.ajuste-border-tabla.texto-left No queda claro quién aprueba o descarta las alertas.
                      td.texto-left Asignar responsables para preparación, análisis, validación y aprobación.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Actualización de controles
                      td.ajuste-border-tabla.texto-left Se repiten errores detectados por IA sin corregir el proceso.
                      td.texto-left Usar los hallazgos para ajustar políticas, procedimientos y controles.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presentación de informes
                      td.ajuste-border-tabla.texto-left Se pueden incluir conclusiones sin respaldo suficiente.
                      td.texto-left Revisar cifras, lenguaje, soportes y recomendaciones antes de presentar.
          p.mb-5 A continuación, se presenta un caso aplicado:
          .caja-3(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa utiliza IA para revisar riesgos en su base de pagos. La herramienta identifica posibles pagos duplicados, facturas sin soporte y proveedores con información incompleta. Para garantizar trazabilidad, el responsable conserva la base original, la base depurada, el #[i prompt] utilizado, la respuesta de la IA y una matriz donde registra la validación de cada alerta.
                p.mb-0 Después de la revisión, algunos hallazgos se descartan porque tenían soporte suficiente; otros se confirman y se envían a corrección; y otros quedan pendientes porque requieren información adicional del área responsable. De esta manera, la IA apoya la detección inicial, pero la decisión final se documenta con evidencia, responsable y acción definida.
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t4/img30.png', alt='').m-auto
          p.mb-5 El siguiente #[i prompt] orienta a la IA para identificar alertas preliminares y establecer los soportes, responsables y acciones requeridos para su validación:
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img31.png')})` }")
            .bloque-texto-g__texto.p-4
              h5 #[i Prompt] aplicado
              br
              br
              p Analice la base de riesgos financieros suministrada e identifique alertas preliminares relacionadas con pagos duplicados, soportes faltantes, datos incompletos, variaciones atípicas y posibles fallas de control. Presente una tabla con alerta, dato observado, riesgo posible, soporte requerido, responsable de validación y acción sugerida. No emita conclusiones definitivas; cada hallazgo debe documentarse y validarse antes de tomar decisiones.
          p El análisis con IA debe conservar límites, trazabilidad y responsables definidos. Su validez depende de la calidad de los datos, la evidencia y la decisión profesional.
          p.mb-5 La IA puede detectar riesgos, pero sus alertas requieren validación. Se invita a consultar el pódcast y aplicar sus criterios para documentar decisiones responsables:
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-4(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t4/img32.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Inteligencia artificial (IA) con evidencia: del hallazgo a la decisión responsable"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t4/img33.png" style="max-width: 510px").m-auto

</template>

<script>
import audio1 from '@/assets/curso/podcast/ia.mp3'
export default {
  name: 'Tema4',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
