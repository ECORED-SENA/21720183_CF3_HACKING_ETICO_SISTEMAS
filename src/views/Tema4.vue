<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG11.px-4.pt-4.pt-md-4.px-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 4
      h1 Ataques a redes cableadas

  .container.BGIMG12.px-4.pt-4.pt-md-4.px-md-5 
    figure(data-aos="fade-right") 
      img(src='@/assets/curso/tema4/img01.png').mb-5
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p Al igual que los dispositivos e infraestructuras de los diferentes sistemas, la interconexión de redes es cada vez más versátil, el uso de canales digitales hace que piratas informáticos estén al acecho de realizar ataques. Existen diferentes técnicas que pueden servir para identificar las vulnerabilidades de las redes y poder tomar las medidas necesarias para protegerlas; apropiarse de estos conocimientos logrará que la infraestructura sea menos vulnerable y esté seguro de la información que por las redes circula.
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 4.1	Conceptos y generalidades

    p.mb-5 A continuación, se estudiarán algunos conceptos generales sobre el ataque a redes cableadas.

    .row.align-items-center
      .col-lg-3.col-md-6.col-6(data-aos="fade-right") 
        img(src='@/assets/curso/tema4/img02.svg')
      .col-lg-12(data-aos="fade-right")
        p Este es un proceso de monitorizar y capturar todos los paquetes que pasan a través de una red dada usando herramientas de <em>sniffing</em>.

  .container.BG13.px-4.pt-4.pt-md-4.px-md-5 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")       
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/sxg4sCjdz84" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5(data-aos="fade-right")
        .row.BG06.justify-content-center.align-items-center.p-4
          .col-7
            p Cuando se crearon por primera vez, los  <em>sniffers</em> eran (y pueden seguir siendo) herramientas muy útiles para que los ingenieros gestionen sus redes, dado que permiten a los administradores ver todo el tráfico de una red, pueden utilizarse para diagnosticar problemas y evaluar el rendimiento. 
          .col-4
            img(src='@/assets/curso/tema4/img03.svg')
        
  .container.BGIMG10.px-4.pt-4.pt-md-4.px-md-5 
    .row.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img04.svg')
      .col-lg-8.mb-4(data-aos="fade-right")
        p.mb-3 En primer lugar, es importante comprender cómo funciona generalmente el tráfico de Internet en una red, en la mayoría de los casos, la computadora solo investigará los paquetes que le han sido dirigidos específicamente. En la metáfora de los "coches que circulan por una carretera", podemos imaginarnos el ordenador como una casa en esa carretera, no inspeccionará todos los coches que pasan por su casa, pero si alguien aparca en su entrada, probablemente abriría la puerta para ver quién es, así es como su ordenador trata la mayoría de los paquetes de datos: ignora los que van por la red a otros destinos mientras inspecciona los paquetes que se le envían.
        .BG09.p-4
          p El <em>software</em> de <em>"sniffing"</em> ajusta la configuración de la red de un ordenador para que "huela" cada paquete - en lugar de solo los que se le envían - y los copia todos para su posterior investigación, en lugar de abrir la puerta sólo cuando alguien viene de visita, el <em>sniffer</em> se pega a la ventana, observando todos los coches mientras pasan.
          p El  <em>sniffer</em> de la ventana puede monitorear obsesivamente cada auto, o puede elegir investigar sólo los camiones, o los autos rojos, o los autos con al menos tres ocupantes, o tal vez solo las motocicletas, en otras palabras, una persona que usa un <em>sniffer</em> en modo no filtrado puede recoger todo el tráfico de la red, o puede configurar el <em>sniffer</em> para filtrar paquetes que contengan un tipo específico de datos.
      .col-lg-4.col-md-5.col-5.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img05.svg')
    .row.justify-content-center.mb-5
      .col-lg-10.mb-4(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          p.mb-0 <em>Sniffing</em>

  .container.BG13.px-4.pt-4.pt-md-4.px-md-5 
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/tema4/img06.svg')
    separador.mb-5

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 4.2	Modelo de redes OSI

    p.mb-5 OSI significa Interconexión de Sistemas Abiertos. Ha sido desarrollado por la ISO - 'Organización Internacional de Normalización', en el año 1984, es una arquitectura de 7 capas, cada una de las cuales tiene una funcionalidad específica que realizar y todas estas 7 capas trabajan en colaboración para transmitir los datos de una persona a otra en todo el mundo.

    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Capa física (Capa 1)")
            .col-11.p-4
              p La capa más baja del modelo de referencia de OSI es la capa física, es responsable de la conexión física real entre los dispositivos, la capa física contiene información en forma de bits, es responsable de transmitir los bits individuales de un nodo al siguiente, al recibir los datos, esta capa obtendrá la señal recibida y la convertirá en 0 y 1 y la enviará a la capa de enlace de datos, que volverá a unir el marco.
          .row(titulo="Capa enlace de datos (Capa 2)")
            .col-11.p-4
              p La capa de enlace de datos es donde operan los interruptores y proporciona un enlace fiable entre dos nodos directamente conectados, la capa de enlace de datos también es responsable de detectar y posiblemente arreglar cualquier error de paquetes que se pueda formar en la capa física.
              p La capa de enlace de datos se divide en dos capas separadas, las capas de Control de Acceso a los Medios (MAC) y Control de Enlace Lógico (LLC), la capa MAC es responsable de controlar cómo los dispositivos conectados a la red obtienen acceso, la capa LLC controla la comprobación de errores, las posibles correcciones y la sincronización de paquetes.
          .row(titulo="Capa red (Capa 3)")
            .col-11.p-4
              p La capa de red sirve para la transmisión de datos de un <em>host</em> a otro ubicado en diferentes redes. También se encarga del enrutamiento de los paquetes, es decir, de la selección del camino más corto para transmitir el paquete, a partir del número de rutas disponibles. La capa de red coloca en el encabezamiento la dirección IP del emisor y del receptor.
          .row(titulo="Capa transporte (Capa 4)")
            .col-11.p-4
              p La capa de transporte proporciona servicios a la capa de aplicación y toma servicios de la capa de red. Los datos de la capa de transporte se denominan segmentos. Es responsable de la entrega de extremo a extremo del mensaje completo. La capa de transporte también proporciona el reconocimiento de la transmisión de datos exitosa y retransmite los datos si se encuentra un error.
          .row(titulo="Capa Sesión (Capa 5)")
            .col-11.p-4
              p La capa de sesión se encarga de crear y mantener sesiones entre el sistema operativo de la capa de presentación y otras máquinas de terceros, Por ejemplo, cuando un usuario navega por Internet, está interactuando con la capa de aplicación, la capa de aplicación está interactuando con la capa de presentación y la capa de sesión permite que el sistema operativo interactúe con el servidor <em>web</em>.
          .row(titulo="Capa Presentación (Capa 6)")
            .col-11.p-4
              p La capa de presentación es donde se encuentra el sistema operativo, este sistema operativo podría ser <em>Windows</em>, OS X, un sistema operativo basado en Unix o uno de los muchos otros disponibles donde el usuario humano interactúa con la capa de aplicación descrita anteriormente, la capa de aplicación interactúa con la capa de presentación, esto puede hacerse directamente, o a través de un entorno de ejecución como el <em>Java Runtime Environment</em> (JRE). Su función principal es homogeneizar los formatos de representación de los datos entre equipos de la red Para homogeneizar la representación de datos (textos, sonidos, imágenes, valores numéricos, instrucciones), la Capa de presentación interpreta las estructuras de las informaciones intercambiadas por los procesos de la aplicación y las transforma convenientemente.
          .row(titulo="Capa de aplicación (Capa 7)")
            .col-11.p-4
              p En la parte superior de la pila de capas del Modelo de Referencia OSI, encuentras la capa de Aplicación que es implementada por las aplicaciones de la red, estas aplicaciones producen los datos, que deben ser transferidos a través de la red, esta capa también sirve como ventana para que los servicios de aplicación accedan a la red y para mostrar la información recibida al usuario, la capa de aplicaciones también se llama capa de escritorio. Ejemplo: Aplicación - Navegadores,  <em>Skype Messenger</em>, etc.
      .col-lg-4.col-md-6.col-6.p-0(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img07.png')

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .row.BG10.justify-content-center.align-items-center.p-4
          .col-8
            p El modelo de OSI actúa como modelo de referencia y no se aplica en Internet debido a su tardía invención. El modelo que se está utilizando actualmente es el modelo TCP/IP.
          .col-3
            img(src='@/assets/curso/tema4/img08.svg')
    separador.mb-5

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 4.3	Herramientas de ataque

  .container.BGIMG06.px-4.pt-4.pt-md-4.px-md-5 
    .row.align-items-center.mb-4
      .col-lg-6.mb-3(data-aos="fade-right")
        .row  
          .col-12
            p Hay tantas herramientas disponibles para realizar el <em>sniffing</em> en una red, y todas tienen sus propias características para ayudar a un <em>hacker</em> a analizar el tráfico y diseccionar la información, las herramientas de <em>sniffing</em> son aplicaciones extremadamente comunes. A continuación se presentan algunas de las más interesantes.
          .col-12
            .cajon.color-acento-contenido.p-3 
              .row.align-items-center
                .col-11
                  p <em><b>Bettercap:</b></em>  hay mucho material en línea, especialmente del sitio <em>web</em> oficial de Bettercap, que documenta cómo se utiliza la herramienta y algunas de las mejoras que se han hecho a lo largo de los años. Se puede clonar el repositorio de <em>bettercap</em> en github.com para utilizar la versión de desarrollo.
      .col-lg-6(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img09.svg')
    p <em><b>Wireshark:</b></em> es un analizador de protocolo de red, o una aplicación que captura paquetes de una conexión de red, como por ejemplo de su ordenador a su oficina en casa o a Internet, paquete es el nombre que se da a una unidad discreta de datos en una red Ethernet típica.
    p.mb-5 <em>Wireshark</em> es el rastreador de paquetes más utilizado en el mundo. Como cualquier otro rastreador de paquetes, <em>Wireshark</em> hace tres cosas:

    .row.justify-content-center.mb-5
      .col-lg-4.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img10.svg')
      .col-lg-4.mb-5
        img(src='@/assets/curso/tema4/img11.svg')
      .col-lg-4.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img12.svg')
      .col-lg-4.mb-5(data-aos="fade-right")
        h4 Captura de paquetes: 
        p <em>Wireshark</em> escucha una conexión de red en tiempo real y luego capta flujos enteros de tráfico, muy posiblemente decenas de miles de paquetes a la vez.
      .col-lg-4.mb-5
        h4 Filtrando: 
        p <em>Wireshark</em> es capaz de cortar y trocear todos estos datos aleatorios en vivo usando filtros. Aplicando un filtro, puedes obtener solo la información que necesitas ver.
      .col-lg-4.mb-5(data-aos="fade-left")
        h4 Visualización: 
        p <em>Wireshark</em>, como cualquier buen olfateador de paquetes, te permite sumergirte justo en el centro de un paquete de red. También te permite visualizar conversaciones enteras y flujos de red.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .cajon.color-primario
          .row.justify-content-center.align-items-center.p-2.pt-4.pb-3
            .col-11
              p El <em>sniffing</em> de paquetes se puede comparar con la espeleología, entrar en una cueva y hacer senderismo. La gente que usa <em>Wireshark</em> en una red es como los que usan linternas para ver qué cosas geniales pueden encontrar. Después de todo, al usar <em>Wireshark</em> en una conexión de red (o una linterna en una cueva), está usando efectivamente una herramienta para cazar alrededor de túneles y tubos para ver lo que puede ver.
  
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5   
    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 4.4	Contramedidas

    p.mb-5 A veces usted se centra más en el lado inalámbrico de la red cuando se trata de la seguridad porque el WiFi no tiene barreras físicas. Después de todo, un <em>War driver</em> detecta su SSID y lanza un ataque mientras está sentado en el estacionamiento, pero en un mundo de amenazas internas, ataques dirigidos desde el exterior, así como <em>hackers</em> que utilizan la ingeniería social para obtener acceso físico a las redes corporativas, la seguridad de la parte cableada de la red también debería ser lo más importante, por lo tanto, presentamos algunas precauciones de seguridad básicas que puede tomar para la parte conectada de la red, tanto si es una pequeña empresa como una gran empresa.

  .container.BGIMG07.px-4.pt-4.pt-md-4.px-md-5 
    SlyderA(tipo="b")
      .row.justify-content-center.align-items-center.p-5(data-aos="fade-right")
        .col-lg-7
          h4 Ejecutar auditorías y mapear la red
          p Tenga siempre una comprensión clara de toda la infraestructura de la red, por ejemplo, el proveedor/modelo, la ubicación y la configuración básica de los cortafuegos, los enrutadores, los conmutadores, el cableado y los puertos Ethernet y los puntos de acceso inalámbricos, además, sepa exactamente qué servidores, computadoras, impresoras y cualquier otro dispositivo están conectados, dónde están conectados y su ruta de conectividad a través de la red.
          p Durante la auditoría y el mapeo, es posible que encuentre vulnerabilidades de seguridad específicas o formas de aumentar la seguridad, el rendimiento y la fiabilidad Tal vez se encuentre con un <em>firewall</em> mal configurado o tal vez con amenazas físicas a la seguridad, si está trabajando con una red pequeña con solo unos pocos componentes de red y una docena o menos de estaciones de trabajo, podría realizar la auditoría manualmente y crear un mapa visual en una hoja de papel Para redes más grandes, los programas de auditoría y mapeo pueden ser útiles, pueden escanear la red y comenzar a producir un mapa o diagrama de la red.
        .col-lg-4
          img(src='@/assets/curso/tema4/img13.svg')
      .row.justify-content-center.align-items-center.p-5
        .col-lg-7
          h4 Mantener actualizada la red
          ol.lista-candado
            li.mb-3
              .lista-candado
              | Una vez que tenga una auditoría básica de la red y el mapeo completo, considere la posibilidad de profundizar en el tema, compruebe si hay actualizaciones de <em>firmware o software</em> en todos los componentes de la infraestructura de la red.
            li.mb-3
              .lista-candado
              | Inicie sesión en los componentes para asegurarse de que se han cambiado las contraseñas predeterminadas, revise los ajustes para cualquier configuración insegura y busque cualquier otra característica o funcionalidad de seguridad que no esté utilizando actualmente.
            li
              .lista-candado
              | A continuación, eche un vistazo a todos los ordenadores y dispositivos conectados a la red Asegúrese de que se han cuidado los aspectos básicos, como las actualizaciones del sistema operativo y de los controladores, que el cortafuegos personal está activo, que el antivirus se ejecuta y actualiza y que se establecen las contraseñas.
        .col-lg-4
          img(src='@/assets/curso/tema4/img14.png')
      .row.justify-content-center.align-items-center.p-5
        .col-lg-7
          h4 Asegurar físicamente la red
          p Aunque a menudo se pasa por alto o se minimiza, la seguridad física de la red puede ser tan crucial como, por ejemplo, el<em>firewall</em> de cara a Internet, así como necesita protegerse contra los delincuentes, los <em>bots</em> y los virus, también necesita protegerse contra las amenazas locales Sin una fuerte seguridad física de su edificio y su red, un pirata informático cercano o incluso un empleado podría aprovecharse de ello.
          p Asegúrese de tener un buen plan de seguridad para el edificio, para intentar evitar que entren personas ajenas, luego asegúrese que todos los armarios de cableado y/u otros lugares donde se colocan los componentes de la infraestructura de la red estén físicamente protegidos tanto del público como de los empleados, utilice cerraduras de puertas y gabinetes y verifique que el cableado Ethernet esté fuera de la vista y no sea fácilmente accesible lo mismo con los puntos de acceso inalámbrico. Desconecte los puertos Ethernet no utilizados, físicamente o mediante la configuración de un conmutador/enrutador, especialmente los que se encuentran en las zonas públicas del edificio.
        .col-lg-4
          img(src='@/assets/curso/tema4/img15.png')
      .row.justify-content-center.align-items-center.p-5
        .col-lg-7
          h4 Considere el filtrado de direcciones MAC
          p Un importante problema de seguridad del lado cableado de la red es la falta de un método de autenticación y/o cifrado rápido y fácil la gente puede simplemente conectarse y utilizar la red En el lado inalámbrico tienes al menos WPA 2 Personal (PSK) que es fácil de desplegar.
          p Aunque el filtrado de direcciones MAC puede ser evitado por un pirata informático determinado, puede servir como la primera capa de seguridad, no detendrá completamente a un pirata informático, pero puede ayudarle a evitar que un empleado, por ejemplo, cause un agujero de seguridad potencialmente grave, como permitir que un huésped se conecte a la red privada También puede darle más control sobre qué dispositivos están en la red, pero no permita que le dé una falsa sensación de seguridad, y esté preparado para mantener actualizada la lista de direcciones MAC aprobadas.
        .col-lg-4
          img(src='@/assets/curso/tema4/img16.png')
      .row.justify-content-center.align-items-center.p-5
        .col-lg-7
          h4 Usar VPNs para cifrar ciertos PCs o servidores
          ol.lista-candado
            li.mb-3
              .lista-candado
              | Si realmente busca asegurar el tráfico de la red, considere el uso de la encriptación, recuerde que incluso con las VLAN y la autenticación 802 1 X, alguien puede escuchar a escondidas la red (para capturar el tráfico sin cifrar que podría incluir contraseñas, correos electrónicos y documentos.
            li.mb-3
              .lista-candado
              | Aunque pueda encriptar todo el tráfico, primero analice su red, podría tener más sentido solo encriptar algunas comunicaciones que considere más sensibles que no estén ya encriptadas, como por ejemplo a través de SSL/HTTPS Puedes pasar el tráfico sensible a través de una VPN estándar en el cliente, que podría ser usada solo durante la comunicación sensible o forzada a ser usada todo el tiempo.
        .col-lg-4
          img(src='@/assets/curso/tema4/img17.svg')
      .row.justify-content-center.align-items-center.p-5
        .col-lg-7
          h4 Cifrar toda la red
          p También puede cifrar una red entera, una opción es IPsec Un servidor <em>Windows</em> puede servir como servidor IPsec y la capacidad del cliente es soportada nativamente por <em>Windows</em> también, sin embargo, el proceso de encriptación puede ser una carga bastante pesada para la red las tasas de rendimiento efectivas pueden caer dramáticamente.
          p También existen soluciones de encriptación de red patentadas de los proveedores de redes, muchos de los cuales utilizan un enfoque de Capa 2 en lugar de la Capa 3 como el IPsec para ayudar a reducir la latencia y los gastos generales.
        .col-lg-4
          img(src='@/assets/curso/tema4/img18.png')
    separador

          
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
