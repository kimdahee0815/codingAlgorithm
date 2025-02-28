function numIslands(grid){
  if(grid.length === 0 || grid?.[0].length === 0) return 0;
  //const visited = new Array(grid.length).fill(0).map(()=>new Array(grid[0].length).fill(false));
  let count = 0;
  for(let x = 0; x < grid.length; x++){
    for(let y =0; y < grid[0].length; y++){
      if(grid[x][y] === "1"){
        BFS(grid,x,y);
        count++;
      }
    }
  }

  return count;
}

function BFS(grid,x,y){
  const directions = [[-1,0],[0,1],[1,0],[0,-1]];
  const queue = [[x,y]];
  while(queue.length !== 0){
    let [a,b] = queue.shift();
    for([moveX, moveY] of directions){
      let newX = a + moveX;
      let newY = b + moveY;
      if(newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length || grid[newX][newY] === "0") continue;
      if(grid[newX][newY] === "1"){
        queue.push([newX, newY])
        grid[newX][newY] = "0";
      }

    }
    grid[a][b] = "0";
  }
}

console.log(numIslands([]))
console.log(numIslands([[],[]]))
console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","1"],["0","0","0","1","1"]]))
console.log(numIslands([["0","1","0","1","0"],["1","0","1","0","1"],["0","1","1","1","0"],["1","0","1","0","1"]]))

