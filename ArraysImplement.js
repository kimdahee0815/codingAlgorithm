class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}
const newArr = new MyArray();
newArr.push("my");
newArr.push("name");
newArr.push("is");
newArr.push("dahee");
newArr.push("abc");
newArr.push("I");
newArr.push("am");
newArr.push("so");
newArr.push("prettyyy");
console.log(newArr.delete(4));
console.log(newArr);
