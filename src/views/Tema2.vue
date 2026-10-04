<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Procesamiento y validación de datos financieros con IA
      p.mb-5 El procesamiento y la validación de datos financieros con IA requieren información organizada, soportes verificables y criterios normativos que garanticen resultados confiables y técnicamente respaldados (IFRS Foundation, s. f.; NIST, 2026).
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Filtrado y preparación de información financiera
      p El filtrado y la preparación permiten seleccionar datos pertinentes, corregir inconsistencias y proteger información sensible antes de utilizar herramientas de inteligencia artificial.
      p.mb-5 Los datos financieros requieren diferentes tratamientos para conservar su calidad, pertinencia y seguridad durante el análisis con inteligencia artificial, tales como:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img1.png', alt="" ).m-auto
                  h4.text-center Filtrado
                  .caja-2_p
                    p.mb-0.text-center Consiste en seleccionar los datos necesarios para una finalidad específica y excluir aquellos que no aportan al análisis.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
                  h4.text-center Preparación
                  .caja-2_p
                    p.mb-0.text-center Comprende la limpieza, organización y verificación de fechas, valores, nombres, códigos, cuentas contables, soportes, duplicados y campos vacíos.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
                  h4.text-center Selección contextual
                  .caja-2_p
                    p.mb-0.text-center Los campos requeridos dependen del propósito. El análisis de cartera, gastos o pagos exige datos diferentes relacionados con cada proceso financiero.
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
                  h4.text-center Protección de datos
                  .caja-2_p
                    p.mb-0.text-center Los datos personales o financieros innecesarios deben eliminarse, anonimizarse, ocultarse o reemplazarse por códigos antes de utilizar IA.
      p La calidad de los datos constituye una condición necesaria para obtener resultados útiles. La norma ISO 8000 relaciona este principio con la generación y conservación de información confiable.
      p.mb-5 Los criterios prácticos para preparar bases financieras antes de procesarlas con herramientas de inteligencia artificial se detallan en la siguiente tabla:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Criterios para filtrar y preparar información financiera antes de usar IA
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.ajuste-border-tabla.texto-left Pregunta orientadora
                      th.ajuste-border-tabla.texto-left Ejemplo aplicado
                      th.texto-left Cuidado antes de usar IA
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Finalidad del análisis
                      td.ajuste-border-tabla.texto-left ¿Para qué se usarán los datos?
                      td.ajuste-border-tabla.texto-left Detectar pagos duplicados a proveedores.
                      td.texto-left No cargar información que no aporte a esa revisión.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Periodo
                      td.ajuste-border-tabla.texto-left ¿Qué fechas se van a analizar?
                      td.ajuste-border-tabla.texto-left Pagos realizados entre el 1 y el 30 de junio.
                      td.texto-left Evitar mezclar registros de otros meses sin indicarlo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Proceso financiero
                      td.ajuste-border-tabla.texto-left ¿Qué área o proceso genera los datos?
                      td.ajuste-border-tabla.texto-left Cuentas por pagar, bancos, cartera o ventas.
                      td.texto-left Separar bases de procesos distintos si no se van a comparar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Campos requeridos
                      td.ajuste-border-tabla.texto-left ¿Qué columnas son necesarias?
                      td.ajuste-border-tabla.texto-left Proveedor, factura, fecha, valor, comprobante y referencia.
                      td.texto-left Eliminar columnas que no aporten al análisis.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Calidad de fechas
                      td.ajuste-border-tabla.texto-left ¿Las fechas tienen un formato uniforme?
                      td.ajuste-border-tabla.texto-left 2026-06-15 en toda la base.
                      td.texto-left Corregir fechas escritas como texto o con formatos mezclados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Calidad de valores
                      td.ajuste-border-tabla.texto-left ¿Los valores están en formato numérico?
                      td.ajuste-border-tabla.texto-left 1250000 en lugar de “$1.250.000 pagado”.
                      td.texto-left Evitar símbolos, textos o espacios que impidan calcular.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Duplicados
                      td.ajuste-border-tabla.texto-left ¿Existen registros repetidos?
                      td.ajuste-border-tabla.texto-left Dos facturas iguales con mismo proveedor y valor.
                      td.texto-left Marcar duplicados para revisión, no eliminarlos sin validar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Soportes
                      td.ajuste-border-tabla.texto-left ¿Cada registro tiene documento relacionado?
                      td.ajuste-border-tabla.texto-left Factura, comprobante o extracto asociado.
                      td.texto-left Identificar registros sin soporte antes del análisis.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Datos personales
                      td.ajuste-border-tabla.texto-left ¿Hay información sensible o innecesaria?
                      td.ajuste-border-tabla.texto-left Cédulas, cuentas bancarias o teléfonos.
                      td.texto-left Anonimizar o retirar datos que no sean indispensables.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Trazabilidad
                      td.ajuste-border-tabla.texto-left ¿Se conserva la base original?
                      td.ajuste-border-tabla.texto-left Copia original y copia depurada.
                      td.texto-left Guardar versión inicial, versión filtrada y cambios realizados.
          p.mb-5 Un caso relacionado con pagos a proveedores permite aplicar los criterios de filtrado, preparación, protección de datos y validación documental:
          .caja-1(data-aos="zoom-in").mb-5
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img5.png', alt='').m-auto
              .col-xl.caja-1__texto
                h5 Ejemplo aplicado
                p Una empresa requiere analizar los pagos a proveedores correspondientes a junio. La base inicial contiene nombre del proveedor, NIT, dirección, teléfono, correo, número y fecha de factura, fecha y valor del pago, cuenta bancaria, comprobante de egreso, referencia bancaria y observaciones.
                p.mb-0 Antes de utilizar IA, la persona responsable crea una copia de trabajo y conserva únicamente proveedor codificado, número de factura, fechas, valor, comprobante de egreso, referencia bancaria y observaciones. Además, unifica los formatos, elimina filas vacías y relaciona cada pago con su soporte.
          p.mb-5 La comparación entre la base inicial y la base preparada permite identificar los ajustes necesarios y su efecto en el análisis con inteligencia artificial:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Datos sensibles
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación inicial:] la base contiene dirección, teléfono, correo y cuenta bancaria completa.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ajuste:] se eliminan o anonimizan los datos innecesarios.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] disminuye el riesgo de exposición de información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formatos de fecha
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación inicial:] existen fechas como “junio 5”, “05/06/26” y “2026-06-05”.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ajuste:] se adopta un único formato. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] la IA puede ordenar y comparar los registros con mayor precisión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formatos numéricos
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación inicial:] los valores contienen símbolos, textos o espacios. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ajuste:] se conservan únicamente valores numéricos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] se facilitan los cálculos, las comparaciones y la detección de duplicados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proveedores
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación inicial:] los nombres presentan variaciones de escritura.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ajuste:] se asigna un código o nombre uniforme. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] se reducen los errores relacionados con la duplicidad de terceros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes faltantes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación inicial:] algunos registros carecen de factura o comprobante.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ajuste:] se marcan como datos faltantes para revisión. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] la IA puede generar alertas sobre soportes incompletos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estructura de la base
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación inicial:] existen filas vacías o encabezados repetidos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ajuste:] se depura la estructura de la base. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] la herramienta puede interpretar correctamente los campos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Archivo original
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Situación inicial:] los cambios se realizan directamente sobre la base original.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Ajuste:] se crea una copia de trabajo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] se conserva la trazabilidad y se facilita la revisión posterior.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 #[i Prompt] aplicado
      p.mb-5 La base preparada permite formular una instrucción delimitada para identificar posibles inconsistencias sin convertir las alertas en conclusiones definitivas:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img14.png')})` }")
        .bloque-texto-g__texto.p-4
          p Analice la base de pagos a proveedores correspondiente a junio. Identifique posibles pagos duplicados, facturas repetidas, valores iguales asociados al mismo proveedor, registros sin comprobante de egreso y pagos sin referencia bancaria. Organice los resultados por proveedor codificado, factura, valor, alerta identificada, razón de revisión y acción sugerida. No emita conclusiones definitivas; cada hallazgo debe validarse con la factura, el comprobante de egreso y el extracto bancario.
      p.mb-5 El filtrado y la preparación se desarrollan mediante una secuencia que delimita la necesidad, protege los datos y conserva la evidencia del análisis:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Definir la necesidad
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] precisar la necesidad financiera.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] revisar posibles pagos duplicados.
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] se delimita el propósito del análisis.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Identificar las fuentes
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] establecer el origen de los datos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] base de cuentas por pagar y extracto bancario. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] se reconocen los archivos requeridos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Crear una copia
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] generar una copia de trabajo. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] guardar una versión depurada de la base. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] se conserva el archivo original.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Seleccionar los campos
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] conservar únicamente los campos necesarios. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] proveedor, factura, fecha, valor y comprobante. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] se excluye la información no pertinente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Unificar los formatos
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] normalizar fechas, valores, códigos y nombres. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] aplicar el mismo formato a todas las columnas. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] la base queda preparada para el análisis.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img19.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img20.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Identificar faltantes
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] localizar registros incompletos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] facturas sin comprobante o pagos sin referencia. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] se generan alertas iniciales.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Proteger los datos
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] anonimizar la información sensible. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] reemplazar NIT o cuentas bancarias por códigos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] disminuye el riesgo de exposición.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img21.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img22.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Ejecutar el análisis
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] procesar la base mediante IA. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] solicitar alertas de duplicidad o inconsistencias. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] se obtienen hallazgos preliminares.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Validar los resultados
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] contrastar cada alerta con sus soportes. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] comparar facturas, comprobantes y extractos. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] cada alerta se confirma o descarta.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img23.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img24.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Conservar la evidencia
                    ul.fa-ul.estilo___ul.mb-0
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Acción:] documentar el procedimiento realizado. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Ejemplo:] guardar la base original, la copia filtrada, el #[i prompt] y la respuesta. 
                      li.mb-0
                        span.fa-li
                          i.fas.fa-check-circle
                        | #[b Resultado:] se mantiene la trazabilidad del análisis.
      p.mb-0 Filtrar y preparar la información permite que la IA genere resultados precisos y verificables, con menor exposición de datos y suficiente respaldo documental.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Agentes inteligentes y aplicaciones especializadas en finanzas
      p Los agentes inteligentes y las aplicaciones especializadas automatizan tareas financieras específicas, pero sus resultados requieren supervisión, validación documental y criterio profesional.
      p.mb-5 Estas tecnologías se diferencian por su capacidad de ejecución y sus funciones especializadas. Sus principales características y criterios de uso responsable son:
      .bg-3
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img25.png', alt="" ).m-auto
                  h4.text-center Agentes inteligentes
                  .caja-2_p
                    p.mb-0.text-center Ejecutan tareas a partir de datos, reglas e instrucciones. Pueden filtrar información, comparar registros, generar alertas y proponer acciones de revisión.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img26.png', alt="" ).m-auto
                  h4.text-center Aplicaciones especializadas
                  .caja-2_p
                    p.mb-0.text-center Incorporan IA, automatización o analítica para procesar documentos, relacionar registros, calcular indicadores, identificar riesgos y generar insumos financieros.
            .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img27.png', alt="" ).m-auto
                  h4.text-center Validación profesional
                  .caja-2_p
                    p.mb-0.text-center Los resultados son preliminares y deben contrastarse con soportes, normas, políticas internas y criterios profesionales. El uso de IA puede amplificar riesgos existentes (OECD, 2024).
            .col-xl-3.col-md-9(data-aos="fade-left")
              .caja-2.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t2/img28.png', alt="" ).m-auto
                  h4.text-center Selección responsable
                  .caja-2_p
                    p.mb-0.text-center La herramienta debe corresponder a la necesidad financiera, los datos disponibles y el nivel de riesgo. Además, debe garantizar seguridad, trazabilidad y protección de la información (NIST, 2026; DNP, 2025).
      p.mb-5 Los primeros agentes se orientan al control de cartera, obligaciones, gastos, conciliaciones y contratos mediante tareas financieras claramente delimitadas:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Agente de cartera")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Agente de cartera
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:] revisar vencimientos, saldos y comportamientos de pago.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] identificar facturas vencidas por cliente y días de mora.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] confirmar saldos, abonos recientes y acuerdos de pago.
        .py-3.py-md-4(titulo="Agente de cuentas por pagar")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Agente de cuentas por pagar
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:] comparar facturas, pagos y soportes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] detectar posibles pagos duplicados o facturas sin comprobante. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] revisar factura, comprobante de egreso y extracto bancario.
        .py-3.py-md-4(titulo="Agente de gastos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Agente de gastos
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:] clasificar rubros y señalar variaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] agrupar gastos por categoría e identificar valores atípicos.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] verificar cuenta contable, soporte y política interna.
        .py-3.py-md-4(titulo="Agente de conciliación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Agente de conciliación
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:] relacionar registros contables con movimientos bancarios.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] comparar pagos registrados con el extracto bancario.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] confirmar diferencias, partidas pendientes y soportes.
        .py-3.py-md-4(titulo="Agente de contratos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Agente de contratos
              ul.fa-ul.estilo___ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:] procesar documentos y extraer obligaciones.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] identificar vencimientos, valores, restricciones y condiciones.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] revisar el contrato original y sus anexos.
      p.mb-5 Otras aplicaciones apoyan la extracción de datos, las proyecciones, el seguimiento de indicadores, la detección de anomalías y la preparación de informes:
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Herramienta OCR inteligente").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:] convertir documentos escaneados en datos utilizables. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:] extraer fecha, proveedor, valor e impuesto de facturas. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] comprobar posibles errores en números, fechas o nombres.
            .row(titulo="Modelo predictivo").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:]  estimar comportamientos futuros con datos históricos. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:]  proyectar recaudo, ventas, cartera vencida o flujo de caja. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] confirmar supuestos, periodos y datos utilizados.
            .row(titulo="Tablero con IA").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:]  organizar indicadores y alertas financieras. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:]  presentar liquidez, endeudamiento, margen y variaciones. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] revisar fuentes de datos y fórmulas de cálculo.
            .row(titulo="Análisis de anomalías").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:]  identificar registros inusuales o inconsistentes. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:]  señalar pagos repetidos, valores elevados o movimientos sin explicación. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] confirmar la causa mediante soportes y responsables.
            .row(titulo="Asistente generativo").ajuste-cajaAcordion.ajuste-vineta
              ul.fa-ul.mb-0
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Función:]  redactar resúmenes, hallazgos o informes preliminares. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Ejemplo:]  elaborar un borrador de informe financiero con datos validados. 
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | #[b Validación:] comprobar cifras, conclusiones, lenguaje y soporte normativo.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img34.png", alt="" style="width: 350px").m-auto
      p.mb-5 Un caso de cuentas por pagar permite relacionar la selección del agente, los criterios de revisión y la validación documental de las alertas:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img35.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa necesita revisar sus cuentas por pagar del mes de agosto. Tiene una base exportada del sistema contable con proveedor, número de factura, fecha de emisión, fecha de vencimiento, valor, estado de pago y comprobante de egreso. También cuenta con extractos bancarios y facturas digitales. Para este caso, puede utilizar un agente inteligente orientado a cuentas por pagar.
            p.mb-0 El agente recibe la base preparada y ejecuta una revisión con criterios definidos: facturas vencidas, valores repetidos por proveedor, comprobantes faltantes, pagos sin referencia bancaria y posibles duplicados. Como resultado, genera una tabla de alertas preliminares. Sin embargo, la persona responsable debe revisar cada alerta con los documentos originales. Por ejemplo, dos pagos con el mismo valor pueden ser un duplicado, pero también pueden corresponder a dos facturas distintas del mismo proveedor. Por eso, la IA ayuda a priorizar la revisión, pero no reemplaza la confirmación documental.
      p.mb-5 La siguiente tabla organiza la ruta para utilizar un agente inteligente, desde la delimitación de la necesidad hasta la validación de los resultados:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Ruta para usar un agente inteligente financiero
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
                      td.ajuste-border-tabla.texto-left Definir la necesidad financiera.
                      td.ajuste-border-tabla.texto-left Revisar cuentas por pagar del mes.
                      td.texto-left Se delimita el objetivo del agente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 2
                      td.ajuste-border-tabla.texto-left Seleccionar el tipo de agente o aplicación.
                      td.ajuste-border-tabla.texto-left Agente de cuentas por pagar.
                      td.texto-left Se elige una herramienta coherente con la tarea.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 3
                      td.ajuste-border-tabla.texto-left Preparar la información.
                      td.ajuste-border-tabla.texto-left Base con proveedor, factura, fecha, valor y comprobante.
                      td.texto-left Datos organizados y listos para análisis.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 4
                      td.ajuste-border-tabla.texto-left Proteger datos innecesarios.
                      td.ajuste-border-tabla.texto-left Reemplazar identificaciones o cuentas bancarias por códigos.
                      td.texto-left Menor riesgo de exposición de información.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 5
                      td.ajuste-border-tabla.texto-left Definir criterios de revisión.
                      td.ajuste-border-tabla.texto-left Duplicados, vencimientos, soportes faltantes y valores repetidos.
                      td.texto-left La IA sabe qué debe buscar.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 6
                      td.ajuste-border-tabla.texto-left Ejecutar el análisis.
                      td.ajuste-border-tabla.texto-left Cargar la base y aplicar el prompt o configuración.
                      td.texto-left Se generan alertas preliminares.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 7
                      td.ajuste-border-tabla.texto-left Revisar la salida del agente.
                      td.ajuste-border-tabla.texto-left Revisaf tabla de hallazgos, razones y acciones sugeridas.
                      td.texto-left Se identifican registros que requieren validación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 8
                      td.ajuste-border-tabla.texto-left Validar con soportes.
                      td.ajuste-border-tabla.texto-left Comparar con facturas, comprobantes y extractos.
                      td.texto-left Se confirma o descarta cada alerta.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold 9
                      td.ajuste-border-tabla.texto-left Documentar el resultado.
                      td.ajuste-border-tabla.texto-left Guardar base, #[i prompt], respuesta y validación.
                      td.texto-left Se conserva trazabilidad del proceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold 10
                      td.ajuste-border-tabla.texto-left Ajustar criterios si es necesario.
                      td.ajuste-border-tabla.texto-left Mejorar reglas de búsqueda o campos analizados.
                      td.texto-left Se optimizan futuras revisiones con IA.
          p.mb-0 Los agentes inteligentes agilizan el análisis financiero, pero requieren información preparada, criterios claros, protección de datos y validación documental y profesional.
          Separador
          #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.3 #[i Prompting] contable y #[i prompting] financiero
          p.mb-5 El #[i prompting] contable y financiero permite formular instrucciones claras y obtener resultados preliminares. Sus enfoques y criterios de aplicación son:
          .bg-3
            .px-5
              .row.justify-content-center.mb-5
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
                  .caja-2.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t2/img36.png', alt="" ).m-auto
                      h4.text-center #[i Prompting] contable
                      .caja-2_p
                        p.mb-0.text-center Se orienta a revisar registros, asientos, cuentas, soportes, clasificaciones y cumplimiento del marco técnico. Permite identificar posibles errores contables y soportes faltantes.
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .caja-2.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t2/img37.png', alt="" ).m-auto
                      h4.text-center #[i Prompting] financiero
                      .caja-2_p
                        p.mb-0.text-center Se enfoca en analizar indicadores, variaciones, tendencias y riesgos. Permite generar interpretaciones preliminares que apoyen la toma de decisiones.
                .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
                  .caja-2.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t2/img38.png', alt="" ).m-auto
                      h4.text-center Validación
                      .caja-2_p
                        p.mb-0.text-center En ambos enfoques, la respuesta debe contrastarse con soportes documentales, políticas internas y criterios de información financiera verificable (IFRS Foundation, s. f.).
                .col-xl-3.col-md-9(data-aos="fade-left")
                  .caja-2.h-100
                    .row.justify-content-center.mb-3
                      .col-12
                        figure.mb-4
                          img(src='@/assets/curso/temas/t2/img39.png', alt="" ).m-auto
                      h4.text-center Límites
                      .caja-2_p
                        p.mb-0.text-center El #[i prompt] debe impedir datos inventados, conclusiones definitivas y decisiones automáticas. También debe exigir la revisión profesional de los resultados (NIST, 2026).
          p.mb-5 La comparación entre ambos enfoques se organiza en ocho aspectos que permiten precisar su aplicación, resultados, validación, riesgos y límites:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Enfoque principal
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contable:] revisar registros, soportes, cuentas, asientos y clasificación de hechos económicos. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Financiero:] analizar resultados, ratios, variaciones, tendencias, riesgos y alertas financieras.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img40.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pregunta central
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contable:] ¿la operación está registrada y clasificada correctamente? 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Financiero:] ¿qué indican los datos financieros y qué aspectos requieren revisión?
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img41.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información utilizada
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contable:] facturas, comprobantes, asientos, auxiliares, cuentas y políticas internas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Financiero:] estados financieros, bases consolidadas, indicadores, reportes, presupuestos y comparativos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img42.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Resultado esperado
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contable:] alertas sobre clasificación, soporte, cuenta, periodo o asiento. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Financiero:] interpretaciones preliminares de variaciones, indicadores, tendencias o riesgos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img43.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ejemplo de uso
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contable:] revisar si una compra de equipo debe clasificarse como gasto o activo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Financiero:] analizar por qué aumentó el endeudamiento o disminuyó la rentabilidad. 
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img44.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Validación requerida
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contable:] soporte documental, política contable, registro auxiliar y marco normativo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Financiero:] estados financieros, notas, auxiliares, explicaciones administrativas y contexto del periodo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img45.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Riesgo si se usa mal
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contable:] reclasificaciones incorrectas, registros sin soporte o asientos mal interpretados. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Financiero:] conclusiones incompletas, alertas falsas o recomendaciones sin contexto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img46.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Límite del #[i prompt]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Contable:] no realizar ajustes definitivos sin revisión profesional. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Financiero:] no emitir decisiones definitivas sin validación documental y análisis humano.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img47.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Un caso de clasificación contable permite aplicar instrucciones relacionadas con el registro, la política institucional y los soportes disponibles:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img48.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado de #[i prompting] contable
            p.mb-0 Una empresa compró un computador por $3.800.000 y el registro contable lo clasificó como gasto de tecnología. Antes de aceptar esta clasificación, el área contable desea revisar si corresponde a gasto, activo fijo o equipo de cómputo, según la política interna, el uso del bien y el soporte disponible.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img13.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 #[i Prompt] contable sugerido
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img49.png')})` }")
        .bloque-texto-g__texto.p-4
          p Analice la siguiente operación contable: compra de computador por $3.800.000, soportada con factura del proveedor y destinada al área administrativa. El registro actual fue realizado como gasto de tecnología. Revise si esta clasificación requiere validación frente a la política contable de activos, materialidad, vida útil y uso del bien. Presente la clasificación actual, el posible tratamiento alternativo, la razón de revisión y el soporte que debe verificarse. No realice ajustes definitivos; indique que la decisión debe validarse con la política contable interna y el documento soporte.
          br
          br
          h5 Resultado del caso
          br
          br
          p La IA no decide el registro final, sino que identifica los elementos que deben revisarse: valor, soporte, destinación, vida útil, política de activos y materialidad. La decisión corresponde a la persona responsable de contabilidad.
      p.mb-5 La comparación entre periodos permite aplicar una instrucción financiera para calcular variaciones, identificar tendencias y generar alertas preliminares para revisión:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img50.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado de #[i prompting] financiero
            p.mb-0 Una empresa requiere comparar sus estados financieros de 2025 y 2026. Los gastos administrativos aumentaron, la utilidad disminuyó y las cuentas por cobrar crecieron. El área financiera utiliza IA para obtener una interpretación preliminar sin aceptar conclusiones automáticas.
      .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img51.png')})` }")
        .bloque-texto-g__texto.p-4
          h5 #[i Prompt] financiero sugerido
          br
          br
          p Analice los estados financieros comparativos de 2025 y 2026. Calcule las variaciones absolutas y porcentuales de ingresos, costos, gastos administrativos, utilidad, cuentas por cobrar, cuentas por pagar y obligaciones financieras. Identifique los rubros con cambios significativos y proponga posibles causas que deban revisarse. Organice el resultado por rubro, variación, interpretación preliminar, posible riesgo y soporte requerido. No emita conclusiones definitivas; las observaciones deben validarse con auxiliares contables, notas, políticas internas y explicación de la administración.
          br
          br
          h5 Resultado del caso
          br
          br
          p La IA puede calcular variaciones y generar alertas, pero no debe concluir por sí sola que existe mala gestión, error o incumplimiento. La interpretación requiere soportes, contexto del negocio y revisión profesional.
      p.mb-5 La siguiente tabla organiza los elementos necesarios para formular #[i prompts] contables y financieros con criterios claros de análisis, límites y validación:
      .bg-2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Estructura de #[i prompts] contables y financieros
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento del #[i prompt]
                      th.ajuste-border-tabla.texto-left Aplicación contable
                      th.texto-left Aplicación financiera
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contexto
                      td.ajuste-border-tabla.texto-left Describir la operación o registro que se revisa.
                      td.texto-left Describir el periodo, informe o indicador que se analizará.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Datos disponibles
                      td.ajuste-border-tabla.texto-left Factura, asiento, cuenta, auxiliar, comprobante o política contable.
                      td.texto-left Estado financiero, reporte, base, presupuesto, indicador o comparativo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Tarea solicitada
                      td.ajuste-border-tabla.texto-left Revisar clasificación, soporte, cuenta, periodo o asiento.
                      td.texto-left Calcular variaciones, ratios, tendencias, alertas o interpretaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Criterios de revisión
                      td.ajuste-border-tabla.texto-left Reconocimiento, medición, soporte, política interna y normativa.
                      td.texto-left Liquidez, endeudamiento, rentabilidad, rotación, variación y riesgo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Formato de salida
                      td.ajuste-border-tabla.texto-left Tabla con registro, posible inconsistencia, razón y soporte a revisar.
                      td.texto-left Tabla con rubro, indicador, variación, interpretación y acción sugerida.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Límite de respuesta
                      td.ajuste-border-tabla.texto-left No realizar ajustes contables definitivos.
                      td.texto-left No emitir decisiones financieras definitivas.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Validación requerida
                      td.ajuste-border-tabla.texto-left Comparar con factura, comprobante, auxiliar y política contable.
                      td.texto-left Comparar con estados financieros, notas, auxiliares y contexto del negocio.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evidencia del proceso
                      td.ajuste-border-tabla.texto-left Guardar prompt, base, respuesta y validación contable.
                      td.texto-left Guardar datos usados, cálculos, respuesta, gráficos y revisión final.
          p.mb-5 Las necesidades del análisis determinan el tipo de prompt, la instrucción que debe formularse y el resultado preliminar que se espera:
          .row.align-items-center.mb-3
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img52.png", alt="" style="width: 500px").m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Clasificar una compra").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tipo:] contable. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Instrucción:] identificar si una compra registrada como gasto requiere revisión como activo, inventario o costo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] posible reclasificación para validar.
                .row(titulo="Verificar asientos").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tipo:]  contable. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Instrucción:] revisar asientos y señalar cuentas inusuales, valores descuadrados o conceptos incompletos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] alertas sobre registros que requieren revisión. 
                .row(titulo="Comparar pagos").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tipo:]  contable.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Instrucción:] comparar facturas, comprobantes y extractos para identificar pagos duplicados, faltantes o sin soporte. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] relación de diferencias y soportes pendientes. 
                .row(titulo="Analizar gastos").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tipo:]  financiero. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Instrucción:] clasificar gastos, calcular variaciones e identificar rubros con aumentos relevantes. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] resumen de variaciones y alertas preliminares.
          .row.align-items-center.mb-5
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
                .row(titulo="Calcular ratios").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tipo:]  financiero. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Instrucción:] calcular liquidez, endeudamiento y rentabilidad con los datos suministrados. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] indicadores con interpretación inicial. 
                .row(titulo="Revisar cartera").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tipo:]  financiero. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Instrucción:] identificar facturas vencidas, días de mora, saldos elevados y clientes que requieren seguimiento. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] priorización de cartera para revisión.
                .row(titulo="Preparar informe").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tipo:]  financiero. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Instrucción:] organizar hallazgos, riesgos y recomendaciones preliminares en formato de informe ejecutivo. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] borrador de informe para validación.
                .row(titulo="Revisar revelaciones").ajuste-cajaAcordion.ajuste-vineta
                  ul.fa-ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Tipo:]  contable y financiero. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Instrucción:] relacionar hechos económicos que podrían requerir revelación e indicar soporte y razón de inclusión. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Resultado:] insumo preliminar para el informe de revelación.
            .col-xl-auto(data-aos="fade-left")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t2/img53.png", alt="" style="width: 500px").m-auto
      p.mb-0 El #[i prompting] contable orienta la revisión de registros y clasificaciones, mientras el financiero apoya el análisis de resultados, indicadores, variaciones y riesgos. Ambos requieren datos claros, límites definidos y validación profesional.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Revisiones cruzadas y validación de resultados generados por IA
      p Las revisiones cruzadas permiten contrastar resultados generados por IA con documentos, registros, normas y políticas para determinar su validez y confiabilidad.
      p.mb-5 Las revisiones cruzadas contrastan los resultados generados por IA con fuentes documentales y normativas. Su validación comprende cuatro aspectos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Revisión cruzada")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img54.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Revisión cruzada
              p.mb-0 Compara información de diferentes fuentes para determinar si los datos son coherentes, completos y verificables. Relaciona facturas, comprobantes, extractos, registros y auxiliares.
        .py-3.py-md-4(titulo="Validación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img55.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Validación
              p.mb-0 Confirma si el resultado corresponde a la necesidad planteada y cuenta con respaldo documental, normativo y técnico (IFRS Foundation, s. f.).
        .py-3.py-md-4(titulo="Alertas preliminares")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img56.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Alertas preliminares
              p.mb-0 La IA puede identificar pagos duplicados, soportes faltantes, variaciones inusuales o cuentas mal clasificadas, pero estas alertas no constituyen conclusiones definitivas.
        .py-3.py-md-4(titulo="Control de riesgos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img57.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Control de riesgos
              p.mb-0 Los resultados pueden basarse en datos incompletos, periodos mezclados o información sin contexto. Por ello, requieren gestión de riesgos y supervisión profesional (NIST, 2026).
      p.mb-5 La validación debe considerar el marco normativo aplicable. Algunos hallazgos y sus procedimientos de verificación son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Posible pago duplicado
                  p.mb-0 La validación requiere comparar el proveedor, la factura, el valor, el comprobante de egreso y el extracto bancario. También deben consultarse el auxiliar de cuentas por pagar y los soportes relacionados para confirmar si existe una duplicidad real o si los registros corresponden a pagos diferentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img58.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Factura sin soporte
                  p.mb-0 La revisión consiste en verificar si el documento se encuentra en el expediente físico o digital, el sistema contable o el módulo de cuentas por pagar. A partir de esta consulta, se determina si el soporte debe completarse o si el registro queda pendiente de revisión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img59.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Diferencia bancaria
                  p.mb-0 El movimiento bancario debe compararse con el registro contable, el comprobante, la conciliación bancaria y el asiento relacionado. Este cruce permite establecer si la diferencia corresponde a una partida pendiente, un error de registro o un movimiento faltante.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img60.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cuenta contable inusual
                  p.mb-0 La validación requiere analizar la naturaleza de la transacción y la política contable interna. La factura, el asiento contable y el registro auxiliar permiten confirmar si la cuenta utilizada es adecuada o si debe solicitarse una reclasificación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img61.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Variación en gastos
                  p.mb-0 Los valores deben compararse entre periodos para determinar las causas de la variación. El estado de resultados, los auxiliares, contratos, facturas y presupuestos permiten establecer si el cambio está justificado o si requiere una alerta de control.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img62.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cartera vencida
                  p.mb-0 La revisión comprende la verificación de vencimientos, abonos y acuerdos de pago. Las facturas, los recibos de caja, la base de cartera y los acuerdos comerciales permiten confirmar el saldo real y establecer su prioridad de gestión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img63.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ratio financiero atípico
                  p.mb-0 La validación exige comprobar las cifras utilizadas y el contexto del periodo. Los estados financieros, las notas, los auxiliares y los reportes internos permiten confirmar el indicador o identificar datos de entrada que requieren ajustes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img64.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Informe generado por IA
                  p.mb-0 Las cifras, los hallazgos y las recomendaciones deben contrastarse con los estados financieros, los soportes, la normativa aplicable y la validación profesional. Este proceso permite aprobar, corregir o descartar el resultado preliminar.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img65.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Un caso de cuentas por pagar permite relacionar las alertas generadas por IA con los soportes requeridos y la decisión correspondiente:
      .caja-1(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t2/img66.png', alt='').m-auto
          .col-xl.caja-1__texto
            h5 Ejemplo aplicado
            p Una empresa utiliza IA para revisar una base de cuentas por pagar. La herramienta identifica tres alertas: un posible pago duplicado, una factura vencida sin comprobante de egreso y una diferencia entre el valor registrado en contabilidad y el reflejado en el extracto bancario. Antes de aceptar estos hallazgos, la persona responsable del área financiera realiza una revisión cruzada.
            p Para analizar el posible pago duplicado, compara la factura, el comprobante de egreso y el extracto bancario. Determina que los dos pagos tienen el mismo valor, pero corresponden a facturas diferentes del mismo proveedor; por tanto, descarta la alerta.
            p En el caso de la factura vencida sin comprobante, consulta el expediente digital y confirma que no existe evidencia del pago. En consecuencia, valida la alerta. Finalmente, comprueba que la diferencia entre contabilidad y bancos corresponde a una retención registrada incorrectamente, por lo que remite el hallazgo a revisión contable.
            p.mb-0 En este caso, la IA permite priorizar la revisión, pero las decisiones se toman con base en documentos, registros y criterios técnicos.
      p.mb-5 La validación de los resultados requiere una ruta que examine la consulta, los datos, los hallazgos, los soportes y las decisiones adoptadas:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Revisar la consulta formulada
                    p.mb-0 Verificar si el #[i prompt] fue claro, delimitado y coherente con la necesidad financiera.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img67.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img68.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Identificar los datos usados
                    p.mb-0 Confirmar el periodo, la fuente, las columnas, los soportes y la versión de la base analizada.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Revisar el resultado de IA
                    p.mb-0 Separar los hallazgos, las alertas, los cálculos, las interpretaciones y las recomendaciones preliminares.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img69.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img70.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Realizar revisión cruzada
                    p.mb-0 Comparar la respuesta con facturas, extractos, auxiliares, estados financieros o contratos. 
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Contrastar con normativa y políticas
                    p.mb-0 Determinar si el hallazgo es coherente con el marco contable, las políticas y el procedimiento interno.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img71.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img72.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Confirmar o descartar alertas
                    p.mb-0 Registrar cada hallazgo como confirmado, descartado o pendiente de revisión.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Documentar la validación
                    p.mb-0 Conservar la base, el #[i prompt], la respuesta, los soportes consultados y la decisión adoptada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img73.png', alt='' style="width: 300px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img74.png', alt='' style="width: 300px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Ajustar controles o datos
                    p.mb-0 Corregir la base, mejorar los #[i prompts], actualizar las políticas o fortalecer los controles contables.
      p.mb-0 Las revisiones cruzadas permiten utilizar la IA como apoyo del análisis financiero, mientras la validación documental, normativa y profesional determina la confiabilidad de sus resultados.

</template>

<script>
export default {
  name: 'Tema2',
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
