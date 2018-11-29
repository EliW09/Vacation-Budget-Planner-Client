let i = 0

const rotateForms = () => {
  const tripType = $('input[name="trip[type_of_trip]"]:checked').val()
  const hotelPick = $('input[name="trip[hotel]"]:checked').val()
  const rentalPick = $('input[name="trip[rental_car]"]:checked').val()
  const eventPick = $('input[name="trip[events_and_parks]"]:checked').val()

  if (tripType === 'Airplane' || tripType === 'Train') {
    $('#planestuff').show()
    $('#carstuff').hide()
  }
  if (tripType === 'Car') {
    $('#carstuff').show()
    $('#planestuff').hide()
  }

  if (hotelPick === 'Yes') {
    $('#hotelstuff').show()
  } else {
    $('#hotelstuff').hide()
  }

  if (rentalPick === 'Yes') {
    $('#rentalstuff').show()
  } else {
    $('#rentalstuff').hide()
  }

  if (eventPick === 'Yes') {
    $('#eventstuff').show()
  } else {
    $('#eventstuff').hide()
  }
}

const rotateForms_e = () => {
  const tripType = $('input[name="trip[type_of_trip]"]:checked').val()
  const hotelPick = $('input[name="trip[hotel]"]:checked').val()
  const rentalPick = $('input[name="trip[rental_car]"]:checked').val()
  const eventPick = $('input[name="trip[events_and_parks]"]:checked').val()

  if (tripType === 'Airplane' || tripType === 'Train') {
    $('#planestuff-e').show()
    $('#carstuff-e').hide()
  }
  if (tripType === 'Car') {
    $('#carstuff-e').show()
    $('#planestuff-e').hide()
  }

  if (hotelPick === 'Yes') {
    $('#hotelstuff-e').show()
  } else {
    $('#hotelstuff-e').hide()
  }

  if (rentalPick === 'Yes') {
    $('#rentalstuff-e').show()
  } else {
    $('#rentalstuff-e').hide()
  }

  if (eventPick === 'Yes') {
    $('#eventstuff-e').show()
  } else {
    $('#eventstuff-e').hide()
  }
}

const makeNewForm = () => {
  // start hiding everything but the questions
  $('.main').hide()
  $('.innermain').hide()
  $('.budgetform').hide()
  $('.grabBudgetForm').hide()
  $('.editBudgetForm').hide()
  $('.deleteBudgetForm').hide()
  $('.account-page').hide()
  $('#acc').hide()
  $('#goBack').hide()
}

const back = () => {
  event.preventDefault()
  i--
  if (i < 0) {
    i = 0
  }
  if (i === 0) {
    $('#0').show()
    $('#1').hide()
    $('#2').hide()
    $('#3').hide()
    $('#4').hide()
  }
  if (i === 1) {
    $('#0').hide()
    $('#1').show()
    $('#2').hide()
    $('#3').hide()
    $('#4').hide()
  }
  if (i === 2) {
    $('#0').hide()
    $('#1').hide()
    $('#2').show()
    $('#3').hide()
    $('#4').hide()
  }
  if (i === 3) {
    $('#0').hide()
    $('#1').hide()
    $('#2').hide()
    $('#3').show()
    $('#4').hide()
  }
  if (i === 4) {
    $('#0').hide()
    $('#1').hide()
    $('#2').hide()
    $('#3').hide()
    $('#4').show()
  }
}

const next = () => {
  event.preventDefault()
  i++
  if (i > 4) {
    i = 4
  }
  if (i === 0) {
    $('#0').show()
    $('#1').hide()
    $('#2').hide()
    $('#3').hide()
    $('#4').hide()
  }
  if (i === 1) {
    $('#0').hide()
    $('#1').show()
    $('#2').hide()
    $('#3').hide()
    $('#4').hide()
  }
  if (i === 2) {
    $('#0').hide()
    $('#1').hide()
    $('#2').show()
    $('#3').hide()
    $('#4').hide()
  }
  if (i === 3) {
    $('#0').hide()
    $('#1').hide()
    $('#2').hide()
    $('#3').show()
    $('#4').hide()
  }
  if (i === 4) {
    $('#0').hide()
    $('#1').hide()
    $('#2').hide()
    $('#3').hide()
    $('#4').show()
  }
}

const back_e = () => {
  event.preventDefault()
  i--
  if (i < 0) {
    i = 0
  }
  if (i === 0) {
    $('#0-e').show()
    $('#1-e').hide()
    $('#2-e').hide()
    $('#3-e').hide()
    $('#4-e').hide()
  }
  if (i === 1) {
    $('#0-e').hide()
    $('#1-e').show()
    $('#2-e').hide()
    $('#3-e').hide()
    $('#4-e').hide()
  }
  if (i === 2) {
    $('#0-e').hide()
    $('#1-e').hide()
    $('#2-e').show()
    $('#3-e').hide()
    $('#4-e').hide()
  }
  if (i === 3) {
    $('#0-e').hide()
    $('#1-e').hide()
    $('#2-e').hide()
    $('#3-e').show()
    $('#4-e').hide()
  }
  if (i === 4) {
    $('#0-e').hide()
    $('#1-e').hide()
    $('#2-e').hide()
    $('#3-e').hide()
    $('#4-e').show()
  }
}

