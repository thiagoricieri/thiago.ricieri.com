module.exports.okHtml = function(httpRes) {
  httpRes.set({
    'Content-Type': 'text/html'
  })
  .status(200)
  return httpRes
}

module.exports.notFound = function(httpRes) {
  httpRes.set({
    'Content-Type': 'text/plain'
  })
  .status(404)
  return httpRes
}

module.exports.basicInfoAnd = function(plus) {
  return Object.assign(plus, {
    blogUrl: 'http://blog.ricieri.com'
  })
}
