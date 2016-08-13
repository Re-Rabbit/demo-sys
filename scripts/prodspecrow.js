import $ from 'jquery'
import LabelField, { LabelFieldTpl } from './labelfield.js'

export const ProdSpecRowTpl = name => `
  <div class="js-prodspecrow row">
    <div class="grid width--2">
      <div class="spec-namefield-container">
        <input name="specname" type="text" class="spce-namefield js-prodspecrow-name" value="${name || '规格'}" />
      </div>
    </div>
    <div class="grid width--9">
      <label class="spce-labelfield js-prodspecrow-labelfield js-labelfield" for="labelfield-${Date.now()}">
        <div class="spec-labelfield-labels js-labelfield-container"></div>
        <input type="text" name="labelfield" class="spce-labelfield-field js-labelfield-input" id="labelfield-${Date.now()}" />
        <div class="js-labelfield-autocomplete">
          <div class="js-labelfield-creator"></div>
          <ul class="labelfield-memolist js-labelfield-memolist"></ul>
        </div>
      </label>
    </div>

    <div class="grid width--1">
      <div class="spec-closed js-prodspecrow-close">
        <span class="ic ion-ios-close-outline"></span>
      </div>
    </div>
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
    let { $el, datastate, name } = this
    $el.append(ProdSpecRowTpl(name))

    this.lf = LabelField.of({ $el: $el.find('.js-prodspecrow-labelfield') })

    this.$close = $el.find('.js-prodspecrow-close')
    this.$input = $el.find('.js-prodspecrow-name')

    this.trigger = $el.trigger.bind($el)
    this.on = $el.on.bind($el)

    datastate.name = name
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
