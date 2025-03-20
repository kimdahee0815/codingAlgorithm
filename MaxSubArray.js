function maxSubArray(nums) {
  let left = 0;
  let right = nums.length-1;
  let sum = nums.reduce((acc, curr)=>acc+curr, 0);
  let max = sum;
  let sameNum = 0;
  let sameVal = 0;
  while(left !== right){
    if(nums[left] < nums[right]){
      if(sameNum > 0){
        right+=sameNum;
        sameNum = 0;
        sameVal = 0;
      }
      if(sum-nums[left] > max) max = sum-nums[left];
      sum-=nums[left];
      left++;
    }else if(nums[left] > nums[right]){
      if(sameNum > 0){
        left-=sameNum;
        sameNum = 0;
        sameVal = 0;
      }
      if(sum-nums[right] > max) max = sum-nums[right];
      sum-=nums[right];
      right--;
    }else{
      sameNum++;
      sameVal+=nums[left];
      if(sum - sameVal > max) max = sum - sameVal;
      sum-=sameVal;
      left++;
      right--;
    }
  }
  return max;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23
console.log(maxSubArray([1,2,-1,-2,2,1,-2,1,4,-5,4]))