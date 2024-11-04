//UNSOLVED

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const dp = new Array(n + 1).fill(-1);
    return solve(n, dp);
};

let solve = function (n, dp) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (dp[n] !== -1) return dp[n];

    dp[n] = solve(n - 1, dp) + solve(n - 2, dp);

    return dp[n];
};
