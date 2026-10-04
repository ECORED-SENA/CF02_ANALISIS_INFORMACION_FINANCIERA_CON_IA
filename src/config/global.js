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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
