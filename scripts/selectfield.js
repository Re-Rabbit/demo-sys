import $ from 'jquery'
import Collapsible from './collapsible.js'



class Selectfield {
  constructor({ $el, speed = 'fast', uuid = 1, init = { id: 0, value: '' }, placeholder = '' }) {
    this.$el = $el
    this.speed = speed
    this.uuid = uuid
    this.placeholder = placeholder
    this.value = init

    this.state = 1  // 1.close 2.open

    this.init()
  }

  init() {
    let { $el, placeholder, value, setVal } = this

    this.$input = $el.find('.selectfield-field')
    this.$list = $el.find('.selectfield-optionslist')
    this.$placeholder = $el.find('.selectfield-placeholder')

    if(placeholder !== '') this.$placeholder.html(placeholder)

    if(this.value.id !== 0) setVal(value)

    this.trigger = $el.trigger.bind($el)
    this.on = $el.on.bind($el)
    this.event()
  }

  render(cb) {
    let { $list } = this
    if(typeof cb !== 'function') throw new Error('Not a function.')

    cb($list.empty(), this)

    return this
  }

  toggleState(state) {
    let stated = state || this.state
    this.state = stated === 1 ? 2 : 1
    this.trigger(stated === 2 ? 'selectfield.close' : 'selectfield.open')
  }


  setVal(data) {
    let { value, $input, $el, trigger } = this

    this.value = data
    this.$input.html(data.value)

    this.$el.find('.selectfield-option').removeClass('active')
    this.$el.find(`.selectfield-option[data-id="${data.id}"]`).addClass('active')

    trigger('selectfield.export', data)

    return this
  }

  getVal() {
    return this.value
  }

  getState() {
    return this.state
  }

  event() {
    let {
      $el,
      $input,
      $list,
      state,
      speed,
      value,
      uuid,
      toggleState,
      setVal,
      getVal,
      getState,
      trigger,
      on
    } = this

    toggleState = toggleState.bind(this)
    setVal = setVal.bind(this)
    getVal = getVal.bind(this)
    getState = getState.bind(this)

    $input.on('click.selectfield.trigger', function() {
      if(getState() === 2)
        trigger('selectfield.willclosed', getVal())

      toggleState()
    })

    $el.on('click.selectfield.option', '.selectfield-option', function() {
      let id = $(this).data('id')
      let value = $(this).data('value')
      let option = {
        id: id,
        value: value || $(this).html()
      }

      setVal(option)

      toggleState()
    })

    $(document).on('click.selectfield.close' + uuid, function(evt) {

      // Closed when click out of selectfield.
      if(!$(evt.target).parents('.selectfield').is($el) &&
         !$(evt.target).is($el)) {

        if(getState() === 2)
          trigger('selectfield.willclosed', getVal())

        toggleState(2)
      }
    })


    $el.on('selectfield.open', function() {
      $el.addClass('active')
      $input.addClass('active')
      $list.slideDown(speed)
    })

    $el.on('selectfield.close', function() {
      $el.removeClass('active')
      $input.removeClass('active')
      $list.slideUp(speed)
    })

  }
}


Selectfield.of = opts => new Selectfield(opts)

export default Selectfield


export function selectfieldApply($list) {
  return $list.toArray().map((n, idx) => Selectfield.of({ $el: $(n), uuid: idx }))
}


export const SelectfieldListViewTpl = data => `
<div class="selectfield-option selectfield-dd" data-id="${data.id}">
  ${data.value}
</div>
`

export const renderListView = datas => $list => {
  let out = datas.map(SelectfieldListViewTpl).join('')
  $list.append(out)
}


const SelectfieldTreeViewTpl = (data, depth) => isRender => `
<li>
<div class="treeview treeview-depth--${depth}">
  <div class="treeview-content ${isRender ? '' : 'selectfield-option'}" data-id="${data.id}">
    ${isRender ? `
    <div class="treeview-icon">
      <span class="ic ion-md-arrow-dropdown"></span>
    </div>
    ` : ''}
    ${data.value}
  </div>
  ${isRender ? `<ul class="treeview-list" data-id="${data.id}"></ul>` : ''}
</div>
</li>
`


export const _renderTreeView = tpl => datas => ($list, callback) => {
  let $view = $('<div class="treeview-container"></div>')

  datas = Array.isArray(datas) ? datas : [datas]

  datas.forEach(data => {
    ;(function recur(data, depth, pid) {
      let $target = pid ? $view.find(`.treeview-list[data-id="${pid}"]`) : $view

      if(!data.children || data.children.length === 0) {
        $target.append(tpl(data, depth)())
        return
      }

      $target.append(tpl(data, depth)(true))
      return data.children.map(n => recur(n, depth + 1 ,data.id))
    })(data, 0)
  })

  $view.appendTo($list).find('.treeview').toArray().map(n => {
    let $el = $(n).children('.treeview-list')
    let $trigger = $(n).children('.treeview-content')
    return Collapsible.of({ $el: $el, $trigger: $trigger })
  })

  if(callback && typeof callback === 'function')
    callback($view)
}


export const renderTreeView = _renderTreeView(SelectfieldTreeViewTpl)




