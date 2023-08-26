<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sentencias DML
    p.mb-5(data-aos='fade-right') Lenguaje de manipulación de datos, son las sentencias SQL que permiten a los usuarios realizar consultas, modificaciones, inserciones y procesos de eliminación de los datos que se hayan almacenado en los distintos objetos que forman parte de la base de datos. 
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="zoom-in")
        .modal-prop
          ImagenInfograficaB.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/1.svg', alt='Texto que describa la imagen')
            div(x="61.2%" y="9.6%" tooltip="Ver más" numero="1")
              p #[em INSERT], Insertar información en una tabla de base de datos 
              p.ms-4 
                span.cod1 INSERT INTO 
                span.cod2 ´Empleados´ (´FechaNac´, ´Dni´, ´Apellido´, ´Nombres´) 
                span.cod3 VALUES
                span.cod1 (´1962-03-17´, 
                span.cod4 27875677,
                span.cod2 ´Robles´, ´Carlos´ );
            div(x="43.5%" y="33%" tooltip="Ver más" numero="2")
              p #[em UPDATE], Actualizar (modificar) información en las tablas de bases de datos 
              p.ms-4 
                span.cod1 UPDATE 
                span.cod2 ´Productos´ 
                span.cod1 SET 
                span.cod2 ´Precio´ 
                span.cod3 = 
                span.cod4 100
                br
                span.cod1 WHERE 
                span.cod2 ´Id´ 
                span.cod3 = 
                span.cod4 284
            div(x="43.5%" y="66.8%" tooltip="Ver más" numero="3")
              p DELETE, Eliminar información de una base de datos
              p.ms-4 
                span.cod1 DELETE FROM 
                span.cod2 ´Empleados´
                br
                span.cod1 WHERE 
                span.cod2 ´Apellido´ 
                span.cod3 = 
                span.cod2 ´Pereira´ ;
            div(x="61.2%" y="90.6%" tooltip="Ver más" numero="4")
              p SELECT, Selección de información de la base de datos
              p.ms-4 
                span.cod1 SELECT  
                span.cod3 Nombre, Precio 
                span.cod1 FROM 
                span.cod2 ´Productos´
                span.cod1 WHERE 
                span.cod2 ´Id´ 
                span.cod4 = 
                span.cod3 284; 
    p.mb-5(data-aos='fade-right') Lenguaje de manipulación de datos (Data Manipulation Language, o DML) es un lenguaje proporcionado por el sistema de gestión de base de datos que permite a los usuarios llevar a cabo las tareas de consulta o manipulación de los datos, organizados por el modelo de datos adecuados.
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2
          br
          span #[i Sentencias DML]
        .color-acento-contenido.mb-5
          table
            thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
              tr.text-center
                th INSTRUCCIÓN
                th DEFINICIÓN
            tbody
              tr
                td.fst-italic INSERT 
                td Agrega una nueva fila (registro) a una tabla. 
              tr
                td.fst-italic UPDATE 
                td Cambia datos existentes en una tabla. 
              tr
                td.fst-italic DELETE 
                td Quita registro de una tabla. 
              tr
                td.fst-italic SELECT 
                td Para realizar consultas de los datos almacenados. 
    p.mb-5(data-aos='fade-right') La lista de comandos referida anteriormente en la tabla 2. Sentencias DML, son los básicos del lenguaje DML, a continuación, vamos a construir como sería cada instrucción. 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
      .row(titulo="Inserción de datos en una tabla (INSERT) ").ps-5
        .col-lg-8
          p La inserción de datos (registros) en la base de datos está declarada de la siguiente manera: 
            br
            |“INSERT INTO nombre_tabla VALUES (valor1, valor2, valor3,...);” 
            br
            br
            |#[b Ejemplo:] para la base de datos “facturacion” creada anteriormente la instrucción INSERT sería la siguiente, vamos a ingresar datos a la tabla “almacen” y “vendedor”. 
            br
            |#[em “INSERT INTO almacen VALUES (1,"almacen4@hotmail.com","6457654","carrera 20 No. 12-98");”] 
            br
            br
            |Observando la instrucción del registro (Insert) a la tabla almacen, hay que tener en cuenta que al realizar el insertado de datos debemos ingresar la misma cantidad de campos que contiene la tabla, en el ejemplo anterior son 4 campos (columnas),  hay que referenciar bien el tipo de texto, podemos ver que el primer valor es (1) como es un valor tipo numérico  va escrito directamente, pero como los otros campos está declarado tipo texto va entre comillas dobles el valor correspondiente (“value”). 
        .col-lg-4
          img(src='@/assets/curso/temas/tema3/2.jpg', alt='')
      .row(titulo="Actualización y de datos <em>(UPDATE) </em>").ps-5
        .col-lg-8
          p La sentencia UPDATE se utiliza para modificar valores en una tabla. La sintaxis de SQL #[em UPDATE] es: 
            br
            |“#[em UPDATE nombre_tabla SET columna1 = valor1, columna2 = valor2 WHERE columna3 = valor3]” 

            br
            br
            |- La cláusula SET establece los nuevos valores para las columnas indicadas. 
            br
            |- La cláusula WHERE sirve para seleccionar las filas que queremos modificar. 
            br
            |- Si omitimos la cláusula #[em WHERE], por defecto, modificará los valores en todas las filas de la tabla. 

            br
            br
            |#[b Ejemplo:] 

            br
            br
            |Vamos a modificar el número de teléfono del vendedor Nelson Duarte, la sentencia es la siguiente: 
            br
            |“#[em UPDATE vendedor SET telefono = "3002101858" WHERE codigo = 521;]” 
        .col-lg-4
          img(src='@/assets/curso/temas/tema3/3.jpg', alt='').mb-4
          img(src='@/assets/curso/temas/tema3/4.jpg', alt='')
      div(titulo="Eliminacion de datos <em>(DELETE</em>)").ps-5
        p La sentencia DELETE sirve para borrar filas de una tabla. La sintaxis de SQL DELETE es: 
          br
          |“#[em DELETE FROM nombre_tabla WHERE nombre_columna = valor]” 
          br
          br
          |- #[em WHERE], se utiliza para especificar cúal registro vamos a eliminar, generalmente se identifica por la llave primaria, porque es un valor irrepetible, solo lo tiene un registro. 
          br
          |- Si queremos borrar todos los registros o filas de una tabla, se utiliza la sentencia: “#[em DELETE * FROM] nombre_tabla;” 
          br
          br
          |#[b Ejemplo:] 

          br
          |Si queremos eliminar a un registro de la tabla “vendedor” la sintaxis SQL es la siguiente:  
          br
          |“#[em DELETE FROM vendedor WHERE codigo = 521;]” 
          br
          br
          |- Recuerde que, para eliminar un registro de una base de datos, se recomienda identificarlo por su llave primaria como el ejemplo anterior, (521) es el código en la tabla que a su vez es la llave primaria del registro. 
    .titulo-square.d-flex.align-items-center.mb-4(data-aos="fade-right")
      i.fas.fa-square(style="color: #FFB30B ").me-3.mb-0
      h3.mb-0 Estructura básica de la sentencia #[em SELECT] 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/5.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p La instrucción #[em SELECT] es de vital importancia en las consultas del lenguaje SQL, define el conjunto de datos que devolverá la consulta, generalmente se utiliza acompañado de la cláusula FROM, que define que parte de la base de datos debe ser consultada. 
          br
          br
          |#[em “SELECT nombre_columna, nombre_columna2 FROM nombre_tabla;”] 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon-adorno.color-acento-contenido.p-4(style="background-color: #fff4da")
          p  Las tres cláusulas principales de las consultas son: 
          ul.lista-ul--color
            li
              i.fas.fa-check
              p.mb-0 Cláusula #[em #[b SELECT]], ahí se indican o se nombran los campos de la tabla que queremos obtener, se nombran separados por coma dando respuesta a qué datos nos están solicitando.
            li
              i.fas.fa-check
              p.mb-0 Cláusula #[em #[b FROM]], indicamos en qué tablas se encuentran esos datos a consultar, se nombran las tablas que intervienen en la consulta separados por coma.
            li
              i.fas.fa-check
              p.mb-0 Cláusula #[em #[b WHERE]], aquí se establecen las condiciones que deben tener los registros de la tabla que intervienen en la consulta.
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-gradient.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Estructura básica de la sentencia #[em SELECT]
                  p.text-small Para revisar el procedimiento de realizar consultas en una base de datos, descargue el documento anexo.
                .col-sm-auto
                  a.boton.color-acento-botones.text-sistem(:href="obtenerLink('downloads/anexo2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    h3.mb-4(data-aos="fade-right") Operaciones

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-11
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.bloque-derecha
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/6.svg')})`}"
          )
          
          .bloque-texto-g__texto.border-dash.p-5
            p.mb-0 En las consultas SQL se pueden realizar una gran variedad de operaciones, donde se obtienen resultados significativos que aportan una gran utilidad a la toma de decisiones en una organización.  
              br
              br
              |A continuación, las diferentes operaciones en los grupos correspondientes: 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris2")
      .row(titulo="Operadores de comparación ").ps-5.justify-content-center.g-5
        .col-lg-6.mb-lg-0.mb-3
          p Estos operadores se implementan en la cláusula #[em WHERE] para determinar qué registros debe seleccionar al realizar una determinada consulta. 
            br
            br
            |Listados de operadores de comparación que se utilizan en consultas SQL 
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            span Operadores de Comparación
          .color-acento-contenido.mb-5
            table.bg-white
              thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                tr.text-center
                  th Operador
                  th Descripción
              tbody
                tr
                  td 
                    | = 
                  td Igual 
                tr
                  td
                    | >
                  td Mayor que
                tr
                  td
                    | <
                  td Menor que 
                tr
                  td
                    | <= 
                  td Menor o igual que 
                tr
                  td
                    | =>  
                  td Mayor o igual que
                tr
                  td
                    | <>
                  td Diferente 
                tr
                  td
                    |  !=
                  td Diferente 
        .col-lg-4
          p #[b Ejemplos:]
            br
            br
            | Implementación del operador igual (=) en una consulta
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            span Operador igual (=)
          img(src='@/assets/curso/temas/tema3/4.png', alt='')
          p Implementación del operador diferente en una consulta 
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            span Operador Diferente (<>)
          img(src='@/assets/curso/temas/tema3/5.png', alt='')

      .row(titulo="Operadores aritméticos").ps-5.justify-content-center.g-5
        .col-lg-6.mb-lg-0.mb-3
          p Son aquellos operadores empleados en las consultas para realizar operaciones aritméticas como la suma, resta, multiplicación y la división. 
            br
            br
            |En la tabla a continuación se puede evidenciar la variedad de operadores aritméticos: 
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            span Operadores aritméticos
          .color-acento-contenido.mb-5
            table.bg-white
              thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                tr.text-center
                  th Operador
                  th Descripción
              tbody
                tr
                  td 
                    | + 
                  td Sumar 
                tr
                  td 
                    | -
                  td Restar
                tr
                  td 
                    | *
                  td Multiplicar
                tr
                  td 
                    | /
                  td Dividir 
                tr
                  td 
                    | ^
                  td Potenciación 
                tr
                  td 
                    | %
                  td Módulo, el residuo de dividir dos números enteros 
          
        .col-lg-4
          p #[b Ejemplos:] 
            br
            br
            |Se requiere consultar el precio de los libros con un 10% de descuento: 
            br
            br
            |#[em SELECT título, precio, precio-(precio*0.1) as descuento FROM libros;] 
            br
            br
            |Consulta del salario de un empleado, sumando un bono de 100.000 y restando un préstamo por 20.000 
            br
            br
            |#[em SELECT nombre, apellido, (salario + 100000 – 20000) as salario_total FROM empleados;] 
      .row(titulo="Operadores lógicos").ps-5.justify-content-center.g-5
        .col-lg-6.mb-lg-0.mb-3
          p Los operadores lógicos permiten construir expresiones booleanas, el resultado de la implementación de este tipo de operadores es un valor booleano (falso o verdadero). (Medina, R. 2020). 
            br
            br
            |Lista de operadores lógicos empleados en consultas SQL
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            span Operadores Lógicos 
          .color-acento-contenido.mb-5
            table.bg-white
              thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                tr.text-center
                  th Operador
                  th Descripción
              tbody
                tr
                  td.fst-italic.text-center
                    | AND 

                  td "B and C" devuelve cierto si B y C valen cierto, y falso en cualquier otro caso. 
                tr
                  td.fst-italic.text-center
                    | OR
                  td "B or C" devuelve cierto si B o C valen cierto, y falso únicamente cuando tanto A como B valen falso. 
                tr
                  td.fst-italic.text-center
                    | NOT
                  td "not C" devuelve falso si C vale cierto, y cierto si C vale falso.
        .col-lg-4
          p #[b Ejemplos:]
            br
            br
            |El operador AND devuelve verdadero si ambas expresiones son verdaderas, y falso en cualquier otro caso. Supongamos que queremos consultar ¿qué personas son rubias y altas?, realizamos la siguiente consulta SQL: 
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            span Operador #[em AND]
          img(src='@/assets/curso/temas/tema3/6.png', alt='')

      div(titulo="Operadores de conjuntos ").ps-5.justify-content-center.g-5
        p Los operadores de conjunto su principal objetivo es combinar el resultado de dos sentencias tipo SELECT en una única consulta. Dependiendo del tipo de operador a implementar la consulta nos retorna la respuesta correspondiente.  
          br
          br
          |Listado de operadores lógicos en SQL 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          span Operadores de Conjuntos
        .color-acento-contenido.mb-5
            table.bg-white
              thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
                tr.text-center
                  th Operador
                  th Descripción
              tbody
                tr
                  td.fst-italic.text-center
                    | UNION  
                  td Permite unir dos sentencias en una única consulta.
                tr
                  td.fst-italic.text-center
                    | INTERSECT
                  td Encargado de filtrar en dos consultas y retornar los registros comunes en las dos consultas. 
                tr
                  td.fst-italic.text-center
                    | EXCEPT 
                  td Tomando como referencia dos consultas, el #[em EXCEPT] retorna los registros de la primera consulta que no estén en la segunda consulta. 
    h3.mb-4(data-aos="fade-right") Sentencias de agregación
    p.mb-5(data-aos='fade-right') Las sentencias de agregación son implementadas, por una parte, al realizar operaciones sobre un conjunto de datos, pero devolviendo un único valor agregado sobre todos los datos. Es decir, permite realizar promedio, conteo, máximos, mínimo, etc. En la tabla a continuación se especifica cada uno de ellos y su respectiva descripción:
    .row.justify-content-center.mb-5
      .col-lg-10 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3
          br
          span #[i Sentencias de Agregación]
        .color-acento-contenido.mb-5
          table.bg-white
            thead(style="background-color: #f6f6f6; border-top: 3px solid #ffb30b")
              tr.text-center
                th Operador
                th Descripción
            tbody
              tr
                td.fst-italic.text-center  MAX 
                td Devuelve el valor máximo de la lista de registros a consultar.
              tr
                td.fst-italic.text-center  MIN
                td Devuelve el valor mínimo de la lista de registros a consultar.
              tr
                td.fst-italic.text-center  AVG 
                td Devuelve el promedio del valor respectivo de una columna de la tabla.
              tr
                td.fst-italic.text-center  STDDEV
                td Devuelve la desviación del estándar para un conjunto de números. 
              tr
                td.fst-italic.text-center  COUNT 
                td Retorna la cantidad del número de registro que tiene determina columna.
              tr
                td.fst-italic.text-center  GROUP BY 
                td Se indica una columna en específico para agrupar los resultados.
              tr
                td.fst-italic.text-center  HAVING
                td Permite rechazar o seleccionar un conjunto de registros de una consulta. 
              tr
                td.fst-italic.text-center  ORDER BY
                td Ordena el conjunto de registros resultantes de una consulta, se pueden ordenar de forma ascendente o descendente.
    
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon-adorno.color-acento-contenido.p-4(style="background-color: #fff4da")
          p  #[b Ejemplos:] 
            br
            br
            | Consulta con la cláusula #[em ORDER BY] 
            br
            br
            |En esta consulta los datos resultantes se pueden ordenar de forma ascendente o descendente, para utilización de esta cláusula se debe especificar cuál columna de los datos consultados se desea el ordenamiento y de qué tipo (ascendente o descendente), la sintaxis de la consulta es la siguiente: 
            br
            br
            |#[em SELECT nombre_columna, nombre_columna FROM nombre_tabla ORDER BY nombre_columna ASC|DESC; ]
            br
            |#[em SELECT * FROM turismo ORDER BY nom_tur DESC;] 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5
          br
          span #[em Consulta con comando ORDER BY - DESC]
        img(src='@/assets/curso/temas/tema3/7.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/5.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p Sintaxis para el uso de las diferentes funciones, 
          br
          br
          |#[em SELECT] "tipo de función"("nombre_columna") #[em FROM] "nombre_tabla"; 
          br
          br
          |Función #[em MAX], SELECT MAX(lon_tur) as maximo,nom_tur #[em FROM] turismo; 
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6 
          br
          span #[em Consulta con la función MAX]
        img(src='@/assets/curso/temas/tema3/8.png', alt='')
        
        
          
</template>

<script>
export default {
  name: 'Tema3',
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
