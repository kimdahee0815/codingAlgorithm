const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }
    // Split Array in into right and left
    let left = array.slice(0, Math.floor(array.length / 2));
    let right = array.slice(Math.floor(array.length / 2));
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(right[j]);
            j++;
        } else {
            result.push(left[i]);
            i++;
        }
    }
    if (j >= right.length) {
        result.push(...left.slice(i));
    }
    if (i >= left.length) {
        result.push(...right.slice(j));
    }

    return result;
}

const answer = mergeSort(numbers);
console.log(answer);
