1️⃣ What is the difference between var, let, and const?

var:
1. var is the old keyword used to declare variables in JavaScript.
2. The variable is accessible only inside the function where it is declared.
3. The same variable can be declared again.
4. The value of the variable can be changed (reassigned).
5. var is hoisted,It is hoisted with an initial value of undefined.

let:
1. let is a keyword used to declare variables in JavaScript.
2. Variables declared with let are block-scoped. (Accessible only inside the block { } where they are declared.)
3. The same variable cannot be re-declared in the same scope.
4. The value of the variable can be changed (reassigned).
5. let is hoisted, but it is not initialized (Temporal Dead Zone).

const:
1. const is a keyword used to declare constants in JavaScript.
2. Variables declared with const are block-scoped.
3. The same variable cannot be re-declared in the same scope.
4. The value of a const variable cannot be changed (reassigned).
5. const is hoisted, but it is not initialized. Accessing it before declaration results in a Temporal Dead Zone (TDZ) error.
6. Objects or arrays declared with const cannot be reassigned, but their contents (properties or elements) can be modified.


2️⃣ What is the spread operator (...)?

the spread operator in JavaScript is a syntax that allows you to expand elements of an array, object, or any iterable into individual elements or properties.
example-1:
const number=[1, 2, 3];
console.log(...number)
output: 1 2 3


example-2:
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);
Output:[1, 2, 3, 4, 5]

example-3:
const person = { name: "Dulal", age: 25 };

const newPerson = { ...person, city: "Sylhet" };
console.log(newPerson);
output:{ name: "Dulal", age: 25, city: "Sylhet" }

3️⃣ What is the difference between map(), filter(), and forEach()?

map():
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
1. Returns a new array of the same length.
2. Does not modify the original array.
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]
console.log(numbers); // [1, 2, 3, 4] 

filter():

4️⃣ What is an arrow function?
The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

1. Select elements from an array based on a condition.

2. Returns A new array containing only the elements that satisfy the condition.

3. Does not modify the original array.

Example:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
console.log(numbers);     // [1, 2, 3, 4, 5] (original array unchanged)

forEach():
The forEach() method of Array instances executes a provided function once for each array element.

1. Execute a function on each element of an array.

2. Returns undefined (does not return a new array).

3. const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2; // modify original array
});
console.log(numbers); // [2, 4, 6]

Example:
const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2; // modify original array
});
console.log(numbers); // [2, 4, 6]


5️⃣ What are template literals?

English: Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.