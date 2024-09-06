/**
 * @param {number[]} nums
 * @return {boolean}
 */
function keyInObject(obj, key) {
    const res = Object.keys(obj).find((k) => k == key);
    return res;
}
//TIME EXCEEDED
var containsDuplicate = function (nums) {
    let res = false;
    const refObj = {};
    for (let num of nums) {
        if (keyInObject(refObj, num)) {
            res = true;
            break;
        } else {
            refObj[num] = 1;
        }
    }

    return res;
};
var containsDuplicate2 = function (nums) {
    let numSet = new Set(nums);
    console.log(numSet);
    if (numSet.size !== nums.length) {
        return true;
    } else {
        return false;
    }
};
console.log(containsDuplicate([1, 2, 3, 1]));
