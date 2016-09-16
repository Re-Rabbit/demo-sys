export class Prod {
  constructor(opts) {

    let {
      id,
      pic,
      spec,
      unit,
      price,
      count,
    } = opts

    this.id    = id
    this.pic   = pic
    this.spec  = spec
    this.unit  = unit
    this.price = price
    this.count = count || 0

    this.value = Prod.tpl(this)
  }

  static tpl(prod) {
    let tpl = prod => `
<div class="order-store-prod">
  <div class="order-store-prodpic">
    <img alt="" src="${prod.pic}" />
  </div>
  <div class="order-store-proddetail">
    ${prod.spec}
  </div>
</div>
`
    return tpl(prod)
  }

  static of(opts) {
    return new Prod(opts)
  }
}


export class Store {
  constructor(opts) {
    let { id, name, user, phone, addr } = opts
    this.id    = id
    this.name  = name
    this.user  = user
    this.phone = phone
    this.addr  = addr
  }

  static of(opts) {
    return new Store(opts)
  }
}
