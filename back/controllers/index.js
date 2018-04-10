module.exports = function (app){
  // GET index page
  app.get("/", function(httpReq, httpRes, next) {
    httpRes.status(200).send('Index page')
  })
}
