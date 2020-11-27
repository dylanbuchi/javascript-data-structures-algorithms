const findFactorialRecursive = (n) => {
    if (n === 0) return 1;

    return n * findFactorialRecursive(n - 1);
};

const findFactorialIterative = (n) => {
    let total = 1;
    while (n) {
        total *= n;
        n--;
    }
    return total;
};

console.log(findFactorialRecursive(0));
console.log(findFactorialIterative(5));
