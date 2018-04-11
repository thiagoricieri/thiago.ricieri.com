const { okHtml } = require('../utils/html')

module.exports = function(app) {
  // GET index page
  app.get("/", function(httpReq, httpRes, next) {
    okHtml(httpRes).render('pages/index', {
      title: 'Index',
      layout: 'home'
    })
  })
}
