// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

// Time: O(2^n)
const fibonacciRecursive = (n) => {
    if (n < 2) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

// Time: O(n)
const fibonacciIterative = (n) => {
    const fib = [0, 1];

    for (let i = 2; i < n + 1; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }

    return fib[n];
};

console.log(fibonacciRecursive(8));
console.log(fibonacciIterative(8));
