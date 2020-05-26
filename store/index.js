export const state = () => ({
  selectedObject: {},
  responseArr: [],
  range: 30
})

export const getters = {
  getRange(state) {
    return state.range
  },
  getMaxRange(state) {
    return state.responseArr.length
  },
  collectionForChart (state, getters) {
    if (!Array.isArray(state.responseArr) || !state.responseArr.length)
      return null
    const DeathsArr = []
    const RecoveredArr = []
    const ConfirmedArr = []
    const DatesArr = []
    const range = getters.getRange
    const maxRange = getters.getMaxRange
    for (let i = maxRange - range; i < maxRange; i++) {
      const day = state.responseArr[i];
      DatesArr.push(ConvertDate(day.Date))
      ConfirmedArr.push(day.Confirmed)
      RecoveredArr.push(day.Recovered)
      DeathsArr.push(day.Deaths)
    }
    return  {
      labels: DatesArr,
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
          backgroundColor: 'rgba(69, 211, 153, 0.5)',
          borderColor: '#45D399',
          fill: true,
          data: RecoveredArr
        },
        {
          label: 'Confirmed',
          backgroundColor: 'rgba(234, 98, 40, 0.1)',
          borderColor: '#EA6228',
          fill: true,
          data: ConfirmedArr
        }
      ]
    }
  },
  DaysStatArr(state) {
    if (!Array.isArray(state.responseArr) || !state.responseArr.length) return []
    let lastdayDeath = 0
    let lastdayConfirmed = 0
    let lastdayRecovered = 0
    const DaysDataArr = state.responseArr.map(day => {
      const result = {
        Date: ConvertDate(day.Date),
        DayDeath: day.Deaths - lastdayDeath,
        DayConfirmed: day.Confirmed - lastdayConfirmed,
        DayRecovered: day.Recovered - lastdayRecovered
      }
      lastdayDeath = day.Deaths
      lastdayConfirmed = day.Confirmed
      lastdayRecovered = day.Recovered
      return result
    })
    return DaysDataArr
  }
}

export const mutations = {
  setCountry(state, selectedObj) {
    state.selectedObject = selectedObj
  },
  setRange(state, range) {
    state.range = range
  },
  fillResponseArr(state, responseArr) {
    state.responseArr = responseArr
  }
}

export const actions = {
  setCountry(context, selectedObj){
    context.commit('setCountry', selectedObj)
  },
  setRange(context, range) {
    if (range < 2) range = 2
    context.commit('setRange', range)
  },
  async fetchAPI(context) {
    const myHeaders = new Headers()
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    }
    const url =
      'https://api.covid19api.com/total/dayone/country/' +
      context.state.selectedObject.Slug
    try {
      const response = await fetch(url, requestOptions)
      const responseArr = await response.json()
      context.commit('fillResponseArr', responseArr)
    } catch (e) {
      throw new Error(e.message)
    }
  }
}

function ConvertDate(theDate) {
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
  return `${month} ${srtDate.slice(8, 10)}`
}