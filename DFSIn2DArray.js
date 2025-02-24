const twoDArr = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
]

let m = twoDArr.length;
let n = twoDArr[0].length;
const goUp = (x,y) =>{
  return x-1>=0? [x-1, y]:null;
}
const goRight = (x,y) =>{
  return y+1<n? [x,y+1]:null;
}
const goDown = (x,y) =>{
  return x+1<m? [x+1, y]:null;
}
const goLeft = (x,y) =>{
  return y-1>=0? [x,y-1]:null;
}
const DFSFor2DArray = function(){
  const visitArr = new Array(m);
  for(let i = 0; i < twoDArr.length; i++){
    visitArr[i]= new Array(n).fill(-1);
  }
  let x= 0;
  let y =0;
  let ans = DFS(x,y, visitArr,[]);
  console.log(ans)
  return ans;
}
function DFS(x,y,visitArr,ans){
  if(goUp(x,y) && visitArr[x-1][y] === -1){
    visitArr[x][y] = 1;
    ans.push(twoDArr[x][y]);
    DFS(...goUp(x,y),visitArr,ans);
  }
  if(goRight(x,y) && visitArr[x][y+1]=== -1){
    visitArr[x][y] = 1;
    ans.push(twoDArr[x][y]);
    DFS(...goRight(x,y),visitArr,ans);
  }
  if(goDown(x,y) && visitArr[x+1][y]===-1 ){
    visitArr[x][y] = 1;
    ans.push(twoDArr[x][y]);
    DFS(...goDown(x,y),visitArr,ans);
  }
  if(goLeft(x,y) && visitArr[x][y-1]===-1){
    visitArr[x][y] = 1;
    ans.push(twoDArr[x][y]);
    DFS(...goLeft(x,y),visitArr,ans);
  }
  if(visitArr[x][y] === -1){
    ans.push(twoDArr[x][y]);
    visitArr[x][y] = 1;
  }
  return ans;
}
DFSFor2DArray()