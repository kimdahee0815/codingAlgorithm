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
console.log(findFirstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 3]));
console.log(findFirstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(findFirstRecurringCharacter([2, 3, 4, 5]));
