<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-between.mb-5
      .col-lg-11
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h3.mb-0 Tecnólogo en implementación y gestión de bases de datos 
          br
          span Síntesis: Servicios de red, virtualización y pruebas de red
      .col-1.d-lg-block.d-none: img(src='@/assets/template/sena.svg', alt='') 
    p.mb-5(data-aos='fade-right')  Revise el resumen de las temáticas abordadas en el desarrollo del componente formativo. 
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
