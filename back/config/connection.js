const fs = require('fs')
    , path = require('path')
    , secrets = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../secrets.json')))
    
module.exports = secrets.connections[process.env.NODE_ENV || 'production']
