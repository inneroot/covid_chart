<template>
  <div class="page-container">
    <div>
      <div class="cards">
        <Flipcard :frontPic="PicSrc('nuxt.svg')" back-html="<a href='https://nuxtjs.org/' rel='nofollow'>Nuxt.js</a>" />
        <Flipcard :frontPic="PicSrc('vuex.svg')" back-html="<a href='https://vuex.vuejs.org/' rel='nofollow'>Vuex.js</a>" />
        <Flipcard :frontPic="PicSrc('chartjs.svg')" back-html="<a href='https://www.chartjs.org/' rel='nofollow'>Chart.js</a>" />
        <Flipcard :frontPic="PicSrc('covid19api.png')" back-html="<a href='https://covid19api.com/' rel='nofollow'>covid19api</a>" />
      </div>
      <Profile />
    </div>
  </div>
</template>

<script>
import Flipcard from '~/components/Flipcard.vue'
import Profile from '~/components/Profile.vue'

export default {
  name: 'LineChartContainer',
  components: {
    Flipcard,
    Profile
  },
  methods: {
    PicSrc(link) {
      return require(`~/assets/${link}`)
    },
  }
}
</script>

<style></style>
