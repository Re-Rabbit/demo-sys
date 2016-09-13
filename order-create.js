import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl, renderDatePickerView } from './scripts/selectfield.js'

import Modal from './scripts/modal.js'
import AutoComplete from './scripts/autocomplete.js'

  //.setVal(listViewData[0])

//let storeSf = Selectfield.of({ $el: $('.js-storeselectfield') })
//.render(renderListView(storeslist))


//let calendarSf = Selectfield.of({ $el: $('.js-calendar') })
//.render(renderDatePickerView(new Date()))


let goodsTpl = goods => `
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
                      <div class="field selectfield-field order-store-prod-field"></div>
                      <div class="selectfield-optionslist order-store-prod-list"></div>
                    </div>
                  </td>
                  <td class="">
                     <div class="js-order-store-prodcount">
                       <input name="prodCount" type="number" class="field" value="${goods.count}" />
                     </div>
                  </td>
                  <td>${goods.unit}</td>
                  <td>${goods.price}</td>
                  <td class="js-order-store-goodsprice">0.00</td>
                  <td>
                    <div class="order-store-note">
                      <div class="order-store-notecreate js-modal-trigger-note">
                        添加
                      </div>
                    </div>
                  </td>
                </tr>
`

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
              <tbody class="js-order-store-goods"></tbody>
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



class Prod {
  constructor(opts) {

    let {
      id,
      pic,
      spec,
      unit,
      price,
      count,
    } = opts

    this.id    = id
    this.pic   = pic
    this.spec  = spec
    this.unit  = unit
    this.price = price
    this.count = count || 0

    this.value = Prod.tpl(this)
  }

  computSum(cb) {
    cb && cb(this.count * this.price)
    return this
  }

  static tpl(prod) {
    let tpl = prod => `
<div class="order-store-prod">
  <div class="order-store-prodpic">
    <img alt="" src="${prod.pic}" />
  </div>
  <div class="order-store-proddetail">
    ${prod.spec}
  </div>
</div>
`
    return tpl(prod)
  }
  static of(opts) {
    return new Prod(opts)
  }
}


class Store {
  constructor(opts) {
    let { id, pic, spec, unit, price } = opts
    this.id    = id
    this.pic   = pic
    this.spec  = spec
    this.unit  = unit
    this.price = price
  }

  static of(opts) {
    return new Store(opts)
  }
}




/**
 * 商品
 *
 * creategoodslist[]
 *
 * @class
 */
class TableRow {
  constructor(opts) {
    let {
      id,
      pic,
      spec,
      count,
      unit,
      price,
      note,
      prods
    } = opts

    this.id    = id
    this.pic   = pic
    this.spec  = spec
    this.count = count
    this.unit  = unit
    this.price = price
    this.note  = note

    this.prods = prods

    this.$el = $(TableRow.tpl(this))

    this.init()

  }
  init() {

    // 初始化 下拉框 视图
    let prods = [
      Prod.of({
        id: 1,
        unit: '个',
        price: '1.00',
        note: '',
        pic: '/images/pic.png',
        spec: 'PC1545 标准箱 【规格1：100x200x300】'
      }),
      Prod.of({
        id: 2,
        unit: '个',
        price: '2.00',
        note: '',
        pic: '/images/pic.png',
        spec: 'PC222 标准箱 【规格2：100x200x300】'
      })
    ]
    this.$spec   = this.$el.find('.js-order-store-prodselectfiled')
    this.prodsf  = Selectfield.of({ $el: this.$spec })
    this.prodsf.render(renderListView(prods))
    this.prodsf.setVal(prods[0])



    // 初始化 弹出框 添加/修改备注
    let modal       = this.modal = Modal.of({ $el: $('.js-modal-note') })
    this.$modal     = this.$el.find('.js-modal-trigger-note')
    let modalHandle = this.modalHandle.bind(this)
    let getNote     = this.getNote.bind(this)
    this.$modal.on('click.tablerow.modal', function() {
      let note = getNote()
      modal.findField('prodNote').val(note)
      modal.show(modalHandle)
    })


    // 初始化 商品数量
    this.$count = this.$el.find('.js-order-store-prodcount')


    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)
    this.event()
  }

  modalHandle() {
    
  }
  getNote() {
    return this.note
  }

  getVal() {
    
  }

  computPrice() {
    return this.count * this.price
  }

  getRemoveHandle() {
    return this.removeHandle
  }

  getCreateHandle() {
    return this.createHandle
  }

  event() {

    let {
      id,
      $el,
      on,
      getRemoveHandle,
      getCreateHandle
    } = this

    getRemoveHandle = getRemoveHandle.bind(this)
    getCreateHandle = getCreateHandle.bind(this)

    on('click.store.removerow', '.js-store-action-removerow', function() {
      let removeHandle = getRemoveHandle()
      removeHandle && removeHandle(id, $el.remove.bind($el))
    })

    on('click.store.createrow', '.js-store-action-createrow', function() {
      let createHandle = getCreateHandle()
      createHandle && createHandle(id)
    })
  }

  static tpl(goods) {
    return goodsTpl(goods)
  }

  static of(opts) {
    return new TableRow(opts)
  }


  static defaultTableRow() {
    return TableRow.of({
      id: Date.now(),
      count: 1,
      unit: '个',
      price: '1.00',
      note: '',
      pic: '/images/pic.png',
      spec: 'PC1545 标准箱 【规格1：100x200x300】'
    })
  }

}

class Table {
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
    this.goodslist = (goodslist || []).map(TableRow.of)

    this.uuid = 'store' + Date.now()

    this.$el = $(Table.tpl(this))

