function reverseString(str) {
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(str[i]);
    }
    return result.join("");
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
    if (str.length === 2) {
        return str[1] + str[0];
    }
    if (str.length === 1) {
        return str[0];
    }
    return (
        reverseStringRecursive(str.slice(Math.floor(str.length / 2))) +
        reverseStringRecursive(str.slice(0, Math.floor(str.length / 2)))
    );
}

function reverseStringRecursive2(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStringRecursive("this is great"));
