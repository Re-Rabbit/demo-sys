import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl, renderDatePickerView } from './scripts/selectfield.js'

import Modal from './scripts/modal.js'


let calendarSf = Selectfield.of({ $el: $('.js-calendar') })
    .render(renderDatePickerView(new Date()))


