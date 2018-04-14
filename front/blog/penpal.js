export default {
  subscribe() {
    $("#penpal-form").on('submit', event => {
      event.preventDefault()
      this._disableForm()
      this._submitInfo($('#penpal-email').val())
    })
  },
  _disableForm() {
    $("#penpal-form button").attr('disabled', true).html('Wait for it...')
    $("#penpal-form input").attr('disabled', true)
    $('#penpal-alert').removeClass('alert-warning')
  },
  _submitInfo(email) {
    fetch('/penpal/subscribe', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({ email })
    })
    .then(this._isOk)
    .then(this._formSubmited)
    .catch(this._submissionError)
  },
  _isOk(result) {
    if (result && result.status > 299) {
      throw new Error(result)
    }
    return result
  },
  _formSubmited(result) {
    $("#penpal-form .form-group, #penpal-form button").remove()
    $('#penpal-alert')
      .addClass('alert-success')
      .removeClass('d-none alert-warning')
      .html('😄 All done! You have been subscribed')
      .fadeIn()
  },
  _submissionError(error) {
    $("#penpal-form button").attr('disabled', false).html('Try again')
    $("#penpal-form input").attr('disabled', false)
    $('#penpal-alert')
      .addClass('alert-warning')
      .removeClass('d-none')
      .html('🤔 There was an error subscribing your e-mail.')
      .fadeIn()
  }
}
