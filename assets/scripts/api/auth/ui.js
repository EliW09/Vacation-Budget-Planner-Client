const store = require('../../store.js')
const ae = require('./events.js')

const signUpSuccess = data => {
  $('#authmessage').empty()
  $('#authmessage').text('Account Created!')
  $('#sign-up')[0].reset()
}

const signUpFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign up')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('#sign-up')[0].reset()
}

const signInSuccess = data => {
  ae.signedIn()
  $('#authmessage').empty()
  store.user = data.user
  $('#message').removeClass()
  store.email = data.user.email
  $('#sign-in')[0].reset()
}

const signInFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign in')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
  $('#sign-in')[0].reset()
}

const changePasswordSuccess = data => {
  $('#message').empty()
  $('#authmessage').text('Password changed')
  $('#message').removeClass()
}

const changePasswordFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on password change')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
}

const signOutSuccess = data => {
  $('#message').empty()
  $('#welcome').empty()
  store.user = null
  $('#message').removeClass()
  // $('#sign-out')[0].reset()
}

const signOutFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text('Error on sign out')
  $('#authmessage').removeClass()
  $('#authmessage').addClass('failure')
}

const mainFailure = error => {
  $('#authmessage').empty()
  $('#authmessage').text("Can't reach server")
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  mainFailure
}
