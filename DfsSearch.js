class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
    }else{
      let node = this.root;
      let prevNode = null;
      while(node){
        prevNode = node;
        if(newNode.value < node.value){
          node = node.left;
        }else if(newNode.value > node.value){
          node = node.right;
        }
      }
      if(newNode.value < prevNode.value){
        prevNode.left = newNode;
      }else{
        prevNode.right = newNode;
      }
    }
    return this;
  }

  traverse(){
    let node = this.root;
    while(node){

    }
  }
}

function DFSInOrder(node, arr){
  if(node){
    if(node.left){
      DFSInOrder(node.left, arr);
    }
    arr.push(node.value);
    if(node.right){
      DFSInOrder(node.right, arr);
    }
  }
  return arr;
}

function DFSPreOrder(node, arr){
  if(node){
    arr.push(node.value);
    if(node.left){
      DFSPreOrder(node.left, arr);
    }
    if(node.right){
      DFSPreOrder(node.right, arr);
    }
  }
  return arr;
}

function DFSPostOrder(node, arr){
  if(node){
    if(node.left){
      DFSPostOrder(node.left, arr);
    } 
    if(node.right){
      DFSPostOrder(node.right, arr);
    }
    arr.push(node.value);
  }
  return arr;
}

const tree = new BinarySearchTree()
// console.log(tree.insert(9));
// console.log(tree.insert(6));
// console.log(tree.insert(12));
// console.log(tree.insert(1));
// console.log(tree.insert(7));
// console.log(tree.insert(10));
// console.log(tree.insert(45));

console.log(tree.insert(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
console.log(tree.insert(20));
console.log(tree.insert(170));
console.log(tree.insert(15));
console.log(tree.insert(1));
console.log(DFSPreOrder(tree.root, []))
console.log(DFSInOrder(tree.root, []))
console.log(DFSPostOrder(tree.root, []))