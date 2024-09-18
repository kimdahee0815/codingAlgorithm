// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
    let a = 0;
    let b = 1;
    let result = a + b;
    for (let i = 0; i < n - 2; i++) {
        [a, b] = [b, result];
        result = a + b;
    }
    return result;
}

//O(N)
function fibonacciIterative2(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr[n];
}

//O(2^N)
let numOfCalc = 0;
function fibonacciRecursive(n) {
    numOfCalc++;
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(30));
console.log(fibonacciIterative(7));
console.log(numOfCalc);
