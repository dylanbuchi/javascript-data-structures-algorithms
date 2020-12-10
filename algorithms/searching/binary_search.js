const binarySearch = (array, target) => {
    let l = 0;
    let r = array.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        const mid_item = array[mid];

        if (mid_item === target) {
            return mid;
        } else if (mid_item < target) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return undefined;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(array, 9));
