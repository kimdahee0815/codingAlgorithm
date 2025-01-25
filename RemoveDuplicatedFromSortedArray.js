/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let k = 0;
  let curr = null;
  for(let i = 0; i < nums.length; i++){
      if(nums[i] !== curr){
          nums[k] = nums[i];
          k++;
      }
      curr = nums[i];
  }
  return k;
};