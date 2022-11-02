<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Sentencias DDL 
    p.mb-5(data-aos='fade-right') El lenguaje de definición de datos (Data Definition Language, o DDL), es el que se encarga de la modificación de la estructura de los objetos de la base de datos. Existen cuatro operaciones básicas: #[em CREATE, ALTER, DROP y TRUNCATE.] 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .color-acento-contenido.mb-5
          table
            thead(style="background-color: #f6f6f6; border-top: 3")
              tr.text-center
                th INSTRUCCIÓN
                th DEFINICIÓN
            tbody
              tr
                td.fst-italic  CREATE DATABASE 

                td Crea una nueva base de datos  
              tr
                td.fst-italic  CREATE TABLE 
                td Comando para crear una nueva tabla. 
              tr
                td.fst-italic  ALTER TABLE 
                td Modifica la definición de una tabla alterando, agregando o eliminando columnas y restricciones. 
              tr
                td.fst-italic CREATE INDEX  
                td Crea un índice en una tabla determinada. 
              tr
                td.fst-italic  DROP INDEX 
                td Quita uno o varios índices de la base de datos. 
              tr
                td.fst-italic  DROP TABLE 
                td Quita la definición de una tabla y todos sus datos, índices y restricciones.
              tr
                td.fst-italic  TRUNCATE 
                td Se utiliza para eliminar o borrar los datos que contiene una tabla.
    p.mb-5(data-aos='fade-right') Para definir bien los comandos DDL vamos a utilizar una herramienta de SGBD relacional, para ejemplos de esta unidad utilizaremos phpMyAdmin, prácticamente la estructura de las sentencias en motores SQL son homogéneas porque se basan en el mismo lenguaje como puede ser: MySQL o PostgreSQL.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in") 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4.
          span Sistema gestor de bases de datos 
        img(src='@/assets/curso/temas/tema2/1.jpg', alt='')
    p.mb-5(data-aos='fade-right') Para el uso de los comandos DDL nos guiaremos por el siguiente modelo de entidad/relación:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5.
          span Sistema gestor de bases de datos MySQL
        img(src='@/assets/curso/temas/tema2/2.svg', alt='')
    p.mb-5(data-aos='fade-right') En el siguiente video se puede observar el proceso de construcción de una base de datos en un gestor de bases de datos MySQL: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-gradient.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.text-white
                  h3.mb-1 Construcción de una base de datos MySQL
                  p.text-small Para visualizar el procedimiento de la creación de estructura de una base de datos consulte el documento anexo.t 
                .col-sm-auto
                  a.boton.color-acento-botones.text-sistem(:href="obtenerLink('downloads/anexo1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download












































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
