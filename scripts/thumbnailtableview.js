function xprod1(a) {
  if(a.length === 0) a = ['']
  let i = 0
  let ilen = a.length
  let result = []
  while (i < ilen) {
    result[result.length] = [a[i]]
    i += 1
  }
  return result
}

function xprod2(a, b) {
  if(a.length === 0) a = ['']
  if(b.length === 0) b = ['']
  let i = 0
  let ilen = a.length
  let j
  let jlen = b.length
  let result = []
  while (i < ilen) {
    j = 0
    while (j < jlen) {
      result[result.length] = [a[i], b[j]]
      j += 1
    }
    i += 1
  }
  return result
}


function xprod3(a, b, c) {
  if(a.length === 0) a = ['']
  if(b.length === 0) b = ['']
  if(c.length === 0) c = ['']
  let i = 0
  let ilen = a.length
  let j
  let jlen = b.length
  let k
  let klen = c.length
  let result = []
  while (i < ilen) {
    j = 0
    while (j < jlen) {
      k = 0
      while (k < klen) {
        result[result.length] = [a[i], b[j], c[k]]
        k += 1
      }
      j += 1
    }
    i += 1
  }
  return result
}


const ThumbnailTableViewTbodyRowTpl = (row, idx) => `
<tr>
  <td>${idx}</td>
  <td><div class="js-thumbnailtableview-upload">*</div></td>
  ${row.map(n => `<td>${n}</td>`)}
  <td>ZH2829${idx < 100 ? '0' + idx < 10 ? '00' + idx : idx : idx}</td>
  <td><input type="text" name="barcode" class="spec-table-field" /></td>
  <td><input type="text" name="price" class="spec-table-field" /></td>
  <td><span class="js-thumbnailtableview-action">删除</span></td>
</tr>
`

const ThumbnailTableViewTheaderPlaceholderBeforeTpl = _ => `
<th class="spec-table-n1"></th>
<th class="spec-table-n2 js-thumbnailtableview-upload">略图</th>
`

const ThumbnailTableViewTheaderPlaceholderAfterTpl = _ => `
<th class="spec-table-n3">商品编码</th>
<th class="spec-table-n4">条形码</th>
<th class="spec-table-n5">售价</th>
<th class="spec-table-n6">操作</th>
`

const ThumbnailTableViewTheaderTpl = (header) => `
<th>${header || ''}</th>
`


class ThumbnailTableView {
  constructor({ $el, data }) {
    this.$el = $el
    this.data = data

    this.init()
  }

  init() {
    let { $el } = this

    this.$table = $el.find('.js-thumbnailtableview-table')
    this.$body = $el.find('.js-thumbnailtableview-body')
    this.$header = $el.find('.js-thumbnailtableview-header')

    this.event()
  }

  normalized() {
    let { data } = this

    let len = data.data.length
    let rows = data.data.map(n => n.labels)
    let names = data.data.map(n => n.name)

    function exportData(nr) {
      return {
        headers: names,
        rows: nr
      }
    }

    switch(len) {
    case 1: return exportData(xprod1.apply(null, rows))
    case 2: return exportData(xprod2.apply(null, rows))
    case 3: return exportData(xprod3.apply(null, rows))
    default: throw new Error('Error Data Length.')
    }

  }

  render() {
    let { normalized, $body, $header } = this

    let { headers, rows } = this.normalized()

    let header = `
${ThumbnailTableViewTheaderPlaceholderBeforeTpl()}
${headers.map(ThumbnailTableViewTheaderTpl).join('')}
${ThumbnailTableViewTheaderPlaceholderAfterTpl()}
`
    let body = rows.map(ThumbnailTableViewTbodyRowTpl).join('')

    $header.html(header)
    $body.html(body)
  }

  event() {
    let { $el } = this

    $el.on('thumbnailtableview.checked', '.js-thumbnailtableview-action', function(evt) {

    })

    $el.on('thumbnailtableview.upload', '.js-thumbnailtableview-uploade', function(evt) {

    })
  }
}

ThumbnailTableView.of = function(opt) {
  return new ThumbnailTableView(opt)
}

export default ThumbnailTableView
