const DIRECTIONS = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];
let prob = {};
function knightProbability(n,k,row,column){
  const dp = new Array(n).fill(0).map(()=>new Array(n).fill(0).map(()=> new Array(k).fill(undefined)));
  return DFSKnightProbability(n,k,row,column,dp);
}
function DFSKnightProbability(n,k,row,column,dp){
  if(row<0 || row>=n || column<0 || column>=n) return 0;
  if(k === 0) return 1;
  if(dp[row][column][k] !== undefined) return dp[row][column][k];
  let response = 0;
  for(let direction of DIRECTIONS){
    response += DFSKnightProbability(n,k-1,row+direction[0],column+direction[1],dp) / 8;
  }
  dp[row][column][k] = response;
  return response;
}
console.log(knightProbability(3,2,0,0)); // 0.0625
console.log(knightProbability(3,3,0,0)); // 0.015625
console.log(knightProbability(3,4,0,0)); // 0.00390625
console.log(knightProbability(3,5,0,0)); // 0.0009765625
console.log(knightProbability(3,6,0,0)); // 0.000244140625