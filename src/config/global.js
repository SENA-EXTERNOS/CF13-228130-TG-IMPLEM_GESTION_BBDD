export default {
  global: {
    componenteFormativo: 'Gestión de BD SQL',
    descripcionCurso:
      'El componente formativo aborda cada uno de los tipos de lenguajes manejados en las bases de datos SQL, como es el caso del lenguaje de manipulación y el lenguaje para la creación de la misma base de datos. Además, se fundamentan las diferentes consultas y operaciones para su uso.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'SQL Lenguaje de consulta relacional',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sentencias DDL.',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sentencias DML.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Operaciones',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Sentencias de Agregación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Subconsultas anidadas, vistas y otras características de SQL',
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
      tema: 'Creación de Base de Datos en SQL',
      referencia:
        'Lozano, J. (2018). Creación y gestión de una base de datos con MySQL y phpMyAdmin.',
      tipo: 'Artículo',
      link:
        'https://tauja.ujaen.es/bitstream/10953.1/9445/1/TFG%20%285%29.pdf ',
    },
    {
      tema: 'Lenguaje DDL',
      referencia: 'El - masri,H. (2013). Data Definition Language (DDL).',
      tipo: 'Artículo',
      link: 'http://site.iugaza.edu.ps/hmasry/files/Lab2-DDL.pdf ',
    },
    {
      tema: 'SQL',
      referencia:
        'Bisson, A. (2021). SQL: Fundamentos del lenguaje (con ejercicios corregidos)',
      tipo: 'Libro',
      link:
        'https://www-eni-training-com.bdigital.sena.edu.co/portal/client/mediabook/home ',
    },
    {
      tema: 'Operadores',
      referencia:
        'Wanumen, L. y Mosquera D. (2018). Arquitectura para la generación de consultas SQL usando lógica de conjuntos',
      tipo: 'Artículo',
      link:
        'https://revistas.udistrital.edu.co/index.php/visele/article/view/14343 ',
    },
  ],
  glosario: [
    {
      termino: '<em>DDL</em>',
      significado: 'Lenguaje de Definición de Datos',
    },
    {
      termino: '<em>DML</em>',
      significado:
        'Lenguaje de Manipulación de Datos. Las instrucciones DML empiezan normalmente con SELECT, INSERT, UPDATE o DELETE',
    },
    {
      termino: '<em>SELECT</em>',
      significado:
        'muestra una lista de los campos que contienen datos de interés',
    },
    {
      termino: '<em>COLUMN</em>',
      significado:
        'área de cada fila de una tabla de base de datos que almacena el valor de datos para algún atributo del objeto modelado por la tabla',
    },
    {
      termino: '<em>HAVING</em>',
      significado:
        'en una instrucción SQL que contiene funciones de agregado, especifica las condiciones que se aplican a los campos que se resumen en la instrucción SELECT',
    },
    {
      termino: '<em>CREATE TABLE</em>',
      significado:
        'sentencia que sirve para crear la estructura de una tabla no para rellenarla con datos, nos permite definir las columnas que tiene y ciertas restricciones que deben cumplir esas columnas',
    },
    {
      termino: '<em>DROP</em>',
      significado: 'utilizado para eliminar tablas e índices',
    },
    {
      termino: '<em>COUNT</em>',
      significado:
        'utilizada para devolver el número de registros de la selección',
    },
    {
      termino: '<em>MIN</em>',
      significado:
        'utilizada para devolver el valor más bajo de un campo especificado',
    },
    {
      termino: '<em>ORDER BY</em>',
      significado: 'especifica la forma de ordenar los resultados',
    },
  ],
  referencias: [
    {
      referencia:
        'Aragón, Y., González, C., Hernández, O., & Hernández, E. (2018). Herramienta para el aprendizaje de bases de datos relacionales. Revista Cubana de Ciencias Informáticas.',
      link: 'https://www.redalyc.org/journal/3783/378365832012/html/',
    },
    {
      referencia:
        'Beynon - Davies, P. (2018). Sistemas de bases de datos. Reverté. ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=XjbeDwAAQBAJ&oi=fnd&pg=PR5&dq=bases+de+datos&ots=DIBXDRJPGU&sig=8sk6MPk4qc9zwSgjd7tiiFQFw94#v=onepage&q=bases%20de%20datos&f=false ',
    },
    {
      referencia:
        'Bisson, A. (2021). SQL: Fundamentos Del Lenguaje (con Ejercicios Corregidos). 3ª Edición. Ediciones ENI. Recursos Informáticos. Web. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_biblioteca_eniRIT4SQL',
    },
    {
      referencia:
        'Cavique, L. (2021). Armadilhas em consultas SQL: em bases de dados relacionais. Recuperado el 27 de septiembre de 2022 de',
      link: 'https://repositorioaberto.uab.pt/handle/10400.2/10695 ',
    },
    {
      referencia:
        'Figueredo, L., Rodríguez, E., & Silva, Y. (2021). Softar, software educativo de álgebra relacional de bases de datos.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_dialnet_primary_oai_dialnet_unirioja_es_ART0001500395 ',
    },
    {
      referencia:
        'Martínez, D. (2019). Manual de bases de datos (Autoaprendizaje).',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB175897',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
