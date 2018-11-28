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

module.exports = {
  newBudgetPlan,
  grabBudgetPlans,
  editBudgetPlan,
  deleteBudgetPlan
}
