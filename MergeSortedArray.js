var merge = function(nums1, m, nums2, n) {
  let p = 0;
  let q = 0;
  let queue = [];
  while(p < m){
    if(queue.length !== 0){
      if(queue[0] <= nums1[p]){
        if((q < nums2.length && queue[0] <= nums2[q]) || q >= nums2.length){
          queue.push(nums1[p]);
          nums1[p] = queue.shift();
          p++;
          continue;
        }
      }
    }
    if(q < nums2.length){
      if(nums1[p] <= nums2[q]){
        p++;
      }else{
        queue.push(nums1[p]);
        nums1[p] = nums2[q];
        p++;
        q++;
      }
    }
  }
  while(p<nums1.length){
    if(q < nums2.length){
      if(queue.length !== 0){
        if(queue[0] > nums2[q]){
          nums1[p] = nums2[q];
          p++;
          q++;
        }else{
          nums1[p] = queue.shift();
          p++;
        }
      }else{
        nums1[p] = nums2[q];
        p++;
        q++;
      }
    }else{
      nums1[p] = queue.shift();
      p++;
    }
  }
  return nums1;
};

console.log(merge([4,0,0,0,0,0],1, [1,2,3,5,6],5))
console.log(merge([1,2,3,0,0,0],3, [2,5,6],3))
console.log(merge([2,0],1, [1],1))
console.log(merge([4,5,6,0,0,0],3,[1,2,3],3))
console.log(merge([1,2,4,5,6,0],5,[3],1))
console.log(merge([-1,0,0,3,3,3,0,0,0],6,[1,2,2],3))
console.log(merge([0,0,3,0,0,0,0,0,0],3, [-1,1,1,1,2,3], 6))
console.log(merge([-1,0,0,0,3,0,0,0,0,0,0],5, [-1,-1,0,0,1,2], 6))
console.log(merge([4,5,6,0,0,0], 3, [1,2,3],3))
console.log(merge([-10,-10,-9,-9,-9,-8,-8,-7,-7,-7,-6,-6,-6,-6,-6,-6,-6,-5,-5,-5,-4,-4,-4,-3,-3,-2,-2,-1,-1,0,1,1,1,2,2,2,3,3,3,4,5,5,6,6,6,6,7,7,7,7,8,9,9,9,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],55,
  [-10,-10,-9,-9,-9,-9,-8,-8,-8,-8,-8,-7,-7,-7,-7,-7,-7,-7,-7,-6,-6,-6,-6,-5,-5,-5,-5,-5,-4,-4,-4,-4,-4,-3,-3,-3,-2,-2,-2,-2,-2,-2,-2,-1,-1,-1,0,0,0,0,0,1,1,1,2,2,2,2,2,2,2,2,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,9,9,9,9],99
))