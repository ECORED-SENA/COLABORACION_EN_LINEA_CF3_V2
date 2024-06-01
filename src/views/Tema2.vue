<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Cuidados y recomendaciones en redes sociales
    
    p.mb-5 Dada la proliferación o aumento en el uso de las redes sociales, a continuación se mencionan algunas recomendaciones y características a tener en cuenta al momento de utilizarlas.
    .tarjeta.tarjeta--verde-claro.p-4.mb-5
      LineaTiempoC.color-primario(text-small)
        .row(titulo="1")
          .col-md-5
            figure
              img(src='@/assets/curso/50.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Utilizar una contraseña robusta
            p De este modo es posible prevenir que algún atacante descubra fácilmente la contraseña. Es importante mencionar que la contraseña es la llave para acceder al perfil de redes sociales, de modo que si un atacante lograra descubrirla podría secuestrar la cuenta y sus contenidos. 
        .row(titulo="2")
          .col-md-5
            figure
              img(src='@/assets/curso/51.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 No aceptar contactos desconocidos
            p Aceptar contactos desconocidos incrementa las posibilidades de recibir mensajes spam o mensajes con <i>links</i> a sitios fraudulentos o con contenido malicioso.
        .row(titulo="3")
          .col-md-5
            figure
              img(src='@/assets/curso/52.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Ser precavido en la información publicada
            p Permitir que solo los contactos de la red de amigos puedan ver esos datos. Al momento de publicar se debe tener cuidado de no dar información confidencial como números de cuenta, contraseñas, número de teléfonos o direcciones, pues si algún usuario desconocido tuviera acceso a esta información podría terminar en casos de acoso o publicidad.
        .row(titulo="4")
          .col-md-5
            figure
              img(src='@/assets/curso/53.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Reportar cualquier caso de spam o abuso
            p Es importante reportar los mensajes spam al proveedor de redes sociales, pues esto ayudará a prevenir que se sigan multiplicando estos ataques utilizando una misma cuenta.
        .row(titulo="5")
          .col-md-5
            figure
              img(src='@/assets/curso/54.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 No almacenar contraseñas
            p El uso de equipos compartidos requiere que no se guarden las contraseñas de acceso en el sistema, pues los equipos de uso público y empresarial no están dispuestos para el uso de recursos personales. 
        .row(titulo="6")
          .col-md-5
            figure
              img(src='@/assets/curso/55.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Cerrar la sesión
            p Cuando se termine de utilizar el servicio que elija, se debe cerrar la sesión inclusive si está en un dispositivo de trabajo personal.
        .row(titulo="7")
          .col-md-5
            figure
              img(src='@/assets/curso/56.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Mantener actualizado el navegador
            p Esto permitirá estar protegido contra ataques que aprovechen fallas en el navegador de internet.
        .row(titulo="8")
          .col-md-5
            figure
              img(src='@/assets/curso/57.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Procurar no visitar sitios en los que se soliciten datos personales o contraseñas
            p En equipos de acceso público, los equipos compartidos pueden contener herramientas maliciosas capaces de capturar todo lo que se escribe, incluyendo usuarios y contraseñas, de este modo podrían entrar a una cuenta y realizar los cambios que deseen.
        .row(titulo="9")
          .col-md-5
            figure
              img(src='@/assets/curso/58.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 ¿Público o privado? 
            p Por defecto, muchas redes sociales comparten los contenidos de forma pública. Algunas ofrecen privacidad como una configuración global para hacer un perfil público o privado, mientras que otras dan más opciones, permitiendo hacer las publicaciones individuales públicas o privadas. Hay que asegurarse que estas configuraciones cumplan con los objetivos para aceptar los términos del servicio.
        .row(titulo="10")
          .col-md-5
            figure
              img(src='@/assets/curso/59.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Doble autenticación
            p Si es posible, implementar una doble autenticación. Algunos servicios como Facebook y Twitter ofrecen una autenticación de dos factores como una medida de seguridad. Normalmente, para iniciar sesión en un servicio, ingresamos una contraseña, que es lo común cuando utilizamos una red social. Al habilitar una autenticación de dos factores, además de una clave, se introduce un dato que tiene solo el usuario, generalmente en forma de un número generado aleatoriamente, o token que puede enviarse al dispositivo móvil a través de un SMS, o bien, se generan números aleatorios dentro de los servicios de la aplicación móvil. De esta manera, hace más difícil que alguien entre a nuestra cuenta porque se necesitaría el token o el número secreto.
        .row(titulo="11")
          .col-md-5
            figure
              img(src='@/assets/curso/60.jpg', alt='Texto que describa la imagen')
          .col-md-7.mb-4.mb-md-0
            h4 Las cosas gratis no son gratis
            p Muchos estafadores intentarán seducir con la idea de ganar accesorios o tarjetas de regalo gratis si se completa una encuesta, instala una aplicación o si se comparte una publicación en una red social; mediante estas técnicas los usuarios revelan su información personal.
    .contenedor.bg--4-claro.p-5.my-5(data-aos="zoom-in-up")
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Texto que describa la imagen' style='width: 582px')
        .contenedor-img__3: img(src='@/assets/curso/61.png', alt='Texto que describa la imagen' style='width: 405px')
        .row.justify-content-end
          .col-lg-8
            p.h1.fw-normal  ¿Se quiere más seguidores y “Me gusta”?   
            p Siempre hay un precio que pagar al tratar de conseguir más seguidores o “Me gusta”. Ya sea pagando dinero para tener seguidores y/o “Me gusta” falsos, u otorgar voluntariamente los datos de la cuenta y convertirse de esta manera en un botnet social; estos esquemas no valen la pena porque ponen en riesgo la información de la cuenta.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
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
