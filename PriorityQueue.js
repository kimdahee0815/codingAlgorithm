class priorityQueue{
  constructor(comparator = (a,b) => a>b){
    this._heap = [];
    this._comparator = comparator;
  }

  size(){
    return this._heap.length;
  }

  isEmpty(){
    return this._heap.length === 0;
  }

  push(value){
    this._heap.push(value);
    let curIdx = this.size()-1;
    let parentNodeIdx = Math.floor((curIdx - 1)/2);
    while(parentNodeIdx >= 0){
      if(this._heap[parentNodeIdx] < value){
        [this._heap[parentNodeIdx], this._heap[curIdx]] = [this._heap[curIdx], this._heap[parentNodeIdx]];
        curIdx = parentNodeIdx;
        parentNodeIdx = Math.floor((curIdx - 1)/2);
      }else{
        break;
      }
    }
    return this._heap;
  }

  delete(){
    let deleteIdx = this.size()-1;
    if(this.isEmpty()) return null;
    this._heap[0] = this._heap[deleteIdx];
    deleteIdx = 0;
    let leftIdx = (deleteIdx * 2) + 1;
    let rightIdx = (deleteIdx * 2) + 2;
    while(leftIdx < this.size()){
      if(rightIdx < this.size()){
        if(this._heap[rightIdx] > this._heap[leftIdx]){
          [this._heap[rightIdx], this._heap[deleteIdx]] = [this._heap[deleteIdx], this._heap[rightIdx]];
          deleteIdx = rightIdx;
          leftIdx = deleteIdx * 2 + 1;
          rightIdx = deleteIdx * 2 + 2;
          continue;
        }
      }
      [this._heap[leftIdx], this._heap[deleteIdx]] = [this._heap[deleteIdx], this._heap[leftIdx]];
      deleteIdx = leftIdx;
      leftIdx = deleteIdx * 2 + 1;
      rightIdx = deleteIdx * 2 + 2;
    }
    this._heap.splice(this.size()-1, 1)
    return this._heap;
  }
}

const pq = new priorityQueue();
console.log(pq.push(75));
console.log(pq.push(50));
console.log(pq.push(25));
console.log(pq.push(45));
console.log(pq.push(35));
console.log(pq.push(15));
console.log(pq.push(10));
console.log(pq.push(20));
console.log(pq.push(40));
console.log(pq.delete());
console.log(pq.delete());