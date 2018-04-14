const connection = require('../config/database')
    , { Schema } = require('mongoose')
    , model = 'Penpal'

const PenpalSchema = new Schema({
  email: { type: String, index: true },
  createdAt: Date
})

module.exports = connection.model(model, PenpalSchema)
