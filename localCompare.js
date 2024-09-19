const letters = ["a", "d", "z", "e", "r", "b"];
const basket = [2, 65, 34, 2, 1, 7, 8];

letters.sort();
console.log(letters);

basket.sort(function (a, b) {
    return a - b;
});
console.log(basket);

const spanish = ["único", "árbol", "cosas", "fútbol"];

spanish.sort();
console.log(spanish);

spanish.sort(function (a, b) {
    return a.localeCompare(b);
});
console.log(spanish);
