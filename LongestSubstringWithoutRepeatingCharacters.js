// function longestSubstrWithoutRepeatingChar(str){
// 	let i = 0;
// 	let charObj = {};
// 	let max = 0;
// 	while(i < str.length){
// 		if(!charObj[str[i]]){
// 			charObj[str[i]] = i;
// 			i++;
// 		}else{
// 			let len = Object.keys(charObj).length;
// 			if(max < len){
// 				max = len;
// 			}
// 			let prevRepeatedCharIndex = charObj[str[i]];
// 			i = prevRepeatedCharIndex + 1;
//       charObj = {}
// 		}
// 	}
//   let len = Object.keys(charObj).length;
//   if(max < len){
//     max = len;
//   }
// 	return max;
// }
// console.log(longestSubstrWithoutRepeatingChar("abccabb"))
// console.log(longestSubstrWithoutRepeatingChar("ccccccccc"))
// console.log(longestSubstrWithoutRepeatingChar(""))
// console.log(longestSubstrWithoutRepeatingChar("abcbda"))
// console.log(longestSubstrWithoutRepeatingChar("abcbdca"))
// console.log(longestSubstrWithoutRepeatingChar("abcdefbaghghijklm"))

function longestSubstrWithoutRepeatingChar(str){
    let L = 0;
    let R = 0;
    let charObj = {};
    let max = 0;
    while(R < str.length){
      if(charObj[str[R]] >= L){
        L = charObj[str[R]]+1;
      }
      charObj[str[R]] = R;
      let len = R - L + 1;
        if(max < len){
          max = len;
        }
        R++;
    }
    return max;
  }
  
  console.log(longestSubstrWithoutRepeatingChar("abccabb"))
  console.log(longestSubstrWithoutRepeatingChar("ccccccccc"))
  console.log(longestSubstrWithoutRepeatingChar(""))
  console.log(longestSubstrWithoutRepeatingChar("abcbda"))
  console.log(longestSubstrWithoutRepeatingChar("abcbdca"))
  console.log(longestSubstrWithoutRepeatingChar("abcdefbaghghijklm"))