//UNSOLVED

let maxSubArray = function (nums) {
    let arr = [];
    let calc = 0;
    for (let i = 0; i < nums.length; i++) {
        calc += nums[i];
        arr.push(calc);
    }
    let result = Math.max(...arr);
    for (let i = 1; i < arr.length; i++) {
        let min = Math.min(...arr.slice(0, i));
        if (result < arr[i] - min) {
            result = arr[i] - min;
        }
    }
    return result;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
