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

function BFS(node){
  let answer = [];
  let memory = [];
  let root = node;
  while(node){
    answer.push(node.value);
    if(node.left){
      memory.push(node.left);
    }
    if(node.right){
      memory.push(node.right);
    }
    if(memory.length !== 0){
      node = memory.shift();
    }else{
      node = null;
    }
  }
  return answer;
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
console.log(BFS(tree.root))
