import $ from 'jquery'
import Selectfield from './selectfield.js'


class Pagination {
  constructor({ $el, size = 0, curr = 1, sum = 0 }) {
    this.$el = $el
    this.sum = sum
    this.curr = curr
    this.size = size // 0. 10, 1. 20, 2. 30, 3. 40

    this.init()
  }

  init() {
    let { $el, size, curr, sum } = this

    this.$prev = $el.find('.js-pagination-prev')
    this.$next = $el.find('.js-pagination-next')
    this.$curr = $el.find('.js-pagination-curr')
    this.$sum  = $el.find('.js-pagination-sum')
    this.$size = $el.find('.js-pagination-selectfield')


    // selectfield initial.
    this.selectfield = Selectfield.of({ $el: this.$size })
      .render(renderPaginationOptionListView(PaginationDefaultOptionsListViewData))
      .setVal(PaginationDefaultOptionsListViewData[size])

    this.trigger = $el.trigger.bind($el)
    this.on = $el.on.bind($el)

    this.setCurr(curr)
    this.setSum(sum)

    this.event()
  }

  setSum(sum) {
    this.sum = sum
    this.$sum.text(sum)
    this.trigger('pagination.changed')
    return this
  }

  setCurr(curr) {
    this.curr = curr
    this.$curr.val(curr)
    this.trigger('pagination.changed')
    return this
  }

  setSize(size) {
    this.size = size
    this.trigger('pagination.changed')
    return this
  }

  getVal() {
    return {
      size: this.size,
      curr: this.curr,
      sum: this.sum
    }
  }

  event() {

    let {
      $el,
      $curr,
      $prev,
      $next,
      selectfield,
      setSize,
      setCurr,
      getVal,
      on,
      trigger
    } = this

    setSize = setSize.bind(this)
    setCurr = setCurr.bind(this)
    getVal = getVal.bind(this)


    this.selectfield.on('selectfield.export', function(evt, data) {
      setSize(data.id)
    })

    $curr.on('keyup.pagination.currchenged', function() {
      let val = parseInt($(this).val())
      if(!isNaN(val)) setCurr(val)
    })

    $prev.on('click.pagination.prev', function() {
      let { curr, sum } =  getVal()
      setCurr(Math.max(1, curr - 1))
    })

    $next.on('click.pagination.next', function() {
      let { curr, sum } =  getVal()
      setCurr(Math.min(sum, curr + 1))
    })

    on('pagination.changed', function() {
      trigger('pagination.export', getVal())
    })

  }
}


Pagination.of = opts => new Pagination(opts)

export default Pagination


const PaginationOptionListViewTpl = data => `
<div class="selectfield-option pagination-option selectfield-dd" data-id="${data.id}">
  ${data.value}
</div>
`

export const PaginationDefaultOptionsListViewData = [
  { id: 10, value: '10条 / 页' },
  { id: 20, value: '20条 / 页' },
  { id: 30, value: '30条 / 页' },
  { id: 40, value: '40条 / 页' }
]

export const renderPaginationOptionListView = datas => ($list, selectfield) => {
  let out = datas.map(PaginationOptionListViewTpl).join('')
  $list.append(out)
}
