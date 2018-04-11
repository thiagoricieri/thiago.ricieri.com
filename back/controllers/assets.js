const url = require('url')
    , fs = require('fs')
    , path = require('path')

module.exports = function (app) {
  // GET /assets/*
  app.get(`/assets*`, (req, res, next) => {
    const subs = req.url.substring(1, req.url.length)
    const pathname = path.join(__dirname, `../../${subs}`)
    const ext = path.parse(pathname).ext
    const map = {
      '.ico': 'image/x-icon',
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.css': 'text/css',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.wav': 'audio/wav',
      '.mp3': 'audio/mpeg',
      '.svg': 'image/svg+xml',
      '.pdf': 'application/pdf',
      '.doc': 'application/msword'
    }
    fs.exists(pathname, function (exist) {
      if(!exist) {
        res.statusCode = 404
        res.end(`File ${pathname} not found :(`)
        return
      }
      fs.readFile(pathname, function(err, data){
        if(err){
          res.statusCode = 500
          res.end(`Error getting the file: ${err}.`)
        } else {
          res.setHeader('Content-type', map[ext] || 'text/plain' )
          res.end(data)
        }
      })
    })
  })
}
