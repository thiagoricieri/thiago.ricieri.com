const { okHtml, notFound, basicInfoAnd } = require('../utils/html')
    , { tableOfContents, loadHtml } = require('../utils/dist')
    , { convertDate } = require('../utils/misc')
    , constants = require('../config/constants')
    , fs = require('fs')
    , path = require('path')
    , staticDir = path.join(__dirname, '../../html')

module.exports = function(app) {
  // GET index page
  app.get("/", function(httpReq, httpRes, next) {
    var toc = tableOfContents()
    var page = httpReq.query.page || 0
    var max = 5
    var start = page * max
    var end = start + max
    var reducedToc = toc.slice(start, end)
    var staticFile = `${staticDir}/index.html`

    if (constants.useStaticFiles && fs.existsSync(staticFile)) {
      console.log(`Using static file for --> index`)
      okHtml(httpRes).send(fs.readFileSync(staticFile, 'utf8'))
      return
    }

    reducedToc = reducedToc.map(each => {
      var flat = each.meta
      flat.humanDate = convertDate(each.date)
      flat.html = loadHtml(each.url)
      flat.url = `/${each.url}`
      return flat
    })

    if (reducedToc.length == 0) {
      notFound(httpRes)
      return
    }

    okHtml(httpRes).render('pages/index', basicInfoAnd({
      title: 'thiago ricieri blog',
      posts: reducedToc,
      layout: 'home',
      pageType: 'website',
      tags: [],
      hasPrev: (start > 0),
      hasNext: (end < toc.length),
      nextPage: page + 1,
      prevPage: page - 1
    }))
  })
}
