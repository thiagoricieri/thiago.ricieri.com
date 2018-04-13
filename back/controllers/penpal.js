const constants = require('../config/constants')

module.exports = function (app){

  // POST /penpal/subscribe
  app.post("/penpal/subscribe", function(httpReq, httpRes, next) {
    var url = httpReq.params.blogUrl
    var html = loadHtml(url)
    var meta = loadMeta(url)
    var staticFile = `${staticDir}/${url}.html`

    if (constants.useStaticFiles && fs.existsSync(staticFile)) {
      console.log(`Using static file for --> ${url}`)
      okHtml(httpRes).send(fs.readFileSync(staticFile, 'utf8'))
      return
    }

    if (!html) {
      notFound(httpRes)
      return
    }

    meta.postTitle = meta.title
    meta.title = `${meta.title} | thiago ricieri blog`
    meta.layout = meta.layout || 'post'
    meta.humanDate = convertDate(meta.date)
    meta.html = html
    meta.hasApp = (meta.app != undefined && meta.app != null)

    meta.pageTitle = meta.postTitle
    meta.pageDescription = meta.description || meta.postTitle
    meta.pageType = 'article'

    if (meta.author) meta.pageAuthor = meta.author
    if (meta.featured) meta.pageImage = meta.featured

    var type = meta.type || 'post'
    okHtml(httpRes).render(`pages/${type}`, basicInfoAnd(meta))
  })
}