import {
  makeCalendar,
  makeDP,
  showDP,
  showDP1,
  prevMM,
  nextMM,
  prevYY,
  nextYY,
  isSameDP,
  isTodayDP
} from './datepicker.js'


const SelectfieldDatePickerDateViewTpl = (isCurrent, currdp) => dp => `
<div class="datepicker-grid grid width--7-f">
  <div class="datepicker-cell datepicker-date ${isCurrent ? '': 'nomm'} ${isSameDP(currdp, dp) ? 'active' : ''} ${isTodayDP(dp) ? 'today' : ''}" data-id="${showDP(dp)}">${dp.DD}</div>
</div>
`

const SelectfieldDatePickerViewTpl = dp => `
<div class="datepicker">
  <div class="datepicker-header">请选择日期</div>
  <div class="datepicker-control-container">
    <span class="datepicker-yymm">2016年7月</span>
    <div class="datepicker-control datepicker-control-left datepicker-control-prevyy">
      <span class="ion-md-rewind"></span>
    </div>
    <div class="datepicker-control datepicker-control-left datepicker-control-left-2 datepicker-control-prevmm">
      <span class="ion-md-arrow-dropleft"></span>
    </div>
    <div class="datepicker-control datepicker-control-right datepicker-control-nextyy">
      <span class="ion-md-fastforward"></span>
    </div>
    <div class="datepicker-control datepicker-control-right datepicker-control-right-2 datepicker-control-nextmm">
      <span class="ion-md-arrow-dropright"></span>
    </div>
  </div>

  <div class="datepicker-body">

    <div class="datepicker-week row">
      <div class="datepicker-grid grid width--7-f">
        <div class="datepicker-cell">一</div>
      </div>
      <div class="datepicker-grid grid width--7-f">
        <div class="datepicker-cell">二</div>
      </div>
      <div class="datepicker-grid grid width--7-f">
        <div class="datepicker-cell">三</div>
      </div>
      <div class="datepicker-grid grid width--7-f">
        <div class="datepicker-cell">四</div>
      </div>
      <div class="datepicker-grid grid width--7-f">
        <div class="datepicker-cell">五</div>
      </div>
      <div class="datepicker-grid grid width--7-f">
        <div class="datepicker-cell">六</div>
      </div>
      <div class="datepicker-grid grid width--7-f">
        <div class="datepicker-cell">日</div>
      </div>
    </div>

    <div class="datepicker-dates row"></div>
  </div>

  <div class="datepicker-footer">
    <span class="datepicker-action-today">今天</span>
    <div class="datepicker-action-check">
      <button class="button button-primary button-small js-datepicker-ok">确定</button>
    </div>
  </div>
</div>
`

export const renderDatePickerView = date => ($list, sf) => {
  let dp = makeDP(date)
  let $out = $(SelectfieldDatePickerViewTpl(dp))
  let $dpbody = $out.find('.datepicker-dates')
  let $dptitle = $out.find('.datepicker-yymm')
  let $dpheader = $out.find('.datepicker-header')

  $out
    .on('datepicker.makedates', function(evt, dp) {
      let [prev, curr, next] = makeCalendar(dp)
      let dom = ''
      dom += prev.map(SelectfieldDatePickerDateViewTpl(false, dp)).join('')
      dom += curr.map(SelectfieldDatePickerDateViewTpl(true, dp)).join('')
      dom += next.map(SelectfieldDatePickerDateViewTpl(false, dp)).join('')
      $dpbody.html(dom)
      $dptitle.html(showDP1(dp))
    })
    .on('click', '.datepicker-control-prevmm', function() {
      dp = prevMM(dp)
      $out.trigger('datepicker.makedates', dp)
    })
    .on('click', '.datepicker-control-nextmm', function() {
      dp = nextMM(dp)
      $out.trigger('datepicker.makedates', dp)
    })
    .on('click', '.datepicker-control-prevyy', function() {
      dp = prevYY(dp)
      $out.trigger('datepicker.makedates', dp)
    })
    .on('click', '.datepicker-control-nextyy', function() {
      dp = nextYY(dp)
      $out.trigger('datepicker.makedates', dp)
    })
    .on('click', '.datepicker-date', function(evt) {
      if(!$(this).hasClass('nomm')) {
        $out.find('.datepicker-date').removeClass('active')
        $(this).addClass('active')
      } else {
        let date = new Date($(this).data('id'))
        dp = makeDP(date)
        $out.trigger('datepicker.makedates', dp)
      }
    })
    .on('click', '.datepicker-dates', function(evt) {
      evt.stopPropagation()
    })
    .on('click', '.js-datepicker-ok', function() {
      let date = $out.find('.datepicker-date.active').data('id')
      if(date) {
        dp = makeDP(new Date(date))
        sf.setVal({ id: showDP(dp), value: showDP(dp) })
      }
      sf.toggleState()
    })
    .on('click', '.datepicker-action-today', function() {
      dp = makeDP(new Date())
      $out.trigger('datepicker.makedates', dp)
    })
    .trigger('datepicker.makedates', dp)
    .appendTo($list)

  sf.setVal({ id: showDP(dp), value: showDP(dp) })
  sf.on('selectfield.export', function(evt, data) {
    $dpheader.text(data.value)
  })
}
