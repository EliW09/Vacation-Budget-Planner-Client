const store = require('./store.js')

const getLocation = (event) => {
  event.preventDefault()
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    $('#dumpinfo').empty()
    $('#dumpinfo').text("Geolocation isn't supported by your browser.")
  }
}

const showPosition = (position) => {
  $('#dumpinfo').empty()
  $('#dumpinfo').text('Latitude and Longitude grabbed and set.')
  store.lat = position.coords.latitude
  store.long = position.coords.longitude
}

module.exports = {
  getLocation
}
