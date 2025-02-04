var minRemoveToMakeValid = function(s) {
  const leftParentheses = [];
  const rightParentheses = [];
  for(let i = 0; i < s.length; i++){
      if(s[i] === "(") {
          leftParentheses.push(i);
      } else if(s[i] === ")"){
          if(leftParentheses.length !== 0) {
              leftParentheses.pop();
          } else{
              rightParentheses.push(i);
          }
      }
  }
  while(leftParentheses.length !== 0){
    let index = leftParentheses.pop();
    s = s.slice(0, index) + s.slice(index+1);
  }
  while(rightParentheses.length !== 0){
    let index = rightParentheses.pop();
    s = s.slice(0, index) + s.slice(index+1);
  }
  return s;
};
console.log(minRemoveToMakeValid("))(("))
