<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comportamientos en línea
    
    .row.mb-5.align-items-center
      .col-lg-5(data-aos="fade-right"): img(src='@/assets/curso/62.svg').mb-5
      .col-lg-7(data-aos="fade-left")
        p Cuando se realiza acceso frecuente a plataformas y herramientas tecnológicas, incluyendo las redes sociales, hay que cumplir con una serie de recomendaciones en cuanto al comportamiento que debe realizarse igual en la interacción directa que en la <i>online</i>. #[br] #[br] Particularmente se debe poner especial atención a lo que se escribe o publica, y se conoce con el nombre de netiqueta. Este concepto surge de la palabra francesa #[em etiquette] (buenas maneras) y la inglesa net (red), para determinar las normas de comportamiento que debían cumplir los usuarios al hacer uso de herramientas como foros, redes sociales, chats y correos electrónicos, entre otros.
    #t_3_1.titulo-segundo(data-aos='fade-right')
      h2 3.1 Normas de comportamiento
    p.mb-5 A continuación, se mencionan de manera general, las normas que se deben cumplir al hacer uso de aplicaciones o plataformas tecnológicas, de su buena aplicación depende el mantenimiento estable de la identidad digital:
    .contendor-listado.p-5.mb-5
      .row.mb-5.justify-content-center
        .col-lg-11
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__1.text-center.text-white.p-5.h-100.d-flex.align-items-center.justify-content-center(@mouseover="mostrarIndicador = false")
                .img-hover
                  img(src='@/assets/curso/64.svg')
                .indicador--hover(v-if="mostrarIndicador")
                p.mb-0.h2 01
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 Hacerse entender 
                p Escribir de manera clara y entendible lo que se desea opinar, evitar utilizar abreviaturas, palabras propias o inventadas o en otros idiomas; tener siempre presente la ortografía al momento de querer compartir su publicación.
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__2.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/65.svg')
                p.mb-0.h2 02
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 NO intentar llamar la atención
                p En la escritura y publicaciones se debe tener especial atención a no utilizar el teclado en mayúscula y/o negrita y el uso de exclamaciones, pues lo que representan son comportamientos agresivos o gritos de quien lo hace de manera <i>online</i> y a nadie le gusta que le griten.
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__3.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/66.svg')
                p.mb-0.h2 03
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 No sea “pesado”
                p Puede ser que se tenga información “bomba” que puede o debe compartir con más usuarios ,o simplemente puede ser que esté ofreciendo algún producto o servicio, la recomendación es no bombardear o inundar a los contactos o conocidos con mucha información o #[em spam] con publicaciones que seguramente no le interesan a todos los usuarios.
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__4.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/67.svg')
                p.mb-0.h2 04
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 Respetar los derechos de autor 
                p No apropiarse del trabajo de otros usuarios, esta es una actividad muy común; como usuarios de redes sociales, de herramientas colaborativas y participativas muchas veces con o sin intención se utiliza y comparten contenidos hechos por otras personas sin hacer la respectiva citación de la autoría, por lo que se debe citar y nombrar al autor y no utilizar contenidos sin los respectivos permisos o autorizaciones. 
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__5.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/68.svg')
                p.mb-0.h2 05
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 Toda acción genera una consecuencia
                p Muchas veces por desconocimiento con o sin intención se puede estar inmersos en acciones judiciales por compartir algún contenido que genere injuria o fraude.
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__6.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/69.svg')
                p.mb-0.h2 06
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 No utilizar el anonimato como estrategia de publicación 
                p La recomendación es, siempre que se pueda, usar el nombre e imagen y evitar crear perfiles falsos, salvo que sienta que la integridad y privacidad puedan estar en riesgo.
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__7.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/70.svg')
                p.mb-0.h2 07
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 Respetar la privacidad de la gente 
                p No compartir o difundir datos, imágenes, videos o conversaciones privadas sin la debida autorización o consentimiento de todas las personas involucradas, otra mala práctica es etiquetar a conocidos o amigos sin su respectiva aprobación o permiso.
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__8.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/71.svg')
                p.mb-0.h2 08
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 Veracidad de la información compartida 
                p Antes de compartir algún contenido expuesto por otro usuario, primero hay que asegurarse de que la información es real y verídica, y no contribuir a difundir rumores.
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__9.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/72.svg')
                p.mb-0.h2 09
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 Adaptarse a las normas 
                p Todo grupo o comunidad tiene sus reglas y normas, por ello es obligación conocerlas primero antes de participar y así evitar inconvenientes.
          .row.mb-2.g-0
            .col-md-2.col-4
              .numero.morado__10.text-center.text-white.p-4.h-100.d-flex.align-items-center.justify-content-center
                .img-hover
                  img(src='@/assets/curso/73.svg')
                p.mb-0.h2 10
            .col-md-10.col-8
              .contenido.p-5.h-100
                h4 No dejarse provocar 
                p Dentro de los grupos y comunidades siempre existirán personas con posiciones y puntos de vista distintos por lo que tratarán en algunas ocasiones de causar provocaciones, el objetivo es no caer en esos juegos de la provocación y, si es necesario, retirarse o desconectarse por el tiempo necesario mientras se calman y terminan las provocaciones.
    #t_3_2.titulo-segundo(data-aos='fade-right')
      h2 3.2 Normas para chat, foros y redes sociales
    p.mb-5 En el uso de la información escrita o de carácter visual, se debe ser muy prudente y atinado, eso habla muy bien de las personas y ayuda a construir un canal digital llamativo con buena referencia para la identidad en línea.
      br
      br
      |Ahora, se conocerán las recomendaciones más frecuentes a tener en cuenta al hacer publicaciones:
    .row.mb-3
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/74.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>Ser prudente</b>. No cansar a los demás posteando varios mensajes y archivos en un mismo día, esto puede saturar.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/75.svg' style='width: 196px').m-auto
          .text-hover <b>Enfocarse en el tema del foro o grupo:</b> publicar contenidos exclusivamente relacionados con el propósito para el que fue creado. No enviar imágenes con saludos, chistes, videos o cadenas.
            p.mb-0 
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/76.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>No responder todo lo que reciba</b>. No hay tal necesidad.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/77.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>Cuidar la ortografía.</b>
    .row.mb-3
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/78.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>No caer en la vulgaridad:</b> puede obtener la risa de un momento y el desprecio en el siguiente.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/79.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>Cuestionar ideas, no personas.</b>
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/80.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>Los debates no son concursos</b> para definir quién tiene la razón, sino que, a través del intercambio de puntos de vista, sirven para iluminar la verdad. Dejar que cada participante decida qué creer y qué pensar.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/81.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>No utilizar el sarcasmo.</b> Si se quiere respeto hay que respetar a los demás.
    .row.mb-5
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/82.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>No victimizarse ni culpar</b> sistemáticamente a los demás.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/83.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 Una vez que se expresa una posición sobre un tema, se puede debatir con quien lo cuestiona, pero nadie lee respuestas largas, y si se emite una opinión o se responde más de cuatro veces, generalmente aburre a los demás.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/84.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>Si se quiere discutir con alguien en particular</b>, hay herramientas en las redes sociales que permiten responder exclusivamente a esa persona o, si no, se puede hacer por vía privada para no cansar, molestar o quitarle espacio a los demás.
      .col-lg-3.mb-3
        .tarjeta.tarjeta-hover.h-100.bg--4-claro.p-5.d-flex.align-items-center.justify-content-center
          .img-hover: img(src='@/assets/curso/85.svg' style='width: 196px').m-auto
          .text-hover
            p.mb-0 <b>No dejar que las emociones dominen</b>; al sentirse agredido, se debe respirar hondo y pensar bien si va a responder y cómo. El ser humano es dueño de las palabras que calla y esclavo de las que pronuncia.
    #t_3_3.titulo-segundo(data-aos='fade-right')
      h2 3.3 Normas para correos electrónicos
    p.mb-5 Cerca de media a una hora de tiempo diaria se debe dedicar a la revisión de la bandeja de entrada de los correos. Es esta la herramienta tecnológica más usada desde el plano profesional, ya que permite comunicar oficialmente posturas o políticas empresariales o se utiliza como medio para solicitar y enviar informes y respuestas a requerimientos, ya que permite tener la trazabilidad de todas las comunicaciones.
    .contenedor.bg--4-claro.p-5.my-5(data-aos="zoom-in-up").m-additional2
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Texto que describa la imagen' style='width: 582px')
        .contenedor-img__6: img(src='@/assets/curso/86.png', alt='Texto que describa la imagen' style='width: 400px')
        .row.justify-content-end
          .col-xl-7
            .texto.texto-adorno__7
              p.h2.fw-normal  Usar a diario y con mucha intensidad no necesariamente es un sinónimo de buen uso, la pregunta es si se sabe ¿qué escribir? y ¿bajo qué características debería estar escrito un correo electrónico?
              p Pachter (2010), una gurú en cuestiones de educación en los negocios, cree que no, tal como lo narra en #[em The Essentials of Business Etiquette], desde donde propone las 10 reglas de oro para el uso adecuado del #[em e-mail]:
              .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/A6.mp3' type='audio/mpeg')
                  |  Your browser does not support the audio tag.
    
    br
    .row.mt-4.justify-content-center
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 1
          p.mb-0 Un #[em e-mail] no siempre es un texto para un amigo. Se debe evitar el uso de abreviaturas, siglas, emoticones o demasiadas exclamaciones.
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 2
          p.mb-0 No olvidar poner el asunto: debe ser algo descriptivo, no se puede dejar ese campo en blanco, es la línea más importante del correo, debe ser una frase clara y atractiva, muchos deciden no abrir o leer un correo a menos que la línea de asunto indique que es algo que vale la pena ver.
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 3
          p.mb-0  Seleccionar una tipografía: el mensaje debe ser claro, sencillo y fácil de leer. Se aconseja el uso de Times New Roman, Arial o Calibrí, en color negro y tamaño 10 o 12.
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 4
          p.mb-0  Incluir un saludo profesional y la firma. Evitar expresiones coloquiales y las abreviaturas en los nombres al iniciar el #[em e-mail]. En la firma, proporcionar más información como el cargo, nombre de la empresa e información de contacto.
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 5
          p.mb-0 No usar en exceso la opción de “responder a todos”. Utilizarlo solo si es necesario que todos los incluidos en el mensaje inicial, vea el correo.
    
    .row.justify-content-center
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 6
          p.mb-0 Revisar los mensajes. Leer y releer. Si es necesario, hasta en voz alta. Los correctores ofimáticos a veces son traicioneros y los errores dan mala imagen del emisor.
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 7
          p.mb-0  Incluir la dirección en el último momento. Incluso si está respondiendo a un #[em e-mail], los expertos aconsejan borrar la dirección y escribirla solo cuando el mensaje esté listo para ser enviado. Así se evitan sustos inesperados al pulsar botones por error.
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 8
          p.mb-0 Responder, incluso si no es el destinatario. Contestar a los mensajes es una simple regla de educación. Y avisar si el mensaje le llega por error, porque el emisor creerá que se envió a la persona correcta.
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 9
          p.mb-0  No pedir confirmación, esto puede ser molesto. Además, hay quien tiene bloqueada esa opción.
      .col-lg.col-md-6.mb-4
        .d-flex
          h3.me-2 10
          p.mb-0  Bromas, las justas. El #[em e-mail] puede jugar muy malas pasadas. Una ironía no suena igual en una conversación que leyéndola en un #[em e-mail].

</template>

<script>
export default {
  name: 'Tema3',
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
<style lang="sass" scoped>
.contendor-listado
  background-image: url('../assets/curso/63.svg')
  background-repeat: no-repeat
  background-position: top
  background-size: cover
  .numero
    padding-left: 60px !important
    padding-right: 60px !important
    min-width: 100px
    position: relative
    font-size: 60px
    font-weight: bold
    overflow: hidden
    &:hover
      .img-hover
        bottom: 0
    .img-hover
      position: absolute
      bottom: -100%
      left: 0
      width: 100%
      transition: all .5s ease-in-out
.contenido
  width: 100%
  background-color: #F3F9FF
  &:hover
    .img-hover
      bottom: 0
.tarjeta-hover
  border: 3px solid #FFE78B !important
  background-color: #FFF9E4 !important
  &:hover
    background-color: #FFE78B !important
    border: 0 !important
    .text-hover
      display: block
    .img-hover
      display: none
  .text-hover
    display: none
</style>
