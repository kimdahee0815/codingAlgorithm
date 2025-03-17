function minCostClimbingStairs(cost){
  return minCost(cost, cost.length);
}

function minCost(cost, n){
  if(n<0) return 0;
  let price = undefined;
  if(n === cost.length) price =0;
  else price = cost[n];
  return Math.min(minCost(cost, n-1), minCost(cost, n-2)) + price;
}

console.log(minCostClimbingStairs([10, 15, 20])) // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6

function minCostClimbingStairs2(cost){
  let rememberCost = [];
  let n = cost.length;
  return Math.min(minCost2(cost, n-1, rememberCost), minCost2(cost, n-2, rememberCost));
}

function minCost2(cost, n, rememberCost){
  if(n<0) return 0;
  if(n === 0 || n === 1) return cost[n];
  rememberCost[n] = cost[n] + Math.min((rememberCost[n-1]?? minCost2(cost, n-1,rememberCost)), (rememberCost[n-2]?? minCost2(cost, n-2,rememberCost)));
  return rememberCost[n];
}

console.log(minCostClimbingStairs2([10, 15, 20])) // 15
console.log(minCostClimbingStairs2([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6

function minCostClimbingStairs3(cost){
  let minCost = {0: cost[0], 1: cost[1]};
  let n = cost.length;
  for(let i=2; i<n; i++){
    minCost[i] = cost[i] + Math.min(minCost[i-1], minCost[i-2]);
  }
  return Math.min(minCost[n-1], minCost[n-2]);
}

console.log(minCostClimbingStairs3([10, 15, 20])) // 15
console.log(minCostClimbingStairs3([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
console.log(minCostClimbingStairs3([1, 100, 1])) // 2

function minCostClimbingStairs4(cost){
  let cost1 = cost[0];
  let cost2 = cost[1];
  let result = 0;
  let n = cost.length;
  for(let i=2; i<n; i++){
    result = cost[i] + Math.min(cost1, cost2);
    cost1 = cost2;
    cost2 = result;
  }
  return Math.min(cost1, cost2);
}

console.log(minCostClimbingStairs4([10, 15, 20])) // 15
console.log(minCostClimbingStairs4([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
console.log(minCostClimbingStairs4([1, 100, 1])) // 2