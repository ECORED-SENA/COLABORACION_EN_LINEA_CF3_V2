export default {
  global: {
    componenteFormativo: 'Perfiles digitales en comunidades en línea',
    descripcionCurso:
      'La  tecnología y sus usos intervienen con fuerza en el diario vivir, evidenciado en el crecimiento del consumo y acceso a Internet y en los dispositivos móviles, asimismo el uso de las redes sociales y las herramientas de colaboración en línea. De ahí la importancia de usar ética y responsablemente estas herramientas para una experiencia segura y protegida.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
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
        titulo: 'Redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de redes sociales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Usos de las redes sociales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Creación de perfiles públicos y privados ',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Configuración y seguridad de redes sociales',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Grupos y comunidades digitales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cuidados y recomendaciones en redes sociales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comportamientos en línea',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Normas de comportamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normas para chat, foros y redes sociales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Normas para correos electrónicos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<i>Marketplace</i>, centros comerciales en línea',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Perfiles empresariales y <i>fanpage</i>',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Usos de las redes sociales',
      referencia:
        'Oficina de Seguridad del Internauta. (2019). <em>¿Hacemos buen uso de las redes sociales?</em> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WMEk-bua9vA',
    },
    {
      tema: '<em>Marketplace</em>, centros comerciales en línea ',
      referencia:
        'Rios Pira, M. (2021). <em>Diferencias y beneficios de marketplace y ecommerce</em> [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=nybuznUxmL4  ',
    },
  ],
  referencias: [
    {
      referencia:
        'Jaramillo, O. (s.f.). La desarticulación de lo público y lo privado en las redes sociales.',
      link: 'https://oscarjaramillo.cl/wp-content/uploads/2014/01/PO-Oscar.pdf',
    },
    {
      referencia:
        'Pachter, B. (2010). <i>The Essentials of Business Etiquette: How to Greet, Eat, and Tweet Your Way to Success</i>. Bárbara Pachter.',
      link: '',
    },
    {
      referencia: 'Sanz, C. (2005). Tipos de comunidad. ',
      link: 'https://ejemplos.net/tipos-de-comunidad/',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'cualquier evento que puede afectar los activos de información y se relaciona, principalmente, con recursos humanos, eventos naturales o fallas técnicas.',
    },
    {
      termino: '<em>Chat</em>',
      significado:
        'son servicios de IM o mensajería instantánea que permiten la interacción entre dos o más personas en tiempo real compartiendo textos, imágenes o videos.',
    },
    {
      termino: '<em>Fanpage</em>',
      significado:
        'página de <i>fans</i> o seguidores en la red social de Facebook donde se posiciona una marca o una empresa.',
    },
    {
      termino: 'Foro',
      significado:
        'plataforma generalmente <i>web</i> donde las personas ingresan, se registran y pueden intercambiar ideas sobre temas de interés.',
    },
    {
      termino: 'Perfil',
      significado:
        'conjunto de características o preferencias que identifican a una persona en una plataforma tecnológica.',
    },
    {
      termino: 'Red social',
      significado:
        'las redes sociales son estructuras formadas en internet por personas u organizaciones que se conectan a partir de intereses o valores comunes.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'es debilidad o fallo en un sistema de información que pone en riesgo la seguridad de la información pudiendo permitir que un atacante pueda comprometer la integridad, disponibilidad o confidencialidad de la misma.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Instructor',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus ',
          cargo: 'Evaluadora Instruccional ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabián Zárate Saavedra ',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez ',
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga ',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García ',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey ',
          cargo: 'Desarrollo Front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Andrés Mauricio Santaella Ochoa',
          cargo: 'Soporte Front-end',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander ',
        },
        {
          nombre: 'Daniela Muñoz Bedoya',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
