import $ from 'jquery'
import Modal from './modal.js'
import AutoComplete from './autocomplete.js'
import Selectfield, { renderListView, renderDatePickerView } from './selectfield.js'
import Row from './order-create-tablerow.js'
import { Store } from './order-create-struct.js'

let tpl = table => `
        <div class="order-store">
          <div class="order-store-header">

            <div class="selectfield autocomplete order-store-selectfield js-storeselectfield">
              <div class="selectfield-field order-store-selectfield-field">
                <input name="selectstore" type="text" class="field autocomplete-field" placeholder="选择仓库" />
              </div>
              <div class="selectfield-optionslist order-store-selectfield-orderlist autocomplete-list">

              </div>
            </div>

            <div class="order-store-close js-order-store-removerow">
              <span class="ic ion-ios-close-outline"></span>
            </div>
          </div>
          <div class="order-store-table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th>商品</th>
                  <th>数量</th>
                  <th>单位</th>
                  <th>单价</th>
                  <th>小计</th>
                  <th>备注</th>
                </tr>
              </thead>
              <tbody class="js-order-store-rows"></tbody>
            </table>
          </div>

          <div class="order-store-statistics">
            <div class="row">
              <div class="grid width--5">
                <div class="form-grid">
                  <label for="">
                    <div class="row">
                      <div class="grid width--3">
                        <div class="form-label">交货日期</div>
                      </div>
                      <div class="grid width--9">

                        <div class="selectfield js-calendar">
                          <div class="field selectfield-field datepicker-field">
                            <span class="selectfield-placeholder">请选择日期</span>
                          </div>
                          <div class="selectfield-icon">
                            <span class="ic ion-ios-arrow-up-outline"></span>
                          </div>
                          <div class="selectfield-optionslist datepicker-optionslist"></div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="grid width--5">
                <div class="form-grid">
                  <label for="">
                    <div class="row">
                      <div class="grid width--3">
                        <div class="order-store-statisticlabel">收获地址</div>
                      </div>
                      <div class="grid width--9">
                        <div class="order-store-address js-order-storeadd">
                          华北仓库（山西省太原市万柏林区）
                        </div>
                      </div>
                    </div>
                  </label>

                  <label for="">
                    <div class="row">
                      <div class="grid width--3">
                        <div class="order-store-statisticlabel">&nbsp;</div>
                      </div>
                      <div class="grid width--9">
                        <div class="order-store-contact js-modal-trigger-contact">
                          <span class="ic ion-md-clipboard"></span>
                          <span class="js-order-store-contact">王小明 15515551555</span>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div class="grid width--7">
                <div class="form-grid order-store-statisticlabel-native">

                  <label for="">
                    <div class="row">
                      <div class="grid width--9">
                        <div class="order-store-totallabel order-store-statisticlabel">产品合计</div>
                      </div>
                      <div class="grid width--3">
                        <div class="order-store-total">0.00</div>
                      </div>
                    </div>
                  </label>

                  <label for="">
                    <div class="row">
                      <div class="grid width--9">
                        <div class="order-store-otherlabel order-store-statisticlabel">其他</div>
                      </div>
                      <div class="grid width--3">
                        <div class="">
                          <input type="text" value="0.00" class="order-store-other js-order-store-other" />
                        </div>
                      </div>
                    </div>
                  </label>

                </div>
              </div>
            </div>
          </div>
        </div>
`

class Table {
  constructor({ prods  = [],
                stores = [],
                date   = new Date(),
                other  = 0.00,
                rows   = [],
                value,
                user,
                phone }) {

    this.stores = stores
    this.prods  = prods
    this.date   = typeof date === 'string' ? new Date(date) : date
    this.other  = other
    this.rows   = rows.map(row => Row.of(Object.assign({}, { prods: prods }, row)))
    this.value  = Store.of(value) || stores[0]
    this.user   = user
    this.phone  = phone
    this.$el    = $(tpl(this))
    this.init()
  }

