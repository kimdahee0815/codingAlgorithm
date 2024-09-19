const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let pos = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[pos] > array[j]) {
                pos = j;
            }
        }
        [array[i], array[pos]] = [array[pos], array[i]];
    }
    return array;
}

console.log(selectionSort(numbers));
