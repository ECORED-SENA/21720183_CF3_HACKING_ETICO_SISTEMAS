<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG11.px-4.pt-4.pt-md-4.px-md-5.pb-0
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Escalamiento de privilegios
  .container.BGIMG04.px-4.pt-5.pt-md-4.px-md-5   
    .row.justify-content-center.align-items-center.mb-5.p-0
      .col-lg-5.mb-5.p-5(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img02.svg')
      .col-lg-5.p-0.mb-5(data-aos="fade-left")
        p La escalada de privilegios es la explotación de un error de programación, una vulnerabilidad, un fallo de diseño, la supervisión de la configuración o el control de acceso en un sistema operativo o una aplicación para obtener un acceso no autorizado a recursos que suelen estar restringidos de la aplicación o el usuario.
        p Esto da lugar a que la aplicación o el usuario tenga más privilegios de los previstos por el desarrollador o el administrador del sistema, lo que permite a los atacantes acceder a datos confidenciales, instalar programas malignos y lanzar otros ataques cibernéticos. En palabras simples, significa obtener privilegios para acceder a algo que no debería ser accesible, como se muestra en la siguiente figura.
  
    .row.justify-content-center.align-items-center        
      .col-lg-10.p-2(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
            p Escalamiento de privilegios 
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5
    .row.justify-content-center.align-items-center
      .col-lg-12.p-2.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img03.svg')
  
    separador


    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 2.1	Escalamiento horizontal y vertical

  .container.BGIMG05.p-4.p-md-5
    .row.justify-content-center.align-items-center
      .col-lg-10.mb-5(data-aos="fade-right")
        SlyderA
          .row.justify-content-center.align-items-center
            .col-12
              img(src='@/assets/curso/tema2/img05.svg')
            .col-9.p-4.py-5
              h5.mb-0 Escalamiento de privilegios horizontal
              p.mb-0 El término escalada de privilegios horizontales se aplica a todas las situaciones en que un atacante actúa como un usuario específico y obtiene acceso a los recursos pertenecientes a otro usuario con un nivel de acceso similar. Por ejemplo, si un atacante se hace pasar por un usuario y obtiene acceso no autorizado a su cuenta bancaria, éste es un ejemplo de escalada horizontal de privilegios.
              p Muchas vulnerabilidades de la <em>web</em> pueden dar lugar a una escalada horizontal de privilegios, por ejemplo, los ataques de <em>Cross Site Scripting</em> (pueden permitir al atacante robar las <em>cookies</em> de sesión del usuario para acceder a su cuenta de usuario Los ataques CSRF también son ejemplos de escalada de privilegios horizontales.
            .col-2.p-0
              img(src='@/assets/curso/tema2/img07.svg')
            .col-12
              img(src='@/assets/curso/tema2/img06.svg')
          .row.justify-content-center.align-items-center
            .col-12
              img(src='@/assets/curso/tema2/img05.svg')
            .col-9
              h5.mb-0 Escalamiento de privilegios vertical
              p.mb-0 Un atacante intenta obtener mayores privilegios o acceso con una cuenta existente que ha comprometido. Por ejemplo, un atacante se hace cargo de una cuenta de usuario normal en una red e intenta obtener privilegios administrativos, normalmente el administrador o el usuario del sistema en Microsoft <em>Windows</em>, o el <em>root</em> en los sistemas Unix y Linux, una vez que obtienen privilegios elevados, los atacantes pueden robar datos confidenciales sobre un usuario específico, instalar <em>software</em> de rescate, <em>spyware</em> u otros tipos de <em>malware</em>, ejecutar código malicioso y dañar la postura de seguridad de su organización.
              p Se suele denominar elevación de privilegios, se aplica a todas las situaciones en las que el atacante obtiene privilegios más altos, la mayoría de las veces privilegios de raíz (privilegios administrativos) la elevación de privilegios es, en la mayoría de los casos, el segundo paso de un ataque, si el ataque se dirige directamente al servidor <em>web</em>, el usuario malicioso a menudo tiene como objetivo primero obtener cualquier tipo de sistema de archivos y/o acceso a la consola; después de obtener acceso al servidor <em>web</em>, puede intentar utilizar otras técnicas para obtener acceso a una cuenta con privilegios, en la mayoría de los casos el administrador del sistema.
            .col-2.p-0
              img(src='@/assets/curso/tema2/img08.svg')
            .col-12
              img(src='@/assets/curso/tema2/img06.svg')
      .col-lg-10.mb-5(data-aos="fade-right")
        .row.BG04.justify-content-center.align-items-center.p-4
          .col-10
            p La escalada de privilegios locales en este caso suele basarse en configuraciones erróneas o en sistemas operativos sin parches, se sabe que tanto Microsoft <em>Windows</em> como Linux/UNIX tienen vulnerabilidades que permiten a los atacantes obtener privilegios de administrador mediante la ejecución de código arbitrario.
          .col-2
            img(src='@/assets/curso/tema2/img09.svg')
      separador
    
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2.mb-3 2.2	Contramedidas

      p.mb-5 Las vulnerabilidades de la escalada de privilegios pueden surgir por diferentes razones, como lo puede revisar en la siguiente figura.
  .container.BG12.p-4.p-md-5
    .row.justify-content-center
      .col-lg-10.mb-4.p-2(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          p.mb-0 Contramedidas
    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img10.svg')    
      .col-lg-10.mb-5(data-aos="fade-right")
        .cajon.color-primario
          .row.justify-content-center.align-items-center.p-2
            .col-9
              p.mb-0 Para prevenir los ataques de escalada de privilegios, los atacantes utilizan muchas técnicas de escalada de privilegios y así lograr sus objetivos. La buena noticia es que, si puedes detectar rápidamente los ataques de escalada de privilegios exitosos o intentados, tienes una buena oportunidad de detener a los intrusos antes de que puedan lanzar su ataque principal.
              p Para intentar la escalada de privilegios, en primer lugar, los atacantes normalmente necesitan acceder a una cuenta menos privilegiada. Esto significa que las cuentas de usuarios regulares son su primera línea de defensa, asegúrese de invertir en un fuerte control de acceso:
            .col-2
              img(src='@/assets/curso/tema2/img11.svg')
    
      .col-lg-4.mb-3(data-aos="fade-right")
        .tarjeta.tarjeta-flip.BG05(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img12.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Aplicar políticas de contraseñas
              p Una de las formas más simples de mejorar la seguridad es hacer cumplir las contraseñas seguras. No reutilice las contraseñas, ya que pueden quedar expuestas en grandes violaciones de datos.  Consulte nuestra guía sobre cómo crear contraseñas seguras e invierta en una herramienta para controlar continuamente las credenciales filtradas. 
      .col-lg-4.mb-3
        .tarjeta.tarjeta-flip.BG05(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img13.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Crear usuarios y grupos especializados con los mínimos privilegios necesarios y acceso a los archivos
              p El principio del mínimo privilegio en un contexto de seguridad se refiere a proporcionar a los usuarios normales solo el conjunto de privilegios que necesitan para hacer su trabajo y nada más. Lea nuestra guía sobre control de acceso para más información. Aunque es conveniente dar a cada usuario el mismo nivel de acceso a todos los recursos, proporciona a los atacantes un único punto de entrada a su organización, es mucho más seguro emplear la defensa en profundidad a través de sus esfuerzos de seguridad de datos, seguridad de la información y seguridad de la red.
      .col-lg-4.mb-3(data-aos="fade-left")
        .tarjeta.tarjeta-flip.BG05(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img14.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4 Invierta en formación de concienciación sobre ciberseguridad
              p Incluso si su organización tiene una política de contraseñas sólida y aplicada, los ataques de ingeniería social como el <em>phishing</em> y el <em>spear phishing</em> pueden hacer que los ciberdelincuentes accedan a sus sistemas sensibles. Eduque a sus empleados y a los proveedores de terceros sobre las amenazas cibernéticas comunes y cómo evitarlas. Habilite la DMARC para evitar el <em>spoofing</em> de correo electrónico y comprar posibles dominios de tipografía.

    separador
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
