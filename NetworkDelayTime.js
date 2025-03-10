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

function networkDelayTime2(times, n, k){
  let adjacency = new Array(n+1).fill(0).map(()=>[])
  let time = new Array(n+1).fill(0).map(()=>[]);
  for(let i = 0;i < times.length;i++){
    adjacency[times[i][0]].push(times[i][1]);
    time[times[i][0]].push(times[i][2]);
  }
  let totalTime = {[k]: 0};
  let seen = {};
  let centervertex = k;
  while(Object.keys(seen).length !== Object.keys(totalTime).length){
    let connections = adjacency[centervertex];
    for(let v = 0; v < connections.length; v++){
      if(totalTime[connections[v]] === undefined){
        totalTime[connections[v]] = time[centervertex][v] + totalTime[centervertex];
      }else{
        totalTime[connections[v]] = Math.min(totalTime[connections[v]], time[centervertex][v] + totalTime[centervertex]);
      }
    }
    seen[centervertex] = true;
    let tempTotalTime = Object.fromEntries(Object.entries(totalTime).filter(el => !seen[el[0]]));
    let minVal = Math.min(...Object.values(tempTotalTime));
    centervertex = Object.keys(tempTotalTime).find(el => tempTotalTime[el] === minVal);
  }
  if(Object.keys(totalTime).length !== n) return -1;
  else{
    let maxTime = 0;
    Object.values(totalTime).forEach(el => maxTime = Math.max(maxTime, el));
    return maxTime;
  }
}

function networkDelayTime3(times, n, k){
  let distances = new Array(n).fill(Infinity);
  distances[k-1] = 0;
  for(let i = 0; i < n; i++){
    for(let adjacent of times){
      let source = adjacent[0];
      let target = adjacent[1];
      let distance = adjacent[2]
      if(distances[target-1] > distances[source-1] + distance){
        distances[target-1] = distances[source-1] + distance;
      }
    }
  }
  let ans = Math.max(...distances);
  return ans === Infinity? -1 : ans;
}
console.log(networkDelayTime3([[1,3,3],[2,1,2],[2,3,9],[2,4,3],[3,4,1],[2,5,8],[5,7,1],[5,6,1],[6,7,5],[4,6,5]], 7, 2))
console.log(networkDelayTime3([[1,2,9],[1,4,2],[2,5,1],[4,2,4],[4,5,6],[3,2,3],[5,3,7],[3,1,5]], 5, 1))
console.log(networkDelayTime3([[1,3,3],[2,1,2],[2,3,9],[2,4,3],[3,4,1],[5,7,1],[5,6,1],[6,7,5],[4,6,5]], 7, 2))
