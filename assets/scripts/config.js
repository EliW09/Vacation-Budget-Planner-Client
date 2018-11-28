'use strict'

let apiUrl
const weatherUrl = 'http://api.darksky.net/forecast/'
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
