import $ from 'jquery'
import Pagination from './scripts/pagination.js'

Pagination.of({ $el: $('.js-pagination'), sum: 10, curr: 5 })
  .on('pagination.export', function(evt, data) {
    console.log(data)
  })
