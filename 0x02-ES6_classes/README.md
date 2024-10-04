In JavaScript, classes are a syntactic sugar introduced in ES6 (ECMAScript 2015) that simplify the process of creating objects and dealing with inheritance. While JavaScript is prototype-based, classes provide a cleaner and more readable way to define constructors and prototype methods.

Here’s a breakdown of how JavaScript classes work:

### Basic Syntax

1. **Class Declaration**:
   Classes are declared using the `class` keyword, followed by the class name. By convention, class names are written in PascalCase.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person('John', 30);
console.log(person1.greet()); // "Hello, my name is John and I am 30 years old."
```

2. **Constructor**:
   The `constructor` is a special method that is called when a new instance of the class is created. It’s used to initialize object properties.

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.make); // "Toyota"
console.log(myCar.model); // "Corolla"
```

3. **Methods**:
   Inside classes, you can define methods that belong to the class instance. These are equivalent to prototype methods in traditional JavaScript.

```js
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `${this.name} is barking!`;
  }
}

const dog = new Dog('Max');
console.log(dog.bark()); // "Max is barking!"
```

### Inheritance

JavaScript classes support inheritance using the `extends` keyword. This allows one class to inherit properties and methods from another class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const dog = new Dog('Rex');
console.log(dog.speak()); // "Rex barks."
```

In the example above, the `Dog` class extends the `Animal` class, and the `speak` method is overridden to provide a new implementation.

### Static Methods

Static methods are defined using the `static` keyword and can be called on the class itself, not on instances of the class.

```js
class MathHelper {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathHelper.add(5, 10)); // 15
```

### Getters and Setters

You can use `get` and `set` keywords to define getter and setter methods, which act like properties but behind the scenes can include custom logic.

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  set area(value) {
    this.width = value / this.height;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.area = 100;
console.log(rect.width); // 20 (since 100 / 5 = 20)
```

### Private Fields

Private class fields (introduced in ES2022) are declared using the `#` prefix. These fields cannot be accessed or modified outside the class.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
```

### Summary of Key Features
- **Classes**: Defined using the `class` keyword.
- **Constructor**: Special method to initialize objects.
- **Methods**: Functions within the class.
- **Inheritance**: Achieved using the `extends` keyword.
- **Static Methods**: Defined with the `static` keyword; invoked on the class itself.
- **Getters and Setters**: Use `get` and `set` for computed properties.
- **Private Fields**: Prefixed with `#` for encapsulation.

Let me know if you have any questions or need more examples!