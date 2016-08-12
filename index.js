import $ from 'jquery'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'


let psv = ProdSpecView.of({ $el: $('.js-prodspecview') })

psv.on('prodspecview.export', function(evt, data) {
  let ttv = new ThumbnailTableView({ $el: $('.js-thumbnailtableview'), data: data })
  console.log(data, ttv.normalized())
  ttv.render()
})


