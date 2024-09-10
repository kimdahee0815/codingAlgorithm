// Google Question
// which one gets repeated first?
// Given an array = [2,5,1,2,3,5,1,2,3];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined

let findFirstRecurringCharacter = (arr) => {
    const obj = {};
    let result = undefined;
    arr.some((el) => {
        if (obj[el]) {
            result = el;
            return true;
        } else {
            obj[el] = 1;
        }
    });
    return result;
};

//O(N*N)
let findFirstRecurringCharacter2 = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
    return undefined;
};
console.log(findFirstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 3]));
console.log(findFirstRecurringCharacter2([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findFirstRecurringCharacter2([2, 3, 4, 5]));
