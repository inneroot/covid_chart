<template>
  <div class="ChartWrapper">
    <form class="select_from" @submit.prevent="onSubmit">
      <div class="select_input">
        <dynamic-select
          v-model="selectedObject"
          :options="optionsObjArr"
          option-value="Slug"
          option-text="Country"
          placeholder="Select Country"
          @input="onSubmit"
        />
      </div>
      <div>
        <input
          id="daysrange"
          v-model="rangeValue"
          type="range"
          :min="rangeMin"
          :max="rangeMax"
          @change="onSubmit"
        />
        <label for="daysrange">{{ rangeValue }}</label>
      </div>
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
import DynamicSelect from 'vue-dynamic-select'
import DayPlus from '~/components/DayPlus.vue'
import LineChart from '~/components/LineChart.js'
import { CountryArr } from '~/components/Countries.js'

export default {
  name: 'LineChartContainer',
  components: {
    DynamicSelect,
    DayPlus,
    LineChart
  },
  data() {
    return {
      rangeValue: 30,
      rangeMax: 5,
      rangeMin: 2,
      optionsObjArr: [],
      selectedObject: null,
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
                labelString: 'Thousands of people'
              }
            }
          ]
        }
      }
    }
  },
  computed: {},
  async mounted() {
    this.optionsObjArr = CountryArr
    this.loaded = false
    this.randomCountry()
    await this.getData()
    this.fillData()
    this.rangeMax = this.responseArr.length
    this.loaded = true
  },
  methods: {
    randomCountry() {
      let counter = 0
      do {
        const randomID = Math.round(this.optionsObjArr.length * Math.random())
        this.selectedObject = this.optionsObjArr[randomID - 1]
        counter++
      } while (this.selectedObject.Population < 100 || counter > 100)
    },
    async onSubmit() {
      this.loaded = false
      await this.getData()
      this.fillData()
      this.loaded = true
    },
    async getData() {
      const myHeaders = new Headers()
      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      }
      const url =
        'https://api.covid19api.com/total/dayone/country/' +
        this.selectedObject.Slug
      try {
        const response = await fetch(url, requestOptions)
        this.responseArr = await response.json()
      } catch (e) {
        throw new Error(e.message)
      }
    },
    fillData() {
      const LastNdays = this.rangeValue - 1
      let iterator = 0
      const daysArr = []
      const ConfirmedArr = []
      const DeathsArr = []
      const RecoveredArr = []
      const totalDays = this.responseArr.length
      this.rangeMax = totalDays
      this.responseArr.forEach((day) => {
        iterator++
        if (iterator < this.responseArr.length - LastNdays) {
          return
        }
        daysArr.push(this.ConvertDate(day.Date))
        ConfirmedArr.push(day.Confirmed)
        RecoveredArr.push(day.Recovered)
        DeathsArr.push(day.Deaths)
      })
      let Pop = 0
      if (this.selectedObject) {
        Pop = this.selectedObject.Population
      }
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
        population: Pop,
        country: this.selectedObject.Country,
        totalConfirmed: ConfirmedArr[ConfirmedArr.length - 1],
        totalRecovered: RecoveredArr[RecoveredArr.length - 1],
        totalDeaths: DeathsArr[DeathsArr.length - 1],
        totalDays
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

<style>
.select_from {
  margin: auto;
  display: flex;
  width: 50rem;
}
.select_input {
  flex: 1;
}
.select_button {
  display: block;
  flex: 0;
}
.select_button button {
  height: 100%;
}
</style>
