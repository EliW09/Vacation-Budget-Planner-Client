'use strict'

let apiUrl
const weatherUrl = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/'
const apiUrls = {
  production: '<replace-with-heroku-url>',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl,
  weatherUrl
}
