<template>
  <div class="small">
    <LineChart
      v-if="loaded"
      :chart-data="datacollection"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import LineChart from './LineChart.js'

export default {
  name: 'LineChartContainer',
  components: {
    LineChart
  },
  data() {
    return {
      loaded: false,
      datacollection: {},
      responseArr: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  },
  async mounted() {
    this.loaded = false
    await this.getData()
    this.fillData()
    this.loaded = true
  },
  methods: {
    async getData() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      const url = 'https://api.covid19api.com/total/dayone/country/russia'
      const response = await fetch(url, requestOptions)
      this.responseArr = await response.json()
      console.log(this.responseArr)
    },
    fillData() {
      let iterator = 1
      const daysArr = []
      const ConfirmedArr = []
      this.responseArr.forEach((day) => {
        daysArr.push(iterator)
        ConfirmedArr.push(day.Confirmed)

        iterator++
      })
      this.datacollection = {
        labels: daysArr,
        datasets: [
          {
            label: 'Confirmed',
            backgroundColor: '#f87979',
            data: ConfirmedArr
          }
        ]
      }
    }
  }
}
</script>

<style>
.small {
  max-width: 1000px;
  margin: 150px auto;
}
</style>
