const { okHtml, basicInfoAnd } = require('../utils/html')
    , { tableOfContents, loadHtml } = require('../utils/dist')
    , { convertDate } = require('../utils/misc')

module.exports = function(app) {
  // GET index page
  app.get("/", function(httpReq, httpRes, next) {
    var toc = tableOfContents()
    var page = httpReq.query.page || 0
    var max = 5
    var start = page * max
    var end = start + max
    var reducedToc = toc.slice(start, end)

    reducedToc = reducedToc.map(each => {
      var flat = each.meta
      flat.humanDate = convertDate(each.date)
      flat.html = loadHtml(each.url)
      flat.url = `/${each.url}`
      return flat
    })

    okHtml(httpRes).render('pages/index', basicInfoAnd({
      title: 'thiago ricieri blog',
      posts: reducedToc,
      layout: 'home',
      hasPrev: (start > 0),
      hasNext: (end < toc.length),
      nextPage: page + 1,
      prevPage: page - 1
    }))
  })
}
