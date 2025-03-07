//TIME EXCEEDED
function networkDelayTime(times, n, k){
  let adjacency = new Array(n+1).fill(0).map(()=>[])
  let time = new Array(n+1).fill(0).map(()=>[]);
  for(let i = 0;i < times.length;i++){
    adjacency[times[i][0]].push(times[i][1]);
    time[times[i][0]].push(times[i][2]);
  }
  let totalTime = {[k]: 0};
  let queue = [...adjacency[k]];
  for(let i = 0; i< queue.length; i++){
    let point = queue[i];
    if(!totalTime[point]){
      totalTime[point] = time[k][i];
    }else{
      totalTime[point] = Math.min(time[k][i], totalTime[point])
    }
    DFS(totalTime[point], adjacency, time, totalTime, k, i,2);
  }
  if(Object.keys(totalTime).length !== n) return -1;
  else{
    let maxTime = 0;
    Object.values(totalTime).forEach(el => maxTime = Math.max(maxTime, el));
    return maxTime;
  }
}

function DFS(sum, adjacency, time, totalTime, j, i,count){
  let start = adjacency[j][i];
  let connections = [...adjacency[start]];
  for(let a = 0; a < connections.length; a++){
    let point = connections[a];
    if(totalTime[point] === undefined){
      totalTime[point] = time[start][a] + sum; 

    }else{
      totalTime[point] = Math.min(time[start][a] + sum, totalTime[point])
    }
    if(count === adjacency.length -1) continue;
    DFS(time[start][a] + sum, adjacency, time, totalTime, start, a, count+1);
  }
  return;
}

console.log(networkDelayTime([[1,3,3],[2,1,2],[2,3,9],[2,4,3],[3,4,1],[2,5,8],[5,7,1],[5,6,1],[6,7,5],[4,6,5]], 7, 2))
console.log(networkDelayTime([[1,2,9],[1,4,2],[2,5,1],[4,2,4],[4,5,6],[3,2,3],[5,3,7],[3,1,5]], 5, 1))
console.log(networkDelayTime([[1,3,3],[2,1,2],[2,3,9],[2,4,3],[3,4,1],[5,7,1],[5,6,1],[6,7,5],[4,6,5]], 7, 2))
