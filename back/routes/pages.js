const index = require('../controllers/index')
    , assets = require('../controllers/assets')

module.exports = function (app) {
  index(app)
  assets(app)
}
