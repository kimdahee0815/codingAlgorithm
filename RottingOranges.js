function orangeRottoing(grid){
  let initialRottenOranges = [];
  let count = 0;
  if(grid.length === 0 || grid?.[0].length === 0) return 0;
  for(let x = 0; x <grid.length; x++){
    for(let y = 0; y < grid[0].length; y++){
      if(grid[x][y] === 2){
        initialRottenOranges.push([x,y]);
      }
    }
  }
  while(initialRottenOranges.length !== 0){
    count += BFS(grid, initialRottenOranges);
  }
  for(let x = 0; x <grid.length; x++){
    for(let y = 0; y < grid[0].length; y++){
      if(grid[x][y] === 1){
        count = -1;
      }
    }
  }
  return count;
}

function BFS(grid, initialRottenOranges){
  const directions = [[-1,0],[0,1],[1,0],[0,-1]];
  let stepRottenCount = initialRottenOranges.length;
  while(stepRottenCount !== 0){
    const [orangeX, orangeY] = initialRottenOranges.shift();
    for(let [moveX, moveY] of directions){
      let newX = orangeX + moveX;
      let newY = orangeY + moveY;
      if(newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length || grid[newX][newY] === 2 || grid[newX][newY] === 0) continue;
      grid[newX][newY] = 2;
      initialRottenOranges.push([newX, newY]);
    }
    stepRottenCount--;
    grid[orangeX][orangeY] = 2;
  }
  if(initialRottenOranges.length !== 0) return 1;
  else return 0;
}

console.log(orangeRottoing([[2,1,1,0,0],[1,1,1,0,0],[0,1,1,1,1],[0,1,0,0,1]]))
console.log(orangeRottoing([[1,1,0,0,0],[2,1,0,0,0],[0,0,0,1,2],[0,1,0,0,1]]))

