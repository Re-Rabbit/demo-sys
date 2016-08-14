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
         tree_node.find('.collapse').hide()
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
