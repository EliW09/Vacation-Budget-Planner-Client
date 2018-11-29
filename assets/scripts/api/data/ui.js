const budgetSuccess = data => {
  $('#authmessage').empty()
  $('#authmessage').text('Budget plan created!')
}

const budgetFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on making new budget.')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
}

const grabSuccess = data => {
  $('.trips').empty()
  data.trips.forEach(trip => {
    $('.trips').append(`
      <div class=${trip.id}>
      <h4 id=${trip.id}>${trip.id}</h4>
      </div>`)
    $(`#${trip.id}`).css('color', '#01499E')
    for (const key in trip) {
      if (key !== 'id' && key !== 'user') {
        $(`.${trip.id}`).append(`<h6>${key}: ${trip[key]}</h6>`)
        $(`.${trip.id}`).css('border', '3px solid #434a52')
        $(`.${trip.id}`).css('background', 'rgba(159, 162, 165, 0.8)')
        $(`.${trip.id}`).css('box-shadow', '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)')
        $(`.${trip.id}`).css('margin', '4px')
      }
    }
  })
}

const grabFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on grabbing budgets.')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
}

const deleteSuccess = data => {
  $('#authmessage').empty()
  $('#authmessage').text('Deleted budget.')
}

const deleteFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on deleting budget.')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
}

const editSuccess = data => {
  $('#authmessage').empty()
  $('#authmessage').text('Editted budget.')
}

const editFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on editting budget.')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
}

const weatherSuccess = data => {
  $('#currentweather').empty()
  $('#dumpinfo').empty()
  const theTemp = data.currently.temperature
  const theSummary = data.currently.summary
  $('#currentweather').text(`It is currently ${theSummary} and ${theTemp} degrees today.`)
}

const weatherFailure = error => {
  $('#currentweather').empty()
  $('#dumpinfo').empty()
  $('#currentweather').text('Error on getting the weather.')
  $('#currentweather').removeClass()
  $('#currentweather').addClass('failure')
}

module.exports = {
  budgetSuccess,
  budgetFailure,
  grabSuccess,
  grabFailure,
  deleteSuccess,
  deleteFailure,
  editSuccess,
  editFailure,
  weatherSuccess,
  weatherFailure
}
