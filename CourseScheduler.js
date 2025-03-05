var canFinish = function(numCourses, prerequisites) {
    let queue = [];
    let result = true;
    for(let i = 0; i < prerequisites.length; i++){
      let relationship = prerequisites[i];
      if(relationship[0] === relationship[1]){
        result = false;
        break;
      }
      if(queue.length === 0){
        queue.push([relationship[1], relationship[0]]);
      }else{
        let pushed = false;
        for(let q = 0; q < queue.length; q++){
          let queueRelationship = queue[q];
          if((queueRelationship[queueRelationship.length - 1] === relationship[1]) && (relationship[0] === queueRelationship[0])){
            result = false;
            break;
          }else if(queueRelationship[queueRelationship.length - 1] === relationship[1]){
            queueRelationship.push(relationship[0]);
            pushed = true;
          }else if(relationship[0] === queueRelationship[0]){
            queueRelationship.unshift(relationship[1]);
            pushed = true;
          }
        }
        if(!pushed && result){
          queue.push([relationship[1], relationship[0]])
        }
      }
    }
    return result;
};

var canFinish2 = function(numCourses, prerequisites) {
  let adjacency = new Array(numCourses).fill(0).map(()=> []);
  for(let i = 0; i < prerequisites.length; i++){
    adjacency[prerequisites[i][1]].push(prerequisites[i][0]);
  }
  let result = true;
  for(let start = 0; start< numCourses;start++){
    let queue = [...adjacency[start]];
    let seen = {};
    if(!result) return result;
    while(queue.length){
      let next = queue.shift();
      seen[next] = true;
      if(next === start){
        result = false;
        break;
      }
      let filteredAdjacencyList = adjacency[next].filter(el => !seen[el]);
      queue = [...queue, ...filteredAdjacencyList]
    }
  }
  return result;
};

console.log(canFinish2(6,[[1,0],[2,1],[2,5],[0,3],[4,3],[3,5],[4,5]]))
console.log(canFinish2(7,[[0,3],[1,0],[2,1],[4,5],[5,6],[6,4]]))
console.log(canFinish2(20, [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]))
console.log(canFinish2(4,[[0,1],[2,3],[1,2],[3,0]]))
console.log(canFinish2(4,[[2,0],[1,0],[3,1],[3,2],[1,3]]))