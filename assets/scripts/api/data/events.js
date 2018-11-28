const getFormFields = require('../../../../lib/get-form-fields.js')
const store = require('../../store.js')
const api = require('./api.js')
const ui = require('./ui.js')
const form = require('../../forms/main.js')

const onNewBudgetPlan = (event) => {
  event.preventDefault()
  form.savePer()
  const data = getFormFields(event.target)
  JSON.stringify(data)
  api.newBudgetPlan(data)
    .then(ui.budgetSuccess)
    .catch(ui.budgetFailure)
}

const onGrabBudgetPlans = (event) => {
  $('.grabBudgetForm').show()
  event.preventDefault()
  api.grabBudgetPlans()
    .then(ui.grabSuccess)
    .catch(ui.grabFailure)
}

const onDeleteBudgetPlan = (event) => {
  event.preventDefault()
  const input = getFormFields(event.target)
  api.deleteBudgetPlan(input.trip.id)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
}

const onEditBudgetPlan = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const input = getFormFields(event.target)
  console.log(data)
  api.editBudgetPlan(data, input.trip.id)
    .then(ui.editSuccess)
    .catch(ui.editFailure)
}

const onGrabWeather = (event) => {
  event.preventDefault()
  const lat = store.lat
  const long = store.long
  api.grabWeather(lat, long)
    // .then(ui.weatherSuccess)
    // .catch(ui.weatherFailure)
}

module.exports = {
  onNewBudgetPlan,
  onGrabBudgetPlans,
  onDeleteBudgetPlan,
  onEditBudgetPlan,
  onGrabWeather
}
