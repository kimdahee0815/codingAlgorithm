const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let m = 0; m < array.length - 1 - i; m++) {
            if (array[m] > array[m + 1]) {
                [array[m], array[m + 1]] = [array[m + 1], array[m]];
            }
        }
    }
}

bubbleSort(numbers);
console.log(numbers);
