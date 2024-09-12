function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
// level 0 : 2^0 = 1
// level 1 : 2^1 = 2
// level 2 : 2^2 = 4
// level 3 : 2^3 = 8
// total number of nodes = 2^height - 1
// log nodes = height(steps)
