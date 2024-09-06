/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes1 = function (nums) {
    let result = nums.filter((num) => num !== 0);
    let len = nums.length - result.length;
    for (let i = 0; i < len; i++) {
        result.push(0);
    }
    return result;
};

var moveZeroes2 = function (nums) {
    let pos = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pos] = nums[i];
            pos++;
        }
    }
    nums = nums.fill(0, pos);
    return nums;
};
console.log(moveZeroes2([0, 1, 0, 3, 12]));
