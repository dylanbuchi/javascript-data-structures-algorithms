const quickSort = (array, left, right) => {
    if (left >= right) return;

    const index = partition(array, left, right);

    quickSort(array, left, index - 1);
    quickSort(array, index + 1, right);
};

const partition = (array, left, right) => {
    const pivot = array[left];
    let start = left;
    let end = right;

    while (start < end) {
        while (array[start] <= pivot) {
            start++;
        }

        while (array[end] > pivot) {
            end--;
        }

        if (start <= end) {
            [array[start], array[end]] = [array[end], array[start]];

            start++;
            end--;
        }
    }

    [array[left], array[end]] = [array[end], array[left]];

    return end;
};

const array = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, -8];
quickSort(array, 0, array.length - 1);
console.log(array);
