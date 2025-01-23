// function isValidPalindrome(s){
//   s = s.toLowerCase();
//   let regex = /^[a-z0-9]+$/i
//   for(let i = 0; i < s.length; i++){
//     if(!s[i].match(regex)){
//       s = s.slice(0, i) + s.slice(i+1)
//       i--;
//     }
//   }
  
//   let i = 0;
//   let j = s.length - 1;
//   while(i < j){
//     if(s[i] !== s[j]){
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }
// console.log(isValidPalindrome("aabaa"))
// console.log(isValidPalindrome("aabbaa"))
// console.log(isValidPalindrome("abc"))
// console.log(isValidPalindrome("a"))
// console.log(isValidPalindrome(""))
// console.log(isValidPalindrome(" A man, a plan, a canal:Panama"))
// console.log(isValidPalindrome("aabaa"))

// function isValidPalindrome(s){
//   if(s.length <= 1){
//     return true;
//   }
//    s = s.toLowerCase();
//     let regex = /[^a-z0-9]/g
//    s = s.replace(regex, "");
//    let i = 0;
//    let j = 0;
//    let reversedStr = "";
//   for(let i = s.length - 1; i>=0; i--){
//     reversedStr += s[i];
//   }
  
//   if(reversedStr !== s){
//     return false;
//   }
//     return true;
//   }
  
//   console.log(isValidPalindrome("aabaa"))
//   console.log(isValidPalindrome("aabbaa"))
//   console.log(isValidPalindrome("abc"))
//   console.log(isValidPalindrome("a"))
//   console.log(isValidPalindrome(""))
//   console.log(isValidPalindrome(" A man, a plan, a canal:Panama"))
//   console.log(isValidPalindrome("aabaa"))

function isValidPalindrome(s){
  if(s.length <= 1){
    return true;
  }
  s = s.toLowerCase();
  let regex = /[^a-z0-9]/g
  s = s.replace(regex, "");
  let i = 0;
  let j = 0;
  
  if(s.length % 2 === 0){
    i = Math.floor(s.length / 2) - 1;
    j = i+1;
  }else{
    i = Math.floor(s.length / 2);
    j = i;
  }
  
  while(i>=0 && j <= s.length - 1){
    if(s[i] !== s[j]){
      return false;
    }
    i--;
    j++;
  }
  return true;
  }
  
  console.log(isValidPalindrome("aabaa"))
  console.log(isValidPalindrome("aabbaa"))
  console.log(isValidPalindrome("abc"))
  console.log(isValidPalindrome("a"))
  console.log(isValidPalindrome(""))
  console.log(isValidPalindrome(" A man, a plan, a canal:Panama"))
  console.log(isValidPalindrome("aabaa"))
  