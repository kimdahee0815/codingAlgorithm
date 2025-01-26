function countPartitions(nums){
  let total = 0;
  let first = 0;
  let second = 0;
  let output = 0;
  for(let i = 0;i < nums.length;i++){
    total += nums[i];
  }
  for(let i =0; i < nums.length -1; i++){
    first += nums[i];
    second = total - first;
    if(Math.abs(first-second) % 2 === 0){
      output++;
    }
  }
  return output
}
console.log(countPartitions([10,10,3,7,6]))
console.log(countPartitions([1,2,2]))
console.log(countPartitions([2,4,6,8]))
