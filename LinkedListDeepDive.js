// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

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
        //Code here
        const newNode = new Node(value);
        // const newNode = {
        //     value,
        //     next: null,
        // };
        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = new Node(value);
        // const newNode = {
        //     value,
        //     next: this.head,
        // };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value) {
        const newNode = new Node(value);

        if (index === 0) {
            this.prepend(value);
            return this;
        }
        if (index >= this.length) {
            this.append(value);
            return this;
        }
        let curNode = this.traverseToIndex(index);
        newNode.next = curNode.next;
        curNode.next = newNode;
        this.length++;
        return this;
    }
    traverseToIndex(index) {
        let curNode = this.head;
        for (let i = 0; i < index - 1; i++) {
            curNode = curNode.next;
        }
        return curNode;
    }
    remove(index) {
        let curNode = this.traverseToIndex(index);
        curNode.next = curNode.next.next;
        this.length--;
        return this;
    }
    printList() {
        let result = "";
        let curNode = this.head;
        while (curNode !== this.tail) {
            result += curNode.value + "--> ";
            curNode = curNode.next;
        }
        result += this.tail.value;
        return result;
    }
}

let myLinkedList = new LinkedList(10);
console.dir(myLinkedList.append(5));
console.dir(myLinkedList.append(16));
console.dir(myLinkedList.prepend(1));
console.dir(myLinkedList.insert(2, 99));

// console.dir(myLinkedList.insert(0, 1));
console.log(myLinkedList.printList());
console.dir(myLinkedList.remove(1));
console.log(myLinkedList.printList());
