import $ from 'jquery'
import LabelField, { LabelFieldTpl } from './labelfield.js'

export const ProdSpecRowTpl = _ => `
  <div class="js-prodspecrow">
    <div>
      <input name="specname" type="text" class="js-prodspecrow-name" />
    </div>

    <div class="js-prodspecrow-labelfield js-labelfield">
      <input type="text" name="labelfield" class="js-labelfield-input" />
      <div class="js-labelfield-container"></div>
      <div class="js-labelfield-autocomplete">
        <div class="js-labelfield-creator"></div>
        <ul class="js-labelfield-memolist"></ul>
      </div>
    </div>

    <div class="js-prodspecrow-close">X</div>
  </div>
`

/**
 * Components/ProdSpecRow.
 */

export default class ProdSpecRow {
  constructor({ $el, name = '' }) {
    this.$el = $el
    this.name = name

    this.datastate = {}
    this.init()
  }

  init() {
    let { $el, datastate } = this
    $el.append(ProdSpecRowTpl())

    this.lf = LabelField.of({ $el: $el.find('.js-prodspecrow-labelfield') })

    this.$close = $el.find('.js-prodspecrow-close')
    this.$input = $el.find('.js-prodspecrow-name')

    this.trigger = $el.trigger.bind($el)
    this.on = $el.on.bind($el)

    datastate.labels = this.lf.getVal()

    this.event()
  }

  getVal() {
    let { datastate } = this
    let { labels, name } = datastate

    return Object.assign({}, {
      name: name,
      labels: labels
    })
  }

  event() {

    let {
      $el,
      $input,
      $close,
      name,
      lf,
      trigger,
      datastate
    } = this

    /**
     * Components/ProdSpecRow NameField Changed.
     */

    $input.on('keyup', function() {
      let val = $(this).val().trim()
      datastate.name = val
      trigger('prodspecrow.export', datastate)
    })


    /**
     * Components/ProdSpecRow Send Remove Event.
     */

    $close.on('click', function() {
      trigger('prodspecrow.removerow')
    })


    /**
     * Components/ProdSpecRow Connect LabelField.
     */
    lf.on('labelfield.export', function() {
      datastate.labels = lf.getVal()
      trigger('prodspecrow.export', datastate)
    })

  }
}


ProdSpecRow.of = function(opt) {
  return new ProdSpecRow(opt)
}
