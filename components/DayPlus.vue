<template>
  <div class="summary">
    <p>
      Lust day Confirmed: {{ dayData.newConfirmed }} ({{ ConfirmedChange }})
    </p>
    <p>
      Lust day Recovered: {{ dayData.newRecovered }} ({{ RecoveredChange }})
    </p>
    <p>Lust day Deaths: {{ dayData.newDeaths }} ({{ DeathsChange }})</p>
  </div>
</template>

<script>
export default {
  name: 'DayPlus',
  props: ['dayData'],
  data() {
    return {
      ConfirmedChange: null,
      RecoveredChange: null,
      DeathsChange: null
    }
  },
  mounted() {
    this.ConfirmedChange =
      this.dayData.newConfirmed - this.dayData.lustConfirmed
    this.RecoveredChange =
      this.dayData.newRecovered - this.dayData.lustRecovered
    this.DeathsChange = this.dayData.newDeaths - this.dayData.lustDeaths
  },
  methods: {
    isPositive(x, y) {
      return x > y
    }
  }
}
</script>

<style>
.summary {
  display: block;
}
</style>
