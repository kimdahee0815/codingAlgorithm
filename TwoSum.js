/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function getKeyByValue(pairNumObj, value) {
    return Object.keys(pairNumObj).find((k) => pairNumObj[k] === value);
}
var twoSum = function (nums, target) {
    const result = [];
    const pairNumObj = {};
    pairNumObj[0] = target - nums[0];
    for (let i = 1; i < nums.length; i++) {
        const pairNum = target - nums[i];
        if (Object.values(pairNumObj).includes(nums[i])) {
            result.push(getKeyByValue(pairNumObj, nums[i]));
            result.push(i);
            break;
        }
        pairNumObj[i] = pairNum;
    }
    return result;
};
