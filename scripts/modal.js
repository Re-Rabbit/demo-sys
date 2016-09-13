import $ from 'jquery'

class Modal {
  constructor({ $el, action1Handle }) {
    this.$el = $el
    //this.$trigger = $trigger

    this.state = 1 // 1.closed 2.opening 3.opened 4.closing

    this.timer = null

    this.init()
  }

  init() {
    let { $el } = this

    this.$bg = $el.find('.modal-bg')
    this.$main = $el.find('.modal-main')
    this.$close = $el.find('.modal-close, .js-modal-close, .js-modal-action-0')

    this.trigger = $el.trigger.bind($el)
    this.on = $el.on.bind($el)
    this.event()
  }

  show(handle) {
    let { $el, timer } = this

    if(handle) this.handle = handle

    $el.css('display', 'block')

    clearTimeout(timer)
    timer = setTimeout(_ => {
      $el.addClass('active')
    }, 33)
  }

  hide() {
    let { $el, timer } = this

    $el.removeClass('active')

    clearTimeout(timer)
    timer = setTimeout(_ => {
      $el.css('display', 'none')
      this.handle = null
    }, 290)
  }

  findField(id) {
    return this.$el.find('#' + id)
  }

  getHandle(num, id) {
    return this.handle
  }


  event() {

    let {
      $el,
      $close,
      hide,
      trigger,
      getHandle
    } = this

    let self = this
    hide = hide.bind(this)
    getHandle = getHandle.bind(this)

    $close.on('click.modal.close', hide)

    $el.on('click', '.js-modal-action-1', function() {
      let handle = getHandle()
      handle && handle(self)
      trigger('modal.action1')
    })
    $el.on('click', '.js-modal-action-2', function() {
      let handle = getHandle()
      handle && handle(self)
      trigger('modal.action2')
    })
    $el.on('click', '.js-modal-action-3', function() {
      let handle = getHandle()
      handle && handle(self)
      trigger('modal.action3')
    })
    $el.on('click', '.js-modal-action-4', function() {
      let handle = getHandle()
      handle && handle(self)
      trigger('modal.action4')
    })
    $el.on('click', '.js-modal-action-5', function() {
      let handle = getHandle()
      handle && handle(self)
      trigger('modal.action5')
    })
  }
}


Modal.of = opts => new Modal(opts)

export default Modal
