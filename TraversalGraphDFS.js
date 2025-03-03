function traverseDFS(graph){
  let answer = [];
  DFS(graph, 0, answer, {});
  return answer;
}

function DFS(graph, edge, answer, seen){
  answer.push(edge);
  seen[edge] = true;
  let connections = graph[edge];
  for(let connection of connections){
    if(!seen[connection]){
      DFS(graph, connection, answer, seen)
    }
  }
  return;
}

console.log(traverseDFS([[1,3],[],[3,8],[0,4,5,2],[3,6],[3],[4,7],[6],[2]]))