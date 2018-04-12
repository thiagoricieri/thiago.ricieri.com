const date = require('date-and-time')

module.exports.convertDate = function(dateString) {
  var d = new Date(dateString)
  return date.format(d, 'MMMM, DD YYYY')
}
