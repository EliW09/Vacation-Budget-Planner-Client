const config = require('../../config.js')
const store = require('../../store.js')

const newBudgetPlan = data => {
  return $.ajax({
    url: config.apiUrl + '/trips',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const grabBudgetPlans = () => {
  return $.ajax({
    url: config.apiUrl + '/trips',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editBudgetPlan = (data, id) => {
  return $.ajax({
    url: config.apiUrl + `/trips/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteBudgetPlan = (id) => {
  return $.ajax({
    url: config.apiUrl + `/trips/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
const grabWeather = (lat, long) => {
  const key = '2daed1575db6b2d7d180e06157971155'
  return $.ajax({
    url: config.weatherUrl + `${key}/${lat},${long}?exclude=minutely,exclude=hourly,exclude=daily,exclude=alerts,exclude=flags`,
    method: 'GET'
  })
}

module.exports = {
  newBudgetPlan,
  grabBudgetPlans,
  editBudgetPlan,
  deleteBudgetPlan,
  grabWeather
}
