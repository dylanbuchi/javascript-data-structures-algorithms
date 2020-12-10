const linearSearch = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return `Number ${target} was found at index ${i}`;
        }
    }
    return undefined;
};

const array = [10, 4, 7, 0, 3, 90, 1];

console.log(linearSearch(array, 7));
