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
        if (!this.data[hashKey]) {
            this.data[hashKey] = [[key, value]];
        } else {
            const found = this.data[hashKey].find((k) => k[0] === key);
            if (found) {
                this.data[hashKey].forEach((arr) => {
                    if (arr[0] === key) {
                        arr[1] = value;
                    }
                });
            } else {
                this.data[hashKey].push([key, value]);
            }
        }
    } //O(1)

    get(key) {
        const hashKey = this._hash(key);
        const found = this.data[hashKey].indexOf(this.data[hashKey].find((k) => k[0] === key));
        return this.data[hashKey][found][1];
    } //O(N)

    keys() {
        const keysArray = [];
        this.data.forEach((hashRow) => {
            if (hashRow && hashRow.length !== 0) {
                hashRow.forEach((keyVal) => keysArray.push(keyVal[0]));
            }
        });
        return keysArray;
    }
}

const myHashTable = new HashTable(10);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 4);
myHashTable.set("abcdefgijk", 2);
myHashTable.set("abcd", 6);
myHashTable.set("abcde", 5);
myHashTable.set("abcdf", 3);
myHashTable.set("abcdefg", 8);
myHashTable.set("abcdhi", 9);
myHashTable.set("abcdhhh", 8);
myHashTable.set("apples", 90000);
myHashTable.set("abcdf", 30000);
console.log(myHashTable.keys());
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("abcdhhh"));
console.dir(myHashTable.data);
