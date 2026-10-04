<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Revelación financiera, visualización de datos e informes con IA
      p La revelación financiera integra cifras, explicaciones y evidencias para comunicar resultados, riesgos y hechos económicos mediante información clara, verificable y responsable.
      p.mb-5 La IA puede apoyar la organización y presentación de la información, pero los resultados requieren revisión técnica, normativa, documental y ética.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Informes contables y financieros: concepto, tipos y finalidad
      p.mb-5 Los informes contables y financieros se comprenden a partir de su concepto, finalidad, apoyo de la IA y criterios de validación: 
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Concepto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img1.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Concepto
              p.mb-0 Son documentos, reportes o presentaciones que organizan la información económica y financiera de una entidad.
        .py-3.py-md-4(titulo="Finalidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Finalidad
              p.mb-0 Permiten comunicar información clara, comprensible y sustentada para interpretar la situación financiera, los resultados, los riesgos y los hechos relevantes.
        .py-3.py-md-4(titulo="Apoyo de la IA")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Apoyo de la IA
              p.mb-0 La IA puede ordenar datos, resumir información, calcular variaciones, identificar alertas y estructurar hallazgos preliminares.
        .py-3.py-md-4(titulo="Validación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Validación
              p.mb-0 Las cifras, fuentes, notas, políticas internas y soportes deben revisarse antes de presentar el informe. Este proceso fortalece su transparencia y comparabilidad (IFRS Foundation, s. f.).
      p.mb-5 La siguiente tabla presenta informes contables y financieros que pueden elaborarse o complementarse con apoyo de inteligencia artificial:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Tipos de informes contables y financieros
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Tipo de informe
                      th.ajuste-border-tabla.texto-left Finalidad
                      th.ajuste-border-tabla.texto-left Apoyo posible de IA
                      th.texto-left Validación requerida
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Estados financieros
                      td.ajuste-border-tabla.texto-left Presentar situación financiera, resultados, patrimonio y flujos de efectivo.
                      td.ajuste-border-tabla.texto-left Organizar cifras, calcular variaciones y señalar rubros relevantes.
                      td.texto-left Revisar saldos, notas, auxiliares y políticas contables.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Informe de cartera
                      td.ajuste-border-tabla.texto-left Analizar cuentas por cobrar, vencimientos y recaudo.
                      td.ajuste-border-tabla.texto-left Identificar clientes con mayor mora y saldos críticos.
                      td.texto-left Confirmar facturas, abonos y acuerdos de pago.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Informe de cuentas por pagar
                      td.ajuste-border-tabla.texto-left Revisar obligaciones, vencimientos y pagos.
                      td.ajuste-border-tabla.texto-left Detectar pagos próximos, duplicados o soportes faltantes.
                      td.texto-left Validar facturas, comprobantes y extractos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Informe de gastos
                      td.ajuste-border-tabla.texto-left Explicar comportamiento de costos y gastos.
                      td.ajuste-border-tabla.texto-left Clasificar rubros y resaltar variaciones atípicas.
                      td.texto-left Revisar auxiliares, facturas, contratos y presupuesto.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Informe de indicadores
                      td.ajuste-border-tabla.texto-left Presentar liquidez, endeudamiento, rentabilidad y rotación.
                      td.ajuste-border-tabla.texto-left Calcular ratios y generar interpretación preliminar.
                      td.texto-left Confirmar fórmulas, cifras base y contexto financiero.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Informe de riesgos
                      td.ajuste-border-tabla.texto-left Identificar alertas financieras, operativas o de cumplimiento.
                      td.ajuste-border-tabla.texto-left Agrupar alertas y priorizar revisiones.
                      td.texto-left Validar con documentos, matriz de riesgo y responsables.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Informe de revelación
                      td.ajuste-border-tabla.texto-left Explicar hechos económicos relevantes, restricciones, beneficios y riesgos.
                      td.ajuste-border-tabla.texto-left Proponer estructura, hallazgos y notas preliminares.
                      td.texto-left Revisar normativa, soportes y aprobación profesional.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tablero financiero
                      td.ajuste-border-tabla.texto-left Visualizar datos mediante gráficos e indicadores.
                      td.ajuste-border-tabla.texto-left Resaltar tendencias, semáforos y variaciones.
                      td.texto-left Confirmar fuente de datos, actualización y criterios de lectura.
          p.mb-5 Un informe financiero mensual permite integrar datos de diferentes fuentes y convertirlos en variaciones, indicadores y alertas preliminares para su validación:
          .caja-3(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl.order-2.order-lg-1.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa desea preparar un informe financiero mensual. Para ello exporta el estado de resultados, el reporte de cartera, el informe de cuentas por pagar y el flujo de caja. Con apoyo de IA, organiza una tabla con variaciones, identifica rubros con aumentos relevantes, señala cartera vencida y genera un resumen preliminar de alertas.
                p.mb-0 Antes de presentar el informe, el responsable revisa que las cifras coincidan con los estados financieros, que las variaciones estén bien calculadas, que las alertas tengan soporte y que el lenguaje del informe no presente conclusiones definitivas sin evidencia. De esta manera, la IA apoya la preparación del informe, pero la calidad final depende de la validación técnica y documental.	
              .col-xl-auto.order-1.order-lg-2
                figure
                  img(src='@/assets/curso/temas/t5/img4.png', alt='').m-auto
          p.mb-5 El siguiente #[i prompt] orienta a la IA para organizar un informe preliminar y establecer los elementos que requieren validación antes de su presentación:
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img5.png')})` }")
            .bloque-texto-g__texto.p-4
              h5 #[i Prompt] aplicado
              br
              br
              p Organice un informe financiero preliminar con la información suministrada. Incluya resumen de resultados, variaciones principales, indicadores relevantes, alertas financieras, soportes que deben revisarse y recomendaciones preliminares. Presente la información en tablas claras y no emita conclusiones definitivas. Cada hallazgo debe validarse con estados financieros, auxiliares, notas, documentos soporte y revisión del responsable financiero.
          p.mb-0 Los informes comunican resultados, riesgos y hechos relevantes, pero su presentación exige claridad, respaldo documental, trazabilidad, revisión normativa y responsabilidad profesional.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Revelación de hechos económicos y verificación de cumplimiento NIIF
      p La revelación permite explicar hechos económicos relevantes y verificar que su tratamiento corresponda con los criterios de reconocimiento, medición, presentación e información complementaria.
      p.mb-5 La revelación y la verificación normativa cumplen funciones relacionadas, pero cada una requiere criterios, documentos y decisiones profesionales claramente definidos. Los principales aspectos de la revelación y la verificación del cumplimiento de las NIIF son:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img6.png', alt="" ).m-auto
                  h4.text-center Hechos relevantes
                  .caja-2_p
                    p.mb-0.text-center Se priorizan los hechos que, por su naturaleza, valor, riesgo, restricción, beneficio o incertidumbre, pueden influir en la interpretación financiera.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img7.png', alt="" ).m-auto
                  h4.text-center Cumplimiento NIIF
                  .caja-2_p
                    p.mb-0.text-center Requiere confirmar que la información fue reconocida, medida, presentada y revelada de acuerdo con el marco financiero aplicable.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img8.png', alt="" ).m-auto
                  h4.text-center Apoyo de la IA
                  .caja-2_p
                    p.mb-0.text-center La IA puede relacionar cifras con soportes, identificar hechos sin explicación y organizar notas preliminares para revisión.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t5/img9.png', alt="" ).m-auto
                  h4.text-center Límite profesional
                  .caja-2_p
                    p.mb-0.text-center La IA puede sugerir información que requiere revisión, pero no puede certificar por sí sola el cumplimiento de las NIIF.
      p.mb-5 La identificación y revelación de hechos económicos requiere preguntas orientadoras, posibles apoyos de IA y procedimientos específicos para validar cada aspecto financiero:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Hecho económico relevante
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta orientadora:] ¿qué ocurrió y por qué afecta la información financiera? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Apoyo posible de IA:] relacionar hechos con variaciones, riesgos o efectos significativos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Validación requerida:] confirmar con soportes, registros y explicación de la persona responsable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Naturaleza del hecho
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta orientadora:] ¿corresponde a un ingreso, gasto, activo, pasivo, patrimonio, riesgo o restricción? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Apoyo posible de IA:] clasificar el hecho según su naturaleza financiera. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Validación requerida:] revisar la política contable y el tratamiento aplicado. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reconocimiento
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta orientadora:] ¿el hecho fue registrado en el periodo y la cuenta correspondientes?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Apoyo posible de IA:] identificar registros faltantes o clasificaciones inusuales.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Validación requerida:] comparar con auxiliares, soportes y criterios contables. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Medición
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta orientadora:]  ¿el valor registrado cuenta con soporte y cálculo verificable? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Apoyo posible de IA:]  identificar diferencias, valores atípicos o cálculos inconsistentes. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Validación requerida:] revisar facturas, contratos, estimaciones y soportes de cálculo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta orientadora:] ¿el hecho está ubicado en el estado financiero correspondiente?
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Apoyo posible de IA:] identificar rubros que requieren reclasificación o explicación. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Validación requerida:]  confirmar con estados financieros y el marco aplicable. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Revelación
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta orientadora:]  ¿la nota explica suficientemente el hecho económico? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Apoyo posible de IA:] sugerir información que podría incorporarse en la nota. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Validación requerida:] revisar redacción, cifras, riesgos, restricciones y soportes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Riesgos o restricciones
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta orientadora:] ¿existen condiciones que limitan recursos o generan obligaciones? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Apoyo posible de IA:] identificar contratos, garantías, vencimientos y contingencias. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Validación requerida:] contrastar con documentos legales, financieros y administrativos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Evidencia
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Pregunta orientadora:] ¿la revelación puede verificarse mediante documentos? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Apoyo posible de IA:] relacionar cada hecho con sus soportes. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Validación requerida:] conservar el expediente, la base, el #[i prompt], la respuesta y la revisión final.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img17.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Un aumento en las obligaciones financieras permite aplicar criterios de reconocimiento, medición, presentación y revelación antes de incorporar una explicación en las notas:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img18.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa presenta un aumento importante en sus obligaciones financieras durante el periodo. La IA identifica el cambio y sugiere revisar si existe un nuevo crédito, refinanciación, intereses, garantías o vencimientos que deban explicarse. A partir de esta alerta, el responsable financiero consulta el contrato de crédito, el extracto bancario, el auxiliar contable, las condiciones de pago y las notas de los estados financieros.
            p.mb-0 Después de la revisión, se determina que el aumento corresponde a un crédito adquirido para financiar capital de trabajo. En la revelación se debe explicar la naturaleza de la obligación, el valor, las condiciones relevantes, los vencimientos y cualquier restricción asociada. La IA ayuda a ordenar la información y a proponer una estructura preliminar, pero la nota final debe ser revisada con criterio técnico y soporte documental.
      p.mb-5 El siguiente #[i prompt] orienta a la IA para identificar hechos económicos que requieren revelación y establecer los elementos necesarios para validar su cumplimiento normativo:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img19.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] aplicado
          br
          br
          p Revise los estados financieros y los soportes suministrados. Identifique hechos económicos que puedan requerir revelación por su valor, variación, riesgo, restricción, beneficio o impacto en la interpretación financiera. Presente una tabla con hecho económico, rubro afectado, razón de revelación, información que debe incluirse, soporte requerido y validación NIIF pendiente. No redacte conclusiones definitivas sin verificar políticas contables, notas, auxiliares y documentos soporte.
      p.mb-0 La revelación transforma las cifras aisladas en información explicativa, pero exige revisión normativa, soportes verificables y responsabilidad profesional.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Registro de restricciones, beneficios, riesgos y observaciones
      p Este registro complementa las cifras con información sobre condiciones que afectan los recursos, las obligaciones, los resultados y la interpretación financiera de la entidad.
      p Los estados financieros deben acompañarse de notas que conforman una unidad integral con la información presentada (Ley 222, 1995).
      p.mb-5 Los primeros elementos permiten documentar limitaciones, respaldos, beneficios y riesgos financieros junto con los soportes requeridos para confirmar cada condición identificada:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img20.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Restricción").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Significado:] limitación para utilizar dinero, activos o derechos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] recursos recibidos con destinación específica. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Soporte:] convenio, contrato, acta o certificación.
            .row(titulo="Garantía").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Significado:] bien o condición entregada como respaldo de una obligación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] maquinaria otorgada como garantía de un crédito. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Soporte:] contrato, pagaré o documento de garantía. 
            .row(titulo="Beneficio financiero").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Significado:] condición favorable recibida por la entidad. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] descuento por pronto pago o disminución de intereses. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Soporte:] acuerdo comercial, factura, contrato o comunicación formal. 
            .row(titulo="Riesgo de liquidez").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Significado:] posible dificultad para cumplir obligaciones de corto plazo. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] pagos próximos sin recaudo suficiente. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Soporte:] flujo de caja, bancos, cartera y cuentas por pagar.
      p.mb-5 El registro continúa con riesgos, observaciones y limitaciones que requieren explicaciones adicionales y evidencias antes de incluirse en el informe financiero:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Riesgo de cartera").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Significado:] posible falta de recuperación de cuentas por cobrar. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] clientes con facturas vencidas durante más de 90 días. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Soporte:] auxiliar de cartera, facturas y gestión de cobro.
            .row(titulo="Riesgo de cumplimiento").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Significado:] posible incumplimiento normativo o procedimental. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] registro sin soporte, autorización o política aplicada. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Soporte:] manual interno, norma aplicable y expediente documental. 
            .row(titulo="Observación contable").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Significado:] aclaración sobre una cifra, un registro o su tratamiento. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] cuenta que requiere reclasificación o explicación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Soporte:] asiento, auxiliar, documento y política contable. 
            .row(titulo="Limitación del análisis").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Significado:] condición que impide formular una conclusión definitiva. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] base incompleta o documentos pendientes de entrega. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Soporte:] relación de archivos faltantes y responsable de su entrega. 
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img21.png", alt="" style="width: 300px").m-auto
      p Los hallazgos deben gestionarse con confidencialidad, ética y responsabilidad profesional (Ley 43, 1990).
      p.mb-5 Un informe de revelación permite relacionar las restricciones, garantías, beneficios y riesgos identificados con los documentos y decisiones requeridos para su presentación:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img22.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa prepara un informe de revelación con apoyo de IA. La herramienta identifica que existe un crédito con garantía sobre un activo, una cartera vencida significativa, un contrato con restricción de uso de recursos y un beneficio por descuento financiero otorgado por un proveedor. Estos hallazgos se organizan en una tabla preliminar, pero cada uno debe validarse antes de incluirse en el informe final.
            p.mb-0 El responsable financiero revisa el contrato de crédito, el auxiliar de cartera, el convenio relacionado con los recursos restringidos y la comunicación del proveedor. Después de la revisión, decide qué información debe revelarse, qué observación requiere ampliación y qué datos deben mantenerse reservados por confidencialidad. Si la entidad pertenece a un sector vigilado, también debe considerar los requerimientos de la autoridad correspondiente; por ejemplo, la Superintendencia Financiera puede imponer sanciones a entidades vigiladas y a personas responsables en los casos previstos por su régimen sancionatorio, y la Superintendencia de Sociedades publica actuaciones sancionatorias relacionadas con SAGRILAFT y PTEE para empresas obligadas. (Superintendencia de Colombia, 2019).
      p.mb-5 El siguiente #[i prompt] orienta a la IA para identificar elementos que complementan las cifras y establecer su soporte, confidencialidad y tratamiento preliminar:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img23.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] aplicado
          br
          br
          p Revise la información financiera, contratos, notas y soportes suministrados. Identifique posibles restricciones, beneficios, riesgos y observaciones que deban considerarse en el informe de revelación. Presente una tabla con elemento identificado, rubro relacionado, explicación preliminar, soporte requerido, nivel de confidencialidad y acción sugerida. No incluya datos sensibles innecesarios y no emita conclusiones definitivas sin validación documental, normativa y profesional.
      p.mb-0 El registro de restricciones, beneficios, riesgos y observaciones permite explicar condiciones que no se identifican únicamente mediante las cifras financieras.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Visualización de datos financieros: indicadores, variaciones, ratios y alertas
      p.mb-5 La visualización financiera organiza cifras, variaciones, indicadores y alertas para facilitar su comprensión, comparación y comunicación dentro de los informes.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img24.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Propósito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite organizar información, identificar cambios relevantes, priorizar alertas y comunicar hallazgos financieros de manera clara.
            .row(titulo="Selección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los recursos deben elegirse según el objetivo: liquidez, rentabilidad, variaciones, riesgos o comportamiento de la cartera.
            .row(titulo="Apoyo de la IA").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La IA puede sugerir formatos, ordenar datos, calcular indicadores e identificar rubros o alertas relevantes.
            .row(titulo="Validación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los gráficos, tablas y tableros deben conservar coherencia con las cifras, emplear escalas adecuadas y contar con información descriptiva accesible.
      p Cada forma de visualización cumple una función específica y requiere controles que garanticen coherencia, accesibilidad y respaldo técnico antes de incorporarse al informe:
      p.mb-5 La siguiente tabla presenta formas de visualizar información financiera con apoyo de inteligencia artificial y los cuidados que deben aplicarse antes de incluirlas en un informe:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 14.
                span Visualización de indicadores, variaciones, ratios y alertas financieras
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Tipo de visualización
                      th.ajuste-border-tabla.texto-left Uso en el informe financiero
                      th.ajuste-border-tabla.texto-left Ejemplo aplicado
                      th.texto-left Cuidado necesario
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tabla comparativa
                      td.ajuste-border-tabla.texto-left Presentar cifras de dos o más periodos.
                      td.ajuste-border-tabla.texto-left Ingresos, costos y gastos 2025-2026.
                      td.texto-left Verificar que los periodos sean comparables.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Variación porcentual
                      td.ajuste-border-tabla.texto-left Mostrar aumentos o disminuciones entre periodos.
                      td.ajuste-border-tabla.texto-left Gastos administrativos aumentan 30 %.
                      td.texto-left Revisar que el valor base no sea cero o distorsione el porcentaje.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gráfico de barras
                      td.ajuste-border-tabla.texto-left Comparar rubros o periodos.
                      td.ajuste-border-tabla.texto-left Ventas por trimestre o gastos por área.
                      td.texto-left Usar escalas claras y no exagerar diferencias.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Gráfico de líneas
                      td.ajuste-border-tabla.texto-left Mostrar tendencias en el tiempo.
                      td.ajuste-border-tabla.texto-left Evolución mensual de ventas o cartera.
                      td.texto-left Confirmar continuidad y consistencia de los datos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Semáforo financiero
                      td.ajuste-border-tabla.texto-left Clasificar alertas por nivel de riesgo.
                      td.ajuste-border-tabla.texto-left Cartera: verde, amarillo o rojo según días de mora.
                      td.texto-left Definir criterios objetivos para cada color.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tablero de indicadores
                      td.ajuste-border-tabla.texto-left Resumir ratios financieros principales.
                      td.ajuste-border-tabla.texto-left Liquidez, endeudamiento, rentabilidad y rotación.
                      td.texto-left Validar fórmulas, cifras base y fecha de actualización.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Matriz de alertas
                      td.ajuste-border-tabla.texto-left Ordenar hallazgos que requieren revisión.
                      td.ajuste-border-tabla.texto-left Pagos duplicados, soportes faltantes o variaciones atípicas.
                      td.texto-left Confirmar cada alerta con documentos y responsables.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resumen ejecutivo visual
                      td.ajuste-border-tabla.texto-left Presentar los principales hallazgos del informe.
                      td.ajuste-border-tabla.texto-left Tres indicadores favorables y tres aspectos por revisar.
                      td.texto-left Evitar conclusiones sin soporte técnico o documental.
          p.mb-5 Un informe mensual permite seleccionar diferentes representaciones para comunicar variaciones, indicadores y alertas según la finalidad y las características de los datos:
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t5/img25.png', alt='').m-auto
              .col-xl.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa prepara un informe mensual con apoyo de IA. La herramienta identifica que los ingresos aumentaron 18 %, los costos crecieron 25 %, la utilidad disminuyó 10 % y la cartera vencida aumentó en clientes con más de 60 días de mora. Con esta información, el responsable financiero decide presentar una tabla comparativa de ingresos, costos y utilidad; un semáforo de cartera por días de vencimiento; y un tablero corto con razón corriente, endeudamiento y margen neto.	 
                p.mb-0 Antes de incluir estas visualizaciones, revisa que las cifras coincidan con los estados financieros, que las variaciones estén bien calculadas, que los ratios usen las fórmulas correctas y que las alertas de cartera correspondan a saldos reales. De esta manera, la IA ayuda a organizar y presentar los datos, pero la visualización final mantiene respaldo técnico y documental.
          p.mb-5 El siguiente #[i prompt] orienta a la IA para proponer una visualización coherente con los datos y establecer los aspectos que requieren validación previa:
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img26.png')})` }")
            .bloque-texto-g__texto.p-4
              h5 #[i Prompt] aplicado
              br
              br
              p Con la información financiera suministrada, proponga una visualización para el informe. Incluya tabla comparativa de variaciones, indicadores financieros principales, alertas por nivel de riesgo y una breve explicación de cada hallazgo. Presente los resultados en formato de tabla con rubro, indicador, resultado, nivel de alerta, interpretación preliminar y soporte que debe revisarse. No genere conclusiones definitivas; las cifras, fórmulas y alertas deben validarse antes de presentar el informe.
          p.mb-0 La visualización organiza y comunica los resultados, pero su calidad depende de datos correctos, criterios accesibles, soportes verificables y presentación responsable.
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Consolidación, revisión y presentación del informe de revelación con IA
      p.mb-5 La consolidación reúne información financiera validada, hechos relevantes, notas, riesgos, restricciones, beneficios, indicadores y variaciones en un documento coherente. Los aspectos que orientan la consolidación, revisión y presentación del informe con apoyo de IA son:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Consolidación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Consolidación
              p.mb-0 Reúne estados financieros, auxiliares, soportes, indicadores, notas, riesgos, restricciones, beneficios y hechos económicos relevantes.
        .py-3.py-md-4(titulo="Revisión técnica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Revisión técnica
              p.mb-0 Comprueba cifras, fórmulas, fuentes, periodos, notas, contratos, facturas, indicadores y coherencia de las visualizaciones.
        .py-3.py-md-4(titulo="Revisión ética")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Revisión ética
              p.mb-0 Protege datos sensibles, evita afirmaciones sin evidencia y garantiza recomendaciones proporcionales y responsabilidad profesional.
        .py-3.py-md-4(titulo="Supervisión")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t5/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Supervisión
              p.mb-0 La IA puede organizar información y proponer textos, pero el informe debe conservar transparencia, comparabilidad, confiabilidad y supervisión humana (IFRS Foundation, s. f.; OECD, 2024).
      p.mb-5 La siguiente tabla presenta una ruta práctica para consolidar, revisar y presentar un informe de revelación financiera apoyado por inteligencia artificial.
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 13.
                span Consolidación y revisión del informe de revelación con IA
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Etapa
                      th.ajuste-border-tabla.texto-left Acción principal
                      th.ajuste-border-tabla.texto-left Apoyo posible de IA
                      th.texto-left Validación requerida
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Consolidación de datos
                      td.ajuste-border-tabla.texto-left Reunir estados financieros, auxiliares, soportes, indicadores y notas.
                      td.ajuste-border-tabla.texto-left Organizar archivos, resumir bases y clasificar información.
                      td.texto-left Confirmar fuentes, periodos, cifras y versiones utilizadas.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Selección de hechos relevantes
                      td.ajuste-border-tabla.texto-left Definir qué hechos económicos deben explicarse.
                      td.ajuste-border-tabla.texto-left Identificar variaciones, riesgos, restricciones o beneficios.
                      td.texto-left Revisar materialidad, soporte y efecto financiero.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Redacción de hallazgos
                      td.ajuste-border-tabla.texto-left Explicar resultados, alertas y situaciones identificadas.
                      td.ajuste-border-tabla.texto-left Proponer textos preliminares y organizar ideas.
                      td.texto-left Ajustar lenguaje técnico y eliminar afirmaciones sin evidencia.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inclusión de visualizaciones
                      td.ajuste-border-tabla.texto-left Presentar tablas, gráficos, indicadores o semáforos.
                      td.ajuste-border-tabla.texto-left Sugerir formatos y destacar tendencias.
                      td.texto-left Verificar fórmulas, escalas, datos base y coherencia gráfica.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisión normativa
                      td.ajuste-border-tabla.texto-left Confirmar cumplimiento del marco financiero aplicable.
                      td.ajuste-border-tabla.texto-left Elaborar listas de chequeo y relacionar notas con soportes.
                      td.texto-left Validar con políticas contables, NIIF y procedimiento interno.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisión de confidencialidad
                      td.ajuste-border-tabla.texto-left Proteger información sensible o innecesaria.
                      td.ajuste-border-tabla.texto-left Detectar datos personales, bancarios o reservados.
                      td.texto-left Anonimizar, restringir o retirar información no pertinente.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Aprobación del informe
                      td.ajuste-border-tabla.texto-left Definir si el documento puede presentarse.
                      td.ajuste-border-tabla.texto-left Organizar versión final y observaciones pendientes.
                      td.texto-left Revisión del responsable financiero, contable o directivo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Presentación o sustentación
                      td.ajuste-border-tabla.texto-left Comunicar hallazgos, alertas y recomendaciones preliminares.
                      td.ajuste-border-tabla.texto-left Preparar resumen ejecutivo o guion de presentación.
                      td.texto-left Responder con soporte documental y criterio profesional.
          p.mb-5 Un informe de cierre permite integrar hechos relevantes, indicadores, riesgos y restricciones antes de someter el documento a revisión, aprobación y presentación:
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t5/img31.png', alt='').m-auto
              .col-xl.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa prepara un informe de revelación financiera al cierre del periodo. Con apoyo de IA organiza los principales hechos económicos: aumento de obligaciones financieras, crecimiento de cartera vencida, disminución del margen neto, restricción sobre recursos recibidos y variaciones relevantes en gastos. La herramienta propone un resumen ejecutivo, una tabla de alertas y una explicación preliminar de cada hecho.
                p.mb-0 Antes de presentar el informe, el responsable revisa los estados financieros, contratos, auxiliares de cartera, extractos bancarios, notas, políticas internas y soportes de cada hallazgo. También ajusta el lenguaje para evitar afirmaciones definitivas, retira datos sensibles y conserva solo la información necesaria. Finalmente, presenta el informe indicando qué hallazgos están confirmados, cuáles requieren seguimiento y qué recomendaciones preliminares deben evaluarse.
          p.mb-5 El siguiente #[i prompt] orienta a la IA para consolidar el informe de revelación y establecer los responsables, soportes y validaciones requeridos antes de presentarlo:
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img32.png')})` }")
            .bloque-texto-g__texto.p-4
              h5 #[i Prompt] aplicado
              br
              br
              p Consolide un informe de revelación financiera con la información validada. Incluya resumen ejecutivo, hechos económicos relevantes, variaciones principales, indicadores, riesgos, restricciones, beneficios, observaciones, visualizaciones sugeridas y recomendaciones preliminares. Presente cada hallazgo con soporte requerido, nivel de validación y responsable de revisión. No incluya datos sensibles innecesarios y no emita conclusiones definitivas sin respaldo documental, normativo y profesional.
          p.mb-0 La IA aporta agilidad y estructura, pero la calidad del informe depende de la validación de cifras, la revisión normativa, la confidencialidad, la trazabilidad y la responsabilidad profesional.

</template>

<script>
export default {
  name: 'Tema5',
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
