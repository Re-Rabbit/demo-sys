import $ from 'jquery'
import ProdSpecRow from './prodspecrow.js'


const ProdSpecViewTpl = id => `
<div data-id=${id} class="js-prodspecview-row"></div>
`


export default class ProdSpecView {
  constructor({ $el, row = 3, enabled = false }) {
    this.$el = $el
    this.row = row
    this.enabled = enabled

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
    let { datastate } = this

    let datarows = []

    for(let k in datastate.rows) {
      let { row } = datastate.rows[k]
      datarows.push(row.getVal())
    }

    return Object.assign({}, {
      enable: datastate.checked,
      data: datarows
    })
  }

  init() {

    let { $el, datastate, createRow, enabled } = this

    this.$create = $el.find('.js-prodspecview-createrow')
    this.$enable = $el.find('.js-prodspecview-enable')
    this.$body = $el.find('.js-prodspecview-body')

    this.datastate.rows = {}
    this.datastate.checked = enabled
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
      on,
      getVal
    } = this

    createRow = createRow.bind(this)
    getVal = getVal.bind(this)


    $create.on('click', function() {
      if(Object.keys(datastate.rows).length >= 3) return
      createRow()

      trigger('prodspecview.export', getVal())
    })


    $el.on('prodspecrow.removerow', '.js-prodspecview-row', function() {
      if(Object.keys(datastate.rows).length <= 1) return

      let id = $(this).data('id')
      datastate.rows[id].$row.remove()
      delete datastate.rows[id]

      trigger('prodspecview.export', getVal())
    })


    $el.on('prodspecrow.export', '.js-prodspecview-row', function() {
      trigger('prodspecview.export', getVal())
    })


    $enable.on('change', function() {
      datastate.checked = $(this).prop('checked')

      trigger('prodspecview.export', getVal())
    })

  }
}

ProdSpecView.of = function(opt) {
  return new ProdSpecView(opt)
}
