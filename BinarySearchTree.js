class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let curNode = this.root;
        let prevNode = this.root;
        while (curNode) {
            prevNode = curNode;
            if (curNode.value < value) {
                curNode = curNode.right;
            } else if (curNode.value > value) {
                curNode = curNode.left;
            }
        }

        if (prevNode.value < value) {
            prevNode.right = newNode;
        } else if (prevNode.value > value) {
            prevNode.left = newNode;
        }
        return this;
    }
    lookup(value) {
        let curNode = this.root;

        while (curNode) {
            if (curNode.value < value) {
                curNode = curNode.right;
            } else if (curNode.value > value) {
                curNode = curNode.left;
            } else {
                return true;
            }
        }
        return false;
    }

    remove(value) {
        let curNode = this.root;
        let prevNode = this.root;

        while (curNode) {
            if (curNode.value < value) {
                curNode = curNode.right;
            } else if (curNode.value > value) {
                curNode = curNode.left;
            }
            if (curNode.value === value) {
                break;
            }
            prevNode = curNode;
        }
        if (curNode === this.root) {
            let findLastMaxNode = this.root;
            let findPrevMaxNode = this.root;
            if (findLastMaxNode.left) {
                findLastMaxNode = findLastMaxNode.left;
                findPrevMaxNode = findLastMaxNode;
                while (findLastMaxNode.right) {
                    findLastMaxNode = findLastMaxNode.right;
                    if (!findLastMaxNode.right) {
                        break;
                    }
                    findPrevMaxNode = findLastMaxNode;
                }
                if (findPrevMaxNode !== findPrevMaxNode) {
                    findPrevMaxNode.right = null;
                    findLastMaxNode.left = this.root.left;
                    findLastMaxNode.right = this.root.right;
                } else {
                    findLastMaxNode.right = this.root.right;
                    findLastMaxNode.left = null;
                }

                this.root = findLastMaxNode;
            } else if (findLastMaxNode.right) {
                this.root = findLastMaxNode.right;
            } else {
                this.root = null;
            }
            return;
        }

        if (curNode.left === null && curNode.right === null) {
            if (curNode.value < prevNode.value) {
                prevNode.left = null;
            } else {
                prevNode.right = null;
            }
        } else if (curNode.left === null && curNode.right) {
            if (curNode.value < prevNode.value) {
                prevNode.left = curNode.right;
            } else {
                prevNode.right = curNode.right;
            }
        } else if (curNode.left && curNode.right === null) {
            if (curNode.value < prevNode.value) {
                prevNode.left = curNode.left;
            } else {
                prevNode.right = curNode.left;
            }
        } else {
            prevNode.left = curNode.left;
            curNode.left.right = curNode.right;
        }
    }
}

const tree = new BinarySearchTree();
console.log(tree);
console.log(tree.lookup(9));
console.log(tree.insert(9));
console.log(tree.lookup(9));
console.log(tree.insert(4));
console.log(tree.insert(6));
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
tree.remove(170);
console.log(JSON.stringify(traverse(tree.root)));
tree.remove(4);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(4));
console.log(tree.lookup(1));
tree.remove(1);
console.log(tree.lookup(1));
console.log(JSON.stringify(traverse(tree.root)));
tree.remove(9);
console.log(JSON.stringify(traverse(tree.root)));
tree.remove(20);
console.log(JSON.stringify(traverse(tree.root)));
tree.remove(15);
console.log(JSON.stringify(traverse(tree.root)));

// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
