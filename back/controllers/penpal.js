const constants = require('../config/constants')
    , Penpal = require('../database/Penpal')
    , { ok, notOk } = require('../utils/json')
    , { check, validationResult } = require('express-validator/check')

module.exports = function (app){
  // POST /penpal/subscribe
  app.post("/penpal/subscribe", [
    check('email')
      .isEmail().withMessage('must be an email')
      .trim().normalizeEmail()
  ],
  function(httpReq, httpRes, next) {
    const errors = validationResult(httpReq)
    if (!errors.isEmpty()) {
      return httpRes.status(422).json({ errors: errors.mapped() })
    }

    let email = httpReq.body.email
    new Penpal({ email })
      .save()
      .then(ok(httpRes))
      .catch(notOk(httpRes))
  })
}
