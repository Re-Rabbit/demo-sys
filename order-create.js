import $ from 'jquery'
import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl, renderDatePickerView } from './scripts/selectfield.js'

import Table from './scripts/order-create-table.js'
import { Prod, Store } from './scripts/order-create-struct.js'


const tpl = _ => `
<div class="">
<div class="js-order-tables"></div>
<div class="js-order-action">
  <div class="js-order-action-create order-create-btn">
    <span class="ic ion-ios-add"></span>
    新增仓库
  </div>
</div>
</div>
`

/**
 * 仓库数据 容器
 */
class Container {
  constructor({ $con, $total, tables = [], prods = [], stores = [] }) {
    this.$con   = $con
    this.$total = $total
    this.prods  = prods.map(Prod.of)
    this.stores = stores.map(Store.of)
    this.tables = tables.map(table => Table.of(
      Object.assign({}, { prods: this.prods, stores: this.stores }, table)
    ))
    this.$el    = $(tpl())
    this.init()
  }

  init() {
    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)

    this
      .initTpl()
      .initTables()
      .event()
  }

  event() {
    // 创建仓库
    this.on('click.createtable', '.js-order-action-create', this.createTable.bind(this))
  }

  initTpl() {
    this.$el.appendTo(this.$con.empty())
    return this
  }


  computPrice() {
    let sum = this.tables.reduce((acc, curr) => {
      return acc + parseFloat(curr.other) + curr.rows.reduce((a2, c2) => {
        return a2 + parseFloat(c2.count) * parseFloat(c2.prod.value.price)
      }, 0)
    }, 0)
    this.$total.text(sum.toFixed(2))
    return sum
  }

  initTables() {
    this.$tables = this.$el.find('.js-order-tables').empty()
    this.tables  = this.tables.map(this.constTable.bind(this))
    return this
  }

  constTable(table) {
    let tb = table || Table.of({ prods: this.prods, stores: this.stores })
    tb.removeHandle = this.removeTable.bind(this)
    tb.handle = this.computPrice.bind(this)
    tb.$el.appendTo(this.$tables)
    return tb
  }

  /**
   * 添加一个表格 事件
   */
  createTable() {
    this.tables.push(this.constTable())
    return this
  }

  /**
   * 移除一个表格 注入
   */
  removeTable(table, cb) {
    let idx = this.tables.findIndex(t => t === table)
    this.tables.splice(idx, 1)
    cb && cb()
  }

  static of(opts) {
    return new Container(opts)
  }
}

function main() {

  /**
   * 初始化 下拉列表 用户选择
   *
   * 选择至少一个用户后，激活添加仓库操作
   */

  let usernames = [
    { id: 1, value: '名称1' },
    { id: 2, value: '名称2' },
    { id: 3, value: '名称3' },
  ]


  let store


  Selectfield.of({ $el: $('.js-username') })
    .render(renderListView(usernames))
    .on('selectfield.export', function(evt, data) {

      console.log(data)

      let prods = [
        {
          id: 1,
          unit: '个',
          price: 1.90,
          note: '',
          pic: '/images/pic.png',
          spec: 'PC1545 标准箱 【规格1：100x200x300】'
        },
        {
          id: 2,
          unit: '箱',
          price: 2.10,
          note: '',
          pic: '/images/pic.png',
          spec: 'PC1545 标准箱 【规格1：100x200x300】'
        }
      ]

      let stores = [
        {
          id: 1,
          name: '华南仓',
          user: '王小明',
          phone: '12233334444',
          addr: '华南仓（华南仓地址）'
        },
        {
          id: 2,
          name: '北京仓',
          user: '王小明222',
          phone: '22233335555',
          addr: '北京仓（北京仓地址）'
        }
      ]


      store = Container.of({
        $con: $('.js-order-tables-container'),
        $total: $('.js-order-total'),
        prods: prods,
        stores: stores
      })

    })


  /**
   * 提交 导出仓库数据 订单备注信息
   */

  $('.js-order-action-submit').on('click', function() {

    // 订单备注
    let note = $('.js-order-note').val()

    console.log(note, store)
  })

}


//main()


/**
 * 值 回填
 */
function setVal() {

  $('.js-order-note').val('订单备注订单备注订单备注订单备注订单备注')


  let usernames = [
    { id: 1, value: '名称1' },
    { id: 2, value: '名称2' },
    { id: 3, value: '名称3' },
  ]

  Selectfield.of({ $el: $('.js-username') })
    .render(renderListView(usernames))
    .setVal(usernames[0])

  let prods = [
    {
      id: 1,
      unit: '个',
      price: 1.90,
      note: '',
      pic: '/images/pic.png',
      spec: 'PC1545 标准箱 【规格1：100x200x300】'
    },
    {
      id: 2,
      unit: '箱',
      price: 2.10,
      note: '',
      pic: '/images/pic.png',
      spec: 'PC8888 标准箱 【规格2：100x200x300】'
    }
  ]

  let stores = [
    {
      id: 1,
      name: '华南仓',
      user: '王小明',
      phone: '12233334444',
      addr: '华南仓（华南仓地址）'
    },
    {
      id: 2,
      name: '北京仓',
      user: '王小明222',
      phone: '22233335555',
      addr: '北京仓（北京仓地址）'
    }
  ]


  let store = Container.of({
    $con: $('.js-order-tables-container'),
    $total: $('.js-order-total'),
    prods: prods,
    stores: stores,
    tables: [
      {
        id: 1,
        date: '2016-05-10',
        other: 0.00,
        value: stores[1],
        user: 'wangyufei',
        phone: '10086',
        rows: [
          {
            note: '123',
            count: 2,
            value: prods[1]
          }
        ]
      }
    ]
  })

  console.log(store)
}

setVal()
