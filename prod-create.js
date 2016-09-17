import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl } from './scripts/selectfield.js'

import Modal from './scripts/modal.js'


collapsibleApply($('.js-menu'))





function psvdataAdapter(data) {
  return data.map(d => {
    return {
      id: d.id,
      name: d.name || '',
      labels: d.labelvalue || []
    }
  })
}


let psvdata = psvdataAdapter([{
  "id": "4028812c57045f390157046a783a0009",
  "name": "testname1",
  "labelvalue": ["啊啊啊啊","事实上"]
},{
  "id": "4028812c57045f390157046a783c000c",
  "name": "testname2",
  "labelvalue": ["1213","圣斗士"]
}])


let tabledata = [{
  "id":"4028812c57045f390157046a8806000f",
  "standardProductLabelValue1":"啊啊啊啊",
  "standardProductLabelValue2":"1213",
  "standardProductLabelValue3":null,
  "code":"123",
  "barcode":"123",
  "price":100
},{
  "id":"4028812c57045f390157046a8af40010",
  "standardProductLabelValue1":"事实上",
  "standardProductLabelValue2":"圣斗士",
  "standardProductLabelValue3":null,
  "code":"123",
  "barcode":"2222",
  "price":100
}]


let psv = ProdSpecView.of({ $el: $('.js-prodspecview'), datas: psvdata })

let setTableDataHandle = function($body, cb) {
  tabledata.forEach(data => {
    let lb1 = data.standardProductLabelValue1
    let lb2 = data.standardProductLabelValue2
    let lb3 = data.standardProductLabelValue3

    let $row = $body.find('tr').filter(function() {
      let $this = $(this)
      let out = false
      return [lb1, lb2, lb3].filter(n => n).reduce((acc, curr) => {
        return acc & !!$this.find(`input[value="${curr}"]`).length
      }, true)
    })


    if(data.price) {
      $row.find('td').eq(-2).find('input').val(data.price)
    }

    if(data.barcode) {
      $row.find('td').eq(-3).find('input').val(data.barcode)
    }

    if(data.code) {
      $row.find('td').eq(-4).find('input').val(data.code)
      $row.find('td').eq(-4).find('span').text(data.code)
    }

  })
  cb && cb()
}

psv.on('prodspecview.export', function(evt, data) {
  let ttv = new ThumbnailTableView({ $el: $('.js-thumbnailtableview'), data: data })
  ttv.render()
  if(data.handle) {
    data.handle(ttv.$body, function() {
      setTableDataHandle = null
    })
  }
}).trigger('prodspecview.export', {
  data: psvdata,
  handle: setTableDataHandle
})




let listViewData = [
  { id: 1, value: '上架' },
  { id: 2, value: '下架' }
]

let shelvesSelectfield = Selectfield.of({ $el: $('.js-isprodshelves') })
  .render(renderListView(listViewData))
  .setVal(listViewData[0])

let unitsListViewData = [
  { id: 1, value: '件' },
  { id: 2, value: '个' }
]

let modal = Modal.of({ $el: $('.spec-units-modal') })
let unitsSelectfield = Selectfield.of({ $el: $('.js-units') })

unitsSelectfield.on('selectfield.willclosed', function(evt, data) {
  console.log(data)
})


const unitsRenderView = datas => ($list, selectfield) => {
  let out = datas.map(SelectfieldListViewTpl).join('')
  out += `
<div class="spec-unitsfield-create js-units-create">
  <span class="ic ion-ios-add"></span>
  新增规格
</div>
`

  $list.append(out)
    .on('click.modal.open', '.js-units-create', function(evt) {
      modal.show()
    })
}

modal.on('modal.action1', function() {
  let $input = modal.$el.find('#specUnits')

  let data = {
    id: Date.now(),
    value: $input.val()
  }

  unitsListViewData.push(data)

  unitsSelectfield.render(unitsRenderView(unitsListViewData))
    .setVal(data)

  modal.hide()

  $input.val('')
})

unitsSelectfield.render(unitsRenderView(unitsListViewData))


let treeViewData = {
  id: 1,
  value: 'test1',
  children: [{
    id: 11,
    value: 'test11',
    children: [{
      id: 111,
      value: 'test111',
      children: [{
        id: 1111,
        value: 'test1111'
      }]
    },{
      id: 112,
      value: 'test112'
    }]
  },{
    id: 12,
    value: 'test12',
    children: [{
      id: 121,
      value: 'test121'
    }]
  },{
    id: 13,
    value: 'test13'
  }]
}


let categorySelectfield = Selectfield.of({ $el: $('.js-prodcategory') })
    .render(renderTreeView(treeViewData))

//selectfieldApply($('.selectfield'))


//Collapsible.of({ $el: $('.treeview-list'), $trigger: $('.treeview-content') })

$('.treeview').toArray().map(n => {
  let $el = $(n).children('.treeview-list')
  let $trigger = $(n).children('.treeview-content')
  return Collapsible.of({ $el: $el, $trigger: $trigger })
})


const SpecOptionTpl = (opt) => `
        <li>
          <div class="spec-option-item">
            <div class="row">
              <div class="grid">
                <div class="spec-option-itemname">
                  <a href="#">${opt.name}</a>
                </div>
                <div class="spec-option-itemsize">
                  ${opt.size}
                </div>
              </div>

              <div class="grid-last">
                <div class="spec-option-actions">
                  <div class="spec-option-action js-specoption-download">
                    <div class="spec-option-icon">
                      <span class="ic ion-ios-cloud-download-outline"></span>
                    </div>
                    下载
                  </div>

                  <div class="spec-option-action js-specoption-delete">
                    <div class="spec-option-icon">
                      <span class="ic ion-ios-trash-outline"></span>
                    </div>
                    删除
                  </div>
                </div>
              </div>
            </div>
          </div>

        </li>
`

$('.js-action-upload').on('click', function() {
  let $tpl = $(SpecOptionTpl({ name: 'test', size: '100000KB' }))
  $tpl.on('click', '.js-specoption-download', function() {
    alert('下载')
  }).on('click', '.js-specoption-delete', function() {
    alert('删除')
    $tpl.remove()
  })
  $tpl.appendTo('.js-spec-option-container')

  return false
})


$('.js-spec-action-create').on('click', function() {
  console.log({
    name: $('[name=specName]').val(),
    units: unitsSelectfield.getVal(),
    category: categorySelectfield.getVal(),
    shelves: shelvesSelectfield.getVal(),
    specs: $('.js-thumbnailtableview-body tr').toArray()
      .map(n => {
        let d = $(n).find('input').toArray().map(m => {
          let $m = $(m)
          let out = {}
          out[$m.prop('name')] = $m.val()
          return out
        })

        return Object.assign.apply(null, d)
      })
  })
})
