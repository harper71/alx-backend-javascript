E
What is ES6?

ES6, also known as ECMAScript 2015, is a major update to the JavaScript language. It introduced new features aimed at making code more readable, maintainable, and efficient. ES6 is a standard for scripting languages, and it plays a critical role in modern web development as the foundation of JavaScript.

### New Features Introduced in ES6:

1. **let** and **const** for block-scoped variables.
2. **Arrow functions** for more concise function expressions.
3. **Classes** for object-oriented programming.
4. **Template literals** for easier string formatting.
5. **Destructuring assignment** for unpacking values from arrays or properties from objects.
6. **Default parameters** for function arguments.
7. **Rest and spread operators** for handling variable arguments or merging arrays/objects.
8. **Modules** for better code organization (using `import` and `export`).
9. **Promises** for asynchronous programming.
10. **Iterators** and **Generators** for creating custom iteration behavior.
11. **for-of loops** for iterating over iterable objects (arrays, strings, etc.).

### Difference Between a Constant and a Variable

- **Variable**: Declared using `var` or `let`. Variables declared with `let` are block-scoped and can be reassigned, while variables declared with `var` are function-scoped and can also be reassigned.
  
  ```javascript
  let x = 10;
  x = 20; // Reassignment is allowed
  ```

- **Constant**: Declared using `const`. Constants are block-scoped and cannot be reassigned after their initial value is set.

  ```javascript
  const y = 50;
  // y = 100; // This will cause an error because constants cannot be reassigned
  ```

### Block-Scoped Variables

Block-scoped variables are variables that are only accessible within the block (delimited by `{}`) where they are defined. Both `let` and `const` create block-scoped variables.

```javascript
if (true) {
  let a = 1;
  const b = 2;
}
// a and b are not accessible here
```

### Arrow Functions

Arrow functions provide a more concise syntax for writing functions and inherit the `this` value from their surrounding scope.

```javascript
const add = (x, y) => x + y; // Implicit return
const square = x => x * x;    // No parentheses needed for single parameter
```

### Function Parameters Default to Them

You can assign default values to function parameters in ES6. If no value is provided when the function is called, the default value is used.

```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
greet(); // Output: "Hello, Guest!"
```

### Rest and Spread Function Parameters

- **Rest Parameters**: Collects all remaining arguments into an array.

  ```javascript
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  sum(1, 2, 3); // Output: 6
  ```

- **Spread Operator**: Spreads elements from an array or object into individual elements.

  ```javascript
  const arr = [1, 2, 3];
  const newArr = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
  ```

### String Templating in ES6

Template literals make string interpolation easier by using backticks (`` ` ``) and `${}` placeholders.

```javascript
const name = "John";
const message = `Hello, ${name}!`; // Output: "Hello, John!"
```

### Object Creation and Properties in ES6

In ES6, shorthand syntax can be used to create objects from variables, and methods can be defined without the `function` keyword.

```javascript
const name = "Alice";
const age = 30;
const person = {
  name, // Shorthand for name: name
  age,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};
```

### Iterators and For-of Loops

**Iterators** allow custom iteration over objects. The **for-of loop** is used to loop over iterable objects like arrays, strings, and sets.

```javascript
const numbers = [1, 2, 3, 4];
for (const number of numbers) {
  console.log(number); // Logs each number: 1, 2, 3, 4
}
```

ES6 introduced powerful features for more readable, maintainable, and efficient JavaScript code.