const next_e = () => {
  event.preventDefault()
  i++
  if (i > 4) {
    i = 4
  }
  if (i === 0) {
    $('#0-e').show()
    $('#1-e').hide()
    $('#2-e').hide()
    $('#3-e').hide()
    $('#4-e').hide()
  }
  if (i === 1) {
    $('#0-e').hide()
    $('#1-e').show()
    $('#2-e').hide()
    $('#3-e').hide()
    $('#4-e').hide()
  }
  if (i === 2) {
    $('#0-e').hide()
    $('#1-e').hide()
    $('#2-e').show()
    $('#3-e').hide()
    $('#4-e').hide()
  }
  if (i === 3) {
    $('#0-e').hide()
    $('#1-e').hide()
    $('#2-e').hide()
    $('#3-e').show()
    $('#4-e').hide()
  }
  if (i === 4) {
    $('#0-e').hide()
    $('#1-e').hide()
    $('#2-e').hide()
    $('#3-e').hide()
    $('#4-e').show()
  }
}

const createBudget = () => {
  event.preventDefault()
  $('.budgetform').show()
  $('.grabBudgetForm').hide()
  $('.editBudgetForm').hide()
  $('.deleteBudgetForm').hide()
}

const editBudget = () => {
  event.preventDefault()
  $('.editBudgetForm').show()
  $('.budgetform').hide()
  $('.deleteBudgetForm').hide()
  $('.grabBudgetForm').hide()
}

const deleteBudget = () => {
  event.preventDefault()
  $('.deleteBudgetForm').show()
  $('.editBudgetForm').hide()
  $('.budgetform').hide()
  $('.grabBudgetForm').hide()
}

const grabBudget = () => {
  event.preventDefault()
  $('.deleteBudgetForm').hide()
  $('.editBudgetForm').hide()
  $('.budgetform').hide()
  $('.grabBudgetForm').show()
}

const savePer = () => {
  // ticketprice numberoftickets miles mpg nightcost nightstay rooms rentday rentdays eventppeople eventpprice extracash totaldays
  const tprice = Number($('#ticketprice').val())
  const tnumber = Number($('#numberoftickets').val())
  const miles = Number($('#miles').val())
  const mpg = Number($('#mpg').val())
  const nightcost = Number($('#nightcost').val())
  const nightstay = Number($('#nightstay').val())
  const rooms = Number($('#rooms').val())
  const rentday = Number($('#rentday').val())
  const rentdays = Number($('#rentdays').val())
  const eventppeople = Number($('#eventppeople').val())
  const eventpprice = Number($('#eventpprice').val())
  const extracash = Number($('#extracash').val())
  const totaldays = Number($('#totaldays').val())

  const airTotal = tprice * tnumber
  const carTotal = miles / mpg * 3
  const hotelTotal = nightcost * nightstay * rooms
  const rentalTotal = rentday * rentdays
  const eventTotal = eventpprice * eventppeople
  const extraTotal = 80 * totaldays + extracash

  // console.log(airTotal, carTotal, hotelTotal, rentalTotal, eventTotal, extraTotal)

  const fullTotal = airTotal + carTotal + hotelTotal + rentalTotal + eventTotal + extraTotal

  const threeMonths = fullTotal / 90 * 7
  const sixMonths = fullTotal / 180 * 7
  const nineMonths = fullTotal / 270 * 7
  const twelveMonths = fullTotal / 360 * 7

  $('#totalValue').empty()
  $('#totalValue').text(`To go on this trip in 3 months, you need to save $${threeMonths.toFixed(2)} a week.\n To go on this trip in 6 months, you need to save $${sixMonths.toFixed(2)} a week.\n To go on this trip in 9 months, you need to save $${nineMonths.toFixed(2)} a week.\n To go on this trip in 12 months, you need to save $${twelveMonths.toFixed(2)} a week.`)
}

const signedIn = () => {
  $('#acc').hide()
  $('#goBack').show()
  $('.account-page').show()
  $('.main').hide()
}

const signedInDone = () => {
  $('#acc').show()
  $('#goBack').hide()
  $('.account-page').hide()
  $('.main').show()
}

module.exports = {
  makeNewForm,
  createBudget,
  back,
  next,
  back_e,
  next_e,
  rotateForms,
  rotateForms_e,
  editBudget,
  deleteBudget,
  savePer,
  grabBudget,
  signedIn,
  signedInDone
}
