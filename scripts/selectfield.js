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
        value: value || $(this).text().trim()
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




import { makeCalendar, makeDP, showDP, showDP1 } from './datepicker.js'


const SelectfieldDatePickerDateViewTpl = dp => `
<div class="datepicker-grid grid width--7-f" data-id="${showDP(dp)}">
  <div class="datepicker-cell selectfield-option" data-id="${showDP(dp)}" data-value="${showDP(dp)}">${dp.DD}</div>
</div>
`

const SelectfieldDatePickerViewTpl = dp => `
<div class="datepicker">
  <div class="datepicker-header">请选择日期</div>
  <div class="datepicker-control-container">
    <span class="datepicker-yymm">2016年7月</span>
    <div class="datepicker-control datepicker-control-left datepicker-control-left-1">
      <span class="ion-md-rewind"></span>
    </div>
    <div class="datepicker-control datepicker-control-left datepicker-control-left-2">
      <span class="ion-md-arrow-dropleft"></span>
    </div>
    <div class="datepicker-control datepicker-control-right datepicker-control-right-1">
      <span class="ion-md-fastforward"></span>
    </div>
    <div class="datepicker-control datepicker-control-right datepicker-control-right-2">
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

    <div class="datepicker-dates row">
      ${makeCalendar(dp).map(SelectfieldDatePickerDateViewTpl).join('')}
    </div>
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
  let out = SelectfieldDatePickerViewTpl(dp)
  $(out)
    .on('click', '.datepicker-control-left-2', function() {
      
    })
    .appendTo($list)
}
