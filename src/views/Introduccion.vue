<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5(data-aos="fade-right")
      .col-lg-7.px-4
        p.mb-2 En el mundo digital de hoy, se encuentra con gran cantidad de información al alcance de su mano, la cual se ha convertido en uno de los activos más importantes para una persona u organización. Con el uso de las tecnologías de información y comunicación y su avance tan vertiginoso, aparecen agentes tanto internos como externos que pueden poner en riesgo los sistemas de información y los datos que se pueden almacenar al igual que la infraestructura tecnológica donde se encuentran, es por ello que el hacking ético se ha convertido en una herramienta de gestión para poder salvaguardar los datos. Observe el siguiente recurso que amplía esta introducción. Bienvenido.
        figure
          img(src="@/assets/curso/introduccion/img04.png") 
      .col-lg-5.p-3
        figure.mb-0
          img(src="@/assets/curso/introduccion/img02.png")     
      
        
      

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10        
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
        
    
    
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
