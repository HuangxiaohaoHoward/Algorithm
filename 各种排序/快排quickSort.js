function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[0];
    let left = [];
    let right = [];
    let equal = [];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (value < pivot) {
            left.push(value);
        } else if (value > pivot) {
            right.push(value);
        } else {
            equal.push(value);
        }
    }
    return quickSort(left) + equal + quickSort(right);
}
console.log(quickSort([5, 3, 2, 4, 1]));