let count = 0;

// Time: O(n)
const memoizeFibonacci = () => {
    const cache = {};

    return function fib(n) {
        count++;
        if (n in cache) {
            return cache[n];
        }
        if (n < 2) {
            return n;
        } else {
            cache[n] = fib(n - 1) + fib(n - 2);
            return cache[n];
        }
    };
};

// Time: O(2^n)
const fibonacciRecursive = (n) => {
    count++;
    if (n < 2) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
};

const fibonacciMemoized = (n) => {
    const fib = memoizeFibonacci();
    return fib(n);
};

console.log(fibonacciMemoized(8));
console.log(count);

count = 0;

console.log(fibonacciRecursive(8));
console.log(count);
