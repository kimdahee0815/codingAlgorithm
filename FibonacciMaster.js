let calculations = 0;
function fibonacci(n) {
    calculations++;
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function finbonacciMaster() {
    let cache = {};
    return function fib(n) {
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
const fibonacci = finbonacciMaster();
console.log(fibonacci(6));
