function levelOrder(root){
  let node = root;
  let answer = [];
  let levelArr =[];
  let levelTmpArr =[];
  let levelTmpValArr =[];
  if(root){
    answer = [[root.val]]
  }
  while(node){
    if(node.left){
      levelTmpArr.push(node.left);
      levelTmpValArr.push(node.left.val);
    }
    if(node.right){
      levelTmpArr.push(node.right);
      levelTmpValArr.push(node.right.val)
    }
    if(levelArr.length === 0 && levelTmpValArr.length !==0){
      answer = [...answer, levelTmpValArr];
      levelArr.push(...levelTmpArr);
      levelTmpArr = [];
      levelTmpValArr = [];
    }
    node = levelArr.shift()
  }
}