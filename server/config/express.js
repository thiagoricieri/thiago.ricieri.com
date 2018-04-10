const express = require('express')
    , bodyParser = require('body-parser')
    , expressValidator = require('express-validator')
    , blog = require('../routes/blog')
    , pages = require('../routes/pages')

module.exports = function(){
  let app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(expressValidator())

  blog(app)
  pages(app)

  return app
}
