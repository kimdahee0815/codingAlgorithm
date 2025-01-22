// function removeLetterSharp(S, T){
// 	let i = 0;
//   let j = 0;
// 	while(i < S.length){
// 		if(S[i] === "#"){
// 			if(i >= 1 && i < S.length - 1){
// 				S = S.slice(0, i-1) + S.slice(i+1);
//         i-=2;
// 			}else if(i===0){
// 				S = S.slice(1);
//         i--;
// 			}else{
//         S = S.slice(0, i-1);
//       }
// 		}
//     i++;
// 	}
// 	while(j < T.length){
// 		if(T[j] === "#"){
// 			if(j >= 1 && j < T.length - 1){
// 				T = T.slice(0, j-1) + T.slice(j+1);
//         j-=2;
// 			}else if(j===0){
// 				T = T.slice(1);
//         j--;
// 			}else{
//         T = T.slice(0, j-1);
//       }
// 		}
//     j++;
// 	}
// 	console.log(S, T)
// 	if(S === T){
// 		return true;
// 	}
// 	return false;
// }
// console.log(removeLetterSharp("ab#c", "#a####b##c")) //false
// console.log(removeLetterSharp("ab#z", "az#z")) //true
// console.log(removeLetterSharp("abc#d", "acc#c")) //false
// console.log(removeLetterSharp("x#y#z#", "a#")) //false
// console.log(removeLetterSharp("a###b", "b")) //true
// console.log(removeLetterSharp("Ab#z", "ab#z")) //false

// function removeLetterSharp(S, T){
//    let i = 0;
//    let j = 0;
//    let SArr = [];
//    let TArr = [];
//    while(i < S.length){
//     if(S[i] === "#"){
//       if(i >= 1){
//         SArr.pop();
//       }
//     }else{
//       SArr.push(S[i]);
//    }
//    i++;
//    }
//    while(j < T.length){
//     if(T[j] === "#"){
//      if(j >= 1){
//      TArr.pop();
//       }
//     }else{
//       TArr.push(T[j]);
//     } 
//     j++;
//    }
//    console.log(SArr.join(""), TArr.join(""))
//    if(SArr.join("") === TArr.join("")){
//     return true;
//    }
//    return false;
// }
  
//   console.log(removeLetterSharp("ab#c", "#a####b##c")) //false
//   console.log(removeLetterSharp("ab#z", "az#z")) //true
//   console.log(removeLetterSharp("abc#d", "acc#c")) //false
//   console.log(removeLetterSharp("x#y#z#", "a#")) //true
//   console.log(removeLetterSharp("a###b", "b")) //true
//   console.log(removeLetterSharp("Ab#z", "ab#z")) //false

function removeLetterSharp (s, t){
  let p = s.length - 1; 
  let q = t.length - 1;
  let sHash = 0;
  let tHash = 0;
  while(p >=0 || q>=0){
    if(s[p] === "#"){
      sHash++;
      p--;
    }else{
      if(sHash > 0){
        sHash--;
        p--;
      }
    }

    if(t[q] === "#"){
      tHash++;
      q--;
    }else{
      if(tHash > 0){
        tHash--;
        q--;
      }
    }

    if(s[p] !== "#" && t[q] !== "#" && tHash === 0 && sHash === 0){
      if(s[p] !== t[q] ){
        return false;
      }
      p--;
      q--;
    }
  } 
	return true;
}

console.log(removeLetterSharp("ab#c", "#a####a##c")); //false
console.log(removeLetterSharp("ab#z", "az#z")); //true 
console.log(removeLetterSharp("abc#d", "acc#c")); //false 
console.log(removeLetterSharp("x#y#z#", "a#")); //true 
console.log(removeLetterSharp("a###b", "b")); //true 
console.log(removeLetterSharp("Ab#z", "ab#z")); //false
console.log(removeLetterSharp("ab##", "c#d#")); //true