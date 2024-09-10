// add a method reverse() to the linked list that reverses the entire list of nodes

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null,
        };
        console.log(newNode);
        this.tail.next = newNode;
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
        return array;
    }
    insert(index, value) {
        //Check for proper parameters;
        if (index >= this.length) {
            console.log("yes");
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null,
        };
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }
    remove(index) {
        // Check Parameters
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
    reverse() {
        //Code Here
        let prevNode = null;
        let curNode = this.head;
        while (curNode !== null) {
            const nextNode = curNode.next;
            if (curNode === this.head) {
                this.tail = this.head;
            }
            if (nextNode === null) {
                this.head = curNode;
            }
            curNode.next = prevNode;
            prevNode = curNode;
            curNode = nextNode;
        }
        return this.printList();
    }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.reverse());
console.log(myLinkedList);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.insert(20, 88));
console.log(myLinkedList.printList());
console.log(myLinkedList.remove(2));
console.log(myLinkedList.insert(2, 34));
console.log(myLinkedList.reverse());
console.log(myLinkedList);
