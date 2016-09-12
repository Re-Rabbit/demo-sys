import $ from 'jquery'

class AutoComplete {

  static initdatas = []

  constructor({ $el, datas = [], init }) {
    this.$el = $el
    this.datas = datas

    this.value = init // { id: 0, value: 0 }
    this.matchedList = []
    this.cache = {}
    this.uuid = 'autocomplete' + Date.now()
    this.state = 1 // 1. close 2.open

    this.init()
  }

  init() {
    this.$field = this.$el.find('.autocomplete-field')
    this.$list  = this.$el.find('.autocomplete-list')

    if(AutoComplete.initdatas.length) {
      let inits  = AutoComplete.initdatas
      this.datas = inits.concat(this.datas)
    }
    if(!this.value) this.value = this.datas[0]

    this.trigger = this.$el.trigger.bind(this.$el)
    this.off     = this.$el.off.bind(this.$el)
    this.on      = this.$el.on.bind(this.$el)

    this.render(this.datas)
    this.setVal()

    this.event()
  }

  event() {
    let {
      datas,
      uuid,
      $el,
      $field,
      $list,
      on,
      trigger,
      setVal,
      render,
      matchlist,
      toggleState
    } = this

    setVal = setVal.bind(this)
    render = render.bind(this)
    matchlist = matchlist.bind(this)
    toggleState = toggleState.bind(this)


    // 重新渲染列表
    on('keyup.autocomplete.changed', '.autocomplete-field', function(evt) {
      let isDirectionKey = evt.which === 38 || evt.which === 40
      let val = $(this).val().trim()

      if(isDirectionKey) {

        var $items = $list.find('.autocomplete-listitem')
        var len = $items.length
        var idx = $items.filter(function() {
          return $(this).hasClass('active')
        }).index()
        var needUpdateIdex

        if(evt.which === 40) {
          needUpdateIdex = Math.min(idx + 1, len - 1)
        }

        if(evt.which === 38) {
          needUpdateIdex = Math.max(0, idx - 1)
        }

        $items.removeClass('active')
        let $checked = $items.eq(needUpdateIdex)
        $checked.addClass('active')

        let id = $checked.data('id')
        setVal(datas.find(data => data.id === id), true)

      } else {
        render(val ? matchlist(val) : datas)
      }

    })

    // 展开列表
    on('focusin', '.autocomplete-field', function(evt) {
      toggleState(1)
    })

    // 关闭列表
    on('focusout', '.autocomplete-field', function(evt) {
      setTimeout(_ => {
        if(!matchlist($(this).val()).length) {
          setVal(this.value)
          render(datas)
        }
        toggleState(2)
      }, 100)
    })
  }

  getVal() {
    return this.value
  }

  toggleState(flag) {
    let isOpen = flag === 1

    this.$field.parent().toggleClass('active', flag === 1)
    this.$list.toggleClass('active', flag === 1)

    this.state = flag === 2 ? 1 : 2

    return this
  }


  setVal(data, isKeep) {
    if(data) {
      this.value = data
      this.$field.val(data.value)
      this.$list.find('.autocomplete-listitem').removeClass('active')
      this.$list.find(`.autocomplete-listitem[data-id="${data.id}"]`).addClass('active')
    } else {
      this.$field.val(this.value.value)
    }

    if(!isKeep)
      this.toggleState(2)

    this.trigger('autocomplete.export', this.getVal())

    return this
  }

  matchlist(str) {
    if(!str) return this.datas
    let regex = new RegExp(`${str}`)
    return this.datas.filter(data => regex.test(data.value))
  }

  render(list) {
    let { $list, setVal, value } = this

    setVal = setVal.bind(this)

    $list.empty()

    if(!list.length) {
      $list.append(AutoComplete.emptyTpl())
    }

    list.forEach(data => {
      $(AutoComplete.tpl(data))
        .on('click', function() {
          setVal(data)
        })
        .appendTo($list)
    })

    $list.find(`.autocomplete-listitem[data-id="${value.id}"]`).addClass('active')

    return this
  }

  static tpl(data) {
    return `
    <div class="selectfield-option selectfield-dd autocomplete-listitem" data-id="${data.id}">
      ${data.value}
    </div>
`
  }
  static emptyTpl() {
    return `
    <div class="selectfield-option selectfield-dd autocomplete-listitem">
      未找到仓库
    </div>
`
  }

  static initDatas(datas) {
    AutoComplete.initdatas = datas
  }

  static of(opts) {
    return new AutoComplete(opts)
  }
}

export default AutoComplete
