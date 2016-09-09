const prefixZero = value => {
  let str = value.toString()
  let len = str.length

  return len === 1 ? '0' + str : str
}

const constDateObj = dp => {
  return new Date(showDP(dp))
}

const constDPByDD = dp => n => {
  return Object.assign({}, dp, { DD: n })
}

const isLeapYear = yy => (yy % 4 === 0 && yy % 100 !== 0) || yy % 400 === 0

const getLstDPOfMM = dp => {
  let conster = constDPByDD(dp)
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

export const makeCalendar = dp => {
  //let dp = makeDP(date)
  let currdp = dp
  let prevdp = prevMM(dp)
  let nextdp = nextMM(dp)

  let prevlist = []
  let currdpfstww = getWWFromDP(constDPByDD(currdp)(1))
  if(currdpfstww !== 1) {
    let prevdplstdd = getLstDPOfMM(prevdp).DD
    prevlist = range(prevdplstdd - (currdpfstww - 1) + 1, prevdplstdd)
      .map(constDPByDD(prevdp))
  }



  let currlist = []
  let currdplstdd = getLstDPOfMM(currdp).DD
  currlist = range(1, currdplstdd)
    .map(constDPByDD(currdp))


  let nextlist = []
  nextlist = range(1, 6 * 7 - prevlist.length - currlist.length)
    .map(constDPByDD(nextdp))


  let out = []
      .concat(prevlist)
      .concat(currlist)
      .concat(nextlist)

  return out
}


export const showDP = dp => {
  let { YY, MM, DD } = dp
  return `${YY}-${prefixZero(MM)}-${prefixZero(DD)}`
}

export const showDP1 = dp => {
  let str = showDP(dp)
  let idx = str.lastIndexOf('-')
  return str.substr(0, idx)
}


export const makeDP = date => {

  let yy = date.getFullYear()
  let mm = date.getMonth() + 1
  let dd = date.getDate()

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
