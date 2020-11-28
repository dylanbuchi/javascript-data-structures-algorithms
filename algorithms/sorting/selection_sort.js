selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        const temp = array[i];

        for (let j = i + 1; j < array.length; j++) {
            const item = array[j];

            if (item < array[minIndex]) {
                minIndex = j;
            }
        }

        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
};
const array = [-2, 8, 99, 1, 2, 6, 89, -10, 0, 3];
selectionSort(array);
console.log(array);
