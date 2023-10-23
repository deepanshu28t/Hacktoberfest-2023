function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Example usage:
const n = 5;
const result = factorial(n);
console.log(`The factorial of ${n} is ${result}`);
