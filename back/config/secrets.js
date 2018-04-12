// Save your secret info in secrets.json to be imported later
const fs = require('fs')
    , path = require('path')

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, '../../secrets.json'), 'utf8'))
