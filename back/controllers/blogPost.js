module.exports = function (app){
  // GET /:blog-url
  app.get("/:blogUrl", function(httpReq, httpRes, next) {
    httpRes.status(200).send(httpReq.params.blogUrl)
  })
}
