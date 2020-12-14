const add10To = (n) => {
    console.log("takes a long time to run");
    return n + 10;
};

// optimization of the code using caching (memoization)
// memoization is to remember a solution to a subproblem to not recalculate it again

const memoizeAdd10To = () => {
    // using  closure to avoid global scope
    const cache = {};

    return (n) => {
        if (n in cache) {
            console.log("memoized");
            return cache[n];
        } else {
            cache[n] = add10To(n);
            return cache[n];
        }
    };
};

console.log(add10To(10));
console.log(add10To(10));

const memoized = memoizeAdd10To();

console.log(memoized(0));
console.log(memoized(0));
console.log(memoized(2));
console.log(memoized(0));
