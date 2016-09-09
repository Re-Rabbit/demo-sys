import $ from 'jquery'
import Collapsible, { collapsibleApply } from './scripts/collapsible.js'
import ProdSpecView from './scripts/prodspecview.js'
import ThumbnailTableView from './scripts/thumbnailtableview.js'

import Selectfield, { selectfieldApply, renderListView, renderTreeView, SelectfieldListViewTpl, renderDatePickerView } from './scripts/selectfield.js'

import Modal from './scripts/modal.js'


const fullZero = value => {
  let str = value.toString()
  let len = str.length

  return len === 1 ? '0' + str : str
}

const showDP = dp => {
  let { YY, MM, DD } = dp
  return `${YY}-${fullZero(MM)}-${fullZero(DD)}`
}

const constDateObj = dp => {
  return new Date(showDP(dp))
}

const constDPFromDD = dp => n => {
  return Object.assign({}, dp, { DD: n })
}

const isLeapYear = yy => (yy % 4 === 0 && yy % 100 !== 0) || yy % 400 === 0

const getLstDPOfMM = dp => {
  let conster = constDPFromDD(dp)
  switch(dp.MM) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    return conster(31)
  case 2:
    return isLeapYear(dp.YY) ? conster(29) : conster(28)
  default:
    return conster(30)
  }
}


const getDPFromDate = date => {

  let yy = date.getFullYear()
  let mm = date.getMonth() + 1
  let dd = date.getDate()
  //let ww = date.getDay() === 0 ? 7 : date.getDay()

  return {
    YY: yy,
    MM: mm,
    DD: dd,
    //WW: ww,
    //isChecked: false,
    //isToday: false,
    //isCurrMM: false
  }
}

const getWWFromDP = dp => {
  let ww = constDateObj( dp).getDay()
  return ww === 0 ? 7 : ww
}

const jumpYY = dyy => dp => {
  if(dyy === 0) return dp
  return Object.assign({}, dp, { YY: dp.YY + dyy, DD: 1 })
}

const nextYY = jumpYY(1)
const prevYY = jumpYY(-1)

const jumpMM = dmm => dp => {
  let cmp = dp.MM + dmm
  if(cmp < 1) {
    let yy = dp.YY - 1
    let mm = 12 + cmp
    return Object.assign({}, dp, { YY: yy, MM: mm, DD: 1 })
  } else if(cmp > 12) {
    let yy = dp.YY + 1
    let mm = cmp - 12
    return Object.assign({}, dp, { YY: yy, MM: mm, DD: 1 })
  } else {
    return Object.assign({}, dp, { MM: cmp, DD: 1 })
  }
}

const nextMM = jumpMM(1)
const prevMM = jumpMM(-1)

const range = (from, to) => {
  let out = []
  for(let i = from; i <= to; i++) {
    out.push(i)
  }

  return out
}

const constCurrMMList = dp => {
  let currdp = dp
  let prevdp = prevMM(dp)
  let nextdp = nextMM(dp)

  let prevlist = []
  let currdpfstww = getWWFromDP(constDPFromDD(currdp)(1))
  if(currdpfstww !== 1) {
    let prevdplstdd = getLstDPOfMM(prevdp).DD
    prevlist = range(prevdplstdd - (currdpfstww - 1) + 1, prevdplstdd)
      .map(constDPFromDD(prevdp))
  }



  let currlist = []
  let currdplstdd = getLstDPOfMM(currdp).DD
  currlist = range(1, currdplstdd)
    .map(constDPFromDD(currdp))


  let nextlist = []
  nextlist = range(1, 6 * 7 - prevlist.length - currlist.length)
    .map(constDPFromDD(nextdp))


  let out = []
      .concat(prevlist)
      .concat(currlist)
      .concat(nextlist)

  return out
}


const showDPWithoutDD = dp => {
  let str = showDP(dp)
  let idx = str.lastIndexOf('-')
  return str.substr(0, idx)
}

const renderDP = dp => `
<div class="datepicker-grid grid width--7-f" data-id="${showDP(dp)}">
  <div class="datepicker-cell">${dp.DD}</div>
</div>
`

let dp = getDPFromDate(new Date())
console.log(dp)
//console.log(jumpYY(1)(dp))
//console.log(jumpMM(-9)(dp))
//console.log(constCurrMMList(dp))

const renderCale = date => `
<div class="datepicker">
  <div class="datepicker-body">
    <div class="datepicker-dates row">
      ${constCurrMMList(getDPFromDate(date)).map(renderDP).join('')}
    </div>
  </div>
</div>
`

$('.prevyy').click(_ => {
  dp = prevYY(dp)
  $('.cale').html(renderCale(dp))
  $('.mm').html(showDPWithoutDD(dp))
})
$('.prevmm').click(_ => {
  dp = prevMM(dp)
  $('.cale').html(renderCale(dp))
  $('.mm').html(showDPWithoutDD(dp))
})
$('.nextmm').click(_ => {
  dp = nextMM(dp)
  $('.cale').html(renderCale(dp))
  $('.mm').html(showDPWithoutDD(dp))
})
$('.nextyy').click(_ => {
  dp = nextYY(dp)
  $('.cale').html(renderCale(dp))
  $('.mm').html(showDPWithoutDD(dp))
})

let calendarSf = Selectfield.of({ $el: $('.js-calendar') })
    .render(renderDatePickerView(new Date()))
