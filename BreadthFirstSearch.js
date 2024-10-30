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
    // insert(value) {
    //     const newNode = new Node(value);

    //     if (this.root === null) {
    //         this.root = newNode;
    //     } else {
    //         let currentNode = this.root;
    //         while (true) {
    //             if (currentNode.value > value) {
    //                 // Left
    //                 if (!currentNode.left) {
    //                     currentNode.left = newNode;
    //                     return this;
    //                 }
    //                 currentNode = currentNode.left;
    //             } else {
    //                 // Right
    //                 if (!currentNode.right) {
    //                     currentNode.right = newNode;
    //                     return this;
    //                 }
    //                 currentNode = currentNode.right;
    //             }
    //         }
    //     }
    // }
    // lookup(value) {
    //     if (!this.root) {
    //         return false;
    //     }
    //     let currentNode = this.root;

    //     while (currentNode) {
    //         if (currentNode.value > value) {
    //             // Left
    //             currentNode = currentNode.left;
    //         } else if (currentNode.value < value) {
    //             // Right
    //             currentNode = currentNode.right;
    //         } else if (currentNode.value === value) {
    //             return currentNode;
    //         }
    //     }
    //     return false;
    // }

    // remove(value) {
    //     if (!this.root) {
    //         return false;
    //     }
    //     let currentNode = this.root;
    //     let parentNode = null;
    //     while (currentNode) {
    //         if (value < currentNode.value) {
    //             parentNode = currentNode;
    //             currentNode = currentNode.left;
    //         } else if (value > currentNode.value) {
    //             parentNode = currentNode;
    //             currentNode = currentNode.right;
    //         } else if (currentNode.value === value) {
    //             //We have a match, get to work!

    //             //Option 1: No right child:
    //             if (currentNode.right === null) {
    //                 if (parentNode === null) {
    //                     this.root = currentNode.left;
    //                 } else {
    //                     //if parent > current value, make current left child a child of parent
    //                     if (currentNode.value < parentNode.value) {
    //                         parentNode.left = currentNode.left;

    //                         //if parent < current value, make left child a right child of parent
    //                     } else if (currentNode.value > parentNode.value) {
    //                         parentNode.right = currentNode.left;
    //                     }
    //                 }

    //                 //Option 2: Right child which doesnt have a left child
    //             } else if (currentNode.right.left === null) {
    //                 currentNode.right.left = currentNode.left;
    //                 if (parentNode === null) {
    //                     this.root = currentNode.right;
    //                 } else {
    //                     //if parent > current, make right child of the left the parent
    //                     if (currentNode.value < parentNode.value) {
    //                         parentNode.left = currentNode.right;

    //                         //if parent < current, make right child a right child of the parent
    //                     } else if (currentNode.value > parentNode.value) {
    //                         parentNode.right = currentNode.right;
    //                     }
    //                 }

    //                 //Option 3: Right child that has a left child
    //             } else {
    //                 //find the Right child's left most child
    //                 let leftmost = currentNode.right.left;
    //                 let leftmostParent = currentNode.right;
    //                 while (leftmost.left !== null) {
    //                     leftmostParent = leftmost;
    //                     leftmost = leftmost.left;
    //                 }

    //                 //Parent's left subtree is now leftmost's right subtree
    //                 leftmostParent.left = leftmost.right;
    //                 leftmost.left = currentNode.left;
    //                 leftmost.right = currentNode.right;

    //                 if (parentNode === null) {
    //                     this.root = leftmost;
    //                 } else {
    //                     if (currentNode.value < parentNode.value) {
    //                         parentNode.left = leftmost;
    //                     } else if (currentNode.value > parentNode.value) {
    //                         parentNode.right = leftmost;
    //                     }
    //                 }
    //             }
    //             return true;
    //         }
    //     }
    // }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.left === null) {
                        currentNode.left = newNode;
                        break;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (currentNode.right === null) {
                        currentNode.right = newNode;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                break;
            } else if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return currentNode;
    }
    remove(value) {
        if (!this.lookup(value)) {
            return null;
        } else {
            let curNode = this.root;
            let prevNode = null;
            while (curNode) {
                if (value < curNode.value) {
                    prevNode = curNode;
                    curNode = curNode.left;
                } else if (value > curNode.value) {
                    prevNode = curNode;
                    curNode = curNode.right;
                } else {
                    break;
                }
            }
            if (!curNode.right && !curNode.left) {
                if (prevNode) {
                    if (prevNode.value < curNode.value) {
                        prevNode.right = null;
                    } else {
                        prevNode.left = null;
                    }
                } else {
                    //root node
                    this.root = null;
                }
            } else if (curNode.right && curNode.left) {
                let nextSmallestNode = curNode.right;
                let prevNextSmallestNode = curNode;
                while (nextSmallestNode.left) {
                    prevNextSmallestNode = nextSmallestNode;
                    nextSmallestNode = nextSmallestNode.left;
                }
                if (prevNextSmallestNode.value === curNode.value) {
                    prevNextSmallestNode.right = null;
                } else {
                    prevNextSmallestNode.left = null;
                }

                nextSmallestNode.left = curNode.left;
                nextSmallestNode.right = curNode.right;
                if (prevNode) {
                    if (prevNode.value < curNode.value) {
                        prevNode.right = nextSmallestNode;
                    } else {
                        prevNode.left = nextSmallestNode;
                    }
                } else {
                    this.root = nextSmallestNode;
                }
            } else {
                if (prevNode) {
                    if (prevNode.value < curNode.value) {
                        if (curNode.right) {
                            prevNode.right = curNode.right;
                        } else {
                            prevNode.right = curNode.left;
                        }
                    } else {
                        if (curNode.right) {
                            prevNode.left = curNode.right;
                        } else {
                            prevNode.left = curNode.left;
                        }
                    }
                } else {
                    if (curNode.right) {
                        this.root = curNode.right;
                    } else {
                        this.root = curNode.left;
                    }
                }
            }
        }
    }
    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    breadthFirstSearchR(queue, list) {
        if (queue.length === 0) {
            return list;
        } else {
            const curNode = queue.shift();
            list.push(curNode.value);
            if (curNode.left) {
                queue.push(curNode.left);
            }
            if (curNode.right) {
                queue.push(curNode.right);
            }
            return this.breadthFirstSearchR(queue, list);
        }
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.breadthFirstSearch());
console.log(tree.root);
console.log(tree.breadthFirstSearchR([tree.root], []));
tree.remove(170);
tree.remove(20);
tree.remove(4);
tree.remove(9);
tree.remove(15);

console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
