const signedIn = () => {
  $('#authmessage').empty()
  $('.main').show()
  $('.innermain').show()

  $('#triptypeform').show()
  $('#1').hide()
  $('#2').hide()
  $('#3').hide()
  $('#4').hide()
  $('#carstuff').hide()

  $('#1-e').hide()
  $('#2-e').hide()
  $('#3-e').hide()
  $('#4-e').hide()
  $('#carstuff-e').hide()

  $('.login-page').hide()

  $('#acc').show()
  $('#goBack').hide()
}

const signedOut = () => {
  $('.main').hide()
  $('.innermain').hide()
  $('#acc').hide()
  $('#goBack').hide()
  $('.account-page').hide()
  $('.login-page').show()
  $('#authmessage').empty()
}

module.exports = {
  signedIn,
  signedOut
}
