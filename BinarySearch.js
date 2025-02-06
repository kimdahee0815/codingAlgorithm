function binary_search(arr,target){
  let left = 0;
  let right = arr.length - 1;
  while(left <= right){
    let middleIndex = left + parseInt((right-left)/2);
    if(arr[middleIndex] < target){
      left = middleIndex + 1;
    }else if(arr[middleIndex] > target){
      right = middleIndex - 1;
    }else{
      return middleIndex;
    }
  }
  return -1;
}

console.log(binary_search([1,2,3,4,5,6,7,8,9],2))