  init() {
    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)
    this
      .initDatePicker()
      .initAutoComplete()
      .initContact()
      .initRows()
      .setOther(this.other)
      .resetTableIdx()
    if(this.rows.length === 0) this.createRow()
    setTimeout(this.computPrice.bind(this), 0)
    this.event()
  }

  event() {
    let self = this
    let $el  = this.$el
    let getHandle = this.getHandle.bind(this)
    let setOther  = this.setOther.bind(this)
    let getRemoveHandle = this.getRemoveHandle.bind(this)
    this
      .on('click.removerow', '.js-order-store-removerow', function() {
        let removeHandle = getRemoveHandle()
        let handle = getHandle()
        removeHandle && removeHandle(self, $el.remove.bind($el))
        handle && handle()
      })
      .on('change.editother', '.js-order-store-other', function() {
        setOther($(this).val())
      })
  }

  setOther(val) {
    let value  = parseFloat(val)
    let handle = this.getHandle()
    let rvalue = isNaN(value) && value <= 0 ? this.other : value
    this.other = rvalue
    handle && handle()
    this.$el.find('.js-order-store-other').val(rvalue.toFixed(2))
    return this
  }

  getRemoveHandle() {
    return this.removeHandle
  }

  getHandle() {
    return this.handle
  }

  initRows() {
    this.$rows = this.$el.find('.js-order-store-rows')
    this.rows  = this.rows.map(this.constRow.bind(this))
    return this
  }

  resetTableIdx() {
    let rows = this.rows
    for(let i = 0; i < rows.length; i++) {
      rows[i].$el.find('td:first').text(i + 1)
    }
    return this
  }

  constRow(row) {
    let tg = row || Row.of({ prods: this.prods })
    tg.handle = this.computPrice.bind(this)
    tg.removeHandle = this.removeRow.bind(this)
    tg.createHandle = this.createRow.bind(this)
    tg.$el.appendTo(this.$rows)
    return tg
  }

  createRow() {
    this.rows.push(this.constRow())
    this.resetTableIdx()
    return this
  }

  removeRow(row, cb) {
    if(this.rows.length === 1) return
    let idx = this.rows.findIndex(t => t === row)
    this.rows.splice(idx, 1)
    this.resetTableIdx()
    cb && cb()
    return this
  }

  computPrice() {
    let sum = this.rows.reduce((acc, curr) => {
      return acc + parseFloat(curr.count) * parseFloat(curr.value.price)
    }, 0)
    let handle = this.getHandle()
    this.$el.find('.order-store-total').text(sum.toFixed(2))
    if(typeof handle === 'function') handle()
    return sum
  }

  setStoreAddr(addr) {
    this.$el.find('.js-order-storeadd').text(addr)
    return this
  }


  /**
   * 初始化 仓库地址 仓库下拉框
   */
  initAutoComplete() {

    // 初始化 组件
    let setAddr = this.setStoreAddr.bind(this)
    this.ac = AutoComplete.of({
      $el: this.$el.find('.autocomplete'),
      datas: this.stores.map(store => {
        store.value = store.name
        return store
      })
    })
    this.ac.setVal(this.value)
    this.ac.on('autocomplete.export', function(evt, data) {
      setAddr(data.value)
    })


    // 设置 仓库地址 默认值
    setAddr(this.ac.value.addr)

    return this
  }


  setContact({ user, phone }, cb) {
    /**
     * TODO 表单验证
     */
    this.user  = user
    this.phone = phone

    this.$el.find('.js-order-store-contact').text(`${user} ${phone}`)

    cb && cb()
    return this
  }

  getContact() {
    return {
      user:  this.user,
      phone: this.phone
    }
  }

  modalHandle(modal) {
    let user  = modal.findField('contactUser').val()
    let phone = modal.findField('contactPhone').val()
    this.setContact({
      user:  user,
      phone: phone
    }, modal.hide.bind(modal))

    return this
  }

  /**
   * 初始化 联系人 弹出框 事件绑定
   */
  initContact() {

    // 复制仓库联系人到实例
    if(this.user || this.phone) {
      let { user, phone } = this
      this.setContact({ user: user, phone: phone })
    } else {
      let { user, phone } = this.ac.value
      this.setContact({ user: user, phone: phone })
    }

    // 初始化弹出框
    this.modal = Modal.of({ $el: $('.js-modal-contact') })

    // 修改联系人 弹出框
    let modalHandle = this.modalHandle.bind(this)
    let getContact  = this.getContact.bind(this)
    let modal       = this.modal

    this.on('click.editcontact', '.js-modal-trigger-contact', function() {
      let { user, phone } = getContact()
      modal.findField('contactUser').val(user)
      modal.findField('contactPhone').val(phone)
      modal.show(modalHandle)
    })


    return this
  }


  /**
   * 初始化 日期
   */
  initDatePicker() {
    let $el = this.$el.find('.js-calendar')
    this.calendar = Selectfield.of({ $el: $el })
      .render(renderDatePickerView(this.date))

    return this
  }

  static of(opts) {
    return new Table(opts)
  }

}

export default Table
