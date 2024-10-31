//UNSOLVED
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    const rootNode = root.shift();
    const nodeQueue = [];
    nodeQueue.push(rootNode);
    const result = true;
    while (nodeQueue.length > 0) {
        const res = makeTreeAndCheck(root, nodeQueue);
        if (res) {
            [root, nodeQueue] = res;
        } else {
            result = false;
            break;
        }
    }
    return result;
};

var isValidBST2 = function (root) {
    const result = true;
    const queue = [root];
    while (queue.length > 0) {
        const node = queue.shift();
        if (node.left.val) {
            if (node.val < node.left.val) {
                result = false;
                break;
            } else {
                queue.push(node.left);
            }
        }
        if (node.right.val) {
            if (node.val > node.right.val) {
                result = false;
                break;
            } else {
                queue.push(node.right);
            }
        }
    }
    return result;
};

var isValidBST3 = function (root) {
    const result = true;
};

class TreeNode {
    constructor(value, left, right) {
        this.value = value === undefined ? 0 : value;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// function makeTree(root, nodeQueue) {
//     const nodeVal = nodeQueue.shift();
//     const leftNodeVal = root.shift();
//     const rightNodeVal = root.shift();

//     const node = new TreeNode(nodeVal, null, null)
//     const leftNode = new TreeNode(leftNodeVal, null, null)
//     const rightNode = new TreeNode(rightNodeVal, null, null)

//     node.left = leftNode;
//     node.right = rightNode;
//     nodeQueue.push(leftNode.value);
//     nodeQueue.push(rightNode.value);
//     return [root, nodeQueue];
// }

function makeTreeAndCheck(root, queue) {
    const nodeVal = queue.shift();
    const leftNodeVal = root.shift();
    const rightNodeVal = root.shift();

    const node = new TreeNode(nodeVal, null, null);
    const leftNode = new TreeNode(leftNodeVal, null, null);
    const rightNode = new TreeNode(rightNodeVal, null, null);

    if (nodeVal && rightNodeVal) {
        if (node.value < rightNode.value) {
            node.right = rightNode;
        } else {
            return false;
        }
    }

    if (nodeVal && leftNodeVal) {
        if (node.value > leftNode.value) {
            node.left = leftNode;
        } else {
            return false;
        }
    }

    if (leftNodeVal) {
        queue.push(leftNode.value);
    }
    if (rightNodeVal) {
        queue.push(rightNode.value);
    }

    return [root, queue];
}
