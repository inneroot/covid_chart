<template>
  <div class="summary">
    <p>New day statistic:</p>
    <DayInfo :current="dayData.newConfirmed" :change="confirmedChange">Confirmed</DayInfo>
    <DayInfo :current="dayData.recoveredChange" :change="recoveredChange">Recovered</DayInfo>
    <DayInfo :current="dayData.newDeaths" :change="deathsChange">Confirmed</DayInfo>
  </div>
</template>

<script>
import DayInfo from '~/components/DayInfo.vue'

export default {
  name: 'DayPlus',
  components: {
    DayInfo
  },
  props: ['dayData'],
  data() {
    return {
    }
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
.summary {
  display: block;
}
</style>
