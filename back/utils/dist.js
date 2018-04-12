const fs = require('fs')
    , path = require('path')
    , directory = path.join(__dirname, '../../dist')

module.exports.loadHtml = function(blogUrl) {
  console.log(directory);
  var filename = `${directory}/${blogUrl}.html`
  if (!fs.existsSync(filename)) return null
  return fs.readFileSync(filename, 'utf8')
}

module.exports.loadMeta = function(blogUrl) {
  var filename = `${directory}/${blogUrl}.json`
  if (!fs.existsSync(filename)) return null
  return JSON.parse(fs.readFileSync(filename, 'utf8'))
}

module.exports.tableOfContents = function() {
  return JSON.parse(fs.readFileSync(`${directory}/toc.json`, 'utf8'))
}
