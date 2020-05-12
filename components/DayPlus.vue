<template>
  <div class="container">
    <p>
      Statistic for {{ dayData.country }}: <br>
      Confirmed {{dayData.totalConfirmed}} of {{dayData.population}}000 ({{Math.round( dayData.totalConfirmed/dayData.population*10 ) / 100 }}%) in {{dayData.totalDays}} days
    </p>
    <div class="summary">
      <DayInfo :current="dayData.newConfirmed" :change="confirmedChange" class="card">
        Confirmed
      </DayInfo>
      <DayInfo :current="dayData.newRecovered" :change="recoveredChange"  class="card">
        Recovered
      </DayInfo>
      <DayInfo :current="dayData.newDeaths" :change="deathsChange" class="card">
        Deaths
      </DayInfo>
    </div>
  </div>
</template>

<script>
import DayInfo from '~/components/DayInfo.vue'

export default {
  name: 'DayPlus',
  components: {
    DayInfo
  },
  props: {
    dayData: {
      type: Object,
      default() {
        return {
          newConfirmed: 0,
          newRecovered: 0,
          newDeaths: 0,
          lustConfirmed: 0,
          lustRecovered: 0,
          lustDeaths: 0,
          population: 0,
          country: '',
          totalConfirmed: 0,
          totalRecovered: 0 ,
          totalDeaths: 0,
          totalDays: 0
        }
      },
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    confirmedChange() {
      return this.dayData.newConfirmed - this.dayData.lustConfirmed
    },
    recoveredChange() {
      return this.dayData.newRecovered - this.dayData.lustRecovered
    },
    deathsChange() {
      return this.dayData.newDeaths - this.dayData.lustDeaths
    }
  }
}
</script>

<style>
.container {
  display: block;
}
.summary {
  display: flex;
  justify-content: space-around;
}
</style>
