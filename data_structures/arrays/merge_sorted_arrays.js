const mergeSortedArrays = (a1, a2) => {
    if (Array.isArray(a1) && Array.isArray(a2))
        return [...a1].concat(a2).sort((a, b) => a - b);
    return a1 || a2;
};

a1 = [2, 3, 4, 5, 100, 56];
a2 = [1, 2, 3, 4, 90, -12];

console.log(mergeSortedArrays(a1, a2));
console.log(mergeSortedArrays(1, [1, 2, 3, 4]));
console.log(mergeSortedArrays([], []));
console.log(mergeSortedArrays());

console.log(a1, a2);
