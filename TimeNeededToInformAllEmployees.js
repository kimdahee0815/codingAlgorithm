//TIME EXCEEDED
function numOfMinutes(n, headID, manager, informTime){
  let totalMins = [0];
  DFS(headID, manager, informTime, informTime[headID], totalMins);
  return totalMins[0];
}

function DFS(managerID, manager, informTime, time, totalMins){
  for(let i = 0; i< manager.length; i++){
    if(manager[i] === managerID){
      if(informTime[i] === 0){
        if(totalMins[0] < time){
          totalMins[0] = time;
        }
      }else{
        DFS(i, manager, informTime, time+informTime[i], totalMins);
      }
    }
  }
}

function numOfMinutes2(n, headID, manager, informTime){
  let queue = [headID];
  let connections = new Array(n).fill(0).map(()=> new Array());
  while(queue.length){
    let nextManager = queue.shift();
    for(let i = 0; i < manager.length; i++){
      if(manager[i] === nextManager){
        queue.push(i);
        connections[nextManager].push(i);
      }
    }
  }
  let totalMins = [0];
  DFS2(headID, connections, informTime, informTime[headID], totalMins);
  return totalMins[0];
}

function DFS2(managerID, connections, informTime, time, totalMins){
  let queue = [...connections[managerID]];
  while(queue.length){
    let nextManager = queue.shift();
    if(informTime[nextManager] === 0){
      if(totalMins[0] < time){
        totalMins[0] = time;
      }
    }else{
      DFS2(nextManager, connections, informTime, time+informTime[nextManager], totalMins);
    }
  }
}

console.log(numOfMinutes2(6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0]))
console.log(numOfMinutes2(8,4,[2,2,4,6,-1,4,4,5],[0,0,4,0,7,3,6,0]))
console.log(numOfMinutes2(1,0,[-1],[0]))
console.log(numOfMinutes2(11,4,[5,9,6,10,-1,8,9,1,9,3,4],[0,213,0,253,686,170,975,0,261,309,337]))