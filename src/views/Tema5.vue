<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG11.px-4.pt-4.pt-md-4.px-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 5
      h1 Ataques con virus y <em>malware</em>

    .row.justify-content-center.align-items-center
      .col-lg-10.col-md-10.col-10(data-aos="fade-right")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Los ataques con virus y <em>malware</em>, más allá de convertirse en un serio problema, muchas veces son estrategias de los ciberdelincuentes para generar secuestro o pérdida de información, son de los más comunes que se observa en el mundo digital, estos se disfrazan de archivos que el sistema los cree nativos de sus sistema operativo y no son detectados, es así que debe de saber cómo operan y cuál es su cadena operativa para poder evitar que incurran en robo o pérdida de información importante para una organización.

    #t_5_1.titulo-segundo.color-acento-contenido
        h2.mb-3 5.1	Conceptos y generalidades

  .container.BGIMG06.px-4.pt-4.pt-md-4.px-md-5 
    p.mb-5 Dentro de los conceptos que se deben abordar con respecto a Ataques con Virus y <em>malware</em>, es el <em>spyware</em>, conozca acerca del mismo en el siguiente mapa:
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema5/img02.svg')

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5(data-aos="fade-right")
        .row.BG06.justify-content-center.align-items-center.p-4
          .col-8
            p Si alguna vez ha sido víctima de un robo de identidad o de un fraude con tarjetas de crédito, no está solo. Las estadísticas de los delitos cibernéticos cuentan la historia: un total de 978 millones de personas en 20 países se vieron afectadas por el crimen cibernético en 2017, según los resultados globales del informe <em>Norton Cyber Security Insights Report</em>, las víctimas de delitos cibernéticos en todo el mundo perdieron 172.000 millones de dólares, el <em>spyware</em> contribuyó a esas cifras.
          .col-3
            img(src='@/assets/curso/tema5/img03.svg')
    separador
    #t_5_2.titulo-segundo.color-acento-contenido
      h2.mb-3 5.2	Tipos de virus y <em>malware</em>

  .container.BG13.px-4.pt-4.pt-md-4.px-md-5 
    p.mb-0 El <em>software</em> espía es una de las amenazas más comunes en Internet. Puede infectar fácilmente su dispositivo y puede ser difícil de identificar. El <em>spyware</em> es una amenaza para las empresas y los usuarios individuales, ya que puede robar información confidencial y dañar su red.
    p.mb-5 Existen cuatro tipos principales de <em>spyware</em> y cada uno utiliza tácticas únicas para rastrearlo.

  .container.BGIMG08.px-4.pt-4.pt-md-4.px-md-5 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-8.col-11
              h4 <em>Adware</em>
              p Este tipo de <em>spyware</em> rastrea el historial de su navegador y sus descargas, con la intención de predecir qué productos o servicios le interesan. El <em>adware</em> mostrará anuncios de los mismos productos o servicios, o de productos o servicios relacionados, para atraerlo a hacer clic o a realizar una compra. El <em>adware</em> se utiliza con fines de <em>marketing</em> y puede ralentizar el equipo.
            .col-md-4.col-6
              figure
                img(src='@/assets/curso/tema5/img05.svg')
          .row.justify-content-center.align-items-center
            .col-md-4.col-6
              figure
                img(src='@/assets/curso/tema5/img06.svg')
            .col-md-8.col-11.mb-4.mb-md-0
              h4 Troyano
              p Este tipo de <em>software</em> malicioso se disfraza como <em>software</em> legítimo. Por ejemplo, los troyanos pueden parecer una actualización de <em>Java o Flash Player</em> al descargarse. El <em>malware</em> de los troyanos está controlado por terceros. Se puede utilizar para acceder a información confidencial como números de la Seguridad Social e información de tarjetas de crédito.
          .row.justify-content-center.align-items-center
            .col-md-8.col-11.mb-4.mb-md-0
              h4 <em>Cookies</em> de rastreo
              p Estas rastrean las actividades <em>web</em> del usuario, como búsquedas, historial y descargas, con fines de <em>marketing</em>.
            .col-md-4.col-6
              figure
                img(src='@/assets/curso/tema5/img07.svg')
          .row.justify-content-center.align-items-center
            .col-md-4.col-6
              figure
                img(src='@/assets/curso/tema5/img08.svg')
            .col-md-8.col-11.mb-4.mb-md-0
              h4 Monitores del sistema
              p Este tipo de <em>spyware</em> puede capturar casi todo lo que hace en su computadora. Los monitores del sistema pueden registrar todas las pulsaciones de teclas, correos electrónicos, diálogos de salas de chat, sitios <em>web</em> visitados y programas ejecutados. Los monitores de sistemas a menudo se disfrazan de programas gratuitos.
          .row.justify-content-center.align-items-center
            .col-md-8.col-11.mb-4.mb-md-0
              h4 <em>Rootkits</em>
              p Los <em>rootkits</em> son un tipo de <em>malware</em> diseñado para que puedan permanecer ocultos en el equipo. Pero, aunque no los notes, están activos. Los <em>rootkits</em> permiten a los ciberdelincuentes controlar el equipo de forma remota.
            .col-md-4.col-6
              figure
                img(src='@/assets/curso/tema5/img09.svg')
  
  .container.BG12.px-4.pt-4.pt-md-4.px-md-5   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        .row.justify-content-center
          .col-12
            p El <em>spyware</em> puede afectar a PC, Mac y dispositivos iOS o Android. aunque los sistemas operativos de <em>Windows</em> pueden ser más susceptibles de ser atacados, los atacantes también están mejorando para infiltrarse en los sistemas operativos de Apple, algunas de las formas más comunes en que su computadora puede infectarse con <em>spyware</em>, son las siguientes:
          .col-11
            ol.lista-candado
              li
                .lista-candado
                | Aceptar un aviso o una ventana emergente sin leerlo primero.
              li
                .lista-candado
                | Descargar <em>software</em> de una fuente no fiable.
              li
                .lista-candado
                | Abrir los archivos adjuntos de los correos electrónicos de remitentes desconocidos.
              li
                .lista-candado
                | Piratear medios como películas, música o juegos.
      .col-lg-6.p-0(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img10.svg')
    .row.mb-5
      .col-lg-4.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img11.svg')
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img12.svg')

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .row.BG10.justify-content-center.align-items-center.p-4
          .col-9
            p <em>Rootkits</em>: <span style="color:#BC1445 !important; font-weight:bold;">Dado que los <em>Rootkits</em>, pueden ser  uno de los virus informáticos más peligrosos, lo invitamos a estudiar el anexo-<em>Rootkits</em>.</span>
          .col-2.p-0
            img(src='@/assets/curso/tema5/img13.svg')
          .col-md-2
            a.boton.color-acento-contenido.me-3(:href="obtenerLink('/downloads/rootkits.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
          
    separador
    #t_5_3.titulo-segundo.color-acento-contenido
        h2.mb-3 5.3	Protección con antivirus y evasiones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-5(data-aos="fade-right")
        p Si cree que su dispositivo está infectado con <em>spyware</em>, realice un análisis con su <em>software</em> de seguridad actual para asegurarse de que ha limpiado todo lo que puede. A continuación, descargue y ejecute una herramienta de eliminación de virus, como el Norton Power Eraser gratuito.
        p También existen otras herramientas de eliminación de <em>software</em> espía de buena reputación. Algunas de ellas sólo funcionan cuando se inicia manualmente el análisis. Otras supervisan continuamente el equipo para asegurarse de que el <em>spyware</em> no pueda modificar o supervisar su información
        p A continuación, revise cómo defenderse de un <em>spyware</em>.
      .col-lg-4.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img14.svg')
      .col-lg-8(data-aos="fade-right")
        .row
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img23.svg' alt='AvatarTop')
              .tarjeta.BG14
                p.p-4 <span style="color:#5C379B !important">Intente evitar usar cualquier computador que no esté completamente bajo su control.</span>
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img24.svg' alt='AvatarTop')
              .tarjeta.BG14
                p.p-4 <span style="color:#5C379B !important">Sea cauteloso con los correos sospechosos y sitios <em>web</em>.</span>
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img25.svg' alt='AvatarTop')
              .tarjeta.BG14
                p.p-4 <span style="color:#5C379B !important">Habilite el favor para mejor el nivel de seguridad del computador.</span>
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img26.svg' alt='AvatarTop')
              .tarjeta.BG14
                p.p-4 <span style="color:#5C379B !important">Verifique regularmente el administrador de tareas y el administrador de reportes de la configuración de Microsoft.</span>
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img27.svg' alt='AvatarTop')
              .tarjeta.BG14
                p.p-4 <span style="color:#5C379B !important">Cuando navegue en Internet sea cauteloso con las descargas.</span>
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img28.svg' alt='AvatarTop')
              .tarjeta.BG14
                p.p-4 <span style="color:#5C379B !important">Manténganse alerta a las ventanas emergentes de los sitios <em>web</em>, nunca de clic en ninguna parte de esas ventanas.</span>
          .col-lg-12
            .tarjeta-avatar-b.mb-5
              .tarjeta-avatar-b__img
                img(src='@/assets/curso/tema5/img29.svg' alt='AvatarTop')
              .tarjeta.BG14
                p.p-4 <span style="color:#5C379B !important">Lea cuidadosamente todas las advertencias incluyendo el acuerdo de licencia y privacidad antes de instalar cualquier aplicación.</span>

    p.mb-5 Estos son los cuatro pasos principales para ayudar a prevenir el <em>spyware</em>.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img16.svg')
      .col-lg-3.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema5/img17.svg')
      .col-lg-3.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img18.svg')
      .col-lg-3.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/tema5/img19.svg')

    .row.justify-content-center.mb-5
      .col-lg-10.mb-5(data-aos="fade-right")
        .row.BG06.justify-content-center.align-items-center.p-4
          .col-8
            p El <em>spyware</em> puede ser dañino, pero puede ser eliminado y prevenido si se es cauteloso y se utiliza una herramienta antivirus, si has sido infectado con <em>spyware</em>, tome medidas para eliminarlo, sea proactivo cambiando sus contraseñas y notificando a su banco para que esté atento a las actividades fraudulentas.
          .col-3
            img(src='@/assets/curso/tema5/img20.svg')


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
