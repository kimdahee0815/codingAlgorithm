//PASSED
var MyQueue = function () {
    this.stack = [];
    this.temp = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    if (this.temp.length !== 0) {
        while (this.temp.length > 0) {
            this.stack.push(this.temp.pop());
        }
    }
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.temp.length === 0) {
        while (this.stack.length > 0) {
            this.temp.push(this.stack.pop());
        }
    }
    return this.temp.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.temp.length !== 0) {
        return this.temp[this.temp.length - 1];
    }
    if (this.stack.length !== 0) {
        return this.stack[0];
    }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.temp.length === 0 && this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
