class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.bottom = newNode;
        }
        if (this.top) {
            this.top.next = newNode;
        }
        this.top = newNode;
        this.length++;
        return this.printList();
    }

    pop() {
        let curNode = this.bottom;
        if (this.isEmpty()) {
            return "This stack is empty";
        }
        if (this.top === this.bottom && this.top !== null) {
            this.bottom = null;
        }

        while (curNode && curNode.next !== this.top) {
            curNode = curNode.next;
        }
        this.top = curNode;
        if (curNode) {
            curNode.next = null;
        }
        this.length--;
        return this.printList();
    }

    printList() {
        const result = [];
        let curNode = this.bottom;
        while (curNode !== null) {
            result.push(curNode.value);
            curNode = curNode.next;
        }
        return result.join(" --> ");
    }

    isEmpty() {
        return this.length === 0;
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
