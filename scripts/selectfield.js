import $ from 'jquery'




class Selectfield {
  constructor({ $el, data }) {
    this.$el = $el

    this.data = data
    this.init()
  }

  init() {
    let { $el } = this
    this.$input = $el.find('.selectfield-field')
    this.$list = $el.find('.selectfield-optionslist')

    this.event()
  }

  event() {
    let {
      $el,
      $input,
      $list
    } = this

    $el.on('click.selectfield.trigger', function() {
      $el.toggleClass('active')
      $input.toggleClass('active')
      $list.toggle(0)
    })

    $el.on('click.selectfield.option', '.selectfield-option', function() {
      $input.html($(this).text().trim())
    })

  }
}


Selectfield.of = opts => new Selectfield(opts)

export default Selectfield
