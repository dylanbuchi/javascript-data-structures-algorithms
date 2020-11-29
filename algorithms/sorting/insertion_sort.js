const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        let j = i - 1;

        while (j >= 0 && array[j] > item) {
            array[j + 1] = array[j];
            j--;
        }

        array[j + 1] = item;
    }
};

const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(array);
console.log(array);
