1️⃣ What is the difference between var, let, and const?

var:
1.var is the old keyword used to declare variables in JavaScript.
2.The variable is accessible only inside the function where it is declared.
3.The same variable can be declared again.
4.The value of the variable can be changed (reassigned).
5.var is hoisted,It is hoisted with an initial value of undefined.

let:
1.let is a keyword used to declare variables in JavaScript.
2.Variables declared with let are block-scoped. (Accessible only inside the block { } where they are declared.)
3.The same variable cannot be re-declared in the same scope.
4.The value of the variable can be changed (reassigned).
5.let is hoisted, but it is not initialized (Temporal Dead Zone).

const:
1.const is a keyword used to declare constants in JavaScript.
2.Variables declared with const are block-scoped.
3.The same variable cannot be re-declared in the same scope.
4.The value of a const variable cannot be changed (reassigned).
5.const is hoisted, but it is not initialized. Accessing it before declaration results in a Temporal Dead Zone (TDZ) error.
6.Objects or arrays declared with const cannot be reassigned, but their contents (properties or elements) can be modified.


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



4️⃣ What is an arrow function?





What are template literals?