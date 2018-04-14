const mongoose = require('mongoose')
    , mongoDbUrl = require('./connection')
    , connection = mongoose.createConnection(mongoDbUrl, { autoIndex: false })

mongoose.Promise = global.Promise
connection.on('error', console.error.bind(console, 'MongoDB connection error: '))

module.exports = connection
