import $ from 'jquery'
import Collapsible from './scripts/collapsible.js'
import Selectfield  from './scripts/selectfield.js'
import Modal from './scripts/modal.js'




let modalBox = Modal.of({ $el: $('.category-modal') })
let modalAlert = Modal.of({ $el: $('.category-alert-modal') })

let categorySelectfield = Selectfield.of({ $el: $('.js-prodcategory') })


$('.treeview').toArray().map(n => {
  let $el = $(n).children('.treeview-list')
  let $trigger = $(n).children('.treeview-content')
  return Collapsible.of({ $el: $el, $trigger: $trigger })
})


$('.js-action-create, .js-action-update').on('click', function() {
  modalBox.show()
  return false
})

$('.js-action-remove').on('click', function() {
  modalAlert.show()
  return false
})
