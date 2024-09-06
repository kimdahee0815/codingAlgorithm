// [0,3,4,4,6,30,31]

function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let p = 0;
    let q = 0;

    //check input
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    while (p < arr1.length && q < arr2.length) {
        if (arr1[p] <= arr2[q]) {
            result.push(arr1[p]);
            p++;
        } else {
            result.push(arr2[q]);
            q++;
        }
    }
    if (p < arr1.length) {
        result.push(...arr1.slice(p));
    }
    if (q < arr2.length) {
        result.push(...arr2.slice(q));
    }
    return result;
}
console.log(mergeSortedArrays([0, 3, 4, 29], []));
