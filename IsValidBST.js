class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class TreeNode {
  constructor(val){
    this.root = new Node(val);
  }

  insert(arr){
    const queue = [this.root];
    while(arr.length > 0) {
      let count = 0;
      let len = queue.length;
      while(len > count){
        const node = queue.shift();
        for(let direction of ["left", "right"]){
          const newNodeVal = arr.shift();
          if(newNodeVal){
            const newNode = new Node(newNodeVal);
            if(!node[direction]){
              node[direction] = newNode
            }
            queue.push(newNode);
          }
        }
        count++;
      }
    }
    return this;
  }
}

const tree = new TreeNode(5);
// console.log(tree.insert([2,3,4,5,6]))
console.log(tree.insert([1,4,null,null,3,6]))
console.log(isValidBST(tree.root))

function isValidBST(root) {
  let min = Number.NEGATIVE_INFINITY;
  let max = Number.POSITIVE_INFINITY;
  return isValidBSTDFS(root, min, max);
};

function isValidBSTDFS(root, min, max) {
  if(root.left){
    if(!isValidBSTDFS(root.left, min, root.val)){
      return false;
    }     
  }
  if(root.right){
    if(!isValidBSTDFS(root.right, root.val, max)){
      return false;
    }
  }
  return root.val < max && root.val > min;
}