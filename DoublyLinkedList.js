// add a method insert() to the linked list that adds a node to the specified index.

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null,
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array.join(" --> ");
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        const newNode = {
            value: value,
            next: null,
        };
        const insertIndexNode = this.traverseToIndex(index);
        const prevNode = insertIndexNode.prev;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = insertIndexNode;
        insertIndexNode.prev = newNode;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let curNode = this.head;
        while (counter < index) {
            curNode = curNode.next;
            counter++;
        }
        return curNode;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return this.printList();
        }
        const deletedNode = this.traverseToIndex(index);
        const prevNode = deletedNode.prev;
        const nextNode = deletedNode.next;

        if (index === this.length - 1) {
            prevNode.next = nextNode;
            this.tail = prevNode;
        } else if (index === 0) {
            nextNode.prev = prevNode;
            this.head = nextNode;
        } else {
            prevNode.next = nextNode;
            nextNode.prev = prevNode;
        }
        this.length--;
        return this.printList();
    }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.insert(20, 88));
console.log(myLinkedList.remove(0));
console.log(myLinkedList.remove(4));
console.log(myLinkedList.insert(0, 1));
console.log(myLinkedList.insert(4, 999));
console.log(myLinkedList.insert(6, 88));
