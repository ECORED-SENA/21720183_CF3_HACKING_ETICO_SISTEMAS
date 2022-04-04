<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row
      .col-lg-2.mb-5
        figure
          img(src="@/assets/curso/tema5/img21.svg", alt="alt")

      .col-lg-12.mb-5
        figure.mb-5
        img(src='@/assets/curso/tema5/img22.svg')
      






</template>

<script>
export default {
  name: 'Sintesis',
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
