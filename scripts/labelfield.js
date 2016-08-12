import $ from 'jquery'

export const LabelFieldTpl = _ => `
  <div class="js-labelfield">
    <input type="text" name="label" class="js-labelfield-input" />
    <div class="js-labelfield-container"></div>
    <div class="js-labelfield-autocomplete">
      <div class="js-labelfield-creator"></div>
      <ul class="js-labelfield-memolist"></ul>
    </div>
  </div>
`

const LabelFieldLabelTpl = data => `
<div class="labelfield-label js-labelfield-label">
  <div class="labelfield-label-close js-labelfield-close">
    <span class="ic ion-ios-close-outline"></span>
  </div>
  ${data}
</div>
`

const LabelFieldListCreateTpl = data => `
<div class="labelfield-createor js-labelfield-creator-container">
  新增规格：
  <span class="js-labelfield-creator-content">
    ${data}
  </span>
</div>
`

const LabelFieldMemoTpl = data => `
<li>
  <div class="labelfield-memolistitem js-labelfield-memolistitem">${data}</div>
</li>
`

/**
 * Components/LabelField.
 */

class LabelField {
  constructor({ $el }) {
    this.$el = $el

    this.datastate = {}
    this.memorizelist = []

    this.init()
  }

  init() {
    let { $el } = this

    this.$input = $el.find('.js-labelfield-input')
    this.$list = $el.find('.js-labelfield-memolist')
    this.$container = $el.find('.js-labelfield-container')
    this.$creator = $el.find('.js-labelfield-creator')
    this.$ac = $el.find('.js-labelfield-autocomplete')

    this.trigger = $el.trigger.bind($el)
    this.on = $el.on.bind($el)

    this.event()
  }

  getVal() {
    return Object.values(this.datastate)
  }

  event() {


    let {
      $el,
      $input,
      $container,
      $list,
      $creator,
      $ac,
      datastate,
      memorizelist
    } = this


    function dropActived(n) {
      return Object.values(datastate).indexOf(n) === -1
    }

    function checkLabelExisting(data) {
      let out = false

      for(let k in datastate) {
        if(datastate[k] === data) out = true
      }

      return out
    }

    function checkMemoExisting(data) {
      let out = false

      for(let i = 0; i < memorizelist.length; i++) {
        if(memorizelist[i] === data) out = true
      }

      return out
    }


    /**
     * Components/LabelField InputField Changed.
     */

    $input.on('keyup', function(evt) {
      let isEnterKey = evt.which === 9 || evt.which === 13
      let isDirectionKey = evt.which === 38 || evt.which === 40
      let val = $(this).val().trim()

      if(isEnterKey && val) $el.trigger('labelfield.create', val)
      if(isDirectionKey) {
        $el.trigger('labelfield.activelist', evt.which)
      } else {
        $el.trigger('labelfield.buildmemolist')
      }

      $el.trigger('labelfield.creator', val)
    })


    /**
     * Components/LabelField Toggle Autocomplete.
     */

    $input.on('focusin focusout', function(evt) {
      setTimeout(_ => {
        $ac.css('display', evt.type === 'focusin' ? 'block' : 'none')
      }, 100)
    })


    /**
     * Components/LabelField Toggle & Update Creator.
     */

    $el.on('labelfield.creator', function(evt, data) {
      $creator.css('display', data ? 'block' : 'none')
      $creator.html($(LabelFieldListCreateTpl(data)))
    })


    /**
     * Components/LabelField Create Datastate.
     */

    $el.on('labelfield.create', function(evt, data) {

      $input.val('')
      setTimeout(_ => {
        $el.trigger('labelfield.creator', '')
      }, 0)

      if(checkLabelExisting(data)) return

      let label = {
        id: Date.now(),
        data: data
      }

      $(LabelFieldLabelTpl(data)).on('click', '.js-labelfield-close', function(evt) {
        $(evt.delegateTarget).remove()
        $el.trigger('labelfield.remove', label)
      }).appendTo($container)

      datastate[label.id] = label.data

      if(!checkMemoExisting(label.data)) memorizelist.push(label.data)

      $el.trigger('labelfield.export')

    })


    /**
     * Components/LabelField Remove Datastate.
     */

    $el.on('labelfield.remove', function(evt, data) {

      delete datastate[data.id]

      $el.trigger('labelfield.export')
    })


    /**
     * Components/LabelField Trun Active ListItem.
     */

    $el.on('labelfield.activelist', function(evt, key) {
      let li = $list.find('li')
      let curr = $list.find('li.active').index()

      li.removeClass('active')

      if(key === 38) $(li).eq(Math.max(0, curr - 1)).addClass('active')
      if(key === 40) $(li).eq(Math.min(li.length - 1, curr + 1)).addClass('active')
    })


    /**
     * Components/LabelField ReBuild MemoList.
     */

    $el.on('labelfield.buildmemolist', function() {
      $list.html(memorizelist.filter(dropActived).map(LabelFieldMemoTpl))
    })


    /**
     * Components/LabelField Trigger Click.
     */

    $el.on('click', '.js-labelfield-memolistitem', function() {
      $el.trigger('labelfield.create', $(this).text().trim())
    })

    $el.on('click', '.js-labelfield-creator-container', function() {
      let $ctx = $(this).find('.js-labelfield-creator-content')
      $el.trigger('labelfield.create', $ctx.text().trim())
    })


  }
}


LabelField.of = function(opt) {
  return new LabelField(opt)
}


export default LabelField
