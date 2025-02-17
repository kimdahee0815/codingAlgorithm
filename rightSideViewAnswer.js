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

const tree = new TreeNode(1);
console.log(tree.insert([2,3,4,5,null,6,null,7,null,null,null,null,8,null,null,null]))
console.log(rightSideView(tree.root));

function rightSideView(root){
  const result = DFSPreOrder(root, [], 1);
  return result;
}

function DFSPreOrder(node, res, level){
  if(res.length< level){
    res.push(node.val);
  }
  if(node.right){
    DFSPreOrder(node.right, res, level+1);
  }
  if(node.left){
    DFSPreOrder(node.left, res, level+1);
  }
  return res;
}