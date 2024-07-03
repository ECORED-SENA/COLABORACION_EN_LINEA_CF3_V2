<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .contenedor.bg--2-claro-2.p-5.my-5(data-aos="zoom-in-up")
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Imagen decorativa' style='width: 582px')
        .contenedor-img__1: img(src='@/assets/curso/1.png', alt='Imagen decorativa' style='width: 320px')
        .row.justify-content-end
          .col-lg-8
            .texto
              p.h1.fw-normal.mb-5
                b ¿Conoces y formas parte de alguna red social digital? 
                |¿Te son familiares los nombres Facebook, Instagram o TikTok? 

    .row.mb-5.pt-5
      .col-lg-7(data-aos='fade-right')
        p.mb-5 En este componente se estudiarán los siguientes conceptos:
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Las redes sociales.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Las herramientas de colaboración e interacción en línea.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | La importancia de hacer un uso seguro, ético y responsable de estos canales de comunicación. 
        p.mb-5 A menudo se presentan nuevas y modernas aplicaciones que van desde el apoyo laboral hasta el entretenimiento, sin dejar de lado la vida personal y el comercio electrónico, este último, junto con la competencia social de las personas en los niveles digitales, ha facilitado el crecimiento exponencial de los canales de comunicación mediados por Internet.
      .col-lg-5(data-aos='fade-left'): img(src='@/assets/curso/2.jpg')
    p.mb-5 En la actualidad es frecuente encontrar relaciones de amistad entre personas que no se han visto de manera física en ningún momento, pero que se comunican a diario así como interacciones serias entre empresarios y clientes potenciales que, probablemente, no están en la misma ciudad, ni posición geográfica, es por eso que este componente formativo centra su atención en esa comunicación, siendo de vital importancia darle buen uso para obtener el mayor provecho de los canales digitales y manteniendo siempre el mejor comportamiento en línea.
    
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
