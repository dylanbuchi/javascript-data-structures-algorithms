// Time: O(n^2);
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j + 1] < array[j]) {
                swap(array, j);
            }
        }
    }
};

const swap = (array, i) => {
    const temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
};

const array = [99, 1, 2, 6, 89, -1, 0, 3];
bubbleSort(array);
console.log(array);
