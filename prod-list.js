import $ from 'jquery'
import Pagination from './scripts/pagination.js'

Pagination.of({ $el: $('.js-pagination') })
  .setSum(10)
  .on('pagination.export', function(evt, data) {
    console.log(data)
  })

