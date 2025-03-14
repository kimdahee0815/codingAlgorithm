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