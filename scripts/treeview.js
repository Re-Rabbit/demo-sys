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
         tree_node.find('.colloase').hide()
     }

     return tree_node
 }
 var node_root = [
     { name: 'zhixiang',
       children: [
           { name: 'biaozhun',
             children: [
                 { name: 'dingzhi',
                   children: [] },
             ] },
           { name: 'yiside',
             children: [
                 { name: 'dingzhi',
                   children: [] },
             ] },
           { name: 'dingzhi',
             children: [
                 { name: 'dingzhi',
                   children: [] },
             ] },

       ] },
 ]

 function render_tree_nodes(node_root, target){
     node_root.forEach(i=>create_tree_node(i, 0).appendTo(target))
 }

 $(()=>render_tree_nodes(node_root, $('.tree-view--nodes')))
