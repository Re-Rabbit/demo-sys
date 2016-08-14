import $ from 'jquery'


class Collapsible {
  constructor({ $el, $trigger, speed = 'fast' }) {
    this.$el = $el
    this.$trigger = $trigger
    this.speed = speed
    this.state = 0 // 0.unCollapsed  1.collapsing  2.collapsed

    this.init()
  }

  init() {
    let { $el } = this
    this.height = $el.height()
    $el.css('overflow-y', 'hidden')

    this.event()
  }

  setState(state) {
    this.state = state
    this.$trigger.removeClass('collapsing collapsed active')
    if(state === 1) this.$trigger.addClass('collapsing')
    if(state === 2) this.$trigger.addClass('collapsed active')
    return this
  }

  getState() {
    return this.state
  }

  event() {

    let {
      $el,
      $trigger,
      speed,
      height,
      setState,
      getState
    } = this

    setState = setState.bind(this)
    getState = getState.bind(this)


    $trigger.on('click.collapsible', function() {

      let state = getState()

      if(state === 1) return

      setState(1)

      let args = state === 0
          ? [{ height: 0 }, speed, _ => setState(2)]
          : [{ height: height }, speed, _ => setState(0)]


      $el.stop().animate.apply($el, args)

    })
  }
}


Collapsible.of = opts => new Collapsible(opts)

export default Collapsible


export function collapsibleApply($list) {
  return $list.find('.collapsible').toArray().map(n => {
    let $el = $(n).find('.collapsible-list')
    let $trigger = $(n).find('.collapsible-trigger')
    return Collapsible.of({ $el: $el, $trigger: $trigger })
  })
}
