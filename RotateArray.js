/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// TIME EXCEEDED
// UNSOLVED
var rotate = function (nums, k) {
    k = k % nums.length;
    let j = nums.length - k;
    let repeatNum = Math.floor(nums.length / k) * k;

    if (nums.length === 1 || k === 0) {
        return nums;
    }

    for (let i = 0; i < nums.length; i++) {
        console.log(i, j);
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        console.log(nums);
        if (i >= repeatNum - 1 && j === nums.length - 1) {
            j = nums.indexOf(Math.min(...nums.slice(i + 1)));
        } else {
            if (j < nums.length - 1) {
                j++;
            } else {
                j = nums.length - k;
            }
        }
    }

    return nums;
};

// console.log(
//     rotate(
//         [
//             1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
//             30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
//         ],
//         45
//     )
// );
console.log(
    rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 38)
);
//console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], 29));
