import $ from 'jquery'




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
    let { value, $input, $el } = this

    this.value = data
    this.$input.html(data.value)

    this.$el.find('.selectfield-option').removeClass('active')
    this.$el.find(`.selectfield-option[data-id="${data.id}"]`).addClass('active')


    return this
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
      trigger,
      on
    } = this

    toggleState = toggleState.bind(this)
    setVal = setVal.bind(this)


    $input.on('click.selectfield.trigger', function() {
      toggleState()
    })

    $el.on('click.selectfield.option', '.selectfield-option', function() {
      let id = $(this).data('id')

      let option = {
        id: id,
        value: $(this).text().trim()
      }
      console.log(option)
      setVal(option)

      toggleState()
    })

    $(document).on('click.selectfield.close' + uuid, function(evt) {

      // Closed when click out of selectfield.
      if(!$(evt.target).parents('.selectfield').is($el)
         && !$(evt.target).is($el))

        toggleState(2)
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


const SelectfieldTreeViewTpl = (data, depth) => content => `
<div class="treeview treeview-depth--${depth}">
  <div class="treeview-content" data-id="${data.id}">
    <div class="treeview-icon">
      <span class="ic ion-md-arrow-dropdown"></span>
    </div>
    ${data.value}
  </div>
  <ul class="treeview-list">
    ${content}
  </ul>
</div>
`

export function renderTreeView(datas) {
  //return _ => datas.map(SelectfieldListViewTpl)

  return _ => (function recur(data, depth) {
    console.log(data, depth)
    if(!data.children) return data
    return data.children.map(n => recur(n, depth + 1))
  })(datas, 0)
}
