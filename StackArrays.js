class Node {
    constructor(value) {
        this.value = value;
    }
}

class Stack {
    constructor() {
        this.data = [];
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.data[this.data.length - 1];
    }

    push(value) {
        this.data.push(value);
        return this.data;
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }

        // this.data.splice(this.data.length - 1, 1);
        this.data.pop();
        return this.data;
    }

    isEmpty() {
        return this.data.length === 0;
    }
}
const myStack = new Stack();
console.log(myStack.push(3));
console.log(myStack.push(4));
console.log(myStack.push(5));
console.log(myStack.push(8));
console.log(myStack.peek());

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
