import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield from './scripts/selectfield.js'


collapsibleApply($('.js-menu'))
//Collapsible.of({ $el: $('.menu-submenu'), $trigger: $('.menu-title') })


let psv = ProdSpecView.of({ $el: $('.js-prodspecview') })

psv.on('prodspecview.export', function(evt, data) {
  let ttv = new ThumbnailTableView({ $el: $('.js-thumbnailtableview'), data: data })
  //console.log(data, ttv.normalized())
  ttv.render()
})


Selectfield.of({ $el: $('.selectfield') })
