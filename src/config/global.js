export default {
  global: {
    componenteFormativo: 'Vulnerabilidades y Ataques en el Hacking Ético',
    descripcionCurso:
      'La seguridad informática se ha convertido hoy en día en una preocupación para empresas y organizaciones en medio del mundo digital, es por ello que es importante conocer y aplicar diferentes herramientas digitales para ciberseguridad y conocer las vulnerabilidades y ataques a los cuales están expuestos los sistemas y redes y así protegerlos de cibercriminales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Análisis de vulnerabilidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Herramientas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Falsos positivos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Escalamiento de privilegios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Escalamiento horizontal y vertical',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Contramedidas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ataques a dispositivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos y tipo de ataques',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Herramientas y técnicas de ataques',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Contramedidas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ataques a redes cableadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Conceptos y generalidades',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Modelo de redes OSI',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Herramientas de ataque',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Contramedidas',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Ataques con virus y malware',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Conceptos y generalidades',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos de virus y malware',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Protección con antivirus y evasiones',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia: 'Borges, E. (12 de febrero de 2019). Servidor FTP.',
      link: 'https://blog.infranetworking.com/servidor-ftp/.',
    },
    {
      referencia: 'Borges, S. (04 de enero de 2019). Servidor web',
      link: 'https://blog.infranetworking.com/servidor-web/.',
    },
    {
      referencia:
        'Caballero Quezada, Alonso Eduardo. (17 de noviembre de 2015). Introducción a OSSTMM (Open Source Security Testing Methodology Manual).',
      link:
        'http://www.reydes.com/d/?q=Introduccion_a_OSSTMM_Open_Source_Security_Testing_Methodology_Manual.',
    },
    {
      referencia:
        'Castillo, J. A. (15 de diciembre de 2018). Active Directory que es y para que sirve. Obtenido de',
      link: 'https://www.profesionalreview.com/2018/12/15/active-directory/.',
    },
    {
      referencia:
        'Echeverry Parada, J. S. (mayo de 2009). Metodologia para el diagnóstico continuo de la seguridad informática de la red de datos de la Universidad Militar Nueva Granada.',
      link:
        'https://pdfs.semanticscholar.org/60c7/dbe2abab31a25422c92ead74085fd7093715.pdf.',
    },
    {
      referencia:
        'Gaviria Valencia, R. A. (2015). Guía práctica para pruebas de pentest basada en la metodología OSSTMM V2.1 y la guía OWASP V3.0.',
      link:
        'http://repositorio.unilibrepereira.edu.co:8080/pereira/bitstream/handle/123456789/622/GUÍA%20PRÁCTICA%20PARA%20PRUEBAS.pdf?sequence=1.',
    },
    {
      referencia:
        'INCIBE. (20 de marzo de 2017). Amenaza vs vulnerabilidad, ¿sabes en qué se diferencia? Obtenido de',
      link:
        'https://www.incibe.es/protege-tu-empresa/blog/amenaza-vs-vulnerabilidad-sabes-se-diferencian.',
    },
    {
      referencia:
        'Martinez Ferrel, E. (2018). Las diferentes amenazas de seguridad informática',
      link: 'https://sites.google.com/site/lasamenazaslainformatica/.',
    },
    {
      referencia:
        'Zuluaga Mateus, A. D. (Noviembre de 2017). Hacking ético basado en la metodología abierta de testeo de seguridad - OSSTMM, aplicado a la rama judicial, seccional Armenia,',
      link:
        'https://stadium.unad.edu.co/preview/UNAD.php?url=/bitstream/10596/17410/1/94288061.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cifrado',
      significado:
        'Esconder información, la cual se utiliza con el fin de proteger la estructura de los datos e información de una empresa o persona',
    },
    {
      termino: '<em>Footprinting</em>',
      significado:
        'Proceso de creación de un plano o mapa de la red y los sistemas de una organización',
    },
    {
      termino: 'Nmap',
      significado:
        'Es una herramienta informática <em>opensource</em> (programa de código abierto) que se utiliza para escanear puertos de un sistema',
    },
    {
      termino: 'OSINT',
      significado:
        '<em>(Open Source INTelligence)</em>, que significa inteligencia de código abierto, que se refiere a cualquier información que pueda ser legalmente obtenida de fuentes públicas y gratuitas',
    },
    {
      termino: '<em>Pentesting</em>',
      significado:
        'Son pruebas de penetración, que consiste en atacar un sistema para encontrar vulnerabilidades y poder contrarrestarlas, las hay de caja blanca, negra y gris',
    },
    {
      termino: 'Proxy',
      significado:
        'Programa que hace de intermediario entre los servicios y recursos de la red, trabaja bajo peticiones',
    },
  ],
  complementario: [
    {
      texto: 'UNIR. (2018). Las mejores herramientas de ciberseguridad',
      tipo: 'Videoconferencia',
      link: 'https://www.youtube.com/watch?v=tG1OarXj4DU',
    },
    {
      texto:
        'Departamento UAEM. (2021). Tipos de ataques informáticos [Vídeo]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-b7NZRM3x_Q',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
