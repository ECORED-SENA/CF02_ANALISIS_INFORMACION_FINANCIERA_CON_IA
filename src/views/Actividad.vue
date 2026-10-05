<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de verificación sobre análisis financiero y revelación de hechos económicos con inteligencia artificial (IA)',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos, procedimientos y criterios relacionados con el análisis financiero mediante inteligencia artificial, la validación de datos, el uso de estados financieros, la gestión del riesgo, la revelación de hechos económicos y la presentación de informes financieros mediante herramientas tecnológicas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa desea usar IA para analizar sus pagos, cartera, bancos e inventarios. Sin embargo, cada área maneja archivos separados y con formatos diferentes. ¿Cuál debería ser la primera acción antes de aplicar IA?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cargar todos los archivos a la herramienta para que los organice automáticamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar únicamente el archivo con más registros, omitiendo los demás documentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solicitar a la IA que complete esos datos faltantes sin revisar las fuentes base.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Consolidar y estructurar la información, verificando campos, periodos y soportes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Antes de usar IA, la información debe prepararse, organizarse y relacionarse con soportes. Si los datos están dispersos o desordenados, la herramienta puede generar alertas poco confiables.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'En una revisión de gastos, la IA señala que una compra de equipo de cómputo fue registrada como gasto. ¿Qué debe hacer el responsable contable antes de aceptar esa alerta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reclasificar de inmediato el valor como activo, sin revisar ningún soporte.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar el registro analizado para evitar fallas en el informe financiero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar factura, política contable, uso del bien, materialidad y vida útil.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Solicitar a la IA crear el asiento contable definitivo sin revisión humana.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La IA puede sugerir una alerta, pero la clasificación final depende de la política contable, el soporte documental y las condiciones del bien adquirido.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Una base de proveedores contiene nombre, NIT, dirección, teléfono, correo, cuenta bancaria, factura, valor y fecha de pago. Si el objetivo es detectar pagos duplicados, ¿qué acción es más adecuada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Usar toda la base ya que cuantos más datos tenga la IA, mejor será el resultado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Conservar solo los campos necesarios y anonimizar datos sensibles no requeridos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cargar únicamente los nombres de proveedores y solicitar conclusiones generales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar los datos y valores monetarios para proteger la información financiera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El análisis debe trabajar con la información necesaria para la finalidad definida. Los datos sensibles que no aportan al análisis deben retirarse o codificarse.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una IA identifica dos pagos por el mismo valor al mismo proveedor en fechas cercanas. ¿Cuál es la interpretación correcta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Debe revisarse con facturas, comprobantes y extractos antes de concluir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Existe un pago duplicado y deben eliminarse de inmediato ambos registros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El proveedor debe eliminarse de la base sin verificar soportes asociados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El gasto debe reclasificarse de inmediato como activo en ambos registros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La coincidencia en valor y proveedor es una alerta preliminar. Puede tratarse de un duplicado o de pagos diferentes, por lo que se requiere revisión cruzada.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Un prompt financiero solicita calcular variaciones entre 2025 y 2026, pero no indica que los hallazgos deben validarse. ¿Qué ajuste mejora la instrucción?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Pedir que la IA emita conclusiones definitivas y redacte el informe sin validación profesional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pedir que las variaciones se estimen sin revisar el periodo base ni verificar datos utilizados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Indicar que cada hallazgo debe validarse con estados financieros, auxiliares, notas y soportes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Pedir que solo se presenten los rubros con variación positiva y se omitan resultados negativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Un prompt financiero debe delimitar la tarea y aclarar que los resultados son preliminares hasta ser contrastados con evidencia financiera y documental.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En una comparación financiera, los gastos administrativos pasan de $20.000.000 a $26.000.000. ¿Cuál es la variación porcentual?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '23 %',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '26 %',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '35 %',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '30 %',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La variación absoluta es $6.000.000. Al dividir $6.000.000 entre $20.000.000 y multiplicar por 100, se obtiene 30 %.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Una cuenta no existía en 2025 y aparece con valor en 2026. ¿Cómo debe tratarse la variación porcentual automática?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Calcularla con cero como base y aceptar el resultado como válido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Marcarla como sin base comparativa y solicitar análisis especial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Presentarla como variación del 100 % sin validar dicho resultado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ignorarla sin comparación y eliminarla por completo del análisis.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Cuando el valor del periodo anterior es cero, no existe base válida para calcular porcentaje. El rubro debe analizarse como nuevo o especial.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Una empresa tiene activo corriente de $90.000.000 y pasivo corriente de $60.000.000. ¿Cuál es la razón corriente y qué indica inicialmente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                '1,5; indica capacidad inicial para cubrir obligaciones de corto plazo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                '0,67; indica que el activo corriente es menor que el pasivo corriente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                '3,0; indica ausencia de riesgos de liquidez y obligaciones corrientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                '30 %; indica rentabilidad del activo corriente y la capacidad de pago.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La razón corriente se calcula dividiendo activo corriente entre pasivo corriente: 90.000.000 / 60.000.000 = 1,5. Este resultado debe complementarse con revisión de cartera, bancos e inventarios.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'La IA calcula un margen neto bajo y sugiere revisar costos y gastos. ¿Cuál sería una acción adecuada del responsable financiero?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aceptar la conclusión de la IA y afirmar que la empresa perdió eficiencia interna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar los gastos más altos para mejorar el indicador sin revisar esos soportes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comparar ingresos, costos, gastos, presupuesto, auxiliares y contexto del periodo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Revisar solamente los estados de situación financiera y omitir los demás informes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Un ratio debe interpretarse con datos de soporte, comparativos y contexto. El margen neto bajo puede tener varias causas y no debe concluirse automáticamente.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Un aplicativo de visualización muestra cartera vencida en rojo para todos los clientes con más de 60 días de mora. ¿Qué condición debe cumplirse para que el semáforo sea confiable?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el color rojo se use siempre para generar atención sin aplicar criterios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que los criterios de clasificación estén definidos, documentados y validados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que la IA seleccione el color y clasifique los casos sin intervención humana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que solo se muestren cuentas con alto saldo y se oculten los demás registros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los semáforos financieros requieren criterios claros y objetivos. Sin reglas definidas, la visualización puede inducir interpretaciones equivocadas.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Una IA genera un informe preliminar con variaciones, ratios y recomendaciones. ¿Qué elemento permite reconstruir cómo se obtuvo ese informe?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La trazabilidad del proceso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La utilidad neta del periodo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El nombre del sistema usado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El tamaño final del informe.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La trazabilidad permite conservar base utilizada, prompt, respuesta, soportes revisados, validación y decisión final.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En una revisión de cumplimiento, la IA detecta registros sin soporte documental. ¿Cuál es el uso adecuado de esta alerta?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Concluir que todos los asientos son inválidos y excluirlos del reporte contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Eliminar asientos sin soporte de los estados financieros antes de investigarlos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Generar sanción formal automáticamente sin verificar documentos ni responsables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solicitar revisión del expediente, documento original y responsable del proceso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La ausencia de soporte en la base es una alerta. Debe verificarse si el documento existe en otro expediente o si realmente falta evidencia.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Una empresa usa IA para revisar proveedores y operaciones inusuales. ¿Cuál sistema de riesgo podría relacionarse con alertas de lavado de activos y financiación del terrorismo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sistema de inventarios, porque controla entradas y salidas de bienes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'SARO, porque gestiona los riesgos operativos de la operación interna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'SAGRILAFT o SARLAFT, según el tipo de entidad y obligación aplicable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Estado de flujos de efectivo, porque registra movimientos del dinero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. SARLAFT y SAGRILAFT se relacionan con la gestión de riesgos de lavado de activos, financiación del terrorismo y otros riesgos asociados, según el tipo de organización.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Una falla repetida en el cargue de archivos genera registros duplicados en contabilidad. ¿Con qué tipo de riesgo se relaciona principalmente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo de fraude.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgo operativo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Riesgo cambiario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Riesgo normativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El riesgo operativo se asocia con fallas en procesos, personas, tecnología o sistemas de información que afectan la operación financiera.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Una empresa quiere usar IA para leer contratos y extraer restricciones financieras. ¿Cuál es una precaución necesaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permitir que la IA determine por sí sola qué restricciones son legales y deberán cumplirse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Usar únicamente el resumen generado por una IA para tomar todas las decisiones financieras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Validar los hallazgos con el contrato original, anexos y responsable jurídico o financiero.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Omitir restricciones que no afectan las ventas ni los resultados financieros de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La IA puede extraer información preliminar, pero las restricciones deben confirmarse con documentos originales y revisión responsable.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'En un informe de revelación, la IA sugiere incluir el aumento de obligaciones financieras. ¿Qué información debería revisarse antes de redactar la nota?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Solo el saldo final de la cuenta y su variación del periodo anterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Únicamente los intereses pagados y el saldo final de cada obligación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La opinión automática de una herramienta sin verificar los contratos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Contratos, tasas, plazos, garantías, vencimientos y soporte contable.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La revelación debe explicar el hecho económico con información suficiente y verificable, no solo con el valor registrado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una IA detecta que la cartera vencida aumentó, pero no distingue entre facturas vencidas y acuerdos de pago vigentes. ¿Cuál es el riesgo del análisis?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que se genere una alerta incompleta por falta de contexto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Que una IA calcule demasiados indicadores sin explicación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que se eliminen las cuentas por cobrar del informe formal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que el estado de resultados cambie automáticamente sin IA.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Sin contexto, la IA puede interpretar como riesgo una situación que puede estar explicada por acuerdos, abonos o condiciones comerciales.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una política interna permite usar IA para análisis financiero, pero no define quién aprueba los resultados. ¿Qué control debe incorporarse?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Definir responsables de preparación, análisis, validación y aprobación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Permitir que cada usuario apruebe la respuesta de la IA sin validación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar guardar los prompts para proteger la herramienta como evidencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar la primera respuesta generada y aplicarla sin control profesional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El uso responsable de IA exige asignar responsabilidades claras para evitar decisiones sin validación o sin trazabilidad.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'En la elaboración de un informe financiero con IA, ¿cuál combinación es más adecuada para presentar hallazgos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cifra, conclusión definitiva y recomendación inmediata sin soporte documental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Valor total, opinión automática y decisión final sin revisar evidencia alguna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Hallazgo, soporte requerido, interpretación preliminar y validación pendiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Gráfico, color de alerta y sanción sugerida sin explicar un contexto contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los hallazgos deben presentarse con prudencia, indicando soporte, interpretación preliminar y validación requerida antes de tomar decisiones.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Una visualización muestra que los ingresos aumentaron 18 %, los costos 25 % y la utilidad disminuyó 10 %. ¿Cuál sería la interpretación más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La empresa necesariamente tiene graves pérdidas operativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El aumento de costos confirma una pérdida financiera total.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La utilidad bajó porque una IA calculó de más los ingresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El aumento de ingresos elimina cualquier riesgo financiero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La relación entre ingresos, costos y utilidad sugiere revisar márgenes y composición de costos. La visualización orienta el análisis, pero la explicación se valida con estados financieros, auxiliares y contexto.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
