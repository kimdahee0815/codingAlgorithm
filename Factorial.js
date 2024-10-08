// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop

// O(N)
function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    return number * findFactorialRecursive(number - 1);
}

// O(N)
function findFactorialIterative(number) {
    let answer = 1;
    for (let i = 2; i <= number; i++) {
        answer *= i;
    }
    return answer;
}
console.log(findFactorialRecursive(4));
console.log(findFactorialIterative(5));
