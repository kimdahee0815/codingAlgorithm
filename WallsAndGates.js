function wallsAndGates(grid){
  if(grid.length === 0) return;
  let visited = new Array(grid.length).fill(0).map(()=>new Array(grid[0].length).fill(false))
  for(let x = 0; x < grid.length; x++){
    for(let y = 0; y< grid[0].length; y++){
      if(grid[x][y] === Infinity){
        let ans = [];
        DFS(grid,x,y,visited,Infinity,ans);
        if(ans.length !== 0){
          grid[x][y] = ans[0];
        }
        visited = visited.map(r => r.map(() => false));
      }
    }
  }
  return grid;
}

function DFS(grid,x,y,visited,lev,ans){
  const directions = [[-1,0],[0,1],[1,0],[0,-1]]
  let met = false;
  for(let [moveX, moveY] of directions){
    let newX = x + moveX;
    let newY = y + moveY;
    if(newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length || grid[newX][newY] === -1 || visited[newX][newY] === true) continue;
    if(grid[newX][newY] === 0){
      met = true;
      visited[newX][newY] = true;
      if(lev === Infinity){
        lev = 0;
      }
      let solution = lev + 1;
      if(ans.length !== 0){
        solution = Math.min(ans[0], solution)
      }
      ans[0] = solution;
    }else{
      visited[x][y] = true;
      if(lev === Infinity){
        lev = 0;
      }
      DFS(grid,newX,newY, visited, lev+1, ans);
    }
  }
  if(!met){
    if(ans.length !== 0){
      return ans[0]
    }else{
      return Infinity;
    }
  }else{
    return ans[0];
  }
}


function wallsAndGates2(grid){
  if(grid.length === 0) return;
  let visited = new Array(grid.length).fill(0).map(()=>new Array(grid[0].length).fill(false))
  for(let x = 0; x< grid.length; x++){
    for(let y = 0; y < grid[0].length; y++){
      if(grid[x][y] === 0){
        DFS2(grid,x,y,0,visited);
        visited = visited.map(r => r.map(() => false));
      }
    }
  }
  return grid;
}

function DFS2(grid,x,y,steps,visited){
  const directions = [[-1,0],[0,1],[1,0],[0,-1]];
  for(let [moveX, moveY] of directions){
    let newX = x + moveX;
    let newY = y + moveY;
    if(newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length || grid[newX][newY] === -1 || grid[newX][newY] === 0 || visited[newX][newY] === true) continue;
    grid[newX][newY] = Math.min(grid[newX][newY], steps+1);
    visited[newX][newY] = true;
    DFS2(grid,newX, newY, steps+1,visited)
  }
  return;
}

console.log(wallsAndGates2([[Infinity, -1, 0, Infinity], [Infinity, Infinity, Infinity, -1], [Infinity, -1, Infinity, -1], [0,-1,Infinity,Infinity]]));
console.log(wallsAndGates2([[Infinity, -1, 0, Infinity], [-1, Infinity, Infinity, -1], [Infinity, -1, Infinity, -1], [0,-1,Infinity,Infinity]]));