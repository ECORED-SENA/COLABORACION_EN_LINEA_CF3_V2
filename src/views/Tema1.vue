<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Redes sociales
    
    p.mb-5 Las redes sociales, a manera de comunicación, son un gran descubrimiento y para el ser humano pueden ser la solución a muchos de los problemas globales ya que dan visibilidad a lo que anteriormente era casi imposible de ver, tal como lo presenta el siguiente video:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zEqv8Bi1ddM?si=EE1c66u3bKQ_4I8I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .contenedor.bg--2-claro-2.p-5.my-5(data-aos="zoom-in-up")
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Texto que describa la imagen' style='width: 582px')
        .contenedor-img__2: img(src='@/assets/curso/3.png', alt='Texto que describa la imagen' style='width: 383px')
        .row.justify-content-end
          .col-lg-8
            .texto
              p Ahora, te invitamos a analizar:
              p.h1.fw-normal.mb-5 ¿Qué es un seguidor en el contexto de las redes sociales? 
              .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/A2.mp3' type='audio/mpeg')
                  |  Your browser does not support the audio tag.
    #t_1_1.titulo-segundo(data-aos='fade-right')
      h2 1.1 Tipos de redes sociales
    p.mb-5 Los tipos de redes sociales son tan variados como las personas, por eso es claro saber cuáles de esas son para su uso y cuáles no. En el siguiente video se brinda más información sobre este tema.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tdEv-yO1Uvg?si=HYp5oTwAcg2Jvc1-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 Facebook, que originalmente fue creada como una red para conectar personas, en la actualidad es utilizada para ofertar productos y servicios, ofrecer entretenimiento y ser un medio que facilita la publicación y contratación de oferta laboral, entre otros tantos usos.
      br
      br
      |Se invita a revisar su conocimiento acerca de estas redes. 
      b ¿Qué se debe hacer? 
      |Llegar al final del siguiente video para encontrar una clave secreta.
    .tarjeta.bg--1-claro.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/cta.svg")

        .col-md.col-lg-6
          h3 #[em Scaperoom] 1
          p.mb-4 Bienvenido a la actividad llamada Scaperrom  donde vas a demostrar tu habilidad como conocedor digital, la actividad es un reto en el que debes seguir las instrucciones para descubrir las claves que te solicitarán más adelante, éxitos...
          
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/Scaperoom1/story.html')" target="_blank" type="application/pdf")
            span Ver video
            i.fas.fa-file-video
    #t_1_2.titulo-segundo(data-aos='fade-right')
      h2 1.2 Usos de las redes sociales
    .contenedor.bg--4-claro.p-5(data-aos="zoom-in-up").margin-1
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Texto que describa la imagen' style='width: 582px')
        .contenedor-img__3: img(src='@/assets/curso/4.png', alt='Texto que describa la imagen' style='width: 505px')
        .row.justify-content-end
          .col-lg-7
            .texto.texto-adorno__2
              p.h2.fw-normal
                b ¿Sabías que el uso de las redes sociales está determinado por el usuario? 
                | Según la cantidad de personas que actúen, de cierta manera los elementos de la red se comportan para facilitarle la navegación a esas personas.
              .wrap-player.mb-4
                audio(controls='')
                  source(src='../../public/downloads/A3.mp3' type='audio/mpeg')
                  |  Your browser does not support the audio tag.
    p.mb-5 Es así como cada red puede hacer su aparición en muchos casos de uso, como son:
    .row.mb-3
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/5.svg', alt='Texto que describa')
          h5.text-white Mantener contacto con amigos y familiares.
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/6.svg', alt='Texto que describa')
          h5.text-white Mantenerse al día con las noticias y eventos de actualidad.
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/7.svg', alt='Texto que describa')
          h5.text-white Ocupar el tiempo libre.
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/8.svg', alt='Texto que describa')
          h5.text-white Encontrar contenido entretenido o divertido.
    .row.mb-3
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/9.svg', alt='Texto que describa')
          h5.text-white Compartir su opinión sobre un determinado tema.
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/10.svg', alt='Texto que describa')
          h5.text-white Compartir fotos y videos con las demás personas.
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/11.svg', alt='Texto que describa')
          h5.text-white Generación de una red de contactos.
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/12.svg', alt='Texto que describa')
          h5.text-white Conocer gente nueva.
    .row.mb-5
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/13.svg', alt='Texto que describa')
          h5.text-white Compartir los detalles de lo que se está haciendo en la vida diaria.
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/14.svg', alt='Texto que describa')
          h5.text-white Compartir perfil profesional y ofrecer y buscar empleo.
      .col-lg-3.mb-3
        .bg--3.px-2.py-3.d-flex.h-100.align-items-center
          figure.imagen-cartas
            img(src='@/assets/curso/15.svg', alt='Texto que describa')
          h5.text-white Promocionar productos y servicios.
    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img.p-5.d-flex
            img(src="@/assets/curso/16.png" style="width: 280px").m-auto
          .bloque-texto-g__texto.p-4
            p.mb-0 Al momento de crear una cuenta o registrarse en una red social se debe tener claro cuál o cuáles de las opciones expuestas serán los propósitos de uso. Como se mencionó anteriormente, se debe tener en cuenta que una misma red puede ser utilizada para uno o varios de los propósitos antes mencionados y que la información estará a la distancia de un clic si se hace pública, porque la responsabilidad de hacer o no su información pública es solo del usuario, por ello se debe pensar bien y hacerlo con responsabilidad. Hay un dicho especial para este caso: 
            b “subir una información a la red es muy fácil, pero descargarlo o hacerlo desaparecer es casi imposible”.
    p.mb-5 Para fortalecer el concepto y las competencias digitales, se hace necesario realizar la siguiente lectura de forma activa y crítica logrando entender el punto del autor Octavio Islas (2019) en el documento <i>La importancia que hoy y mañana admiten las redes sociales virtuales</i>, para crear su propio punto de vista al respecto en los tres momentos que trabaja la lectura. 
      br
      br
      |El ingreso al documento es el siguiente:
    .tarjeta.tarjeta--gris.px-4.mb-5(data-aos="zoom-in-up")
      .row
        .col-lg-4: img(src='@/assets/curso/17.png')
        .col-lg-8.py-5
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Hacer clic en el enlace de la parte inferior.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Ingresar con su usuario y clave, que para el caso de la comunidad SENA, es el número del documento sin puntos en el usuario y lo mismo para la contraseña.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Ir al documento y leer el resumen en el idioma de preferencia.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Elegir la opción “Texto completo en PDF” para visualizar y dar trámite a la lectura completa del documento. 
          a.boton.color-acento-botones(href="https://search-ebscohost-com.bdigital.sena.edu.co/login.aspx?direct=true&db=zah&AN=141302017&lang=es&site=ehost-live" target="_blank")
            span Enlace
            i.rounded-1.p-2.fas.fa-link
    #t_1_3.titulo-segundo(data-aos='fade-right')
      h2 1.3 Creación de perfiles públicos y privados 
    p.mb-5 Antes de hablar de perfiles públicos y privados, se debe entender qué es un “perfil” en el contexto digital.
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row
            .col-md-6.mb-4.mb-md-0
              p Cuando se hace uso de las redes sociales y de las herramientas de colaboración e interacción en línea se necesita, para poder interactuar a través de estas plataformas, contar con una cuenta de acceso.
            .col-md-6
              figure
                img(src='@/assets/curso/18.jpg', alt='Texto que describa la imagen')
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/19.jpg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p Esta cuenta se crea con la intención de poder compartir con amigos, familia y público en general gustos, intereses, preferencias, opiniones.
          .row
            .col-md-6.mb-4.mb-md-0
              p Para ello se requiere contar con una cuenta de correo electrónico o un número telefónico activo y una contraseña.
            .col-md-6
              figure
                img(src='@/assets/curso/20.jpg', alt='Texto que describa la imagen')
          .row
            .col-md-6
              figure
                img(src='@/assets/curso/21.jpg', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p A medida que se comparte y publica información, se crea la propia identidad digital asociada a ese perfil en esa red establecida.
    .contenedor.bg--3-claro.p-5.my-5(data-aos="zoom-in-up")
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Texto que describa la imagen' style='width: 582px')
        .contenedor-img__2: img(src='@/assets/curso/22.png', alt='Texto que describa la imagen' style='width: 505px')
        .row.justify-content-end
          .col-lg-7
            .texto
              p.h1.fw-normal ¿Cómo han transformado las redes sociales a la sociedad actual? 
              .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/A4.mp3' type='audio/mpeg')
                  |  Your browser does not support the audio tag.
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 “Las redes sociales no solo cambiaron la forma en que las nuevas generaciones (nativos digitales) socializan, sino que también la manera en que debemos definir lo público y lo privado. Cada #[em smartphone] que funcione bajo el sistema operativo iOS o Android guarda la información de cada comentario que realizamos en Facebook, sabe quiénes son nuestros contactos en WhatsApp, registra cada lugar en el que estamos a través del #[em GPS] y hasta el asistente virtual Siri aprende a diferenciar nuestros estados de ánimo. En definitiva, la desarticulación de lo público y lo privado en las redes sociales plantea cambios que atañen a lo social y político” (Jaramillo, 2016).
            i.fas.fa-quote-right
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/23.jpg', alt='Texto que describa la imagen')
    p.mb-5 El concepto de los perfiles públicos y privados inicia desde el mismo momento en que se crean cuentas o perfiles en las redes sociales, toda vez que en el proceso de registro se suministra información sensible como nombres, identificación, dirección, teléfono, correo electrónico, estado civil, gustos, preferencias, nacionalidad, entre otras, que normalmente se entrega de manera voluntaria al proveedor o dueño de la plataforma donde se está registrando, aceptando los términos y condiciones de la plataforma, muchos de los datos privados pasan a ser públicos y de libre uso.
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-4
          p Los perfiles privados se refieren a aquellos donde se restringe el acceso de lo que se publica a solo algunas personas o familiares, limitando el acceso y la posibilidad para que no todas las personas puedan compartir y acceder a las publicaciones.
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        .cajon-b.color-primario.abajo-derecha.p-3.mb-5
          p.mb-0 Si bien las redes sociales son utilizadas como un medio de contacto con familiares y amigos, son un medio para publicar opiniones y posiciones en diferentes temáticas, también son medios utilizados por las empresas cuando se están analizando las hojas de vida de candidatos presentados en búsqueda de un empleo; así cada vez es más común y más utilizado por las áreas encargadas investigar e indagar en las redes sociales sobre las personas que se encuentran solicitando el trabajo.
            br
            br
            |Aunque esta es una práctica muy común desde el plano profesional por la validación e investigación de perfiles profesionales, también es cierto que existen otro tipo de personas inescrupulosas que buscan indagar y encontrar perfiles en busca de realizar actos delictivos o algún tipo de fraude, por lo que cobra gran importancia la necesidad de prohibir el acceso o la entrada a los perfiles, limitando o prohibiendo el acceso a todo usuario, lo que permite garantizar tener perfiles privados con monitoreo constante.
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/24.jpg')
    p.mb-5 Por el contrario, los perfiles públicos son aquellos donde las fotos, comentarios y datos personales están dispuestos al alcance de cualquiera.
    .row.mb-5.justify-content-center(data-aos="zoom-in-up")
      .col-lg-4.mb-3
        .tarjeta.p-4.bg--2.h-100
          img(src='@/assets/curso/25.svg', alt='Texto que describa la imagen' style='width: 77px').mb-3
          .contendor-hover(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            img(src='@/assets/curso/26.jpg')
            .tarjeta.bg--3.contendor-hover__tarjeta.p-3
              p.text-white Este es un perfil público que permite revisar la información publicada sin necesidad de ser un seguidor.
      .col-lg-4.mb-3
        .tarjeta.p-4.bg--4.h-100
          img(src='@/assets/curso/27.svg', alt='Texto que describa la imagen' style='width: 77px').mb-3
          .contendor-hover
            img(src='@/assets/curso/28.jpg')
            .tarjeta.bg--3.contendor-hover__tarjeta.p-3
              p.text-white Este es un perfil privado que no permite revisar la información de la cuenta mientras no sea permitido por el dueño del perfil a la hora de ser seguidor.
    .contenedor.bg--1-claro2.my-5.p-5.p-lg-0(data-aos="zoom-in-up").margin-2
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Texto que describa la imagen' style='width: 582px')
        .contenedor-img__2: img(src='@/assets/curso/22.png', alt='Texto que describa la imagen' style='width: 390px')
        .row.justify-content-end
          .col-xl-7
            .texto.texto-adorno__3.my-3
              p.h1.fw-normal.ps-lg-4 ¿Es seguro dejar todos los perfiles de redes sociales abiertos con fotos y comentarios personales al alcance de cualquiera? 
                b ¿O es mejor tenerlos parcialmente privados? 
              .wrap-player
                audio(controls='')
                  source(src='../../public/downloads/A5.mp3' type='audio/mpeg')
                  |  Your browser does not support the audio tag.
    br
    p.mb-5 La pregunta es determinar, 
      b ¿qué tipo de perfil debería de utilizar, público o privado?
      br
      br
      |Esto dependerá siempre del tipo de red social utilizada, por ejemplo:
    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.tf__1(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/29.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              img(src='@/assets/curso/29.svg', alt='Texto que describa la imagen' style='width: 77px').mb-3
              p.text-white Si se desea utilizar Facebook, la idea principal de esta red social es poder interactuar con personas conocidas.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.tf__2(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/30.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              img(src='@/assets/curso/33.svg', alt='Texto que describa la imagen' style='width: 77px').mb-3
              p.text-white Si la red social a utilizarse es X, su objetivo se centra en poder dar a conocer opiniones a cualquier persona en general y poder conocer nuevos amigos.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.tf__3(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/31.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              img(src='@/assets/curso/34.svg', alt='Texto que describa la imagen' style='width: 77px').mb-3
              p.text-white LinkedIn, por su parte, es una red pensada para poder agregar contactos de profesionales o compañeros de trabajo con los cuales comparten su campo profesional.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.tf__4(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/32.jpg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              img(src='@/assets/curso/35.svg', alt='Texto que describa la imagen' style='width: 77px').mb-3
              p.text-white Instagram es una plataforma diseñada para compartir fotos y videos.
    p.mb-5 Por lo que se debe analizar muy bien cuál o cuáles serán las redes a utilizar y el propósito de su utilización, para determinar si contar o no con perfiles públicos o privados. Cada red social ha logrado hacer su propia identidad e identificar a sus usuarios de gran forma.
      br
      br
      |Ya se debe tener una palabra clave como mínimo para el premio, ahora continúe en su rol de investigador:
    .tarjeta.bg--1-claro.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/cta.svg")

        .col-md.col-lg-6
          h3 #[em Scaperoom] 2
          p.mb-4 Vas bien, esperamos que ya tengas listas algunas pistas y continúes tu proceso de aprendizaje de la mano de tu creatividad y compromiso, acá tienes otro pedazo del reto, presta mucha atención para descubrir las pistas...
          
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/Scaperoom2/story.html')" target="_blank" type="application/pdf")
            span Ver video
            i.fas.fa-file-video
    #t_1_4.titulo-segundo(data-aos='fade-right')
      h2 1.4 Configuración y seguridad de redes sociales 
    .contenedor.bg--4-claro.p-5.my-5(data-aos="zoom-in-up").m-additional
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Texto que describa la imagen' style='width: 582px')
        .contenedor-img__4: img(src='@/assets/curso/36.png', alt='Texto que describa la imagen' style='width: 220px')
        .row.justify-content-start.align-items-center
          .col-lg-9.d-flex.align-items-center
            .texto.texto-adorno__6
              p.h3.fw-normal #[b Tener los perfiles públicos con los datos personales abiertos al mundo, podría generar problemas dependiendo de lo que se publique,] por ejemplo, un #[em hacker] o delincuente informático puede utilizar las fotos, videos y publicaciones para suplantar una identidad, ya sea en la misma red social o en cualquier otra red, y a partir de la creación de estos perfiles falsos, buscar contactar a familiares y amigos y tratar de estafarlos; además, puede ser utilizada la información para tratar de causar daño, adivinar contraseñas o para afectar la imagen profesional, tomando como argumentos las ideas, opiniones o fotos controversiales publicadas en los perfiles.
    p.mb-5 El riesgo está en que las fotos, videos y publicaciones en general puedan ser utilizados por cualquier persona en cualquier parte del mundo sin que el propietario se dé cuenta, otra consideración importante es tener mucho cuidado con lo que se publica, debido a que algunas de las publicaciones podrían considerarse inapropiadas y pueden ser utilizadas para afectar la imagen del dueño de la cuenta.
      br
      br
      |A continuación, se mencionan algunos de los consejos que se deben utilizar en la configuración de la privacidad y seguridad en las redes sociales, a saber:
    AcordeonD.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--verde-claro")
      .row(titulo="Configurar el perfil social").px-5
        .col-md-10.mb-4.mb-md-0
          p Se debe publicar en el perfil únicamente lo estrictamente necesario, no incluir información personal o sensible como ubicación, gustos, estudios, etc.
        .col-md-2
          figure
            img(src='@/assets/curso/37.svg', alt='Texto que describa la imagen')
      .row(titulo="Analizar muy bien lo que se publica").px-5
        .col-md-10.mb-4.mb-md-0
          p Se trata de ser cautelosos y no ser eufóricos al momento de publicar, pensando si a futuro este contenido podría llegar a afectar o perjudicar al titular de la cuenta.
        .col-md-2
          figure
            img(src='@/assets/curso/38.svg', alt='Texto que describa la imagen')
      .row(titulo="Verificar la vista de nuestro perfil").px-5
        .col-md-10.mb-4.mb-md-0
          p Es recomendable desde otras cuentas validar cómo se ve y qué se muestra en el perfil, haciendo pruebas de configuración y acceso a la cuenta.
        .col-md-2
          figure
            img(src='@/assets/curso/39.svg', alt='Texto que describa la imagen')
      .row(titulo="Ajustar parámetros de seguridad").px-5
        .col-md-10.mb-4.mb-md-0
          p Se deben leer muy bien las políticas de privacidad y seguridad que proporciona cada red social y ajustar los parámetros frente a qué se quiere mostrar y quiénes pueden ver lo que se publica.
        .col-md-2
          figure
            img(src='@/assets/curso/40.svg', alt='Texto que describa la imagen')
      .row(titulo="Seleccionar el entorno social").px-5
        .col-md-10.mb-4.mb-md-0
          p Ser prudentes y tener mucha cautela frente a quienes se aceptan como contactos o seguidores de una cuenta. 
        .col-md-2
          figure
            img(src='@/assets/curso/41.svg', alt='Texto que describa la imagen')
      .row(titulo="Contraseñas seguras").px-5
        .col-md-10.mb-4.mb-md-0
          p Se deben crear las contraseñas de acceso a las redes sociales siguiendo todas las recomendaciones como la utilización de un número no menor de 8 caracteres como resultado de hacer combinaciones entre números, letras minúsculas y mayúsculas, caracteres especiales.
        .col-md-2
          figure
            img(src='@/assets/curso/42.svg', alt='Texto que describa la imagen')
      .row(titulo="Limitar permisos a las aplicaciones").px-5
        .col-md-10.mb-4.mb-md-0
          p En el proceso de instalación de las aplicaciones, sobre todo en los dispositivos móviles, poner especial atención al tipo de acceso que se le dan a nuestros teléfonos, muchas de estas piden acceso a los contactos, cámaras y localización lo que resulta es una amenaza muy alta a la privacidad.
        .col-md-2
          figure
            img(src='@/assets/curso/43.svg', alt='Texto que describa la imagen')
      .row(titulo="Proteger la identidad digital").px-5
        .col-md-10.mb-4.mb-md-0
          p Se logra a partir de la aplicación de todas y cada una de las recomendaciones antes mencionadas para evitar que la identidad digital sea suplantada o robada.
        .col-md-2
          figure
            img(src='@/assets/curso/44.svg', alt='Texto que describa la imagen')
    #t_1_5.titulo-segundo(data-aos='fade-right')
      h2 1.5 Grupos y comunidades digitales 
    p.mb-5 Las comunidades digitales son la nueva era de la comunicación y es probable que en este momento o en momentos posteriores, cada persona haga parte de una o varias de ellas. A continuación, se muestra el concepto extendido al respecto:
    ImagenInfografica.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/45.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.contenido-tarjeta.p-4(x="34%" y="39%")
        .icono-tarjeta: img(src='@/assets/curso/46.svg', alt='Texto que describa la imagen' style="width: 99px")
        .textos
          .h5.mb-2 Concepto
          p Conjunto de individuos que comparten elementos en común, tales como un idioma, costumbres, visión del mundo, edad, ubicación geográfica, estatus social y roles (Sanz, 2005).
            br
            br
            |Normalmente, los grupos y comunidades digitales con intereses comunes en un tema que comparten información, reflexiones, consejos e ideas, generando conocimientos con beneficio colectivo para su grupo o para una organización que pueden ser tan diversos dependiendo del tipo de red social o herramienta tecnológica que se utilice.
      .tarjeta.color-acento-contenido.contenido-tarjeta.p-4(x="67%" y="30%")
        .icono-tarjeta: img(src='@/assets/curso/47.svg', alt='Texto que describa la imagen' style="width: 99px")
        .textos
          .h5.mb-2 Ejemplos
          p
            b Redes sociales: 
            |buscan que sus miembros o usuarios puedan conectarse con otros que tengan sus mismos intereses, a través de grupos, hashtags y otras herramientas en plataformas como: Facebook, Instagram, X, esto permite interconectar personas y facilitar la creación de grupos y comunidades frente a una temática, gusto o preferencias.
            br
            br
            b IM: 
            |la mensajería instantánea donde aplicaciones como WhatsApp y Telegram tienen mayor uso o preferencia de los usuarios, donde en tiempo real pueden interactuar entre 2 o más personas y estar opinando y participando activamente de una temática.
            br
            br
            b Foros: 
            |son sitios o servicios a través de páginas web con la finalidad de participar en debates con aportes frente a una temática en particular.
            br
            br
            b Wiki: 
            |son páginas donde los usuarios pueden leer y editar información sobre conceptos o definiciones, normalmente tienen asociados foros donde se pueden escribir y publicar sus opiniones sobre estos temas.
            br
            br
            b #[em Blogs]: 
            |son sitios web donde los usuarios tienen la particularidad de acceder constantemente a temáticas que se actualizan con información nueva y relevante en forma de <i>post</i> o artículos sobre temas diversos.
      .tarjeta.color-acento-contenido.contenido-tarjeta.p-4(x="52%" y="56%")
        .icono-tarjeta: img(src='@/assets/curso/48.svg', alt='Texto que describa la imagen' style="width: 99px")
        .textos
          .h5.mb-2 Características
          p
            b Ubicación geográfica: 
            | gracias a la globalización en el uso de las tecnologías de la información y las comunicaciones, la ubicación geográfica para pertenecer a una comunidad o grupo digital suele ser irrelevante, lo importante es que se compartan los mismos intereses por lo que temas como el lugar de origen o el idioma no son tan importantes al momento de pertenecer a una de estas comunidades.
            br
            br
            b Roles y funciones: 
            |todos los miembros de las comunidades y grupos participan en estos con un rol específico que pueden ser moderadores, community managers, contribuyentes, visitantes, consumidores, entre otros.
            br
            br
            b Medios digitales: 
            |si bien los miembros de un grupo o comunidad digital pueden estar geográficamente cerca o en la misma región, la satisfacción de la pertenencia a estos grupos y comunidades es justamente la utilización de medios digitales como páginas web, servicios digitales a través de Internet.
            br
            br
            b Sentido de pertenencia: 
            |esta se da de igual o más fuerte que con grupos tradicionales, lo que nos indica que el contacto físico es irrelevante para ser parte de un grupo o comunidad.
    p.mb-5 Los grupos y comunidades virtuales brindan la posibilidad de establecer contacto directo a través de medios digitales como el Internet con personas que comparten los mismos intereses, gustos y posiciones, pero evitando el protocolo que existe en las relaciones interpersonales del plano físico.
    .contenedor.bg--4-claro.p-5.my-5(data-aos="zoom-in-up")
        .avatar: img(src='@/assets/curso/avatar1.png', alt='Texto que describa la imagen' style='width: 582px')
        .contenedor-img__3: img(src='@/assets/curso/49.png', alt='Texto que describa la imagen' style='width: 247px')
        .row.justify-content-end
          .col-lg-9
            p Adicionalmente, estos grupos facilitan el perfilamiento y creación de identidades digitales a partir de la identificación de tendencias y comportamientos, la clasificación o segmentación de mercados potenciales lo que genera impacto directo en la comercialización de bienes y servicios, posicionando marcas y/o generando tendencias en los mercados.
      
</template>

<script>
import AcordeonD from '@/components/AcordeonD.vue'
export default {
  name: 'Tema1',
  components: {
    AcordeonD,
  },
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
.imagen-cartas
  width: 73px
  height: 73px
  margin-right: 20px
  img
    min-width: 73px
    height: 73px
.bloque-texto-b.color-primario
  .bloque-texto-b__texto
    i.fas.fa-quote-left, i.fas.fa-quote-right
      color: $color-primario
  &:before
    background-color: #DCCCEC
.cajon-b.color-primario:before
  background-color: #DCCCEC
  top: 70%
  left: 48%
  opacity: 1
.contendor-hover
  position: relative
  &:hover
    .contendor-hover__tarjeta
      opacity: 1
  .contendor-hover__tarjeta
    transition: opacity 0.2s ease-in-out
    width: 100%
    position: absolute
    opacity: 0
    bottom: 10%
    left: -50%
    @media (max-width: $bp-max-md)
      bottom: 10%
      left: 0
.tf
  &__1
    background-color: #498ED3 !important
  &__2
    background-color: #38B5ED !important
  &__3
    background-color: #1391D5 !important
  &__4
    background-color: #F64F4C !important
.contenido-tarjeta
  .textos
    margin-top: 40px

  .icono-tarjeta
    position: absolute
    top: 0
    transform: translateY(-50%)
.bloque-texto-g__img
  @media (min-width: $bp-min-md)
    img
      position: absolute
      bottom: 0
      left: 10%
.bloque-texto-g__texto
  width: 70%
.margin-1
  @media (min-width: $bp-max-md)
    margin-top: 200px !important
.margin-2
  @media (min-width: $bp-max-md)
    margin-top: 100px !important
</style>