    this.init()

  }


  init() {

    // 初始化日历
    this.$calendar = this.$el.find('.js-calendar')
    this.calendar  = Selectfield.of({ $el: this.$calendar })
    this.calendar.render(renderDatePickerView(this.date))


    // 初始化仓库名称
    this.$autocomplete = this.$el.find('.autocomplete')
    this.autocomplete  = AutoComplete.of({ $el: this.$autocomplete })


    // 初始化仓库地址
    let $addr = this.$addr = this.$el.find('.js-order-store-address')
    this.autocomplete.on('autocomplete.export', function(evt, data) {
      $addr.text(data.value)
    })


    // 初始化收获联系人信息
    this.$contact = this.$el.find('.js-order-store-contact')
    this.setAddr(this.contact)


    // 初始化弹出框
    let modal = this.modal = Modal.of({ $el: $('.js-modal-contact') })
    this.$modal     = this.$el.find('.js-modal-trigger-contact')
    let modalHandle = this.modalHandle.bind(this)
    let getContact  = this.getContact.bind(this)
    this.$modal.on('click.store.modal', function() {
      let contact = getContact()
      modal.findField('contactUser').val(contact.user)
      modal.findField('contactPhone').val(contact.phone)
      modal.show(modalHandle)
    })


    // 初始化商品
    this.$goods = this.$el.find('.js-order-store-goods')
    this.goodslist.forEach(this.addTableRow.bind(this))
    this.resetTableIdx()


    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)
    this.event()
  }

  addTableRow(goods) {
    goods.removeHandle = this.removeTableRow.bind(this)
    goods.createHandle = this.createTableRow.bind(this)
    goods.$el.appendTo(this.$goods)

    return this
  }

  checkTableRowlistLength() {
    return this.goodslist.length === 1
  }

  resetTableIdx() {
    let goodslist = this.goodslist
    for(let i = 0; i < goodslist.length; i++) {
      goodslist[i].$el.find('td:first').text(i + 1)
    }
  }

  createTableRow(id) {
    let newTableRow = TableRow.defaultTableRow()
    this.goodslist.push(newTableRow)
    this.addTableRow(newTableRow)
    this.resetTableIdx()
    return this
  }

  removeTableRow(id, cb) {
    if(this.checkTableRowlistLength()) {
      alert('最少保留一项')
      return
    }

    let idx = this.goodslist.findIndex(goods => goods.id === id)
    this.goodslist.splice(idx, 1)
    cb && cb()
    this.resetTableIdx()

    return this
  }

  getRemoveHandle() {
    return this.removeHandle
  }

  getContact() {
    return this.contact
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
    this.contact = { user: user, phone: phone }
    this.$contact.text(user + ' ' + phone)
    cb && cb()
    return this
  }

  static tpl(store) {
    return storesTpl(store)
  }

  static of(opts) {
    return new Table(opts)
  }

  static defaultTable() {
    return Table.of({
      id: Date.now(),
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
    })
  }
}


/**
 * 仓库数据 容器
 */
class Container {
  constructor({ $el, stores = [], prods = [] }) {

    this.$el    = $el
    this.stores = stores.map(Table.of)
    this.prods

    this.init()
  }

  init() {
    this.$stores = this.$el.find('.js-order-stores')
    this.$stores.empty()
    this.stores.forEach(this.addTable.bind(this))

    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)
    this.event()
  }

  event() {

    let {
      addTable
    } = this

    addTable = addTable.bind(this)

    // 创建仓库
    this.on('click.storecreate', '.js-order-action-create', function() {
      addTable(Table.defaultTable())
    })
  }


  getVal() {}


  /**
   * 添加一个仓库
   */
  addTable(store) {
    this.stores.push(store)
    store.removeHandle = this.removeTable.bind(this)
    store.$el.appendTo(this.$stores)
    return this
  }

  removeTable(id, cb) {
    let idx = this.stores.findIndex(store => store.id === id)
    this.stores.splice(idx, 1)
    cb && cb()
  }

  static of(opts) {
    return new Container(opts)
  }
}


AutoComplete.initDatas([
  { id: 1, value: '华南仓' },
  { id: 2, value: '北京仓' },
  { id: 3, value: '太原仓' },
  { id: 4, value: '仓' },
])



let stores = Container.of({
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
    goodslist: [{
      id: 1,
      count: 1,
      unit: '个',
      price: '1.00',
      note: '',
      pic: '/images/pic.png',
      spec: 'PC1545 标准箱 【规格1：100x200x300】'
    },{
      id: 2,
      count: 2,
      unit: '个',
      price: '1.00',
      note: '',
      pic: '/images/pic.png',
      spec: 'PC1545 标准箱 【规格1：100x200x300】'
    },{
      id: 3,
      count: 3,
      unit: '个',
      price: '1.00',
      note: '',
      pic: '/images/pic.png',
      spec: 'PC1545 标准箱 【规格1：100x200x300】'
    }]
  }]
})



let usernames = [
  { id: 1, value: '名称1' },
  { id: 2, value: '名称2' },
  { id: 3, value: '名称3' },
]

let prods = [
  Prod.of({
    id: 1,
    unit: '个',
    price: '1.00',
    note: '',
    pic: '/images/pic.png',
    spec: 'PC1545 标准箱 【规格1：100x200x300】'
  }),
  Prod.of({
    id: 2,
    unit: '个',
    price: '1.00',
    note: '',
    pic: '/images/pic.png',
    spec: 'PC1545 标准箱 【规格1：100x200x300】'
  })
]

let usernameSelectfield = Selectfield.of({ $el: $('.js-username') })
    .render(renderListView(usernames))
    .on('selectfield.export', function() {

    })
