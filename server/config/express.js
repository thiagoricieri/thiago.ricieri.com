const express = require('express')
    , consign = require('consign')
    , bodyParser = require('body-parser')
    , expressValidator = require('express-validator')

module.exports = function(){
  let app = express()

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(expressValidator())

  consign({ cwd: __dirname })
   .include('../routes')
   .into(app)

  return app
}
