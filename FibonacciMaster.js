let calculations = 0;
function fibonacci(n) {
    calculations++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));
console.log("For Fbonacci func(6) We did " + calculations);
console.log(fibonacci(7));
console.log("For Fbonacci func(7) We did " + calculations);
console.log(fibonacci(8));
console.log("For Fbonacci func(8) We did " + calculations);

calculations = 0;
function finbonacciMaster() {
    let cache = {};
    return function fib(n) {
        calculations++;
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                cache[n] = n;
            } else {
                cache[n] = fib(n - 1) + fib(n - 2);
            }
            return cache[n];
        }
    };
}

const fibonacciM = finbonacciMaster();
console.log(fibonacciM(6));
console.log("For fibonacciM func(6) We did " + calculations);
console.log(fibonacciM(7));
console.log("For fibonacciM func(7) We did " + calculations);
console.log(fibonacciM(8));
console.log("For fibonacciM func(8) We did " + calculations);
