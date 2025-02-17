var maxFrequency = function(nums, k) {
  let freqArr = [];
  let freqObj = {};
  let max = 0;
  let ans = 0;
  
  for(let i = 0; i < nums.length; i++){
      let diff = k - nums[i];
      freqArr[i] = diff;
  }
  let zeroIndexArr = freqArr.map((el, i) => {if(el === 0){return i}}).filter(el => el !== undefined);
  if(zeroIndexArr.length > 0){
    let zeroStartIndex = zeroIndexArr[0];
    let zeroEndIndex = zeroStartIndex;
    if(zeroIndexArr.length > 1){
      zeroEndIndex = zeroIndexArr[zeroIndexArr.length - 1];
    }
    
    for(let i = 0; i < zeroStartIndex;i++){
      if(freqObj[diff]){
          freqObj[diff]++;
      }else{
          freqObj[diff] = 1;
      }
    }
    for(let i = zeroEndIndex+1; i < nums.length;i++){
      if(freqObj[diff]){
          freqObj[diff]++;
      }else{
          freqObj[diff] = 1;
      }
    }
  }
  
  let maxKey = Object.keys(freqObj).map(key =>{ max = Math.max(freqObj[key], max); return key})
  .map(el => el !== '0' && freqObj[el] === maxFrequency);
  let maxfreqIndexArr = freqArr.map((el,i) =>{if(el === Number(maxKey)){return i}}).filter(el => el !== undefined);
 
  if(zeroIndexArr.length >0 && (zeroIndexArr[zeroIndexArr.length - 1] < maxfreqIndexArr[0] || maxfreqIndexArr[maxfreqIndexArr.length - 1] < zeroIndexArr[0])){
       ans = freqObj[0] + max;
  }else{
    ans = max;
  }

  return ans;
}


console.log(maxFrequency([1,2,3,4,5,6],1))
console.log(maxFrequency([10,2,3,4,5,5,4,3,2,2],10))
console.log(maxFrequency([6,1,6],1))
console.log(maxFrequency([2,3,7,1,7], 7))