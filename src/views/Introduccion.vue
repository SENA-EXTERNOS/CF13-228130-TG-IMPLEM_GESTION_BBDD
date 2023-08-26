<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-11(data-aos="fade-left"): p Bienvenido, el presente componente formativo está orientado al diseño y la construcción de la base de datos en un sistema gestor de bases de datos; además se abordarán temáticas cruciales con respecto a la manipulación de los datos como sentencias DDL y DML. 
        p.mb-0 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/_Pn11w7FnZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
