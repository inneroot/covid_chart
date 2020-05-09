<template>
  <div class="container">
    <LineChartContainer />
  </div>
</template>

<script>
import LineChartContainer from '~/components/LineChartContainer.vue'

export default {
  components: {
    LineChartContainer
  },
  head() {
    return {
      title: 'Covid19 Chart',
      meta: [
        {
          hid: 'Covid19 Chart on Nuxt.js with Chart.js',
          name: 'Covid19 Chart',
          content: 'Covid19 Chart'
        }
      ],
      noscript: [
        {
          innerHTML: 'This site require JavaScript',
          body: true
        }
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
}

.title {
  font-family: Roboto, Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
