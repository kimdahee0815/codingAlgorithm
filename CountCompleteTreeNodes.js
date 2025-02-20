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
console.log(tree.insert([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]))
//console.log(tree.insert([2]))
console.log(countCompleteTreeNodes3(tree.root));

function countCompleteTreeNodes3(root){
  if(!root) return 0;
  if(!root.left && !root.right) return 1;
  let height = getHeight(root);
  let left = 0;
  let right = Math.pow(2, height-1) -1;
  let lastN = getLastNodes(root, left, right, 1, height) + 1;
  let result = right + lastN;
  return result;
}

function getHeight(root){
  let height = 0;
  while(root){
      root = root.left;
      height++;
  }
  return height;
}

function getLastNodes(root, left, right, level, height){
  let mid = Math.ceil((left + right) / 2);
  let searchNode = root.right;
  if(!searchNode){
    return left;
  }
  if(searchNode && (level + 1 === height)){
    return right;
  }
  let lev = level + 1;
  while(searchNode.left){
    if(searchNode.left){
      searchNode = searchNode.left;
      lev++;
    }
  }
  if(lev === height){
    return getLastNodes(root.right, mid, right, level+1, height);
  }else{
    return getLastNodes(root.left, left, mid-1, level+1, height)
  }
}

//O(log^2N)
function countCompleteTreeNodes2(root){
  if(!root){
    return 0;
  }
  if(!root.left && !root.right){
    return 1;
  }
  let height = DFSGetLevel(root, 1);
  let remnantNodesNum = DFS(root, 1, height, 1);
  console.log(remnantNodesNum);
  return (Math.pow(2, height - 1) - 1) + remnantNodesNum
}

function DFSGetLevel(root, level){
  if(!root.left && !root.right){
    return level;
  }
  if(root.left){
    return DFSGetLevel(root.left, level + 1);
  }
  if(root.right){
    return DFSGetLevel(root.right, level + 1);
  }
}

function DFS(root, level, height, rootLevel){
  let left = root.left;
  let right = root.right;
  let lev = level + 1;
  if(rootLevel === 1 && lev === height){
    if(root.left && !root.right){
      return 1;
    }
  }
  if(lev === height){
    return 2;
  }
  let res = 0;
  while(left){
    if(lev=== height - 1 && !left.right && !left.left){
      return res + DFS(root.left, level +1, height, rootLevel + 1);
    }
    if(lev === height - 1 && !left.right && left.left){
      res = Math.pow(2, lev) / Math.pow(2, rootLevel) - 1;
      return res;
    } 
    if(lev === height - 1 && left.right && left.left){
      break;
    } 
    left = left.right;
    lev++;
  }
  if(res === 0){
    res += Math.pow(2, lev) / Math.pow(2, rootLevel);
  }
  lev = level + 1;
  while(right){
    if(lev=== height - 1 && !right.right && !right.left){
      return res;
    }
    if(lev === height - 1 && !right.right && right.left){
      return res+1;
    } 
    if(lev === height - 1 && left.right && left.left){
      return res + DFS(root.right, level + 1, height, rootLevel + 1);
    } 
    right = right.left;
    lev++;
  }
}



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
