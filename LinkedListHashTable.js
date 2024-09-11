class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        const hashKey = this._hash(key);
        const newNode = new Node(key, value);

        if (!this.data[hashKey]) {
            this.data[hashKey] = newNode;
        } else {
            let foundNode = this.findSameNode(key);

            if (foundNode) {
                foundNode.value = value;
                return this.printList(key);
            }
            const lastNode = this.getLastNode(hashKey);
            lastNode.next = newNode;
        }
        return this.printList(key);
    }

    findSameNode(key) {
        const hashKey = this._hash(key);
        let curNode = this.data[hashKey];
        while (curNode) {
            if (curNode.key === key) {
                return curNode;
            }

            curNode = curNode.next;
        }

        return undefined;
    }

    getLastNode(hashKey) {
        let curNode = this.data[hashKey];
        while (curNode && curNode.next !== null) {
            curNode = curNode.next;
        }

        return curNode;
    }

    get(key) {
        const hashKey = this._hash(key);
        let curNode = this.data[hashKey];
        while (curNode && curNode !== null) {
            if (curNode.key === key) {
                break;
            }
            curNode = curNode.next;
        }
        return curNode.value;
    }

    keys() {
        const keysArray = [];
        this.data.forEach((el) => {
            if (el) {
                keysArray.push(el.key);
            }

            if (el.next !== null) {
                let curNode = el.next;
                while (curNode !== null) {
                    keysArray.push(curNode.key);
                    curNode = curNode.next;
                }
            }
        });
        return keysArray;
    }

    printList(key) {
        const hashKey = this._hash(key);
        const result = [];
        let curNode = this.data[hashKey];
        while (curNode && curNode !== null) {
            result.push(`${curNode.key} : ${curNode.value}`);
            curNode = curNode.next;
        }
        return result.join(" --> ");
    }
}

const myHashTable = new HashTable(10);

console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("grapes", 20000));
console.log(myHashTable.set("apples", 4));
console.log(myHashTable.set("watermelon", 2));
console.log(myHashTable.set("fig", 6));
console.log(myHashTable.set("apricon", 5));
console.log(myHashTable.set("mango", 3));
console.log(myHashTable.set("orange", 8));
console.log(myHashTable.set("peach", 9));
console.log(myHashTable.set("melon", 8));
console.log(myHashTable.set("mango", 30000));
console.log(myHashTable.set("bananas", 90000));
console.log(myHashTable.set("kiwi", 30000));
console.log(myHashTable.set("melon", 50000));
console.log(myHashTable.set("watermelon", 70000));
console.log(myHashTable.keys());
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("melon"));
