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

console.log(numOfMinutes(6,2,[2,2,-1,2,2,2],[0,0,1,0,0,0]))
console.log(numOfMinutes(8,4,[2,2,4,6,-1,4,4,5],[0,0,4,0,7,3,6,0]))
console.log(numOfMinutes(1,0,[-1],[0]))
console.log(numOfMinutes(11,4,[5,9,6,10,-1,8,9,1,9,3,4],[0,213,0,253,686,170,975,0,261,309,337]))