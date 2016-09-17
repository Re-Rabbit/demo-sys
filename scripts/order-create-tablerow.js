import $ from 'jquery'
import Modal from './modal.js'
import AutoComplete from './autocomplete.js'
import Selectfield, { renderListView, renderDatePickerView, SelectfieldListViewTpl } from './selectfield.js'
import { Prod } from './order-create-struct.js'

let tpl = row => `
<tr class="js-order-store-goods-tpl">
  <td></td>
  <td>
    <div class="">
      <div class="order-store-operation js-store-action-createrow">
        <span class="ic ion-ios-add"></span>
      </div>
      <div class="order-store-operation js-store-action-removerow">
        <span class="ic ion-ios-remove"></span>
      </div>
    </div>
  </td>
  <td>
    <div class="selectfield order-store-prod js-order-store-prodselectfiled">
      <div class="order-store-prod-container">
         <input class="autocomplete-field order-store-prod-field js-order-store-prod-field" type="text" />
         <div class="js-order-store-actarget"></div>
      </div>
      <div class="selectfield-optionslist order-store-prod-list autocomplete-list"></div>
    </div>
  </td>
  <td class="">
     <div class="js-order-store-prodcount">
       <input name="prodCount" type="number" class="field" value="${row.count}" />
     </div>
  </td>
  <td><div class="js-order-store-produnit">个</div></td>
  <td><div class="js-order-store-prodprice">1.00</div></td>
  <td><div class="js-order-store-prodsum">0.00</div></td>
  <td>
    <div class="order-store-note">
      <div class="order-store-notecreate js-modal-trigger-note">
        添加
      </div>
    </div>
  </td>
</tr>
`

//<div class="field selectfield-field order-store-prod-field"><input class="autocomplete-field" type="text" /></div>
//


let actpl = data => `
<div class="selectfield-option selectfield-dd autocomplete-listitem" data-id="${data.id}">
  ${data.value}
</div>
`


/**
 * 商品
 * @class
 */
class Row {
  constructor({ prods = [], value, count = 1, note = '' }) {
    this.prods = prods
    this.count = count
    this.note  = note
    this.value = value ? Prod.of(value) : prods[0]
    this.$el   = $(tpl(this))
    this.init()
  }
  init() {

    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)

    this.$count   = this.$el.find('.js-order-store-prodcount')
    this.$price   = this.$el.find('.js-order-store-prodprice')
    this.$unit    = this.$el.find('.js-order-store-produnit')
    this.$sum     = this.$el.find('.js-order-store-prodsum')
    this.$ac      = this.$el.find('.js-order-store-actarget')
    this.$acfield = this.$el.find('.js-order-store-prod-field')

    this
      .setCount(this.count)
    //.initSelectfield()
      .initAutoComplete()
      .initModal()
      .setNote(this.note)

    setTimeout(this.computPrice.bind(this), 0)
    this.event()
  }

  getNote() {
    return this.note
  }

  setNote(content, cb) {
    this.note = content
    if(content.trim() !== '') {
      this.$note
        .addClass('active')
        .text(content)
    } else {
      this.$note
        .removeClass('active')
        .text('添加')
    }
    cb && cb()
    return this
  }

  modalHandle(modal) {
    return this.setNote(
      modal.findField('prodNote').val(),
      modal.hide.bind(modal)
    )
  }

  initModal() {
    this.modal = Modal.of({ $el: $('.js-modal-note') })
    this.$note = this.$el.find('.js-modal-trigger-note')
    let modalHandle = this.modalHandle.bind(this)
    let getNote     = this.getNote.bind(this)
    let modal       = this.modal
    this.on('click.editcontact', '.js-modal-trigger-note', function() {
      modal.findField('prodNote').val(getNote())
      modal.show(modalHandle)
    })
    return this
  }

  setCount(count) {
    if(count)
      this.count = count
    this.$count.children().val(this.count)
    return this
  }


  initSelectfield() {
    let setCount    = this.setCount.bind(this)
    let computPrice = this.computPrice.bind(this)
    this.prod  = Selectfield.of({
      $el: this.$el.find('.js-order-store-prodselectfiled'),
      datas: this.prods
    })
    this.prod.render(renderListView(this.prods))
    this.prod.setVal(this.value)
    this.prod.on('selectfield.export', function(evt, data) {
      setCount(1).computPrice()
    })
    return this
  }

  initAutoComplete() {
    let setCount    = this.setCount.bind(this)
    let computPrice = this.computPrice.bind(this)
    let $ac = this.$ac
    let $acfield = this.$acfield
    let prod = this.prod  = AutoComplete.of({
      $el: this.$el.find('.js-order-store-prodselectfiled'),
      datas: this.prods,
      tpl: actpl,
      disableDirectionKey: true,
      renderHandle: (val, ac) => {
        if(val) {
          $acfield.val('')
          $(val).appendTo(this.$ac.empty())
        }
        $ac.show()
        $acfield.removeClass('active')
      }
    })
    this.prod.setVal(this.value)
    this.prod.on('autocomplete.export', function(evt, data) {
      setCount(1).computPrice()
    })
    this.prod.on('autocomplete.focusout', function() {
      $acfield.removeClass('active')
      $ac.show()
    })

    $ac.on('click', function() {
      prod.render(prod.datas)
      $ac.hide()
      $acfield.val('').addClass('active').focus()
    })

    return this
  }

  computPrice(cb) {
    let { unit, price } = this.prod.value
    let sum = parseFloat(price) * parseFloat(this.count)
    this.$unit.text(unit)
    this.$price.text(price)
    this.$sum.text(sum.toFixed(2))
    if(typeof cb === 'function') cb(sum)
    if(typeof this.handle === 'function') this.handle()
    return sum
  }

  getRemoveHandle() {
    return this.removeHandle
  }

  getCreateHandle() {
    return this.createHandle
  }

  event() {
    let self = this
    let $el  = this.$el
    let setCount    = this.setCount.bind(this)
    let computPrice = this.computPrice.bind(this)

    this.on('change.row.editcount', '.js-order-store-prodcount input', function() {
      let val = parseFloat($(this).val())
      val = Math.max(1, isNaN(val) ? 1 : val)
      $(this).val(val)
      setCount(val).computPrice()
    })


    let getRemoveHandle = this.getRemoveHandle.bind(this)
    let getCreateHandle = this.getCreateHandle.bind(this)

    this.on('click.store.removerow', '.js-store-prodtion-removerow', function() {
      let removeHandle = getRemoveHandle()
      removeHandle && removeHandle(self, $el.remove.bind($el))
    })
    this.on('click.store.createrow', '.js-store-prodtion-createrow', function() {
      let createHandle = getCreateHandle()
      createHandle && createHandle()
    })
  }

  static of(opts) {
    return new Row(opts)
  }
}

export default Row
