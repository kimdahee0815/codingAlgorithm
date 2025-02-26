function BFSSearchIn2DArray(){
  const directions = [[-1,0],[0,1],[1,0],[0,-1]];
  const twoDArray = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]];
  const visited = new Array(twoDArray.length).fill(0).map(()=>new Array(twoDArray[0].length).fill(false))
  let queue = [];
  let answer = [];
  let x = 2;
  let y = 2;
  if(twoDArray.length === 0) return answer;
  if(twoDArray.length === 1) return twoDArray[0];
  queue.push([x,y]);
  while(queue.length > 0){
    let [x,y] = queue.shift();
    for(let [moveX, moveY] of directions){
      let newX = x + moveX;
      let newY = y + moveY;
      if(newX < 0 || newY < 0 || newX >= twoDArray.length || newY >= twoDArray[0].length || visited[newX][newY] === true) continue;
      queue.push([newX, newY]);
    }

    if(!visited[x][y]){
      answer.push(twoDArray[x][y]);
    }
    visited[x][y] = true;
  }
  return answer;
}
console.log(BFSSearchIn2DArray())