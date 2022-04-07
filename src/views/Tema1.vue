<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Análisis de vulnerabilidades

    .row.justify-content-center.mb-4
      .col-lg-12
        .cajon-b.color-primario.p-3.mb-5
          p Las vulnerabilidades en el <em>software</em>, son una de las principales puertas de entrada para los cibercriminales, pero también, es un vector de ataque, una mala configuración de nuestros servicios, e incluso la exposición de puerto TCP/UDP a Internet sin ningún tipo de filtrado. Los piratas informáticos están buscando constantemente nuevas formas de atacar cualquier ordenador, servidor o red a través de estos fallos de seguridad, por este motivo, los propios ingenieros de las compañías, los investigadores de seguridad y los hackers éticos están constantemente analizando los diferentes programas en busca de fallos de seguridad y reportándose para que se solucione, la herramienta imprescindible para esta tarea con los escáneres de vulnerabilidades.
      .col-lg-12.mb-5
        img(src='@/assets/curso/tema1/img01.png')
      .col-lg-10.mb-4
        .cajon.color-primario
          .row.justify-content-center.align-items-center.p-2
            .col-9
              p Tanto la prueba de penetración (también llamada "prueba del bolígrafo") como la exploración de vulnerabilidades son exigidas por la <b>Norma de Seguridad de Datos de la Industria de las Tarjetas de Pago (PCI DSS)</b>, pero a menudo hay confusión sobre las diferencias entre los dos.
            .col-2
              img(src='@/assets/curso/tema1/img02.svg')
    p.mb-5 En el siguiente gráfico, puede observar la diferencia entre los escaneos de vulnerabilidad y las pruebas de penetración.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1
      p.mb-0 Escaneos de vulnerabilidad y pruebas de penetración

    figure.mb-5
      img(src='@/assets/curso/tema1/img03.svg') 

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-4
            img(src='@/assets/curso/tema1/img04.svg') 
          .col-8
            .cajon.color-acento-contenido.p-5
              p He aquí una buena analogía: un escaneo de vulnerabilidades es como caminar hacia una puerta, comprobar si está abierta y detenerse allí, mientras que una prueba de penetración va un poco más allá, no solo comprueba si la puerta está desbloqueada, sino que también abre la puerta y entra directamente.
    .row.align-items-center 
      .col-lg-7.mt-4
        p Existen varias formas de realizar análisis de vulnerabilidades, pero una de las más comunes es a través de un <em>software</em> de exploración de vulnerabilidades automatizado, estas herramientas utilizan bases de datos de vulnerabilidades conocidas para identificar posibles fallos en sus redes, aplicaciones, contenedores, sistemas, datos, <em>hardware</em> y más, la herramienta de análisis de vulnerabilidades escaneará exhaustivamente cada aspecto de su tecnología, una vez que se completen los escaneos, la herramienta informará sobre todos los problemas descubiertos y sugerirá acciones para eliminar las amenazas.
        p Las herramientas más completas pueden ofrecer una visión de la seguridad y el impacto operativo de la reparación de un riesgo, en comparación con la aceptación del riesgo, los datos de escaneo de vulnerabilidades también pueden ser integrados en un SIEM junto con otros datos para un análisis de amenazas aún más holístico.
      .col-lg-5
        img(src='@/assets/curso/tema1/img05.png') 
    separador
  
    .titulo-segundo.color-acento-contenido
      h2.mb-3 1.1 Herramientas 
    .BGIMG01.p-4
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12.mb-4
          p Un escáner de vulnerabilidades es un <em>software</em> diseñado para realizar análisis automáticos de cualquier aplicación, sistema o red en busca de cualquier posible vulnerabilidad que exista, aunque estas aplicaciones no son capaces de detectar la vulnerabilidad con total precisión, sí son capaces de detectar ciertos elementos que podrían desencadenar en una vulnerabilidad, facilitando enormemente el trabajo a los investigadores e ingenieros.
        .col-lg-6
          .row
            .col-12
              img(src="@/assets/curso/introduccion/img04.png")  
            .col-12
              p Hay varios tipos de escáneres de vulnerabilidades, autenticados, en los que se realizan pruebas y ataques potenciales desde la propia red, y no autenticados, en los que el investigador o hacker ético se intenta hacer pasar por un pirata informático simulando un ataque desde fuera para ver hasta dónde es capaz de llegar analizando posibles vulnerabilidades.
              p Existe un gran número de herramientas de este tipo, tanto comerciales como de código abierto, y todas estas herramientas tienen sus propios puntos fuertes y débiles, si está interesado en la eficacia de las herramientas DAST, consulte el proyecto OWASP <em>Benchmark</em>, que mide científicamente la eficacia de todos los tipos de herramientas de detección de vulnerabilidades, incluidas las DAST.
        .col-lg-6
          img(src='@/assets/curso/tema1/img07.png') 

      .row.align-items-center.mb-4
        .col-lg-3
          img(src='@/assets/curso/tema1/img32.svg') 
      .row.align-items-center.mb-5
        .col-lg-7.p-0
          img(src='@/assets/curso/tema1/img09.svg') 
        .col-lg-5.BG01.p-4        
          p <em>Network Mapped</em> (Nmap) es una herramienta de escaneo de red y detección de host que es muy útil durante varios pasos de las pruebas de penetración. Nmap no se limita a la mera recopilación de información y enumeración, sino que también es una poderosa utilidad que puede utilizarse como detector de vulnerabilidades o escáner de seguridad. Así que Nmap es una herramienta multipropósito, y puede ser ejecutada en muchos sistemas operativos diferentes, incluyendo <em>Windows</em>, Linux, BSD y Mac.
          
      .row.justify-content-center.mb-2.p-0
        .col-lg-10.p-0
          p  Nmap es una herramienta muy común y poderosa, y está disponible tanto para la interfaz de línea de comandos como para la interfaz gráfica de usuario. Puede utilizarse para:
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-6.p-0
          ol.lista-candado
            li
              .lista-candado
              | Detectar el anfitrión vivo en la red (descubrimiento de anfitrión)
            li
              .lista-candado
              | Detectar los puertos abiertos en el host (descubrimiento o enumeración de puertos)
            li
              .lista-candado
              | Detectar el <em>software</em> y la versión del puerto respectivo (descubrimiento de servicio)
            li
              .lista-candado
              | Detectar el sistema operativo, la dirección del <em>hardware</em> y la versión del <em>software</em>.
            li
              .lista-candado
              | Detectar la vulnerabilidad y los agujeros de seguridad (scripts Nmap)
        .col-lg-3.p-0
          img(src='@/assets/curso/tema1/img11.svg')
        .col-lg-1
      .row.align-items-center.mb-4
        .col-lg-3.p-0
          img(src='@/assets/curso/tema1/img31.svg')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-0 <em>Nessus</em> es una herramienta de escaneo de seguridad remota, que escanea un ordenador y emite una alerta si descubre alguna vulnerabilidad que los hackers maliciosos podrían utilizar para obtener acceso a cualquier ordenador que se haya conectado a una red, todo esto lo logra ejecutando más de 1200 chequeos en una computadora dada, probando para ver si alguno de estos ataques podría ser usado para irrumpir en la computadora o dañarla de alguna manera.
        .row.BG02.justify-content-center
          .col-11.py-3
            p Si usted es un administrador a cargo de cualquier computadora (o grupo de computadoras) conectada a Internet, <em>Nessus</em> es una gran herramienta que ayuda a mantener sus dominios libres de las fáciles vulnerabilidades que los hackers y virus comúnmente buscan explotar. 
      .col-lg-5.p-0
        img(src='@/assets/curso/tema1/img12.png')

    p.mb-4 Lo invitamos a ver el siguiente recurso, para aprender cómo funcionan <em>Nessus</em> y otras herramientas de seguridad de escaneo de puertos.

    .row.align-items-center.mb-4
      .col-lg-4
         img(src='@/assets/curso/tema1/img33.svg') 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-9.mb-4.mb-md-0
              p Es necesario entender que los diferentes servicios (como un servidor <em>web</em>, un servidor SMTP, un servidor FTP, etc.) se acceden en un servidor remoto.
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/img13.svg')
          .row.justify-content-center.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/img14.svg')
            .col-md-9.mb-4.mb-md-0
              p La mayor parte del tráfico de red de alto nivel, como el correo electrónico, las páginas web, etc., llega a un servidor a través de un protocolo de alto nivel que se transmite de forma fiable. por un flujo TCP.
          .row.justify-content-center.align-items-center
            .col-md-9.mb-4.mb-md-0
              p Para evitar que los diferentes flujos interfieran entre sí, una computadora divide su conexión física a la red en miles de caminos lógicos, llamados puertos.
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/img15.svg')
          .row.justify-content-center.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/img16.svg')
            .col-md-9.mb-4.mb-md-0
              p Si quiere hablar con un servidor web en una máquina determinada, se conectaría al puerto #80 (el puerto HTTP estándar).
          .row.justify-content-center.align-items-center
            .col-md-9.mb-4.mb-md-0
              p Pero si quiere conectarte a un servidor SMTP en esa misma máquina, se conectaría en cambio al puerto #25. 
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/img17.svg')
          .row.justify-content-center.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/img18.svg')
            .col-md-9.mb-4.mb-md-0
              p Cada computadora tiene miles de puertos, los cuales pueden o no tener servicios (por ejemplo: un servidor para un protocolo específico de alto nivel) escuchando en ellos. por un flujo TCP.
          .row.justify-content-center.align-items-center
            .col-md-9.mb-4.mb-md-0
              p <em>Nessus</em> trabaja probando cada puerto en una computadora, determinando qué servicio está corriendo, y luego probando este servicio.
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/img19.svg')
          .row.justify-content-center.align-items-center
            .col-md-3
              figure
                img(src='@/assets/curso/tema1/img20.svg')
            .col-md-9.mb-4.mb-md-0
              p Debe asegurarse que no hay vulnerabilidades en él que puedan ser usadas por un hacker para llevar a cabo un ataque malicioso. 

    p.mb-4 <em>Nessus</em> es llamado un "scanner remoto" porque no necesita ser instalado en una computadora para que pueda probar esa computadora, en su lugar, puede instalarlo en un solo ordenador y probar tantos ordenadores como desee.

    .BGIMG01.p-4
      .row.align-items-center.mb-0
        .col-lg-4.mb-0
          img(src='@/assets/curso/tema1/img34.svg')
      
      .row.align-items-center.mb-4
        .col-lg-6
          p Titania Nipper Studio tiene una tasa de éxito incomparable y una reputación muy marcada en el campo de la auditoría de configuración de cortafuegos, conmutadores y enrutadores, Nipper identifica rápidamente las vulnerabilidades no descubiertas en los <em>firewalls, switches</em> y <em>routers</em>, priorizando automáticamente los riesgos de acuerdo con su empresa. Nuestro modelado virtual reduce los falsos positivos a un índice insignificante e identifica las correcciones exactas para ayudarte a mantener tu empresa segura y en cumplimiento con las normas. 
          p Nipper Studio ofrece las siguientes soluciones como parte de su experiencia de producto:
        .col-lg-5
          img(src='@/assets/curso/tema1/img21.svg')

      AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row(titulo="Remediación precisa con arreglos técnicos exactos")
          .col-md-8.mb-4.mb-md-0
            p Nipper Studio ofrece una identificación exacta de las amenazas y riesgos en toda su infraestructura de red y proporciona soluciones de remediación completas, incluyendo, pero no limitado a, correcciones en la línea de comandos, el uso de Nipper ha documentado que los equipos de auditoría pueden ahorrar hasta una enorme cantidad de 3-4 horas por dispositivo. Incluso le permite personalizar las auditorías de las mejores prácticas del mercado o utilizar estándares de cumplimiento de la industria "listos para usar" (como los puntos de referencia STIG y CIS).        
          .col-md-3
            figure
              img(src='@/assets/curso/tema1/img22.svg')
        .row(titulo="Le da características críticas que otros escáneres no tienen")
          .col-md-8.mb-4.mb-md-0
            p Auditoría sin tráfico de red, configuración de autenticación, configuración de autorización, traducción de direcciones de red, protocolos de red, opciones específicas de dispositivos, sincronización de tiempo, etc. Nipper Studio hace innumerables cosas para el bienestar cibernético de su empresa que otros productos no le ofrecen. 
          .col-md-3
            figure
              img(src='@/assets/curso/tema1/img23.svg')
        .row(titulo="Configuración crucial y análisis de construcción")
          .col-md-8.mb-4.mb-md-0
            p Puede elevar aún más sus sistemas de seguridad utilizando herramientas de análisis de configuración y construcción automática, que sirven como una ventaja significativa para un SOC o NOC, utilizar estas herramientas para analizar la configuración de su sistema, en detalle y a velocidad - implica que puede encontrar y cerrar las vulnerabilidades explotables que las soluciones basadas en la monitorización o el análisis se perderían.
          .col-md-3
            figure
              img(src='@/assets/curso/tema1/img24.png')
      p.mb-4 En la siguiente infografía se puede revisar el proceso de análisis de vulnerabilidades a través de la herramienta Nipper.

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img25.svg')
      .BG03.p-3(x="10.9%" y="77.15%")
        p Explora una amplia gama de posibles problemas en múltiples redes, sistemas y otras partes de su ecosistema de TI, en el sistema preeminente y en la nube.
      .BG03.p-3(x="36.23%" y="77.15%")
        p Identifica las debilidades que deben corregirse, incluidas las configuraciones erróneas y las vulnerabilidades de incumplimiento de políticas que la aplicación de parches y el mantenimiento por sí solos no pueden abordar.
      .BG03.p-3(x="62.7%" y="77.15%")
        p La mayoría de los análisis de vulnerabilidades asignan un riesgo a cada amenaza, estos riesgos pueden tener una prioridad, una urgencia y un impacto asignados, lo que hace más fácil centrarse en aquellos que podrían crear más problemas para una organización.
      .BG03.p-3(x="89.15%" y="77.15%")
        p Esta es una parte importante de la gestión de la vulnerabilidad, porque su equipo de seguridad informática tendrá tiempo y recursos limitados, y deberá concentrarse en las áreas que podrían causar más daño a su empresa.
    br
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p.mb-0 La información proporcionada por un análisis de vulnerabilidad ayuda a los equipos de TI, así como a las herramientas automatizadas de terceros (es decir, la gestión de parches), a priorizar las vulnerabilidades y a trazar el camino para la acción, lo que a menudo significa la reparación. Sin embargo, a veces las organizaciones optan por aceptar la continuidad del riesgo. 
        p Por ejemplo, si la vulnerabilidad descubierta tiene un impacto potencial bajo y una probabilidad baja, pero, por otra parte, su reparación requeriría un tiempo de inactividad o la posible ruptura de otros sistemas, la tecnología de la información puede determinar que el riesgo de vulnerabilidad es menor que el riesgo que plantean las operaciones de tecnología de la información en curso, así es como los análisis de vulnerabilidad se inscriben en un marco general de gestión de los riesgos de la tecnología de la información.
      .col-lg-3.p-0
        figure
          img(src='@/assets/curso/tema1/img26.svg')

    separador

    .titulo-segundo.color-acento-contenido
      h2.mb-3 1.2	Falsos positivos

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img27.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Comúnmente, los falsos positivos en la exploración de vulnerabilidades ocurren cuando el explorador puede acceder solo a un subconjunto de la información requerida, lo que le impide determinar con precisión si existe una vulnerabilidad. Para ayudar a reducir el número de falsos positivos, se deben configurar sus escáneres con las credenciales adecuadas, estos necesitan acceder a toda la información requerida de los activos para que pueda determinar con precisión si existe una vulnerabilidad, tanto si se utiliza una herramienta de exploración de vulnerabilidades como si se utiliza otra forma de identificación de vulnerabilidades. Existen dos tipos de errores que hay que tener en cuenta:

    .row.mb-5 
      .col-lg-6
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p <b>Error de tipo I - falso positivo</b>, un resultado que indica que una vulnerabilidad está presente cuando no lo está, esto crea ruido y resulta en un trabajo de remediación innecesario.
      .col-lg-6(data-aos="fade-left") 
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          br
          p <b>Error de tipo II - falso negativo</b>, donde una vulnerabilidad está presente pero no está identificada.

    p.mb-4 A continuación, se explica cuándo ocurre un falso positivo.

    .row.BGIMG03.mb-5
      .col-lg-12.mb-4
        figure.p-5
          img(src='@/assets/curso/tema1/img29.svg')
      .col-lg-7.p-0
        p Si las primeras 20 variantes son falsos positivos, el probador de penetración asume que todas las demás son falsos positivos e ignora todas las demás; al hacerlo, hay posibilidades que las vulnerabilidades reales de las aplicaciones <em>web</em> no sean detectadas, por eso es crucial comprobar cada vulnerabilidad y tratar cada falso positivo por separado para asegurar los falsos positivos.
        p La mayoría de los proveedores de escáneres dedican un esfuerzo considerable a mejorar continuamente la calidad de sus algoritmos de comparación y a añadir nuevas capas de comprobaciones cruzadas que buscan mejorar el nivel de certeza de cualquier informe de vulnerabilidad, aunque este enfoque proporciona ganancias incrementales en la precisión de los informes, no aborda el problema subyacente que una vulnerabilidad de seguridad solo puede confirmarse absolutamente si se explota con éxito. Cualquier cantidad de retoques en las firmas y algoritmos de concordancia es, en efecto, un mero adorno, ya que el único mecanismo 100 fiable para confirmar una vulnerabilidad es la explotación.
      .col-lg-5.p-0
        img(src='@/assets/curso/tema1/img30.png')


    separador

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
