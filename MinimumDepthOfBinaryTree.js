function maxDepth(root){
  let curNode = root;
  if(!curNode) return 0;
  return 1 + Math.max(DFS(curNode.left), DFS(curNode.right));
}

function DFS(curNode){
  if(curNode){
    if(curNode.left === null && curNode.right === null){
      return 1;
    }else{
      return 1+Math.max(DFS(curNode.left), DFS(curNode.right))
    }
  }else{
    return 0;
  }
}