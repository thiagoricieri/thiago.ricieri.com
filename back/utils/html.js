module.exports.okHtml = function(httpRes) {
  httpRes.set({
    'Content-Type': 'text/html'
  })
  .status(200)
  return httpRes
}
