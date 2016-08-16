import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl } from './scripts/selectfield.js'

import Modal from './scripts/modal.js'


collapsibleApply($('.js-menu'))
//Collapsible.of({ $el: $('.menu-submenu'), $trigger: $('.menu-title') })


let psv = ProdSpecView.of({ $el: $('.js-prodspecview') })

psv.on('prodspecview.export', function(evt, data) {
  let ttv = new ThumbnailTableView({ $el: $('.js-thumbnailtableview'), data: data })
  //console.log(data, ttv.normalized())
  ttv.render()
})


let listViewData = [
  { id: 1, value: '上架' },
  { id: 2, value: '下架' }
]

Selectfield.of({ $el: $('.js-isprodshelves') })
  .render(renderListView(listViewData))
  .setVal(listViewData[0])

let unitsListViewData = [
  { id: 1, value: '件' },
  { id: 2, value: '个' }
]

let modal = Modal.of({ $el: $('.spec-units-modal') })
let selectfield = Selectfield.of({ $el: $('.js-units') })


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

  selectfield.render(unitsRenderView(unitsListViewData))
    .setVal(data)

  modal.hide()

  $input.val('')
})

selectfield.render(unitsRenderView(unitsListViewData))


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

renderTreeView(treeViewData)()


Selectfield.of({ $el: $('.js-prodcategory') })


//selectfieldApply($('.selectfield'))


//Collapsible.of({ $el: $('.treeview-list'), $trigger: $('.treeview-content') })

$('.treeview').toArray().map(n => {
  let $el = $(n).children('.treeview-list')
  let $trigger = $(n).children('.treeview-content')
  return Collapsible.of({ $el: $el, $trigger: $trigger })
})
