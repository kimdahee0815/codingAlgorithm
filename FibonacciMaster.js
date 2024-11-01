let calculations = 0;
function fibonacci(n) {
    calculations++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
calculations = 0;
console.log(fibonacci(6));
console.log("For Fbonacci func(6) We did " + calculations);
calculations = 0;
console.log(fibonacci(7));
console.log("For Fbonacci func(7) We did " + calculations);
calculations = 0;
console.log(fibonacci(10));
console.log("For Fbonacci func(10) We did " + calculations);

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

const fibonacciM1 = finbonacciMaster();
calculations = 0;
console.log(fibonacciM1(6));
console.log("For fibonacciM func(6) We did " + calculations);
const fibonacciM2 = finbonacciMaster();
calculations = 0;
console.log(fibonacciM2(7));
console.log("For fibonacciM func(7) We did " + calculations);
const fibonacciM3 = finbonacciMaster();
calculations = 0;
console.log(fibonacciM3(10));
console.log("For fibonacciM func(10) We did " + calculations);
