import $ from 'jquery'
import Selectfield, { renderListView } from './scripts/selectfield.js'

let listViewData = [
  { id: 1, value: '上架' },
  { id: 2, value: '下架' }
]

let shelvesSelectfield = Selectfield.of({ $el: $('.js-isprodshelves') })
    .render(renderListView(listViewData))
    .setVal(listViewData[0])
