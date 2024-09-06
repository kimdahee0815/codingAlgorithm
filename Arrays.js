const strings = ["a", "b", "c", "d"];
//4byte ('a') *4 = 16 bytes of storage
console.log(strings[2]); // O(1)

//push (last add)
strings.push("e"); // O(1)

//pop (last remove)
strings.pop(); // O(1)
strings.pop(); // O(1)

// unshift (first add)
strings.unshift("x"); // O(n) you have to reassign all the indeces

// splice
strings.splice(2, 0, "alien"); // O(n/2) => O(n)

// shift (first remove)
strings.shift(); // O(n)

console.log(strings);

// C++ (static array) vs Javascript/Python/Java (dynamic array)
// int a[20];
// int b[5] {1,2,3,4,5}
