function traverseBFS(list){
  if(list.length === 0) return [];
  let queue = [];
  let answer = [];
  for(let edge = 0; edge < list.length; edge++){
    if(list[edge].length !== 0){
      queue = [...list[edge]]
      answer.push(edge)
      break;
    }
  }

  while(queue.length !== 0){
    let edge = queue.shift();
    for(let e of list[edge]){
      if(answer.findIndex(el => el === e) === -1){
        queue.push(e);
      }
    }
    if(answer.findIndex(el => el === edge) === -1){
      answer.push(edge)
    }
  }
  return answer;
}

console.log(traverseBFS([[1,3],[],[3,8],[0,4,5,2],[3,6],[3],[4,7],[6],[2]]))