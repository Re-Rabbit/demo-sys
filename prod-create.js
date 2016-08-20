import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl } from './scripts/selectfield.js'

import Modal from './scripts/modal.js'


collapsibleApply($('.js-menu'))



let psv = ProdSpecView.of({ $el: $('.js-prodspecview') })

psv.on('prodspecview.export', function(evt, data) {
  let ttv = new ThumbnailTableView({ $el: $('.js-thumbnailtableview'), data: data })

  ttv.render()
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

renderTreeView(treeViewData)()


let categorySelectfield = Selectfield.of({ $el: $('.js-prodcategory') })


//selectfieldApply($('.selectfield'))


//Collapsible.of({ $el: $('.treeview-list'), $trigger: $('.treeview-content') })

$('.treeview').toArray().map(n => {
  let $el = $(n).children('.treeview-list')
  let $trigger = $(n).children('.treeview-content')
  return Collapsible.of({ $el: $el, $trigger: $trigger })
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
