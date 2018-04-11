const { okHtml, basicInfoAnd } = require('../utils/html')

module.exports = function(app) {
  // GET index page
  app.get("/", function(httpReq, httpRes, next) {
    okHtml(httpRes).render('pages/index', basicInfoAnd({
      title: 'thiago ricieri blog',
      layout: 'home'
    }))
  })
}
