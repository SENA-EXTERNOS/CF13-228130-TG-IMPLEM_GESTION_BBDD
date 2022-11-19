<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 SQL Lenguaje de consulta relacional 
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-11
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.bloque-derecha(style="background-color: #a6f4fe")
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/1.svg')})`}"
          )
          
          .bloque-texto-g__texto.border-dash.p-4
            p.mb-0 Los lenguajes de bases de datos o también conocidos como lenguaje de consulta de datos o de consulta, son los diferentes tipos utilizados por los programadores e implementados para acceder a las bases de datos y a su respectiva definición. Este tipo de lenguaje permite a los usuarios realizar actividades como controlar el acceso a los datos, actualizarlos y definirlos, realizar una búsqueda dentro de un sistema gestor de bases de datos (SGBD). Además, manipulan la base para brindar una estructura de almacenamiento, acceso a la misma y recuperación de dichos datos. 
              br
              br
              |Un determinado SGBD facilita este lenguaje imprescindible que permiten a los usuarios declarar actualizaciones y consultas a la base de datos, que son las diferentes peticiones (consultas). 
    p.mb-5(data-aos='fade-right') Existen en la actualidad una gran variedad de lenguajes de datos, el más reconocido es el lenguaje SQL; es el lenguaje de programación estándar implementado en muchas bases de datos. Estos lenguajes se extienden en cuatro sub-lenguajes que cumplen distintas funciones para ejecutar determinadas tareas. Estos se describen a continuación: 
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/2.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
          div(titulo="Lenguaje de definición de datos (DDL)").ps-5
            p El lenguaje de definición de datos (DDL), es el encargado de construir el contexto de la base de datos especificando su esquema correspondiente y la organización de los datos. El uso más común de este tipo de lenguaje comprende la creación de tablas, disparadores, índices, archivos y columnas dentro de las tablas de la base de datos. Además, también permite eliminar o renombrar los componentes creados en una base de datos. A continuación, un listado de los diferentes comandos empleados para estas tareas: 
            ul.lista-ul--color
              li
                i.fas.fa-check
                p.mb-0 #[em CREATE:] encargado de construir una nueva base de datos u objeto, como una tabla, columna, índice, etc. 
              li
                i.fas.fa-check
                p.mb-0 #[em ALTER:] cambia la estructura de la base de datos o del objeto
              li
                i.fas.fa-check
                p.mb-0 #[em DROP:] elimina la base de datos o los objetos existentes 
              li
                i.fas.fa-check
                p.mb-0 #[em RENOMBRAR:] cambiar el nombre de la base de datos o de los objetos existentes
          div(titulo="Lenguaje de manipulación de datos (DML)").ps-5
            p El Lenguaje de manipulación de datos (DML), como su nombre lo dice, me permite la manipulación de los datos en la base de datos, además proporciona diferentes operaciones encargadas de realizar las peticiones en la base de datos, con el objetivo de actualizar la información, búsqueda de información y acceso a los datos. Entre las funciones u operaciones más comunes están:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | INSERTAR: insertar nuevos datos en la base de datos 
              li
                i.fas.fa-check
                | ACTUALIZACIÓN: cambia o actualiza los valores de la tabla 
              li
                i.fas.fa-check
                | BORRAR: elimina registros o filas de la tabla 
              li
                i.fas.fa-check
                | CONSULTAR: encargado de la recuperación de los datos de las tablas
          div(titulo="Lenguaje de control de datos (DCL) ").ps-5
            p El lenguaje de control de datos (DCL) es el encargado de controlar el acceso a los datos que los usuarios guardan en una base de datos. Fundamentalmente, controla los derechos y permisos en un sistema gestor de base de datos. También permite a los usuarios revocar o conceder privilegios. A continuación, una lista de sentencias DCL: 
            ul.lista-ul--color
              li
                i.fas.fa-check
                | GRANDES: da acceso a un usuario a la base de datos
              li
                i.fas.fa-check
                | REVOCACIÓN: elimina el acceso de un usuario a la base de datos
          div(titulo="Lenguaje de control de transacciones (TCL) ").ps-5
            p El lenguaje de control de transacciones (TCL) es el encargado de gestionar las transacciones en la base de datos. Generalmente las transacciones que se realizan en una base de datos se agrupan en un conjunto de tareas relacionadas en una única tarea ejecutable. Todas las tareas deben ser exitosas para que la transacción fluya con normalidad. A continuación, una lista de sentencias TCL: 
            ul.lista-ul--color
              li
                i.fas.fa-check
                p.mb-0 COMPROMISO: ejecuta una operación
              li
                i.fas.fa-check
                p.mb-0 #[em ROLLBACK:] restaura una operación si alguna transacción falla 
              li
                i.fas.fa-check
                p.mb-0 #[em S** AVEPOINT**:] establece un punto en una transacción para guardar
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B   ").me-3.mb-0
      h3.mb-0 Lenguajes de bases de datos 
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-11
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.bloque-derecha
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/3.svg')})`}"
          )
          
          .bloque-texto-g__texto.border-dash.p-4
            h4 Lenguaje SQL 
            br
            p.mb-0 Las siglas SQL significan #[em Structured Query Language], es un lenguaje fundamental en los SGBD relacionales, siendo uno de los lenguajes más conocidos y de más antigüedad. Está comprendido por los lenguajes de definición de datos y manipulación de los datos, permitiendo a su vez realizar diferentes consultas. En resumen, el lenguaje SQL permite gestionar y consultar los datos en un sistema gestor de bases de datos relacional, el SGBD organiza los datos en grupos llamados relaciones.
    SlyderF.mb-5.slyder-100(columnas="col-lg-6 col-xl-6")
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #e3f1fe ")
          .text-center.p-4
            h4.text-center Lenguaje Xquery 
            p Xquery es un lenguaje que permite la extracción y manipulación de los datos en formato XML, donde en la actualidad es una manera de compartir datos por internet. Con Xquery se puede generar reportes sobre los datos de una base de datos XML, además la realización de búsqueda de documentos de datos en la Web y la extracción de datos para implementarlos en línea. 
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #e3f1fe ")
          .text-center.p-4
            h4.text-center Lenguaje OQL 
            p OQL, que significa #[em Object Query Language], es un lenguaje estandarizado para las bases de datos orientadas a objetos, que interpreta los datos como variables, funciones y estructura de datos. Estas bases de datos son populares en las empresas que quieren almacenar una gran cantidad de datos complejos. De forma semejante al lenguaje SQL, el lenguaje OQL permite realizar consultas y la recuperación de datos en las bases de datos de objetos.
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #e3f1fe ")
          .text-center.p-4
            h4.text-center Lenguaje SQL/XML 
            p El lenguaje SQL/XML es una combinación de SQL y Xquery que también permite la manipulación y almacenamiento de datos XML en una base de datos que funciona con el lenguaje SQL. Facilita a las aplicaciones realizar sentencias SQL sobre datos en formato XML y de forma viceversa. Es crucial cuando se requiere extraer contenido de un documento XML o si se requiere garantizar la compatibilidad con optimizadores o sistemas que solo admiten formatos XML.
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema1/5.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #e3f1fe ")
          .text-center.p-4
            h4.text-center Lenguaje GraphQL 
            p GraphQL es un lenguaje de código abierto que opera con APIs, que son interfaces que permiten a los usuarios el acceso a los datos. Suministra una manera de definir la estructura de los datos y la forma en que el sistema retorna la información para evitar la liberación excesiva de datos. Es importante cuando se requiere extraer datos de varias Apis, agregar datos de distintas fuentes o la obtención eficiente de la especificación de los datos.  
      .tarjeta-avatar.h-100
        img(src='@/assets/curso/temas/tema1/4.svg' alt='AvatarTop')
        .tarjeta.w-100(style="background-color: #e3f1fe ")
          .text-center.p-4
            h4.text-center Lenguaje LINQ
            p LINQ, o #[em Language Integrated Query], es un lenguaje encargado de procesar y extraer datos de documentos XML, bases de datos relacionales y otras fuentes construidas por terceros. Con LINQ, se puede tener acceso a los datos a través de diferentes fuentes sin tener que implementar un lenguaje de bases de datos exclusivo para cada una de ellas. Su objetivo es garantizar al momento de la consulta la coherencia de los objetos, XML y base de datos relacionales, brindando la filtración de los datos, el ordenamiento y la agrupación de diferentes operaciones. 
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Gestores de bases de datos transaccionales 
    p.mb-5(data-aos='fade-right') Antes de abordar la temática de los diferentes gestores de bases de datos transaccionales, tenemos que definir y revisar las bases de datos transaccionales. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/6.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        h4 Bases de datos transaccionales 

        p Son bases de datos con el objetivo de enviar y recepcionar datos a una gran velocidad. Están calificadas, generalmente, al entorno de análisis de calidad, diferentes datos de producción industrial, pero su principal objetivo radica en asegurar las transacciones dentro de una base de datos relacional, en caso de que no se puedan realizar poder revertirlas, para evitar que queden incompletas, es decir, se realiza la transacción o no hay ninguna acción en la base de datos (vuelve al estado original). 
          br
          br
          |Las bases de datos transaccionales utilizan lenguaje SQL, que permite el acceso y la modificación de los datos dentro de las bases de datos. 

        h4 Características de las bases de datos transaccionales 
        p La principal característica en este tipo de base de datos es que garantice llevar a terminación un gran número de transacciones cortas en línea, permitiendo a su vez, contar con una información actualizada y detallada al instante. Garantiza altos niveles de efectividad al mantener la integridad de los datos en ambientes de acceso múltiples.
    div(style="background-color: #00defc").p-3.mb-5
      .border-dash.p-3(style='border-color: #084a93')
        .bg-white.p-4
          ul.lista-ul--color
            li
              i.fas.fa-check
              p.mb-0 Manejan gran variedad de datos operativos, provenientes de sistemas OLTP #[em (on-line transactional processing)]. Su objetivo crucial es ejecutar y controlar tareas primordiales de la organización, ya que dispone o permite obtener una visión de los procesos de negocio en ejecución 
            li
              i.fas.fa-check
              | Actualmente las bases de datos transaccionales capturan datos sobre el contexto histórico de la transacción, con el objetivo de aprovechar su aplicabilidad en análisis posteriores
            li
              i.fas.fa-check
              | Están optimizadas para realizar actualizaciones rápidas y cortas para los usuarios finales
            li
              i.fas.fa-check
              | Poseen una gran velocidad de procesamiento, donde permite consultar y obtener datos de forma rápida y eficiente 
            li
              i.fas.fa-check
              | Ocupan poco espacio
            li
              i.fas.fa-check
              | Comprende un diseño normalizado basado en tablas
    p.mb-5(data-aos='fade-right') Los gestores de base de datos transaccionales son implementados para mantener las bases de datos en un estado consistente y conocido, garantizando que todas las operaciones que son independientemente ejecutadas sobre la base datos se completen totalmente o se han canceladas en su defecto.  
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon-adorno.color-acento-contenido.p-4(style="background-color: #fff4da")
          h5 Ejemplo: 
          p Si tenemos que realizar una transacción bancaria de mover $ 500.000 pesos de la cuenta de un cliente a otra. Desde el punto de vista del banco es una transacción única, desde la visión del sistema se requiere mínimo dos operaciones: 
          ul.lista-ul--color
            li
              i.fas.fa-check
              | Restar de la cuenta origen el valor requerido
            li
              i.fas.fa-check
              | Sumar el valor correspondiente la cuenta destino
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/7.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p En caso de que la operación de restar de la cuenta origen se efectúe correctamente, pero la otra operación no se logra finalizar, al final del día el balance del banco será incorrecto. Por lo tanto, debe haber una manera de garantizar que se realicen correctamente las dos operaciones o incorrectamente, para evitar inconsistencias en el balance del banco. Un gestor de bases de datos transacciones provee esa característica.
          br
          br
          | Un gestor de bases de datos transacciones permite agrupar varias operaciones en una sola transacción indivisible. El gestor es el encargado de garantizar que las operaciones finalicen sin errores o en caso contrario no finalice ninguna. En caso de que una operación finalice correctamente y la otra no, como el ejemplo referido anteriormente, el gestor inicia el proceso de #[em #[b rollback] ]  de todas las operaciones implicadas, incluso aquellas operaciones que se realizaron correctamente, eliminando cualquier rastro de la transacción y volviendo a un estado actual la base de datos tal cual como estaba antes de empezar a ejecutar dicha transacción. Si todas las operaciones agrupadas en la transacción se ejecutan correctamente, la transacción realiza #[em commit ] y se ejecutan los cambios en la base de datos. Una vez se concluyó el #[em #[b commit]] de la respectiva transacción, no se puede realizar ninguna clase de #[em #[b rollback]] de los cambios. 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #e5fcff")
          p.mb-0 Todas las transacciones se procesan según un orden cronológico, ninguna transacción puede realizar commit si antes en el orden consecutivo hay una transacción pendiente por ser ejecutada.
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Restricciones de integridad 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p Las restricciones de integridad tienen como objetivo, de forma general, el proporcionar un medio que garantice que los cambios que se realizan en la base de datos por los diferentes usuarios autorizados no concluyan en una pérdida de consistencia de los datos.
          br
          br
          |Las restricciones de integridad se componen de las siguientes características:
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Se refiere a la correlación de la información que contiene la base de datos  
          li
            i.fas.fa-check
            |  La verificación de integridad se puede implementar mediante programas
          li
            i.fas.fa-check
            | El sistema es el encargado de realizar esta verificación   
        p Existen 3 tipos de restricciones de integridad: 
      .col-lg-5.col-6: img(src='@/assets/curso/temas/tema1/8.png', alt='')
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
      div(titulo="Restricciones de unicidad").ps-5
        p Las restricciones de unicidad se refieren al campo de las entidades, donde se refiere las siguientes características:
        ul.lista-ul--color
          li
            i.fas.fa-check
            p.mb-0 Ningún componente de la clave primaria puede aceptar valores nulos 
          li
            i.fas.fa-check
            p.mb-0 Las entidades a nivel general den ser distinguibles 
          li
            i.fas.fa-check
            p.mb-0 Las claves primarias su función es la identificación única en el modelo relacional  
          li
            i.fas.fa-check
            p.mb-0 No puede haber entidades sin identidad, quiere decir con un valor desconocido
      div(titulo="Restricciones de dominio ").ps-5
        p Se refiere que cada atributo está asociado a un dominio de posibles valores. Especifica los límites del dominio. Son sencillas de comprobar por el sistema cuando se ingresan nuevos valores a la base de datos. 
          br
          br
          |#[b Ejemplos:]
        ul.lista-ul--color
          li
            i.fas.fa-check
            | En una base de datos de una clínica: 
            li.ms-3
              i.fas.fa-circle.fa-xxs
              | Los pacientes no pueden llevar el peso corporal negativo.
          li
            i.fas.fa-check
            | En una base de datos bancaria: 
            li.ms-3
              i.fas.fa-circle.fa-xxs
              | Los números que identifican a las sucursales no pueden ser negativos 

            li.ms-3
              i.fas.fa-circle.fa-xxs
              |  Los códigos de departamentos y ciudades deben proveer de una lista estandarizada
        p El lenguaje SQL estándar comprende un conjunto restringido de dominio: cadena de caracteres, números decimales, numero enteros, fecha, booleanos, etc. 
          br
          br
          |El modelo relacional comprende dos reglas generales de integridad:
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Se aplica a todas las bases de datos 
          li
            i.fas.fa-check
            | Estas reglas se enfocan en las claves primarias y claves foráneas  
      div(titulo="Restricciones referenciales  ").ps-5
        p Las bases de datos correspondientes no deben contener valores nulos de una clave ajena, donde a su vez no existiría una clave primaria en la relación.    

          br
          |Clave ajena o clave foránea  
          br
          |Una clave ajena es un atributo o conjunto de atributos de una relación donde los valores son similares a los de la clave primaria que participan en la relación.  

          br
          br
          |#[b Ejemplo:] 
        ul.lista-ul--color
          li
            i.fas.fa-check
            | En una base de datos bancaria se tiene una entidad cliente y otra entidad cuenta. En la entidad cliente tiene una clave primaria id_cliente donde se relaciona con una entidad cuenta, para definir en qué entidad lleva la clave ajena (foránea) que representa la relación entre las dos entidades, se procede a establecer la cardinalidad: 
            li.ms-3
              i.fas.fa-circle.fa-xxs
              |  Una cuenta le pertenece a un solo cliente  
            li.ms-3
              i.fas.fa-circle.fa-xxs
              | Un cliente puede tener de una a muchas cuentas
        p #[b En conclusión], la clave ajena está localizada en la entidad cuenta, y su respectivo atributo lleva un nombre y el tipo de dato debe ser exactamente igual a la clave primaria de la entidad cliente.  
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Administradores de bases de datos (DBMS) 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 El sistema de gestión de la base de datos (SGBD) es una aplicación que permite a los usuarios definir, crear y mantener la base de datos, además de proporcionar un acceso controlado a la misma. Se denomina sistema de bases de datos al conjunto formado por la base de datos, el SGBD y los programas de aplicación que dan servicio a la empresa u organización, (Beynon, 2018). 
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1 
          span DBMS 
        img(src='@/assets/curso/temas/tema1/10.svg', alt='').mb-3
        figcaption Nota. Reproducida de Manejadores de base de datos. Ewebik (2022).
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Herramientas más usadas para trabajar bases de datos 
    p.mb-5(data-aos='fade-right') Actualmente se encuentran aplicaciones que se pueden utilizar para trabajar bases de datos SQL y NoSQL, definimos algunas de ellas a continuación:
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span Motores de bases de datos 
        img(src='@/assets/curso/temas/tema1/11.jpg', alt='').mb-3
        figcaption Nota. Adaptada de Los gestores de bases de datos más usados en la actualidad. Marín, R. (2019).
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
          div(titulo="MySQL").ps-5
            p Es un sistema de gestión de bases de datos relacional, es la de código abierto más popular en el mundo, se ha convertido en la principal opción en bases de datos para aplicaciones basadas en la Web. 
          div(titulo="PostgreSQL  ").ps-5
            p Es un SGBD relacional orientado a objetos y libre, publicado bajo la licencia BSD. Como muchos otros proyectos de código abierto, el desarrollo no es manejado por una organización o persona, es dirigido por una comunidad de desarrolladores que trabajan sin ánimo de lucro. Sin embargo, hay que resaltar que PostgreSQL es un motor robusto para las bases de datos. 
          div(titulo="SQL Server ").ps-5
            p Es un sistema de gestión de bases de datos relacional desarrollado por Microsoft, está diseñado para el entorno empresarial. SQL Server se ejecuta en T-SQL (Transact -SQL), un conjunto de extensiones de programación de Sybase y Microsoft que añaden varias características a SQL estándar, incluyendo control de transacciones, excepción y manejo de errores, procesamiento fila, así como variables declaradas.
          div(titulo="ORACLE ").ps-5
            p Es un sistema gestor de bases de datos con características objeto-relacional, pertenece al modelo evolutivo SGBD, sus características principales son las siguientes: 
              br
              br
              | - Entorno cliente-servidor 
              br
              | - Gestión de grandes bases de datos 
              br
              | - Usuarios concurrentes 
              br
              | - Alto rendimiento en transacciones 
              br
              | - Sistema de alta disponibilidad 
              br
              | - Gestión de seguridad 
              br
              | - Compatibilidad 
          div(titulo="Cassandra ").ps-5
            p Es una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de “clave-valor”, de código abierto que está escrita en Java. Permite grandes volúmenes de datos en forma distribuida, usada por grandes compañías como Facebook y Twitter. 
          div(titulo="MongoDB").ps-5
            p Es una base de datos NoSQL orientada a documentos. Esto quiere decir que, en lugar de guardar los datos en registros, guarda los datos en documentos. Estos documentos son almacenados en BSON, que es una representación binaria de JSON. Esta base de datos no necesariamente sigue un esquema como las bases de datos relacionales.
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 ¿Qué es SQL? 
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        div(style="background-color: #a6f4fe").p-3.mb-5
          .border-dash.p-3(style='border-color: #084a93')
            .bg-white.p-4
              p.mb-0 La sigla SQL significa Structured Query Language, es un lenguaje fundamental en los SGBD relacionales, SQL es un lenguaje estándar que permite manejar los datos de una base de datos relacional, como por ejemplo #[em “create table”, “select”, “insert”, “update”, “delete”], etc. Todos estos son comandos empleados por el lenguaje SQL para la manipulación de los datos almacenados. 
                br
                br
                |Se trata de un lenguaje que intenta agrupar todas las funciones que se le pueden pedir a una base de datos, por lo que es el lenguaje utilizado tanto por administradores como por programadores o incluso usuarios avanzados. (Mendoza, A., y López, R. 2018). 
      .col-lg-3.col-6(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3. 
          span Logo Lenguaje SQL
        img(src='@/assets/curso/temas/tema1/12.svg', alt='')
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Historia del Lenguaje SQL 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p El nacimiento del lenguaje SQL data de 1970 cuando E. F. Codd publica su libro: Un modelo de datos relacional para grandes bancos de datos compartidos, el cual dejaría sentadas las directrices de las bases de datos relacionales. Tan solo dos años después IBM (para quien trabajaba Codd) utiliza las directrices de Codd para crear el #[em Standard English Query Language] (Lenguaje Estándar Inglés para Consultas) al que se le llamó SEQUEL. Más adelante se le asignaron las siglas SQL (#[em Standard Query Language], lenguaje estándar de consulta) aunque en inglés se siguen pronunciando secuel. En español se pronuncia “esecuele”.  
          br
          br
          |En 1979 Oracle presentó la primera implementación comercial del lenguaje; poco después, se convertía en un estándar en el mundo de las bases de datos avalado por los organismos ISO y ANSI. En el año 1986 se toma como lenguaje estándar por ANSI de los SGBD relacionales; un año después, lo adopta ISO, lo que convierte a SQL en estándar mundial como lenguaje de bases de datos relacionales.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/13.svg', alt='') 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #fff4da")
          p.mb-0 En 1989 aparece el estándar ISO (y ANSI) llamado SQL89 o SQL1; en 1992 aparece la nueva versión estándar de SQL (hoy en día sigue siendo la más conocida) llamada SQL92 y en 1999 se aprueba un nuevo SQL estándar que incorpora mejoras que incluyen triggers, procedimientos, funciones, y otras características de las bases de datos objeto-relacionales, dicho estándar se conoce como SQL99. (Mendoza y López. 2018). 
            br
            br
            |El último estándar es el del año 2008 (SQL2008). 
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Componente del lenguaje SQL 
    .row.justify-content-center.mb-5
      .col-lg-4.col-6.mb-lg-0.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/14.svg', alt='')
      .col-lg-8
        p Según la normativa ANSI/ISO cuando se ejecuta SQL, existen los siguientes elementos a tener en cuenta en todo el entorno involucrado en la ejecución de instrucciones SQL:  
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Un agente SQL. Entendido como cualquier elemento que cause la ejecución de instrucciones SQL que serán recibidas por un cliente SQL.
          li
            i.fas.fa-check
            | Una implementación SQL. Se trata de un procesador software capaz de ejecutar las instrucciones pedidas por el agente SQL. Una implementación está compuesta por:
        ul.lista-ul--color.ms-4
          li
            i.fas.fa-circle.fa-xxs(style="color: #0ac6f9")
            p.mb-0 Un cliente SQL. #[em Software] conectado al agente que funciona como interfaz entre el agente SQL y el   servidor SQL. Sirve para establecer conexiones entre sí mismo y el servidor SQL. 
          li
            i.fas.fa-circle.fa-xxs(style="color: #0ac6f9")
            p.mb-0 Un servidor SQL (puede haber varios). El software encargado de manejar los datos a los que la instrucción SQL lanzada por el agente hace referencia. Es el #[em software] que realmente realiza la instrucción, los datos los devuelve al cliente. (Mendoza y López, 2018). 
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Elementos del Código SQL 
    p.mb-5(data-aos='fade-right') El código SQL consta de los siguientes elementos: 
    .d-flex.mb-3
      .numero(style="background-color: #084a93; width: 24px; height: 24px").p-1.text-white.d-flex.justify-content-center.align-items-center.me-3 
        p.fw-bold.mb-0.text-center 1
      .contenido 
        p Comandos, son las distintas instrucciones que se pueden ejecutar desde el lenguaje SQL:
          br
          br
          |- #[em SELECT], este es el comando que permite realizar consultas de los datos almacenados en la base de datos 
          br
          br
          |- DML, son los comandos para el lenguaje de manipulación de los datos, como son: #[em INSERT, UPDATE, DELETE] 
          br
          br
          |- DDL, es el lenguaje que permite modificar las estructuras de las tablas de la base de datos, también nos permite la creación de tablas y base de datos, como los son:   
          br
          br
          |   #[em CREATE, TABLE, COLUMN, DROP, RENAME, TRUNCATE] 
          br
          br
          |- DCL, lenguaje de control de datos, administra los derechos y restricciones de los usuarios, como, por ejemplo: #[em GRANT] y #[em REVOKE.]
    .d-flex.mb-3
      .numero(style="background-color: #084a93; width: 24px; height: 24px").p-1.text-white.d-flex.justify-content-center.align-items-center.me-3 
        p.fw-bold.mb-0.text-center 2
      .contenido 
        p Clausulas, son palabras dentro del lenguaje SQL que nos permite complementar una sentencia o una consulta. Como poder ser: #[em WHERE, ORDER BY, GROUP BY…etc]
    .d-flex.mb-3
      .numero(style="background-color: #084a93; width: 24px; height: 24px").p-1.text-white.d-flex.justify-content-center.align-items-center.me-3 
        p.fw-bold.mb-0.text-center 3
      .contenido 
        p Operadores, permiten crear expresiones más completas y complejas. Pueden ser: 
          br
          |- Aritméticos, (+, -, *, /) 
          br
          |- Lógicos, (<, >, #[em AND], #[em OR], etc.) 
    .d-flex.mb-3
      .numero(style="background-color: #084a93; width: 24px; height: 24px").p-1.text-white.d-flex.justify-content-center.align-items-center.me-3 
        p.fw-bold.mb-0.text-center 4
      .contenido 
        p  Funciones, para realizar valores complejos, como puede ser: #[em SUM, AVG, DATE, COUNT, MIN,] etc.
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Lenguaje de consulta relacional 
    p.mb-5(data-aos='fade-right') El lenguaje de consulta relacional es un lenguaje informático utilizado generalmente para realizar consultas a las bases de datos, su principal objetivo es realizar búsquedas para modificar o seleccionar datos de una base de datos. Los lenguajes relacionales más relevantes son el cálculo, el algebra relacional y el SQL. 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .modal-prop
          ImagenInfograficaB.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/15.svg', alt='Texto que describa la imagen')
            div(x="90.2%" y="23.6%" tooltip="" numero="1")
              p Lenguaje de definición de datos, que permite a los usuarios llevar a cabo las tareas de definición de las estructuras que almacenarán los datos. 
            div(x="90.2%" y="52%" tooltip="" numero="2")
              p Lenguaje de manipulación de datos, es un lenguaje proporcionado por el sistema de gestión de base de datos que permite a los usuarios llevar a cabo las tareas de consulta o manipulación de los datos. 
            div(x="90.2%" y="79.3%" tooltip="" numero="3")
              p Lenguaje de gestión de datos, contiene instrucciones mediante las cuales se realiza la asignación de derechos de acceso a la base de datos.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.acordion__activo
  background-color: #e8e8e8
</style>
