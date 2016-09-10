import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl, renderDatePickerView } from './scripts/selectfield.js'

import Modal from './scripts/modal.js'


let usernames = [
  { id: 1, value: '名称1' },
  { id: 2, value: '名称2' },
  { id: 3, value: '名称3' },
]

let usernameSelectfield = Selectfield.of({ $el: $('.js-username') })
  .render(renderListView(usernames))
  //.setVal(listViewData[0])


//
let stores = [
  { id: 1, value: '华南仓' },
  { id: 2, value: '北京仓' },
  { id: 3, value: '太原仓' },
]

let storeSf = Selectfield.of({ $el: $('.js-storeselectfield') })
    .render(renderListView(stores))


let calendarSf = Selectfield.of({ $el: $('.js-calendar') })
    .render(renderDatePickerView(new Date()))
