const express = require('express')
    , expressLayouts = require('express-ejs-layouts')
    , bodyParser = require('body-parser')
    , expressValidator = require('express-validator')
    , blog = require('../routes/blog')
    , pages = require('../routes/pages')
    , path = require('path')

module.exports = function(){
  let app = express()

  app.use(expressLayouts)
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(expressValidator())

  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, '../views'))
  app.set('layout', 'post')
  app.set("layout extractScripts", true)

  blog(app)
  pages(app)

  console.log('Running blog @ 3001')

  return app
}
