// Given 2 arrays, create a function that let's a user know (true/false)
// whether these two arays contain any common items
// For example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// should return false
// ------------------
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true

// 2 parameters - arrays - no size limit
// return true or false

function containsCommonItem(arr1, arr2) {
    const obj = {};
    arr1.forEach((el) => (obj[el] = 1));
    return arr2.some((el) => obj[el]);
}
console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]));
console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]));
