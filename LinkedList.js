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
}

let myLinkedList = new LinkedList(10);
console.dir(myLinkedList.append(5));
console.dir(myLinkedList.append(16));
console.dir(myLinkedList.prepend(4));
console.log(myLinkedList);

// class node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
