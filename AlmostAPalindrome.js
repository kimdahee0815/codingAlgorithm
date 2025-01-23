// function almostAPalindrome(s){
// 	s = s.toLowerCase();
// 	s = s.replace(/[^a-z0-9]/g, "");
//   let removeLetter = false;
// 	let reversedStr1 = "";
// 	let reversedStr2 = "";
// 	let i = 0;
// 	for(let j = s.length - 1; i < j; j--){
// 		if(s[i] !== s[j]){
//       if(removeLetter){
//         return false;
//       }
//       removeLetter = true;
// 			if(s[j-1] !== s[i] && s[j] !== s[i+1]){
// 				return false;
// 			} 
//       if(s[j-1] === s[i] && s[j] === s[i+1]){
//         reversedStr1 = s.slice(0, j) + s.slice(j+1)
//         reversedStr2 = s.slice(0, i) + s.slice(i+1)
//         break;
//       }
// 			if(s[j-1]===s[i]){
// 				j--;
//         i++;
// 			}else if(s[j] === s[i+1]){
// 				i+=2;
// 			}
// 		}else{
// 			i++;
// 		}
// 	}

// 	if(reversedStr1 !== "" && !isPalindrome(reversedStr1) && reversedStr2 !== "" && !isPalindrome(reversedStr2)){
// 		return false;
// 	}
// 	return true;
// }

// function isPalindrome(s){
// 	let i = 0;
// 	let j = s.length - 1;
// 	while(i < j){
// 		if(s[i] !== s[j]){
// 			return false;
// 		}
// 		i++;
// 		j--;
// 	}
// 	return true;
// }

// console.log(almostAPalindrome("race a car"))
// console.log(almostAPalindrome("aabbcaa"))
// console.log(almostAPalindrome("abdccba"))
// console.log(almostAPalindrome("a"))
// console.log(almostAPalindrome(""))
// console.log(almostAPalindrome("A man, a plan, a canal:Panama"))
// console.log(almostAPalindrome("abcdefdba"))
// console.log(almostAPalindrome("Ab"))
// console.log(almostAPalindrome("eceec"))
// console.log(almostAPalindrome("adceceadbddbdaececrda"))

// function almostAPalindrome(s){
// 	s = s.toLowerCase();
// 	s = s.replace(/[^a-z0-9]/g, "");
// 	let i = 0;
// 	let j = s.length - 1;
//   let reversedStr1 = ""
//   let reversedStr2 = ""
// 	for(; i < j; j--){
// 		if(s[i] !== s[j]){
// 		      if(s[j-1] !== s[i] && s[j] !== s[i+1]){
// 			       return false;
// 		      }
// 			if(s[j-1] === s[i] || s[j] === s[i+1]){
// 			        reversedStr1 = s.slice(0, j) + s.slice(j+1)
// 			        reversedStr2 = s.slice(0, i) + s.slice(i+1)			
// 			}
// 		       break;
// 	    }else{
// 		     i++;
// 	    }
//   }

//   if(reversedStr1 !== "" && reversedStr2 !== ""){
// 	  if(!isPalindrome(reversedStr1, i, j-1) && !isPalindrome(reversedStr2, i, j-1)){
// 		  return false;
// 	  }
//   } 
//   return true;
// }

// function isPalindrome(s, i, j){
// 	while(i < j){
// 		if(s[i] !== s[j]){
// 			return false;
// 		}
// 		i++;
// 		j--;
// 	}
// 	return true;
// }
// console.log(almostAPalindrome("race a car"))
// console.log(almostAPalindrome("aabbcaa"))
// console.log(almostAPalindrome("abdccba"))
// console.log(almostAPalindrome("a"))
// console.log(almostAPalindrome(""))
// console.log(almostAPalindrome("A man, a plan, a canal:Panama"))
// console.log(almostAPalindrome("abcdefdba"))
// console.log(almostAPalindrome("Ab"))
// console.log(almostAPalindrome("eceec"))
// console.log(almostAPalindrome("adceceadbddbdaececrda"))
// console.log(almostAPalindrome("tcaac"))

function almostAPalindrome(s){
  s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, "");
    let i = 0;
    let j = s.length - 1;
    for(; i < j; j--){
      if(s[i] !== s[j]){
           if(!isPalindrome(s, i+1, j)  && !isPalindrome(s, i, j-1)){
             return false;
           }else{
            return true;
          }
        }else{
           i++;
        }
    }
    return true;
}

function isPalindrome(s, i, j){
	while(i < j){
		if(s[i] !== s[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
console.log(almostAPalindrome("race a car"))
console.log(almostAPalindrome("aabbcaa"))
console.log(almostAPalindrome("abdccba"))
console.log(almostAPalindrome("a"))
console.log(almostAPalindrome(""))
console.log(almostAPalindrome("A man, a plan, a canal:Panama"))
console.log(almostAPalindrome("abcdefdba"))
console.log(almostAPalindrome("Ab"))
console.log(almostAPalindrome("eceec"))
console.log(almostAPalindrome("adceceadbddbdaececrda"))
console.log(almostAPalindrome("tcaac"))