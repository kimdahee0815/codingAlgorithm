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

function knightProbability2(n,k,row,column){
  const dp = new Array(n).fill(0).map(()=>new Array(n).fill(0));
  const previousDp = new Array(n).fill(0).map(()=>new Array(n).fill(0));
  previousDp[row][column] = 1;
  let result = 0;
  if(k===0) return 1;
  let step = 1;
  while(step <= k){
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        for(let [moveX, moveY] of DIRECTIONS){
          if(i+moveX <0 || i+moveX >= n || j+moveY < 0 || j+moveY >= n) continue;
          dp[i][j] += previousDp[i+moveX][j+moveY] / 8;
        }
      }
    }
    for(let i = 0; i<n; i++){
      for(let j = 0; j<n; j++){
        previousDp[i][j] = dp[i][j];
        if(step === k){
          result += dp[i][j];
        }
        dp[i][j] = 0;
      }
    }
    step++;
  }
  return result;
}
console.log(knightProbability2(3,2,0,0)); // 0.0625
console.log(knightProbability2(3,3,0,0)); // 0.015625
console.log(knightProbability2(3,4,0,0)); // 0.00390625
console.log(knightProbability2(3,5,0,0)); // 0.0009765625
console.log(knightProbability2(3,6,0,0)); // 0.000244140625