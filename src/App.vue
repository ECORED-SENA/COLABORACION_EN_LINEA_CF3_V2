<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-interno
  height: 160px
.banner-interno__fondo
  background-image: url(assets/curso/fondo_tema.png) !important
.banner-principal .tarjeta
  background-position: inherit !important
.titulo-principal__numero
  background-color: #5000A1 !important
.curso-main-container > .container
  overflow: clip !important
.titulo-segundo:after
  border-left-color: #5000A1 !important
.banner-principal .tarjeta
  background-color: transparent !important
.titulo-principal.color-acento-contenido .titulo-principal__numero span
  color: #fff !important
.banner-principal-decorativo-1
  animation: float1 2s ease-in-out infinite alternate !important
  top: 25% !important
  right: 77% !important
.banner-principal-decorativo-2
  animation: float1 3s ease-in-out infinite alternate !important
  top: 20% !important
  right: 20% !important
.banner-principal-decorativo-3
  animation: float1 3s ease-in-out infinite alternate !important
  top: 60% !important
  right: 13% !important
.titulo-principal.color-acento-contenido .titulo-principal__numero
  background-color: #5000A1 !important
.banner-principal__row .banner-principal__img img
  margin: 0 auto
.banner-principal .tarjeta
  background-size: 100% 100% !important
.titulo-principal__numero span, .titulo-principal__numero i
  color: #fff !important
.lista-ol--cuadro__vineta span
  color: #fff !important
@media screen and (max-width: 992px)
  .banner-principal .tarjeta
    background-size: cover !important
</style>
