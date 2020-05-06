<template>
  <div class="ChartWrapper">
    <form v-on:submit.prevent="onSubmit">
      <input v-model="form_input" placeholder="country">
      <button type="submit" valute=submit>submit</button>
      </form>
    <DayPlus v-if="loaded" :day-data="lustDayData" />
    <div class="chart_container">
      <LineChart
        v-if="loaded"
        :chart-data="datacollection"
        :options="chartOptions"
      />
      <p v-else>Loading data ...</p>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.js'
import DayPlus from '~/components/DayPlus.vue'
import {ApiMap} from '~/components/ApiSlugs.js'

export default {
  name: 'LineChartContainer',
  components: {
    LineChart,
    DayPlus
  },
  data() {
    return {
      form_input: "",
      loaded: false,
      datacollection: {},
      lustDayData: {},
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
    async onSubmit() {
      this.loaded = false
      await this.getData(this.form_input)
      this.fillData()
      this.loaded = true
    },
    async getData(country) {
      this.form_input = country
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      if (!country) {
        country = "russia"
      }

      const url = 'https://api.covid19api.com/total/dayone/country/'+ country
      try {
        const response = await fetch(url, requestOptions)
        this.responseArr = await response.json()
      } catch (e) {
        throw new Error(e.message)
      }
    },
    fillData() {
      console.log(ApiMap.get("Russian Federation"))
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
      this.lustDayData = {
        newConfirmed:
          ConfirmedArr[ConfirmedArr.length - 1] -
          ConfirmedArr[ConfirmedArr.length - 2],
        newDeaths:
          DeathsArr[DeathsArr.length - 1] - DeathsArr[DeathsArr.length - 2],
        newRecovered:
          RecoveredArr[RecoveredArr.length - 1] -
          RecoveredArr[RecoveredArr.length - 2],
        lustConfirmed:
          ConfirmedArr[ConfirmedArr.length - 2] -
          ConfirmedArr[ConfirmedArr.length - 3],
        lustDeaths:
          DeathsArr[DeathsArr.length - 2] - DeathsArr[DeathsArr.length - 3],
        lustRecovered:
          RecoveredArr[RecoveredArr.length - 2] -
          RecoveredArr[RecoveredArr.length - 3],
        population: ApiMap.get(this.responseArr[0].Country).Population
      }
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
