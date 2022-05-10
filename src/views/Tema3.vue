<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.BG11.px-4.pt-4.pt-md-4.px-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 3
      h1 Ataques a dispositivos
  .container.BGIMG06.px-4.pt-4.pt-md-4.px-md-5 
    figure.p-3.mb-2(data-aos="fade-right")
      img(src='@/assets/curso/tema3/img02.png') 

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        p En los últimos tiempos, donde el mundo digital se ha acrecentado de manera exponencial, los ataques a dispositivos son cada vez más frecuentes, la tendencia es que tanto la adquisición como su uso de duplique en poco tiempo, es por ello que los ciberdelincuentes aprovechan esto para poder realizar ataques de diferente índole, es por ello que es perentorio conocer dentro del <em>hacking</em> ético las diferentes formas de ataques que se pueden realizar para poder salvaguardar su información.
    separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 3.1	Conceptos y tipo de ataques

    p.mb-3 Existen diferentes tipos de ataques dentro del Hacking ético, los más utilizados son los denominados ataques activos en línea, donde el atacante realiza el descifrado de contraseñas comunicándose directamente con la máquina víctima.

    .row.align-items-center.mb-4
      .col-lg-3.col-md-6.col-6.p-0(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img53.svg')
    p.mb-3 Revise a continuación en qué consiste este tipo de ataque, el cual es muy común.

    .BGIMG07.mb-5 
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.justify-content-center.align-items-center.p-5
          .col-lg-7
            h4 Concepto
            p Es una técnica de fuerza bruta en la que los atacantes corren a través de palabras y frases comunes, como las del diccionario, para adivinar las contraseñas, el hecho de que la gente utilice a menudo contraseñas simples y fáciles de recordar en varias cuentas significa que los ataques con diccionario pueden tener éxito y requieren menos recursos para ejecutarse.
          .col-lg-3
            img(src='@/assets/curso/tema3/img04.svg')
        .row.justify-content-center.align-items-center.p-5
          .col-lg-7
            h4 Cómo se utiliza
            p.mb-0 En este tipo de ataque se utilizan una serie de palabras para descubrir los nombres de usuario y/o contraseñas de acceso a un portal <em>web</em> o formulario.
            p.mb-0 La mayoría de personas anteriormente por facilidad de recordar la contraseña utilizaba palabras o nombres de su lengua.
            p Cabe resaltar que en sitios que utilicen contraseñas robustas los ataques de diccionario pierden efectividad.
          .col-lg-3
            img(src='@/assets/curso/tema3/img05.svg')
        .row.justify-content-center.align-items-center.p-5
          .col-lg-7
            h4 Reutilización de contraseñas
            p.mb-0 El ataque puede ser fácil de ejecutar y es probable que tenga éxito dado el tiempo y los intentos suficientes, cuando a menudo se reutilizan las contraseñas, o se varían ligeramente las contraseñas preferidas y no las cambian a raíz.
            p El informe de investigación de violación de datos de Verizon de 2019 (DBIR) sugiere que las credenciales robadas y reutilizadas están implicadas en el 80% de las violaciones relacionadas con la piratería informática.
          .col-lg-3
            img(src='@/assets/curso/tema3/img06.svg')
        .row.justify-content-center.align-items-center.p-5
          .col-lg-7
            h4 Ataques tradicionales
            p.mb-0 Mientras que los ataques tradicionales de fuerza bruta intentan sistemáticamente todas las combinaciones posibles para romper los controles de autenticación, los ataques de diccionario utilizan un número grande pero limitado de palabras y frases preseleccionadas. 
            p El hecho de no pasar por todas las combinaciones posibles reduce la probabilidad de que una contraseña difícil se adivine correctamente, pero un ataque de diccionario requiere menos tiempo y recursos para ejecutarse.
          .col-lg-3
            img(src='@/assets/curso/tema3/img07.svg')
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5
    .row.align-items-center.mb-5
      .col-lg-3.col-md-6.col-6(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img54.svg')
      
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5(data-aos="fade-right")
        .row.BG06.justify-content-center.align-items-center.p-4
          .col-7
            p Un ataque de fuerza bruta utiliza el método de prueba y error para adivinar la información de acceso, las claves de cifrado o encontrar una página <em>web</em> oculta, los <em>hackers</em> trabajan con todas las combinaciones posibles esperando adivinar correctamente.
            p Estos ataques se realizan mediante "fuerza bruta", lo que significa que utilizan intentos excesivamente fuertes para intentar "forzar" su entrada en su(s) cuenta(s) privada(s).
          .col-4
            img(src='@/assets/curso/tema3/img10.svg')
      .col-lg-10.mb-3(data-aos="fade-right")
        p Este es un método de ataque antiguo, pero aún es efectivo y popular entre los <em>hackers</em>, porque, dependiendo de la longitud y complejidad de la contraseña, su crackeo puede llevar desde unos pocos segundos hasta muchos años. Es así como los ciberdelincuentes se benefician de los ataques de fuerza bruta:
      .col-lg-10.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img11.svg')

    .row.align-items-center.mb-4
      .col-lg-4.col-md-8.col-8(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img55.svg')
      
    p.mb-5 Cada ataque de fuerza bruta puede utilizar diferentes métodos para descubrir sus datos sensibles. Puede estar expuesto a cualquiera de los siguientes métodos populares de fuerza bruta:

    .row.align-items-center.mb-4
      .col-lg-1
      .col-lg-7(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p.mb-5.text-small(numero="1" titulo="Ataques simples de fuerza bruta") Los ciberdelincuentes intentan adivinar lógicamente sus credenciales, sin ayuda de herramientas de <em>software</em> u otros medios, estos pueden revelar contraseñas y PINs extremadamente simples. Por ejemplo, una contraseña que se establece como "SENA12345".
          
          p.text-small(numero="2" titulo="Ataques de diccionario") Es un ataque estándar, un ciberdelincuente elige un objetivo y ejecuta posibles contraseñas contra ese nombre de usuario (como lo vimos en anteriormente), estos son conocidos como ataques de diccionario, los ataques de diccionario son la herramienta más básica en los ataques de fuerza bruta, aunque no son necesariamente ataques de fuerza bruta en sí mismos, a menudo se utilizan como un componente importante para descifrar contraseñas; algunos ciberdelincuentes recorren los diccionarios completos y aumentan las palabras con caracteres y números especiales o utilizan diccionarios especiales de palabras, pero este tipo de ataque secuencial es engorroso.
          
          p.mb-5.text-small(numero="3" titulo="Ataques de fuerza bruta híbridos") Estos ciberdelincuentes mezclan medios externos con sus conjeturas lógicas para intentar un allanamiento, un ataque híbrido suele mezclar los ataques de diccionario y de fuerza bruta, estos ataques se utilizan para descifrar contraseñas compuestas que mezclan palabras comunes con caracteres aleatorios. Un ejemplo de ataque de fuerza bruta de esta naturaleza incluiría contraseñas como Sena1993 o SeNa1234.
          
          p.mb-5.text-small(numero="4" titulo="Ataques de fuerza bruta inversa") Tal y como su nombre indica, un ataque de fuerza bruta inversa invierte la estrategia de ataque empezando con una contraseña conocida, luego los ciberdelincuentes buscan millones de nombres de usuario hasta que encuentran una coincidencia, muchos de estos criminales empiezan con contraseñas filtradas que están disponibles en línea a partir de brechas de datos existentes. 
          
          p.mb-5.text-small(numero="5" titulo="Relleno de credenciales") Si un ciberdelincuente tiene una combinación de nombre de usuario y contraseña que funciona para un sitio <em>web</em>, también lo intentará en muchos otros, como se sabe que los usuarios reutilizan la información de inicio de sesión en muchos sitios <em>web</em>, son el objetivo exclusivo de un ataque como este.
      .col-lg-3.col-md-6.col-6(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img12.svg')        

    .row.align-items-center.mb-4
      .col-lg-3.col-md-6.col-6.p-0(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img56.svg')
          
    p.mb-5 Observe el siguiente video, el cual lo introduce a este tipo de ataques.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="fade-right")
        figure
          .video 
            iframe(width="560" height="315" src="https://www.youtube.com/embed/RIkWiIpr5Lo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .col-lg-12(data-aos="fade-right")
        p Existen malas prácticas de administración que facilitan mucho el trabajo a la hora de intentar acceder a un sistema Las contraseñas por defecto, son las contraseñas suministradas por los fabricantes cuando instalan un dispositivo o un servicio y que muchas veces los administradores de TI olvidan cambiar. Existen herramientas en línea que pueden utilizarse para buscar las contraseñas por defecto las cuales le pueden servir para realizar esta práctica:
    
    .row.justify-content-center
      .col-lg-4.p-3.mb-4(data-aos="fade-right")
        <a href="https://cirt.net/passwords" target="_blank"><img src='@/assets/curso/tema3/img13.svg'/></a>
      .col-lg-4.p-3.mb-4
        <a href="http://default-password.info" target="_blank"><img src='@/assets/curso/tema3/img14.svg'/></a>
      .col-lg-4.p-3.mb-4(data-aos="fade-left")
        <a href="http://www.defaultpassword.us" target="_blank"><img src='@/assets/curso/tema3/img15.svg'/></a>
      .col-lg-4.p-3.mb-4(data-aos="fade-right")
        <a href="http://www.passwordsdatabase.com" target="_blank"><img src='@/assets/curso/tema3/img16.svg'/></a>
      .col-lg-4.p-3.mb-4
        <a href="https://open-sez.me" target="_blank"><img src='@/assets/curso/tema3/img17.svg'/></a>
      .col-lg-4.p-3.mb-4(data-aos="fade-left")
        <a href="http://www.routerpasswords.com" target="_blank"><img src='@/assets/curso/tema3/img18.svg'/></a>

  .container.BGIMG09.px-4.pt-4.pt-md-4.px-md-5
    .row.align-items-center.mb-5
      .col-lg-3.col-md-6.col-6.p-0(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img57.svg')
    .row.align-items-center.mb-4
      .col-lg-7.p-0.mb-5(data-aos="fade-right")
        p Suponga que no tiene ningún bloqueo en las cuentas. ¿Hay alguna manera de lidiar con los ataques de fuerza bruta sin un bloqueo? Una política de contraseñas débil puede dar lugar a que entre en el sitio en tan solo 18 días si ya conoce el nombre de usuario de la cuenta.
        p Primero, considere endurecer la política de contraseñas, supongamos que tiene una política de contraseñas que requiere 12 caracteres en mayúsculas y minúsculas que deben incluir tanto letras como números, los <em>hackers</em> tienen una probabilidad de 50:50 de entrar dentro de 6211 intentos, eso se traduce en unos 52 millones de millones de intentos.
      .col-lg-5.p-0.mb-5(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img20.png')
      .col-lg-12.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img21.svg')

    .row.align-items-center.mb-5
      .col-lg-3.col-md-6.col-6.p-0(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img58.svg')
    
    .row.justify-content-center.align-items-center
      .col-lg-7(data-aos="fade-right")
        .cajon-b.color-primario.p-0
          p Una contraseña por defecto es una contraseña estándar preconfigurada para un dispositivo, estas contraseñas son la configuración predeterminada de muchos dispositivos y, si no se modifican, representan un grave riesgo para la seguridad.
          p Los ejemplos típicos de contraseñas predeterminadas incluyen <em>admin password e guest</em>, además, un proveedor suele utilizar una sola contraseña predeterminada, que puede encontrarse fácilmente en línea mediante la búsqueda o en sitios <em>web</em> que ofrecen listas compiladas, las contraseñas predeterminadas se utilizan comúnmente para los enrutadores, puntos de acceso, conmutadores y cortafuegos.
      .col-lg-5.p-0(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img22.svg')

  .container.BG13.px-4.pt-4.pt-md-4.px-md-5
    .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="fade-right")  
      .col-lg-5.p-0.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img23.svg')
      .col-lg-7.mb-5(data-aos="fade-left")
        p También son comunes en los sistemas empotrados, los sistemas de control industrial (y las interfaces de terminales remotas como Telnet y SSH). Si no se modifican, las contraseñas por defecto proporcionan un fácil vector de ataque para el equipo de la red doméstica si el propietario también se conecta a una red corporativa, ese riesgo se extiende también a la empresa, un atacante que se conecta con éxito a un dispositivo es probable que tenga acceso a nivel administrativo.
        p Una contraseña por defecto es una contraseña (normalmente "123", <em>"admin", "root", "password", "blank", "secret" o "access"</em>) asignada a un programa o dispositivo de <em>hardware</em> por el desarrollador o fabricante, aunque las contraseñas predeterminadas pueden ayudar a protegerse de algunos usuarios, cualquiera que sepa lo que está haciendo puede adivinar una contraseña predeterminada.
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .row.BG07.justify-content-center.align-items-center.p-4
          .col-9
            p Por lo tanto, siempre se recomienda cambiar la contraseña predeterminada por una que solo tu conozcas, dejar la contraseña predeterminada activada es casi tan malo como no tener ninguna contraseña.
          .col-3
            img(src='@/assets/curso/tema3/img24.svg')

  .container.BGIMG10.px-4.pt-4.pt-md-4.px-md-5    
    .row.align-items-center.mb-5
      .col-lg-3.col-md-6.col-6.p-0(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img59.svg')
    p.mb-4 Un ataque de inyección de <em>hash</em> permite a un atacante inyectar un <em>hash</em> comprometido en una sesión local y usar el <em>hash</em> para validar los recursos de la red, donde el atacante encuentra y extrae un <em>hash</em> de la cuenta de administración del dominio y usa el <em>hash</em> extraído para buscar en el controlador de dominio.
    figure.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/tema3/img25.svg') 
    p Con esta técnica, un atacante captura el <em>hash</em> de una contraseña (en contraposición a los caracteres de la contraseña) y luego simplemente la pasa para autenticarse y tener un acceso potencialmente lateral a otros sistemas en red, el actor de la amenaza no necesita desencriptar el <em>hash</em> para obtener una contraseña en texto plano, los ataques PtH explotan el protocolo de autenticación, ya que el <em>hash</em> de las contraseñas permanece estático en cada sesión hasta que la contraseña se rota (cambia de posición). Los atacantes comúnmente obtienen el <em>hash</em> raspando la memoria activa de un sistema y otras técnicas.

  .container.BG13.px-4.pt-4.pt-md-4.px-md-5    
    separador.mb-5

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2.mb-3 3.2	Herramientas y técnicas de ataques

    p.mb-5 El mundo del <em>hacking</em> ético tiene múltiples posibilidades en el uso de herramientas, las cuales ayudan al atacante a encontrar contraseñas y explotar vulnerabilidades.

    .row.align-items-center.mb-3
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img27.svg')

    .row.align-items-center.mb-4
      .col-lg-5.BG08.p-4.mb-5(data-aos="fade-right")
        p.mb-0 Están diseñadas para expertos forenses y organizaciones gubernamentales, servicios y corporaciones para la recuperación de datos. Está diseñada para descifrar las contraseñas más complejas y las claves de cifrado sólidas en plazos más cortos.
        p Es una herramienta para la recuperación de contraseñas a docenas de formatos de archivo, documentos, claves y certificados en grupos de ordenadoras combinadas en una sola red de ordenadoras distribuida <em>Elcomsoft Distributed Password Recovery</em>, ofrece escalabilidad y es compatible con la aceleración por GPU para la recuperación más rápida.
      .col-lg-7.px-0.py-4(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img28.png')

  .container.BGIMG11.px-4.pt-4.pt-md-4.px-md-5  
    .row.align-items-center.mb-3
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img30.svg')
    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-0 Se sabe que las computadoras de <em>Windows</em> pueden ser configuradas para estar en un grupo de trabajo o unidas a un dominio. En un grupo de trabajo, cada computadora tiene su propio SAM que contiene información sobre todas sus cuentas locales de usuario y de grupo, las contraseñas asociadas con cada una de estas cuentas se guardan en el SAM; el <em>hash</em> de las contraseñas ofrece cierta medida de seguridad y minimiza los riesgos de un ataque, la autoridad de seguridad local (LSA) valida el intento de inicio de sesión de un usuario verificando sus credenciales con los datos almacenados en el SAM El intento de inicio de sesión de un usuario sólo tiene éxito cuando la contraseña introducida coincide con la contraseña almacenada en el SAM local.
        p Revise en el siguiente recurso para conocer cómo se lleva a cabo la autenticación Microsoft SAM.
      .col-lg-5.p-0(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img31.svg')
    LineaTiempoC.color-primario.mb-4(text-small)(data-aos="fade-right")
      .row.justify-content-center.align-items-center(titulo="1")
        .col-md-7.mb-4.mb-md-0
          p <em>Windows</em> almacena y gestiona las cuentas locales de usuario y de grupo en un archivo de base de datos llamado <em>Security Account Manager</em> (SAM).      
        .col-md-3
          figure.p-4
            img(src='@/assets/curso/tema3/img32.svg')
      .row.justify-content-center.align-items-center(titulo="2")
        .col-md-7.mb-4.mb-md-0
          p Auténtica los inicios de sesión de los usuarios locales en un controlador de dominio.
        .col-md-3
          figure.p-4
            img(src='@/assets/curso/tema3/img33.svg')
      .row.justify-content-center.align-items-center(titulo="3")
        .col-md-7.mb-4.mb-md-0
          p Almacena la cuenta del administrador desde el momento en que fue un servidor.
        .col-md-3
          figure.p-4
            img(src='@/assets/curso/tema3/img34.svg')
      .row.justify-content-center.align-items-center(titulo="4")
        .col-md-7.mb-4.mb-md-0
          p En caso de necesitar cuenta de recuperación del modo de restauración de servicios de directorio (SDRM), se usa la cuenta del administrador.
        .col-md-3
          figure.p-4
            img(src='@/assets/curso/tema3/img35.svg')
      .row.justify-content-center.align-items-center(titulo="5")
        .col-md-7.mb-4.mb-md-0
          p Residir la base de datos SAM en el registro de <em>hackers</em>.
        .col-md-3
          figure.p-4
            img(src='@/assets/curso/tema3/img36.svg')

    .row.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img37.svg')
    .row.align-items-center
      .col-lg-5.p-2.mb-5(data-aos="fade-right")
        p La base de datos SAM es la base de datos de información de cuentas de usuario y de grupo almacenada en un controlador de dominio en una red basada en <em>Microsoft Windows Server</em>.
       
      .col-lg-7.mb-5(data-aos="fade-left")
        .cajon.color-primario.px-3.pb-2.pt-4
          p La base de datos del Administrador de cuentas de seguridad (SAM) también se conoce como la base de datos del directorio de dominio, o a veces simplemente la base de datos del directorio.
          
    
  .container.BG13.px-4.pt-4.pt-md-4.px-md-5   
    .row.justify-content-center.mb-5
      .col-lg-5.p-2.mb-5(data-aos="fade-right")
        p La base de datos SAM ocupa una parte del registro del sistema operativo <em>hackers</em>. Todas las cuentas de usuario, las cuentas de grupo y las definiciones de recursos como acciones e impresoras tienen sus principios de seguridad definidos en la base de datos SAM. Debido a que toda la base de datos SAM debe residir en la memoria RAM de un controlador de dominio, no puede exceder de unos 40 MB en <em>Windows NT</em>, lo que equivale a unas 40.000 cuentas de usuario, o 26.000 usuarios y estaciones de trabajo de <em>Windows NT</em> combinadas. 
      .col-lg-7(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img38.svg')
      
    p.mb-0 La gráfica anterior muestra la enumeración del tamaño de los objetos comunes en una base de datos SAM.
    p.mb-5 En una base de datos SAM:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        SlyderA
          .row.justify-content-center.align-items-center
            .col-12
              img(src='@/assets/curso/tema2/img05.svg')
            .col-9.p-4.py-5
              ol.lista-candado
                li.mb-3
                  .lista-candado
                  | La copia maestra de la base de datos SAM se almacena en el controlador de dominio primario (PDC)
                li.mb-3
                  .lista-candado
                  | La sincronización periódica de directorios asegura que los controladores de dominio de respaldo (CDP) tengan una réplica exacta de esta base de datos maestra.
                li
                  .lista-candado
                  | La réplica de los CDP también puede utilizarse para los inicios de sesión y para la autenticación de paso de los usuarios que intentan acceder a los recursos de la red. 
            .col-2.p-0
              img(src='@/assets/curso/tema3/img39.svg')
            .col-12
              img(src='@/assets/curso/tema2/img06.svg')
          .row.justify-content-center.align-items-center
            .col-12
              img(src='@/assets/curso/tema2/img05.svg')
            .col-9.py-5
              ol.lista-candado
                li.mb-4
                  .lista-candado
                  | SAM utiliza medidas criptográficas para evitar que usuarios no autenticados accedan al sistema. 
                li.mb-4
                  .lista-candado
                  | Las contraseñas de los usuarios se almacenan en un formato de <em>hash</em> en una colmena de registro, ya sea como <em>hash</em> LM o como <em>hash</em> NTLM. Este archivo se encuentra en %SystemRoot%/system32/config/SAM y está montado en HKLM/SAM.
            .col-2.p-0
              img(src='@/assets/curso/tema3/img40.svg')
            .col-12
              img(src='@/assets/curso/tema2/img06.svg')

  .container.BGIMG10.px-4.pt-4.pt-md-4.px-md-5  
    .row.align-items-center.mb-4
      .col-lg-4.col-md-8.col-8(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img41.svg')   
    .row.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-5.mb-5(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img42.svg') 
      .col-lg-7.mb-5(data-aos="fade-left")
        p NTLM consiste en una serie de protocolos de autenticación del desarrollador de <em>software</em> Microsoft. Al principio, solo se utilizaba como protocolo propietario, aunque ahora la autenticación NTLM (en inglés, NTLM authentication) también está disponible para otros sistemas además de <em>Windows</em>. NT LAN Manager permite que diferentes ordenadores y servidores se verifiquen entre sí. Una de las prioridades de la mayoría de las redes es evitar el acceso de participantes no autorizados, por lo que deben implementar un procedimiento de verificación: el cliente solo puede entrar en la red o utilizar sus servicios si ha sido autorizado.
        p El protocolo NTLM estipula que el cliente se autentique con un nombre de usuario y la contraseña correspondiente. Para ello, se genera un intercambio entre el dispositivo del usuario y un servidor. Este último conoce los datos de inicio de sesión, por lo que puede comprobar la solicitud de acceso y, a continuación, permitirlo.
      .col-lg-12.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          p.mb-0 Protocolo NTLM
    figure.p-4(data-aos="fade-right")
      img(src='@/assets/curso/tema3/img43.svg') 

  .container.BG13.px-4.pt-4.pt-md-4.px-md-5    
    .row.align-items-center.mb-5
      .col-lg-10.BG08.p-2.mb-3(data-aos="fade-right")
        .row
          .col-9
            p La autenticación NTLM es una familia de protocolos de autenticación que se engloban en el Msv 1 0 dll de <em>Windows</em> Los protocolos de autenticación NTLM incluyen LAN Manager versión 1 y 2 y NTLM versión 1 y 2 Los protocolos de autenticación NTLM autentican a los usuarios y a las computadoras sobre la base de un mecanismo de desafío/respuesta que demuestra a un servidor o a un controlador de dominio que un usuario conoce la contraseña asociada a una cuenta Cuando se utiliza el protocolo NTLM, un servidor de recursos debe realizar una de las siguientes acciones para verificar la identidad de una computadora o usuario siempre que se necesite un nuevo token de acceso:
      .col-lg-2.col-md-4.col-4(data-aos="fade-right")
        img.img04(src='@/assets/curso/tema3/img44.svg') 
    .row.mb-4
      .col-lg-6.mb-2(data-aos="fade-right")
        .tarjeta-numerada.color-primario.px-5.py-3
          .tarjeta-numerada__numero
            .h2 1
          .row.justify-content-center.align-items-center
            .col-8
              p Ponerse en contacto con un servicio de autenticación de dominio en el controlador de dominio para el dominio de la cuenta de la computadora o del usuario, si la cuenta es una cuenta de dominio.
            .col-4
              img(src='@/assets/curso/tema3/img45.svg')
      .col-lg-6.mb-2(data-aos="fade-left")
        .tarjeta-numerada.color-secundario.px-5.py-4
          .tarjeta-numerada__numero
            .h2 2
          .row.justify-content-center.align-items-center
            .col-8
              p Busque la cuenta de la computadora o del usuario en la base de datos de cuentas locales, si la cuenta es una cuenta local.
            .col-4
              img(src='@/assets/curso/tema3/img46.svg')
    .row.align-items-center.mb-4
      .col-lg-5(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img47.svg')      
    .row.align-items-center.mb-4
      .col-lg-6
        .row  
          .col-12(data-aos="fade-right")
            p L0phtCrack es una aplicación de auditoría y recuperación de contraseñas. Utiliza múltiples métodos de evaluación para ayudar a los administradores a reducir los riesgos de seguridad. L0phtCrack ayuda a identificar y remediar las vulnerabilidades de seguridad que resultan del uso de contraseñas débiles o fáciles de adivinar y a recuperar las contraseñas de las cuentas de <em>Windows</em> y Unix para acceder a las cuentas de usuarios y administradores cuyas contraseñas se han perdido o para agilizar la migración de los usuarios a otro sistema de autenticación.
          .col-12(data-aos="fade-right")
            .cajon.color-acento-contenido.p-3 
              .row.align-items-center
                .col-8
                  p Algunas versiones de L0phtCrack pueden procesar cuentas utilizando tablas de contraseñas precalculadas que contienen trillones de contraseñas.
                .col-4
                  img(src='@/assets/curso/tema3/img48.svg')
      .col-lg-6.p-5(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img49.png')
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3	Contramedidas

  .container.BGIMG12.px-4.pt-4.pt-md-4.px-md-5
    p.mb-5 Dentro de las contramedidas para poder defenderse del crackeo de contraseñas, se debe de tener en cuenta las siguientes consideraciones:
    .row.justify-content-center
      .col-lg-10.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img51.svg')
      .col-lg-12.mb-4(data-aos="fade-right")
        p Las contramedidas en este caso, se refieren a:
      .col-lg-12(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img52.svg')

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
