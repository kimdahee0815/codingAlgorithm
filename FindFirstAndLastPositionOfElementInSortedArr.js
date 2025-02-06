function searchRange(nums, target){
  let left = 0;
  let right = nums.length - 1;
  let firsthit = -1;
  let firstleft = 0;
  let firstright = nums.length - 1;
  let rangeleft = -1;
  let rangeright = -1;
  if(left === right){
    if(nums[0] === target){
      rangeleft = 0;
      rangeright = 0;
    }
    return [rangeleft, rangeright];
  }
  while(left <= right){
    let middleIndex = left + parseInt((right-left)/2);
    if(nums[middleIndex] < target){
      left = middleIndex + 1;
    }else if(nums[middleIndex] > target){
      right = middleIndex - 1;
    }else{
      firsthit = middleIndex;
      break;
    }
  }
  if(firsthit !== -1){
    left = firstleft;
    right = firsthit;
    while(rangeleft === -1){
      let middleIndex = left + parseInt((right-left)/2);
      if(nums[middleIndex] !== target){
        left = middleIndex+1;
      }else if (middleIndex === right && middleIndex !== left){
        rangeleft = right;
      }else{
        right = middleIndex;
      }
      if(nums[left] === target){
        rangeleft = left;
      }
    }
    left = firsthit;
    right = firstright;
    while(rangeright === -1){
      let middleIndex = left + parseInt((right-left)/2);
      if(nums[middleIndex] !== target){
        right = middleIndex-1;
      }else if(middleIndex === left && middleIndex !== right){
        rangeright = left;
      }else{
        left = middleIndex;
      }
      if(nums[right] === target){
        rangeright = right;
      }
    }
  }
  return [rangeleft, rangeright]

}
console.log(searchRange([1,3,3,5,5,5,8,9],5))
console.log(searchRange([1],1))
console.log(searchRange([2,2],2))
console.log(searchRange([5,7,7,8,8,10],8))