export default {
  subscribe() {
    var form = $("#penpal-form").on('submit', event => {
      event.preventDefault()
      console.log('did submit')
    })
  }
}
