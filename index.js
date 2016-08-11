import $ from 'jquery'
import LabelField, { LabelFieldTpl } from './scripts/labelfield.js'

const ProdSpecRowTpl = _ => `
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

class ProdSpecRow {
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


const ProdSpecViewTpl = id => `
<div data-id=${id} class="js-prodspecview-row"></div>
`


class ProdSpecView {
  constructor({ $el, row = 3 }) {
    this.$el = $el
    this.row = row

    this.datastate = {}

    this.init()
  }

  createRow() {
    let id = Date.now()

    let $row = $(ProdSpecViewTpl(id)).appendTo(this.$body)

    let data = {
      $row: $row,
      row: ProdSpecRow.of({ $el: $row })
    }

    this.datastate.rows[id] = data
  }

  getVal() {

  }

  init() {

    let { $el, datastate, createRow } = this

    this.$create = $el.find('.js-prodspecview-createrow')
    this.$enable = $el.find('.js-prodspecview-enable')
    this.$body = $el.find('.js-prodspecview-body')

    this.datastate.rows = {}
    createRow.bind(this)()

    this.on = $el.on.bind($el)
    this.trigger = $el.trigger.bind($el)

    this.event()
  }

  event() {

    let {
      $el,
      $create,
      $enable,
      $body,
      row,
      datastate,
      createRow,
      trigger,
      on
    } = this

    createRow = createRow.bind(this)

    function exports() {

    }


    $create.on('click', function() {
      if(Object.keys(datastate.rows).length >= 3) return
      createRow()

      trigger('prodspecview.export', datastate)
    })


    $el.on('prodspecrow.removerow', '.js-prodspecview-row', function() {
      if(Object.keys(datastate.rows).length <= 1) return
      let id = $(this).data('id')
      datastate.rows[id].$row.remove()
      delete datastate[id]

      trigger('prodspecview.export', datastate)
    })

    $el.on('prodspecrow.export', '.js-prodspecview-row', function() {
      trigger('prodspecview.export', datastate)
    })


    $enable.on('change', function() {
      datastate.checked = $(this).prop('checked')

      trigger('prodspecview.export', datastate)
    })

  }
}

ProdSpecView.of = function(opt) {
  return new ProdSpecView(opt)
}

//window.lf = LabelField.of({ $el: $('.js-labelfield') })
//window.psr = ProdSpecRow.of({ $el: $('.js-prodspecview') })
/*
psr.on('prodspecrow.export', function(evt, data) {
  console.log(data)
})
*/


window.psv = ProdSpecView.of({ $el: $('.js-prodspecview') })
psv.on('prodspecview.export', function(evt, data) {
  console.log(data)
})
