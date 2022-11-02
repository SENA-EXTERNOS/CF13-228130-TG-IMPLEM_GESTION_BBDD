<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Subconsultas anidadas, vistas y otras características de SQL 
    p.mb-5(data-aos='fade-right') En SQL, además de lo visto, se pueden realizar subconsultas anidadas, vistas y otros como: 
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Índices
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/1.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p Un índice es una estructura de datos definida sobre una columna de tabla (o varias) y que permite localizar de forma rápida las filas de la tabla con base a su contenido en la columna indexada, además, de permitir recuperar las filas de la tabla ordenadas por esa misma columna. (Figueredo, R, y Silva, Y. 2021). 
          br
          br
          |#[b Tipos de índices:]
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Índice Simple, está definido sobre una sola columna de la tabla 
          li
            i.fas.fa-check
            | Índice compuesto, está definido por varias columnas de la misma tabla 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/2.svg', alt='Texto que describa la imagen')
        h2.text-center Ventajas
        ul.lista-ul--color
          li
            i.fas.fa-check(style='color: #084a93')
            | La utilización de índices puede mejorar el rendimiento de las consultas, ya que los datos necesarios para satisfacer las necesidades de la consulta existen en el propio índice. Es decir, sólo se necesitan las páginas de índice y no las páginas de datos de la tabla para recuperar los datos solicitados; por tanto, se reduce el espacio global en el disco.
          li
            i.fas.fa-check(style='color: #084a93')
            | Los índices en vistas pueden mejorar de forma significativa el rendimiento si la vista contiene agregaciones, combinaciones de tabla o una mezcla de agregaciones y combinaciones.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-4
            figure
              img(src='@/assets/curso/temas/tema4/3.svg', alt='Texto que describa la imagen')
        h2.text-center Desventajas
        ul.lista-ul--color
          li
            i.fas.fa-check(style='color: #b9ddfc')
            | Las tablas utilizadas para almacenar los índices ocupan espacio.
          li
            i.fas.fa-check(style='color: #b9ddfc')
            | Los índices consumen recursos ya que, cada vez que se realiza una operación de actualización, inserción o borrado en la tabla indexada se tienen que actualizar todas las tablas de índice definidas sobre ella.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #fff4da ")
          p.mb-0 Sintaxis general para la creación de un índice:
            br
            br
            |#[em “CREATE INDEX] "NOMBRE_ÍNDICE" #[em ON] "NOMBRE_TABLA"(NOMBRE_COLUMNA);”
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Vistas en SQL 
    .row.justify-content-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/4.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p Las vistas en SQL es una estructura que permite obtener un resultado de una consulta y almacenarla, el resultado de ejecutar una vista se podría decir que es como tener una tabla virtual compuesta por filas (registros) y columnas (campos); además se puede ejecutar nuevas consultas sobre esa vista como si fuera una tabla normal de la base de datos. 
          br
          br
          |Las vistas se emplean cuando se necesitan ejecutar varias consultas y obtener una sola tabla como resultado. 
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #d9faff ")
          .h5 Sintaxis para la creación de una vista:
          p #[em CREATE VIEW] nombre_vista #[em AS SELECT] campo_1, campo_2 #[em FROM] nombre_tabla;
            nr
            |Mostrar la vista creada:  #[em SELECT * FROM] nombre_vista;
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #fff4da ")
          .h5 Ejemplo: 
          p.mb-0 #[em CREATE VIEW] vista1 #[em AS SELECT] nombreProducto, cantidadProducto, fechaVenta, total #[em FROM] producto, venta #[em WHERE] producto.codigoProducto=venta.codigoProducto #[em AND] nombreProducto=’huevos’;	
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Subconsultas
    p.mb-5(data-aos='fade-right') Una subconsulta en el lenguaje SQL, consiste en aprovechar los resultados de una consulta dentro de otra consulta. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/5.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p #[b Sintaxis de una subconsulta:] 
          br
          br
          |#[em SELECT] campo_1, campo_2, campo_3 #[em FROM] nombre_tablas  #[em HAVING] cláusula | #[em WHERE] cláusula (#[em SELECT] lista_campos #[em FROM] nombre_tablas);
        ul.lista-ul--color
          li
            i.fas.fa-check
            | La subconsulta se realiza una vez y antes de la consulta principal. 
          li
            i.fas.fa-check
            | El resultado de la subconsulta es empleado por la consulta principal.
        p #[b Buenas prácticas para construir una subconsulta]
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Una subconsulta va siempre entre paréntesis
          li
            i.fas.fa-check
            | La subconsulta no debe llevar una cláusula ORDER BY
          li
            i.fas.fa-check
            | Para subconsultas que retornan una fila (monoregistro), emplear operadores a nivel de fila 
          li
            i.fas.fa-check
            | Para subconsultas que retornan más de una fila (multiregistro), emplear operadores que actúen sobre varios registros
        p #[b Subconsulta Monoregistro]
        ul.lista-ul--color
          li
            i.fas.fa-check
            | Este tipo de consulta devuelve un único registro como resultado.
          li
            i.fas.fa-check
            | Se implementan operadores de comparación #[b (<, >, =, <=, >=, < >)] 
    .cajon-adorno.color-acento-contenido.p-4.mb-5(style="background-color: #fff4da")
        p #[b Ejemplo:] 
          br
          br
          |#[em SELECT] nombre, cargo #[em FROM] empleado #[em WHERE] cargo = (#[em SELECT] cargo FROM empleado WHERE codigoCargo = 7456 AND salario < 800000); 
    .row.justify-content-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/6.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p #[b Subconsulta Multiregistro]
          br
          br
          |Este tipo de consulta obtiene más de un registro en la hoja de resultados, se utilizan comparadores multiregistros:
        ul.lista-ul--color
          li
            i.fas.fa-check
            p.mb-0 #[b IN] = es verdadero si se encuentra en la lista.
          li
            i.fas.fa-check
            p.mb-0 #[b ANY (sinónimo de SOME)] = verdadero si el resultado de la subconsulta contiene algunos registros.
          li
            i.fas.fa-check
            p.mb-0 #[b ALL] = verdadero si su resultado cumple mostrando todos los registros en la subconsulta.
          li
            i.fas.fa-check
            p.mb-0 El operador #[b #[em NOT]] puede ser empleado al mismo tiempo con los operadores #[em #[b ALL, ANY]] e #[em #[b IN]]. 
    .cajon-adorno.color-acento-contenido.p-4.mb-5(style="background-color: #fff4da")
      p Ejemplo: 
        br
        br
        |#[em SELECT] nombre, salario, codigoArea #[em FROM] empleado #[em WHERE] salario #[em IN] (#[em SELECT MIN](salario) #[em FROM] empleado #[em GROUP BY] codigoArea)
        br
        |#[em SELECT] nombre, salario, cargo #[em FROM] empleado #[em WHERE] salario < #[em ANY] (#[em SELECT] salario #[em FROM] empleado #[em WHERE] cargo = ‘Programador)
        br
        |#[em SELECT] codigoArea, nombre, cargo #[em FROM] empleado #[em WHERE] salario > #[em ALL] (#[em SELECT] avg(salario) #[em FROM] empleado #[em GROUP] BY codigoCargo)
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Funciones DML 
    p.mb-5(data-aos='fade-right') En la actualidad en el lenguaje SQL existen una gran variedad de consultas realizadas para la manipulación de los datos de una base de datos, a continuación, se expone otra serie de funciones utilizadas en el lenguaje SQL: 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-gradient.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Funciones DML 
                  p.text-small Para ver ejemplos de estas funciones puede consultar el documento anexo. t 
                .col-sm-auto
                  a.boton.color-acento-botones.text-sistem(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .tarjeta(style="background-color: #f1f8ff ").p-5.mb-5
      SlyderA(tipo='b')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Funciones de cadena 
            p Este tipo de funciones retornan un carácter o varios caracteres.
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 8.
              span Funciones de Cadena
            .color-acento-contenido.mb-5
              table.bg-white
                thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                  tr.text-center
                    th Operador
                    th Descripción
                tbody
                  tr
                    td.fst-italic.text-center LOWER
                    td Convierte la cadena en letras minúsculas 
                  tr
                    td.fst-italic.text-center UPPER
                    td Convierte la cadena en letras mayúsculas
                  tr
                    td.fst-italic.text-center REPLACE
                    td Retorna la cadena nueva por la cadena que se requiere reemplazar
                  tr
                    td.fst-italic.text-center STR 
                    td Convierte número en una cadena de caracteres de la longitud especificada en longitud
                  tr
                    td.fst-italic.text-center SUBSTRING
                    td Retorna la subcadena a buscar, dependiendo de los parámetros para el recorte de la cadena original 
                  tr
                    td.fst-italic.text-center RIGTH 
                    td Retorna los caracteres de recuento más a la derecha
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Funciones matemáticas  
            p Son aquellos comandos empleados en consultas SQL para trabajar con tipo de dato numérico. 
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 9.
              span Funciones Matemáticas 
            .color-acento-contenido.mb-5
              table.bg-white
                thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                  tr.text-center
                    th Operador
                    th Descripción
                tbody
                  tr
                    td.fst-italic.text-center AVG 
                    td Se calcula un promedio de la columna de un registro 
                  tr
                    td.fst-italic.text-center CEILING 
                    td Obtiene el “techo” de un número, es decir, el valor entero superior más cercano al parámetro de entrada 
                  tr
                    td.fst-italic.text-center FLOOR
                    td Obtiene el “piso” de un número, es decir, el valor entero inferior más cercano al parámetro de entrada
                  tr
                    td.fst-italic.text-center ROUND
                    td Redondea el valor del número decimal a un entero, dependiendo del número después del operador decimal
                  tr
                    td.fst-italic.text-center TRUNC
                    td Elimina los decimales de un número, retornando solo el número entero
                  tr
                    td.fst-italic.text-center SIGN
                    td Retorna el signo (positivo o negativo) de un número 
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Funciones fecha-hora  
            p Funciones encargadas de la manipulación de fechas, y la extracción del día, mes, o año de una fecha correspondiente. 
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 10. 
              span Funciones fecha-hora
            .color-acento-contenido.mb-5
              table.bg-white
                thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                  tr.text-center
                    th Operador
                    th Descripción
                tbody
                  tr
                    td.fst-italic.text-center  DAY 
                    td Función para obtener el día según fecha indicada 
                  tr
                    td.fst-italic.text-center GETDATE
                    td Función para obtener la fecha del sistema 
                  tr
                    td.fst-italic.text-center MONTH 
                    td Función para obtener el mes según fecha indicada
                  tr
                    td.fst-italic.text-center YEAR
                    td Función para obtener el año según fecha indicada
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Funciones del sistema
            p Son funciones más operativas cuyo desempeño radica en conversiones especiales del tipo de dato del valor de un registro para operaciones posteriores. 
          .col-lg-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 11.
              span Funciones del sistema 
              .color-acento-contenido.mb-5
              table.bg-white
                thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                  tr.text-center
                    th Operador
                    th Descripción
                tbody
                  tr
                    td.fst-italic.text-center CAST 
                    td Permite convertir temporalmente el valor de un campo de un tipo de datos a otro para que puedas realizar algunos cálculos 
                  tr
                    td.fst-italic.text-center CONVERT 
                    td Permiten cambiar el tipo de una columna durante la sentencia SQ.
                  tr
                    td.fst-italic.text-center ISNULL
                    td Retorna el reemplazo si la expresión se evalúa como #[em NULL]
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Consultas combinadas DML 
    .row.justify-content-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/7.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p Consulta SQL en más de una tabla – consultas anidadas, son consultas donde interfieren dos o más tablas para realizar la consulta SQL, son de mayor aporte a la hora de obtener resultados. 
          br
          br
          |#[b La sintaxis de esta sentencia SQL es la siguiente:] 
          br
          br
          |#[em SELECT] nombre_columna, nombre_columna, nombre:columna #[em FROM] nombre_tabla,nombre_tabla  #[em where] nombre_tabla.llave_primaria=nombre_tabla.llave foránea; 
    .row.justify-content-center.mb-5
      .col-lg-10 
        .cajon-adorno.color-acento-contenido.p-4.mb-5(style="background-color: #fff4da")
          p #[b Ejemplo:] 
            br
            br
            |Realizaremos una consulta para obtener todos los nombres de las imágenes de los sitios turísticos, la sentencia sería la siguiente: 
            br
            br
            |#[em SELECT nom_tur,nom_img FROM] turismo, imagen #[em where] turismo.id_tur=imagen.id_tur_img;
    p.mb-5(data-aos='fade-right') Para realizar consultas donde intervienen más de una tabla de la base de datos se deben implementar una gran variedad de comandos. A continuación, en la tabla siguiente, se destacan algunos de ellos. 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 12. 
          span Operadores JOINS
        .color-acento-contenido.mb-5
            table.bg-white
              thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                tr.text-center
                  th Operador
                  th Descripción
              tbody
                tr
                  td.fst-italic.text-center INNER JOIN  
                  td Retorna sólo aquellas filas donde haya un “match”, es decir, retorna las filas donde el valor de la columna de la tabla A que se implementa para hacer el JOIN coincida con el valor de la columna correspondiente en la tabla B 
                tr
                  td.fst-italic.text-center LEFT OUTER JOIN 
                  td Retorna todas las filas que sean similares, pero también aquellas de la Tabla A que no sean similares. 

                tr
                  td.fst-italic.text-center RIGTH OUTER JOIN 
                  td Exactamente lo mismo, pero a la inversa, cuando se requiere listar las filas de la tabla B, aunque no estén relacionadas con ninguna fila de la tabla A
                tr
                  td.fst-italic.text-center  FULL OUTER JOIN
                  td Es como la suma de los dos anteriores comandos. Queremos tanto las filas de la A como las de B, tanto si hay match como si no. 
                tr
                  td.fst-italic.text-center CROSS JOIN  
                  td Se utiliza para generar una combinación emparejada de cada fila de la primera tabla con cada fila de la segunda tabla 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-gradient.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Consultas combinadas DML 
                  p.text-small Para conocer más sobre las consultas combinadas DML puede consultar documento anexo.  
                .col-sm-auto
                  a.boton.color-acento-botones.text-sistem(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color:  #fff4da")
          p.mb-0 Recuerde que el componente formativo dispone de más recursos que se ubican en este, para ello diríjase al menú principal en donde encontrará entre otros, la síntesis, una actividad didáctica, material complementario. 

            
</template>

<script>
export default {
  name: 'Tema4',
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
