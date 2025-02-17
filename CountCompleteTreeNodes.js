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
// console.log(tree.insert([2,3,4,5,6]))
console.log(tree.insert([2,3]))
console.log(countCompleteTreeNodes(tree.root));

function countCompleteTreeNodes(root){
  if(!root){
    return 0;
  }
  const result = DFSPreOrder(root, 2, []);
  if(result.length > 0){
    return result[0] * 2 - result.length - 1;
  }
}

function DFSPreOrder(root, res, subtractNodes){
  if(!root.right){
    subtractNodes.push(res);
  }
  if(root.right){    
    if(subtractNodes.length > 0 && subtractNodes[0] === res){
      return subtractNodes;
    }
    DFSPreOrder(root.right, res*2, subtractNodes)
  }
  if(!root.left){
    subtractNodes.push(res);
  }
  if(root.left){
    if(subtractNodes.length > 0 && subtractNodes[0] === res){
      return subtractNodes;
    }
    DFSPreOrder(root.left, res*2, subtractNodes)
  }
  return subtractNodes;
}
