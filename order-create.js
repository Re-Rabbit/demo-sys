import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl, renderDatePickerView } from './scripts/selectfield.js'

import Modal from './scripts/modal.js'
import AutoComplete from './scripts/autocomplete.js'


let usernames = [
  { id: 1, value: '名称1' },
  { id: 2, value: '名称2' },
  { id: 3, value: '名称3' },
]

let usernameSelectfield = Selectfield.of({ $el: $('.js-username') })
    .render(renderListView(usernames))
  //.setVal(listViewData[0])

//let storeSf = Selectfield.of({ $el: $('.js-storeselectfield') })
//.render(renderListView(storeslist))


//let calendarSf = Selectfield.of({ $el: $('.js-calendar') })
//.render(renderDatePickerView(new Date()))


let goodsTpl = goods => $('.js-order-store-goods-tpl')
let storesTpl = store => `
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
              <tbody class="js-order-store-goods">
                <tr class="js-order-store-goods-tpl">
                  <td>1</td>
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
                    <div class="order-store-prod">
                      <div class="order-store-prodpic">
                        <img alt="" src="/images/pic.png" />
                      </div>
                      <div class="order-store-proddetail">
                        PC1545 标准箱 【规格1：100x200x300】
                      </div>
                    </div>
                  </td>
                  <td>10,000</td>
                  <td>个</td>
                  <td>1.00</td>
                  <td>100.00</td>
                  <td>
                    <div class="order-store-note">
                      <div class="order-store-notecreate js-order-store-note">
                        添加
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
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
                        <div class="order-store-address js-order-store-address">
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
                        <div class="order-store-total">1,520.99</div>
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
                          <input type="text" value="0.00" class="order-store-other" />
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


/**
 * 商品
 *
 * 隶属于仓库 goodslist[]
 *
 * @class
 */
class Goods {
  constructor(opts) {
    let {
      order,
      id,
      pic,
      spec,
      count,
      unit,
      price,
      note
    } = opts

    this.id    = id
    this.pic   = pic
    this.spec  = spec
    this.count = count
    this.unit  = unit
    this.price = price
    this.note  = note

    this.init()

  }
  init() {

    this.event()
  }

  event() {


  }

  static tpl(goods) {
    $('.js-order-store-goods-tpl')
  }

}

class Store {
  constructor(opts) {

    let {
      id,
      name,
      date,
      addr,
      contact,
      total,
      other,
      goodslist
    } = opts

    this.id    = id
    this.name  = name
    this.date  = typeof date === 'string' ? new Date(date) : date
    this.addr  = addr
    this.contact = contact
    this.total = total
    this.other = other
    this.goodslist = goodslist || []

    this.uuid = 'store' + Date.now()

    this.$el = $(Store.tpl(this))

    this.init()

  }


  init() {

    // 初始化日历
    this.$calendar = this.$el.find('.js-calendar')
    this.calendar = Selectfield.of({ $el: this.$calendar })
    this.calendar.render(renderDatePickerView(this.date))


    // 初始化仓库名称
    this.$autocomplete = this.$el.find('.autocomplete')
    this.autocomplete = AutoComplete.of({ $el: this.$autocomplete })


    // 初始化仓库地址
    let $addr = this.$addr = this.$el.find('.js-order-store-address')
    this.autocomplete.on('autocomplete.export', function(evt, data) {
      $addr.text(data.value)
    })

    // 初始化收获联系人信息
    this.$contact = this.$el.find('.js-order-store-contact')
    this.setAddr(this.contact)

    this.$modal = this.$el.find('.js-modal-trigger-contact')
    let modal = this.modal = Modal.of({ $el: $('.js-modal-contact') })
    //this.modal.actionHandle1 = this.modalHandle.bind(this)
    //this.modal.addActionHandle(this.uuid)(1, this.modalHandle.bind(this))
    let modalHandle = this.modalHandle.bind(this)
    this.$modal.on('click.store.modal', function() {
      modal.show(modalHandle)
    })

    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)
    this.event()
  }

  getRemoveHandle() {
    return this.removeHandle
  }

  modalHandle(md) {
    let user  = md.findField('contactUser').val()
    let phone = md.findField('contactPhone').val()

    this.setAddr({ user: user, phone: phone }, md.hide.bind(md))
  }

  event() {
    let {
      $el,
      trigger,
      on,
      id,
      modal,
      getRemoveHandle,
      setAddr
    } = this

    getRemoveHandle = getRemoveHandle.bind(this)
    setAddr = setAddr.bind(this)

    on('click.storenote', '.js-order-store-note', function() {
      console.log('note')
    })
    on('click.removerow', '.js-order-store-removerow', function() {
      let removeHandle = getRemoveHandle()
      removeHandle && removeHandle(id, $el.remove.bind($el))
      trigger('store.remove', id)
    })
  }

  getVal() {}

  setAddr({ user, phone }, cb) {
    this.addr = { user: user, phone: phone }
    this.$contact.text(user + ' ' + phone)
    cb && cb()
    return this
  }

  static tpl(store) {
    return storesTpl(store)
  }

  static of(opts) {
    return new Store(opts)
  }

  static defaultStore() {
    return {
      id: Date.now()
    }
  }
}


/**
 * 仓库数据 容器
 */
class Stores {
  constructor({ $el, stores = [] }) {

    this.$el    = $el
    this.stores = stores.map(Store.of)

    this.init()
  }

  init() {
    this.$stores = this.$el.find('.js-order-stores')
    this.$stores.empty()
    this.stores.forEach(this.addStore.bind(this))

    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)
    this.event()
  }

  event() {

    // 创建仓库
    this.on('click.storecreate', '.js-order-action-create', function() {
      console.log('add')
    })
  }


  getVal() {}


  /**
   * 添加一个仓库
   */
  addStore(store) {
    store.removeHandle = this.removeStore.bind(this)
    store.$el.appendTo(this.$stores)
    return this
  }

  removeStore(id, cb) {
    console.log(id)
    let idx = this.stores.findIndex(store => store.id === id)
    this.stores.splice(idx, idx + 1)
    cb && cb()
  }

  static of(opts) {
    return new Stores(opts)
  }
}


AutoComplete.initDatas([
  { id: 1, value: '华南仓' },
  { id: 2, value: '北京仓' },
  { id: 3, value: '太原仓' },
  { id: 4, value: '仓' },
])

let stores = Stores.of({
  $el: $('.js-order-stores-container'),
  stores: [{
    id: 1,
    name: 'store',
    date: new Date(),
    addr: '华北仓库（山西省太原市万柏林区）',
    contact: {
      user: '王小明',
      phone: '15515551555'
    },
    total: parseFloat(1520.99),
    other: parseFloat(0.00),
    goodslist: []
  },{
    id: 2,
    name: 'store',
    date: new Date(),
    addr: '华北仓库（山西省太原市万柏林区）',
    contact: {
      user: '王小明',
      phone: '15515551555'
    },
    total: parseFloat(1520.99),
    other: parseFloat(0.00),
    goodslist: []
  }]
})

console.log(stores)

//AutoComplete.of({ $el: $('.autocomplete') })
