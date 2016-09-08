import $ from 'jquery'
import Collapsible from './scripts/collapsible.js'
import Selectfield, { renderTreeView, _renderTreeView }  from './scripts/selectfield.js'
import Modal from './scripts/modal.js'




let modalBox = Modal.of({ $el: $('.category-modal') })
let modalAlert = Modal.of({ $el: $('.category-alert-modal') })

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


let categorySelectfield = Selectfield.of({ $el: $('.js-prodcategory') })
    .render(renderTreeView(treeViewData))


const CategoryViewTpl = (data, depth) => isRender => `
<li>
<div class="treeview treeview-depth--${depth}">
  <div class="treeview-content category-item ${isRender ? '' : 'selectfield-option'}" data-id="${data.id}">
    ${isRender ? `
      <div class="treeview-icon">
      <span class="ic ion-md-arrow-dropdown"></span>
      </div>
      <span class="ic category-ic ion-ios-folder-open-outline"></span>
      ` : '<span class="ic category-ic ion-ios-folder-open"></span>'}
    ${data.value}
    <div class="category-actions">
      <div class="category-action js-action-create">
        <span class="ic ion-md-add"></span>
        新增类别
      </div>
      <div class="category-action js-action-remove">
        <span class="ic ion-ios-trash-outline"></span>
        删除
      </div>
      <div class="category-action js-action-update">
        <span class="ic ion-ios-construct-outline"></span>
        设置
      </div>
    </div>
  </div>
  ${isRender ? `<ul class="treeview-list" data-id="${data.id}"></ul>` : ''}
</div>
</li>
`

_renderTreeView(CategoryViewTpl)(treeViewData)($('.js-category-view'), function($view) {

  $('.js-action-create, .js-action-update').on('click', function(evt) {
    evt.stopPropagation()
    modalBox.show()
    return false
  })
  $('.js-action-remove').on('click', function(evt) {
    evt.stopPropagation()
    modalAlert.show()
    console.log($(this).parents('.category-item').data('id'))
    return false
  })

})
