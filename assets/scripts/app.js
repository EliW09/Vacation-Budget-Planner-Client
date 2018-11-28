'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./api/auth/events.js')
const dataEvents = require('./api/data/events.js')
const form = require('./forms/main.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  $('.message a').click(function () {
    $('form').animate({height: 'toggle', opacity: 'toggle'}, 'slow')
  })

  $('#newbudget').on('click', form.createBudget)
  $('#editbudget').on('click', form.editBudget)
  $('#deletebudget').on('click', form.deleteBudget)
  $('#grabbudgets').on('click', form.grabBudget)

  $('#back').on('click', form.back)
  $('#next').on('click', form.next)
  $('#back-e').on('click', form.back_e)
  $('#next-e').on('click', form.next_e)

  $('#plane').on('click', form.rotateForms)
  $('#car').on('click', form.rotateForms)
  $('#train').on('click', form.rotateForms)
  $('#hotelyes').on('click', form.rotateForms)
  $('#hotelno').on('click', form.rotateForms)
  $('#rentalyes').on('click', form.rotateForms)
  $('#rentalno').on('click', form.rotateForms)
  $('#eventyes').on('click', form.rotateForms)
  $('#eventno').on('click', form.rotateForms)

  $('#plane-e').on('click', form.rotateForms_e)
  $('#car-e').on('click', form.rotateForms_e)
  $('#train-e').on('click', form.rotateForms_e)
  $('#hotelyes-e').on('click', form.rotateForms_e)
  $('#hotelno-e').on('click', form.rotateForms_e)
  $('#rentalyes-e').on('click', form.rotateForms_e)
  $('#rentalno-e').on('click', form.rotateForms_e)
  $('#eventyes-e').on('click', form.rotateForms_e)
  $('#eventno-e').on('click', form.rotateForms_e)

  $('#tripform').on('submit', dataEvents.onNewBudgetPlan)
  $('#grab').on('click', dataEvents.onGrabBudgetPlans)
  $('#deletetrip').on('submit', dataEvents.onDeleteBudgetPlan)
  $('#editform').on('submit', dataEvents.onEditBudgetPlan)

  $('#acc').on('click', form.signedIn)
  $('#goBack').on('click', form.signedInDone)

  $(document).ready(form.makeNewForm)
})
