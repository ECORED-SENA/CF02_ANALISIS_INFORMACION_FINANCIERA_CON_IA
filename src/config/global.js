export default {
  global: {
    Name: 'Análisis financiero y revelación de hechos económicos con inteligencia artificial (IA)',
    Description:
      'El análisis financiero y la revelación de hechos económicos con apoyo de inteligencia artificial permite procesar, validar e interpretar información contable y financiera conforme a estándares técnicos y normativos. A partir del uso de sistemas integrados de información financiera, aplicativos contables, agentes inteligentes, ratios, revisiones cruzadas, gestión de riesgos y herramientas de visualización de datos, se fortalece la capacidad de generar informes financieros claros, verificables, éticos y útiles para la toma de decisiones.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas integrados de información financiera',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de sistema integrado de información financiera',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de aplicativos contables y financieros',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Flujo de documentos en procesos contables y financieros',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Clasificación de transacciones comerciales y tipos de registros',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Marco normativo de referencia para el análisis financiero con IA',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesamiento y validación de datos financieros con IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Filtrado y preparación de información financiera',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Agentes inteligentes y aplicaciones especializadas en finanzas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: '<i>Prompting</i> contable y <i>prompting</i> financiero',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Revisiones cruzadas y validación de resultados generados por IA',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Estados financieros y análisis con estándares financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estados financieros: concepto, clases y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de presentación y tipos de registros',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Generación y extracción de informes contables con IA',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Comparación de estados financieros y variaciones porcentuales automáticas',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Ratios financieras: cálculo, interpretación y alertas de análisis',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión del riesgo financiero y controles con IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Sistemas normativos de gestión del riesgo: SARLAFT, SAGRILAFT y SARO',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Identificación de riesgos financieros a partir de datos y documentos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Verificación de cumplimiento normativo con apoyo de IA',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Actualización de políticas y controles contables',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo:
              'Límites, trazabilidad y responsabilidad en el análisis de riesgos con IA',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Revelación financiera, visualización de datos e informes con IA',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Informes contables y financieros: concepto, tipos y finalidad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Revelación de hechos económicos y verificación de cumplimiento NIIF',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Registro de restricciones, beneficios, riesgos y observaciones',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Visualización de datos financieros: indicadores, variaciones, ratios y alertas',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Consolidación, revisión y presentación del informe de revelación con IA',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Agente inteligente',
      significado:
        'herramienta o sistema de IA configurado para ejecutar tareas específicas, como revisar pagos, clasificar gastos, detectar alertas o analizar cartera.',
    },
    {
      termino: 'Alerta financiera',
      significado:
        'señal preliminar que indica una posible variación, inconsistencia, riesgo o situación que requiere revisión documental y técnica.',
    },
    {
      termino: 'Análisis financiero',
      significado:
        'proceso mediante el cual se revisan cifras, indicadores, variaciones y estados financieros para interpretar la situación económica de una entidad.',
    },
    {
      termino: 'Aplicativo contable',
      significado:
        'herramienta tecnológica utilizada para registrar, procesar, consultar y generar información contable y financiera.',
    },
    {
      termino: 'Dato financiero',
      significado:
        'información numérica o descriptiva relacionada con ingresos, costos, gastos, activos, pasivos, patrimonio, pagos, cobros o inversiones.',
    },
    {
      termino: 'Estado financiero',
      significado:
        'informe estructurado que presenta la situación financiera, los resultados, los cambios patrimoniales o los flujos de efectivo de una entidad.',
    },
    {
      termino: 'Hecho económico',
      significado:
        'operación, transacción o situación que afecta la información financiera de una organización y debe ser reconocida, medida, presentada o revelada.',
    },
    {
      termino: 'Indicador financiero',
      significado:
        'relación entre cifras financieras que permite analizar liquidez, endeudamiento, rentabilidad, rotación o capacidad de pago.',
    },
    {
      termino: 'Inteligencia artificial',
      significado:
        'tecnología que permite procesar datos, identificar patrones, generar respuestas y apoyar tareas de análisis, clasificación, comparación o interpretación.',
    },
    {
      termino: 'Prompt financiero',
      significado:
        'instrucción formulada a una herramienta de IA para analizar información financiera, calcular variaciones, interpretar indicadores o generar hallazgos preliminares.',
    },
    {
      termino: 'Ratio financiero',
      significado:
        'indicador calculado a partir de cifras de los estados financieros para evaluar aspectos como liquidez, endeudamiento, rentabilidad o eficiencia.',
    },
    {
      termino: 'Revelación financiera',
      significado:
        'presentación explicativa de hechos económicos, riesgos, restricciones, beneficios u observaciones relevantes para comprender la información financiera.',
    },
    {
      termino: 'Revisión cruzada',
      significado:
        'comparación entre diferentes fuentes de información, como facturas, extractos, auxiliares, comprobantes y estados financieros, para validar un resultado.',
    },
    {
      termino: 'Riesgo financiero',
      significado:
        'posibilidad de que una situación afecte la liquidez, rentabilidad, endeudamiento, cumplimiento o estabilidad económica de una entidad.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'capacidad de reconstruir el proceso seguido para obtener un resultado, incluyendo fuente de datos, prompt, respuesta, soportes y validación realizada.',
    },
  ],
  referencias: [
    {
      referencia:
        'Archivo General de la Nación. (s. f.). Programa de Gestión Documental (PGD).',
      link: 'https://www.archivogeneral.gov.co/transparencia/gestion-informacion-publica/Programa-de-Gestion-Documental-PGD',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1990, 13 de diciembre). Ley 43 de 1990. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=66148',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1995, 20 de diciembre). Ley 222 de 1995. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6739',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1999, 18 de agosto). Ley 527 de 1999. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4276',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2009, 13 de julio). Ley 1314 de 2009. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2025, 27 de mayo). CONPES 4144: la hoja de ruta de Colombia en inteligencia artificial ante los retos actuales y la transformación futura.',
      link: 'https://www.dnp.gov.co/publicaciones/Planeacion/Paginas/conpes-4144-hoja-de-ruta-colombia-inteligencia-artificial-retos-actuales-transformacion-futura.aspx',
    },
    {
      referencia: 'IFRS Foundation. (s. f.). About the IFRS Foundation.',
      link: 'https://www.ifrs.org/about-us/who-we-are/',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2019). Modelo de requisitos para la gestión de documentos electrónicos de archivos.',
      link: 'https://www.mintic.gov.co/portal/715/w3-article-135930.html',
    },
    {
      referencia:
        'National Institute of Standards and Technology. (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0).',
      link: 'https://doi.org/10.6028/NIST.AI.100-1',
    },
    {
      referencia:
        'Organisation for Economic Co-operation and Development. (2024). AI principles.',
      link: 'https://www.oecd.org/en/topics/sub-issues/ai-principles.html',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 14 de diciembre). Decreto 2420 de 2015. Función Pública.',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2019, 10 de octubre). Régimen sancionatorio.',
      link: 'https://www.superfinanciera.gov.co/publicaciones/11168/normativaproteccion-al-consumidor-financierosobre-el-regimen-especifico-de-proteccion-al-consumidor-financieroregimen-de-proteccion-al-consumidor-financieroregimen-sancionatorio-11168/',
    },
    {
      referencia:
        'Unidad de Información y Análisis Financiero. (2020, 24 de marzo). Documento de preguntas frecuentes.',
      link: 'https://www.uiaf.gov.co/9-1-Publicaciones',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
