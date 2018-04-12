const { okHtml, notFound, basicInfoAnd } = require('../utils/html')
    , { loadHtml, loadMeta, tableOfContents } = require('../utils/dist')
    , { convertDate } = require('../utils/misc')

module.exports = function (app){

  // GET /:blog-url
  app.get("/:blogUrl", function(httpReq, httpRes, next) {
    var url = httpReq.params.blogUrl
    var html = loadHtml(url)
    var meta = loadMeta(url)

    if (!html) {
      notFound(httpRes).send('¯\\_(ツ)_/¯')
      return
    }

    meta.postTitle = meta.title
    meta.title = `${meta.title} | thiago ricieri blog`
    meta.layout = 'post'
    meta.humanDate = convertDate(meta.date)
    meta.html = html

    okHtml(httpRes).render('pages/post', basicInfoAnd(meta))
  })
}
