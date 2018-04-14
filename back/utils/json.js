module.exports.ok = function(httpRes, status) {
  return f => httpRes.set({ 'Content-Type': 'text/html' }).status(status || 200).send(f)
}

module.exports.notOk = function(httpRes, error, status) {
  return f => httpRes
    .set({ 'Content-Type': 'text/html' })
    .status(status || 400)
    .send(JSON.stringify({ error }))
}
