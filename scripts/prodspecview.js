import $ from 'jquery'
import ProdSpecRow from './prodspecrow.js'


const ProdSpecViewTpl = id => `
<div data-id=${id} class="spec-row js-prodspecview-row"></div>
`


export default class ProdSpecView {
  constructor({ $el, row = 3, enabled = false, datas = [] }) {
    this.$el = $el
    this.row = row
    this.enabled = enabled
    this.datas = datas
    this.datastate = {}

    this.init()
  }

  createRow(len, ids, name, labels) {
    let id = ids || Date.now()

    let $row = $(ProdSpecViewTpl(id)).appendTo(this.$body)

    let replace = ''
    switch(len) {
    case 1:
      replace = '二'
      break;
    case 2:
      replace = '三'
      break;
    default:
      replace = '一'
      break;
    }

    let data = {
      $row: $row,
      row: ProdSpecRow.of({ $el: $row, name: name || '规格' + replace, datas: labels })
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
    if(this.datas.length === 0) {
      createRow.bind(this)(0)
    } else {
      this.datas.forEach(row => {
        createRow.bind(this)(null, row.id, row.name, row.labels)
      })
    }

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
      let len = Object.keys(datastate.rows).length
      if(len >= 3) {
        return
      }
      createRow(len)
      trigger('prodspecview.updaterow')
      trigger('prodspecview.export', getVal())
    })


    $el.on('prodspecrow.removerow', '.js-prodspecview-row', function() {
      let len = Object.keys(datastate.rows).length
      if(len <= 1) {
        alert('规格启用时，至少保留一个规格')
        return
      }

      let id = $(this).data('id')
      datastate.rows[id].$row.remove()
      delete datastate.rows[id]

      trigger('prodspecview.updaterow')
      trigger('prodspecview.export', getVal())
    })


    $el.on('prodspecview.updaterow', function() {
      let len = Object.keys(datastate.rows).length
      $create.css('display', len >= 3 ? 'none' : 'inline-block')
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
