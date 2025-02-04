function insertion_sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let compareIndex = i;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[compareIndex] < arr[j]) {
                [arr[j], arr[compareIndex]] = [arr[compareIndex], arr[j]];
                compareIndex = j;
            }
        }
    }
    return arr;
}
console.log(insertion_sort([5, 6, 3, 1, 8, 7, 2, 4]));
console.log(insertion_sort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
