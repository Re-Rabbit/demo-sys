import $ from 'jquery'
import Pagination from './scripts/pagination.js'


class Production {
  constructor(opts) {
    let {
      id,
      pic,
      code,
      content,
      unit,
      price,
      price1,
      store,
      state
    } = opts

    this.id      = id
    this.pic     = pic
    this.code    = code
    this.content = content
    this.unit    = unit
    this.price   = price
    this.price1  = price1
    this.store   = store
    this.state   = state
  }
}

Production.of = opts => new Production(opts)


const productionTpl = (prod) => `
        <tr>
          <td>
            <div class="list-checkbox">
              <input name="" type="checkbox" class="" value=""/>
            </div>
          </td>
          <td>
            <div class="row">
              <div class="grid width--3">
                <div class="list-pic">
                  <img alt="" src="/images/${prod.pic}"/>
                </div>
              </div>
              <div class="grid width--9">
                <div class="list-id">${prod.code}</div>
                <div class="list-content">
                  ${prod.content}
                </div>
              </div>
            </div>
          </td>
          <td class="list-nth-1">${prod.unit}</td>
          <td class="list-nth-1">￥${prod.price}</td>
          <td class="list-nth-1">￥${prod.price1}</td>
          <td class="list-nth-1">${prod.store}</td>
          <td class="list-nth-1">${prod.state}</td>
          <td>
            <div class="list-actions">
              <div class="list-action">
                <a href="#">修改</a>
              </div>
              <div class="list-action">
                <a href="#">删除</a>
              </div>
            </div>
          </td>
        </tr>
`

const productionView = (prod) => {
  let tpl = productionTpl(prod)
  let $tpl = $(tpl)

  $tpl.on('click.prodremove', function() {
    console.log(prod.id)
  })

  return $tpl
}

const appendToContainer = $con => views => {
  $con.empty()
  views.forEach(n => n.appendTo($con))
}

const sendRequest = (page) => {

  /**

     商品列表

     GET /

     200:

     {
       msg: 'ok',
       code: '200',
       data: [{
         id: 1,
         code: 'PC12345',
         content: '唯品会-007 【规格1：1：100*200*300，规格2：200*100*300】',
         unit: '件',
         price: '100.000',
         price1: '120.000',
         store: 600,
         state: '上架'
       }]
     }

  */
  console.log(page)

  let rd = Math.floor(Math.random() * 10) + 1
  let prods = Array(rd).fill({
    id: 1,
    code: 'PC12345',
    content: '唯品会-007 【规格1：1：100*200*300，规格2：200*100*300】',
    unit: '件',
    price: '100.000',
    price1: '120.000',
    store: 600,
    state: '上架'
  })


  return $.get('')
    .then(_ => prods)
    .then(prods => prods.map(Production.of).map(productionView))
    .then(appendToContainer($('.js-listcontainer')))

}




const main = _ => {

  sendRequest()
    .then(data => {
      Pagination.of({ $el: $('.js-pagination'), sum: 10, curr: 5 })
        .on('pagination.export', function(evt, page) {
          sendRequest(page)
        })
    })
}


main()
