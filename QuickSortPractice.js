function quick_sort(arr){
  let pivot = arr.length - 1;
  if(arr.length <= 1){
    return arr;
  }
  let p = 0;
  while(p < arr.length){
    if((p < pivot && arr[p] > arr[pivot]) || (p > pivot && arr[p] < arr[pivot])){
      [arr[p], arr[pivot]] = [arr[pivot], arr[p]]
      if(p > pivot){
        let tmp = pivot;
        pivot = p;
        p = tmp;
      }else{
        pivot = p;
      }
    }
    p++;
  }
  let left = arr.slice(0, pivot);
  let right = arr.slice(pivot);
  return [...quick_sort(left), ...quick_sort(right)]
}
console.log(quick_sort([3,7,8,5,2,1,9,5,4]))
console.log(quick_sort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]))