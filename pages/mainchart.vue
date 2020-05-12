<template>
  <div class="page-container">
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

<style></style>
