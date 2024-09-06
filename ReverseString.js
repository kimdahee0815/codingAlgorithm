// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverse(str) {
    if (!str || str.length < 2 || typeof str !== "string") return "invalid input!";
    const result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    return result.join("");
}

function reverse2(str) {
    const arr = str.split("");
    for (let i = 0; i < arr.length / 2; i++) {
        const item = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = item;
    }

    return arr.join("");
}

// console.log(reverse("Hi My name is Andrei"));
console.log(reverse2("Hi My name is Andrei!"));
