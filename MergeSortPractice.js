function merge_sort(arr) {
    if(arr.length === 1){
        return arr;
    }
    let middle = arr.length / 2;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(merge_sort(left), merge_sort(right));
}
function merge(left, right) {
    let p = 0;
    let q = 0;
    const newArr =[];
    while(p < left.length && q < right.length){
        if(left[p] < right[q]){
            newArr.push(left[p]);
            p++;
        }else{
            newArr.push(right[q]);
            q++;
        }
    }
    while(p < left.length){
        newArr.push(left[p]);
        p++;
    }
    while(q < right.length){
        newArr.push(right[q]);
        q++;
    }
    return newArr;
}
console.log(merge_sort([6, 5, 3, 1, 8, 7, 2, 4]));
console.log(merge_sort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))