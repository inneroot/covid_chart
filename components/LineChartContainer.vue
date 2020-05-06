<template>
  <div class="ChartWrapper">
    <LineChart
      v-if="loaded"
      :chart-data="datacollection"
      :options="chartOptions"
      :height="700"
      :width="1200"
    />
    <p v-else>Loading data ...</p>
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
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: true,
          text: 'Covid19 Chart'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Value'
              }
            }
          ]
        }
      }
    }
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
      const LastNdays = 30
      let iterator = 0
      const daysArr = []
      const ConfirmedArr = []
      const DeathsArr = []
      const RecoveredArr = []
      this.responseArr.forEach((day) => {
        iterator++
        if (iterator < this.responseArr.length - LastNdays) {
          return
        }
        daysArr.push(this.ConvertDate(day.Date))
        ConfirmedArr.push(day.Confirmed)
        DeathsArr.push(day.Deaths)
        RecoveredArr.push(day.Recovered)
      })
      this.datacollection = {
        labels: daysArr,
        datasets: [
          {
            label: 'Deaths',
            backgroundColor: 'rgba(255, 205, 86, 0.5)',
            borderColor: '#FFCD56',
            fill: true,
            data: DeathsArr
          },
          {
            label: 'Recovered',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: '#4BC0C0',
            fill: true,
            data: RecoveredArr
          },
          {
            label: 'Confirmed',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            borderColor: '#FF3E68',
            fill: true,
            data: ConfirmedArr
          }
        ]
      }
    },
    ConvertDate(theDate) {
      const months = [
        'Jan.',
        'Feb.',
        'Mar.',
        'Apr.',
        'May',
        'Jun.',
        'Jul.',
        'Aug.',
        'Sep.',
        'Oct.',
        'Nov.',
        'Dec.'
      ]
      const srtDate = String(theDate)
      const month = months[parseInt(srtDate.slice(5, 7)) - 1]
      return month + ' ' + srtDate.slice(8, 10)
    }
  }
}
</script>

<style></style>
