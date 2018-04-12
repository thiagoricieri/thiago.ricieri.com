const secrets = require('../config/secrets')

module.exports.okHtml = function(httpRes) {
  httpRes.set({
    'Content-Type': 'text/html'
  })
  .status(200)
  return httpRes
}

module.exports.notFound = function(httpRes) {
  httpRes.set({
    'Content-Type': 'text/plain'
  })
  .status(404)
  return httpRes
}

module.exports.basicInfoAnd = function(plus) {
  return Object.assign({
    blogUrl: 'https://thiago.ricieri.com',
    pageTitle: 'thiago ricieri blog',
    pageAuthor: 'Thiago Ricieri',
    pageDescription: 'A blog about the remote life of a software engineer, covering ios, android, front-end and back-end development.',
    pageImage: 'https://thiago.ricieri.com/assets/img/thiago-ricieri-face.jpg',
    twitterUser: 'thiagoricieri',
    tags: []
  }, plus, secrets)
}
