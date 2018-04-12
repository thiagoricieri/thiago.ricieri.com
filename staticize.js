const request = require('request')
    , fs = require('fs')
    , siteUrl = 'https://thiago.ricieri.com'
    , outputDir = './html'
    , { tableOfContents } = require('./back/utils/dist')

new Promise((resolve, reject) => resolve(tableOfContents))
  .then(makeOutputDir)
  .then(extractUrls)
  .then(concatExtras)
  .then(checkRoutes)
  .catch(console.error)

function makeOutputDir(items) {
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)
  else {
    var existent = fs.readdirSync(outputDir)
    existent.forEach(each => fs.unlinkSync(`${outputDir}/${each}`))
  }
  return items()
}
function log(items) {
  console.log(items)
  return items
}
function extractUrls(items) {
  return items.map(each => `/${each.url}`)
}
function concatExtras(items) {
  return items.concat([ '/', '/me' ])
}
function checkRoutes(items) {
  items.forEach(each => request(`${siteUrl}${each}`, function(error, response, body) {
    var statusCode = response && response.statusCode
    if (error || statusCode > 299) {
      console.error(`X ERROR --> ${statusCode} ${each}`)
    } else {
      console.log(`√ OK --> ${statusCode} ${each} `)
      writeStaticFile(each == '/' ? '/index' : each, body)
    }
  }))
}
function writeStaticFile(filename, content) {
  fs.writeFileSync(`${outputDir}${filename}.html`, content)
}
