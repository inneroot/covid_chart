<template>
  <div class="ChartWrapper">
    <div class="card">
      <div class="select_from">
        <div class="select_input">
          <dynamic-select
            v-model="selectedObject"
            :options="optionsObjArr"
            option-value="Slug"
            option-text="Country"
            placeholder="Select Country"
            @input="onChangeInput"
          />
        </div>
      </div>
      <!--DayPlus v-if="loaded" :day-data=" " /-->    
    </div>
    <div class="chart_container card">
      <LineChart
        v-if="loaded"
        :chart-data="this.$store.getters.collectionForChart"
        :options="chartOptions"
      />
      <p v-else>{{ this.message }}</p>
    </div>
    <div class="daysrange card" v-if="loaded">
      <input
        id="daysrange"
        v-model="rangeValue"
        type="range"
        :min="rangeMin"
        :max="rangeMax"
        @change="onChangeInput"
      />
      <label for="daysrange">{{ rangeValue }} days chart</label>
    </div>
  </div>
</template>

<script>
import DynamicSelect from 'vue-dynamic-select'
// import DayPlus from '~/components/DayPlus.vue'
import LineChart from '~/components/LineChart'
import {CountryArr} from '~/components/Countries'


export default {
  name: 'LineChartContainer',
  components: {
    DynamicSelect,
    // DayPlus,
    LineChart
  },
  data() {
    return {
      message: "Loading data ...",
      rangeValue: 30,
      rangeMax: 5,
      rangeMin: 2,
      optionsObjArr: [],
      selectedObject: null,
      loaded: false,
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
  mounted() {
    this.loaded = false
    this.message = "Loading data ..."
    this.optionsObjArr = CountryArr
    if (localStorage.Country) {
      this.selectedObject = this.optionsObjArr.find(element => element.Country === localStorage.Country)
    }
    else {
      this.randomCountry()
    }
    if (localStorage.Range) {
      this.rangeValue = parseInt(localStorage.Range)
    }    
    this.updateInfo()
  },
  methods: {
    async updateInfo() {      
      this.loaded = false
      this.$store.dispatch('setCountry', this.selectedObject)
      this.$store.dispatch('setRange', this.rangeValue)
      await this.$store.dispatch('fetchAPI')
      this.rangeMax = this.$store.getters.getMaxRange
      if (this.rangeValue > this.rangeMax) {
        this.rangeValue = localStorage.Range = this.rangeMax
        this.$store.dispatch('setRange', this.rangeValue)
      }
      if (this.rangeValue < 2) {
        this.rangeValue = localStorage.Range = 2
        this.$store.dispatch('setRange', this.rangeValue)
      }
      if (this.$store.getters.collectionForChart) {
        this.loaded = true
      } else {
        this.message = "No data for this country!"
      }
    },
    randomCountry() {
      let counter = 0
      do {
        const randomID = Math.round(this.optionsObjArr.length * Math.random())
        this.selectedObject = this.optionsObjArr[randomID - 1]
        counter++
      } while (this.selectedObject.Population < 100 || counter > 100)
    },
    onChangeInput() {
      localStorage.Range = this.rangeValue
      localStorage.Country = this.selectedObject.Country
      this.updateInfo()      
    }
  }
}
</script>

<style></style>
