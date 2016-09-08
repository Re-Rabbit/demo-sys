import $ from 'jquery'

function create_tree_node(n, identation){
     var { name, children } = n
     var tree_node = $('#tpl_tree-node').clone().removeAttr('id')

     tree_node.find('.node-name').text(name)
     var info = tree_node.find('.tree-node--info')
     var iden = $('#tpl_identation')
     for(var i=0; i<identation; i++){
         var iden_c = iden.clone().removeAttr('id')
         iden_c.prependTo(info)
     }

     var tree_node_sub_nodes = tree_node.find('.tree-node--sub-nodes')
     children.forEach(i=>create_tree_node(i, identation+1).appendTo(tree_node_sub_nodes))


     tree_node.find('.tree-node--info').click(()=>{
         console.log(tree_node.toggleClass('active'))
         return ture
     })
     if(children.length == 0){
         tree_node.find('.collapse')
             .removeClass('icon-collapse')
             .addClass('identation')
     }

     return tree_node
 }

 function render_tree_nodes(node_root, target){
     node_root.forEach(i=>create_tree_node(i, 0).appendTo(target))
 }


var node_root = [
    { name: '纸箱',
      children: [
          { name: '标准箱',
            children: [
                { name: '定制箱',
                  children: [] },
            ] },
          { name: '一撕得',
            children: [
                { name: '定制箱',
                  children: [] },
            ] },
          { name: '定制箱',
            children: [
                { name: '定制箱',
                  children: [] },
            ] },

      ] },
]

$(()=>render_tree_nodes(node_root, $('.tree-view--nodes')))




const convertTreeToList = data => {
  let out = []

  ;(function recur(data, path) {

    let path1 = path ? [path, data.id].join('/') : data.id.toString()

    out.push([path1, { id: data.id, value: data.value } ])
    if(!data.children || data.children.length === 0) return
    return data.children.map(n => recur(n, path1))
  })(data)

  return out
}

const convertListToTree = list => {
  let out = { children: [] }
  let cache = {}
  let fid = findId(list)

  list.sort(sortPath).forEach(n => {
    let path = allPath(n)
    let target = path.pop()
    let targetObj = getData(fid(target))
    let ref = cache[path.join('/')] || out
    let _out = Object.assign({}, targetObj, { children: [] })
    ref.children.push(_out)
    cache[getPath(n)] = ref.children[ref.children.length - 1]
  })

  return out.children[0]
}

const getPath = listItem => {
  return listItem[0]
}

const allPath = listItem => {
  let path = getPath(listItem)

  return path.split('/')
}

const sortPath = (a, b) => {
  let i = allPath(a).length
  let j = allPath(b).length

  return i > j
}

const getData = listItem => {
  return listItem[1]
}

const findId = list => id => {
  let regex = new RegExp(`${id}$`)
  return list.find(n => regex.test(getPath(n)))
}
