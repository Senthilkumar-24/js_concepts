/**
 * Arrow Function expressions
 * - is a compact alternative to traditional function expressions. with some semantic differences.
 * - these functions don't have their own bindings to this, arguments or super and should not be used as methods.
 * - Arrow functions cannot be used as constructors.
 * - Calling them with new throws a TypeError. They dont have access to new.target keyword.
 * - cannot use yield within their body cannot be created as generator functions.
 */
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

console.log(materials.map(material => material.length));
// Array [8, 6, 7, 9]
console.log(matierals.length);
// 4;

// Syntax
() => expression;

// or
(params) => expression;
// or
(param1, paramN) => expression;
// or
() => {
    expression;
}
// or
param => {
    statements
}
// or
(param1, paramN) => {
    statements
}

Rest parameter syntax: -- allows a function to accept indefinite number of argumentsas an Array, providing a way to represent variadic functions.
function sum(...args) {
    let total = 0;
    for (const arg of args) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10

With the help of spread operator, we can destructuring the objects or arrays;

eg:
(a, b, ...r) => expression;

(a=400, b=200, c) => expression;

([a, b] = [10, 20]) => expression;

({a, b} = {a: 10, b: 20}) => expression;


Traditional anonymous function syntax:
(function (a) {
    return a + 100;
});

arrow functions syntax:

a => a + 100; 

A Traditional function is a named function but the arrow functions are always unnamed.


const func = () => ({ foo: 1 }); // returns {foo: 1} but

const func = () => { foo: 1 }; // does not return the above because it will consider the paranthesis as a sequence of expression and not as Object syntax.

// Reason for arrow functions cannot be used as methods:
const obj = {
    i: 10,
    b: () => console.log(this.i, this),
    c() {
      console.log(this.i, this);
    },
  };
  
  obj.b(); // logs undefined, Window { /* … */ } (or the global object)
  obj.c(); // logs 10, Object { /* … */ }.

// Reason for below statement is a closure:
class C {
    a = 1;
    autoBoundMethod = () => {
        console.log(this.a);
    };
}

const c = new C();
c.autoBoundMethod(); // 1
const { autoBoundMethod } = c;
autoBoundMethod(); // 1
  // If it were a normal method, it should be undefined in this case

Arrow functions cannot be used as constructors:
since they cannot be called with new() and they dont have the prototype property.

const Foo = () => {};

const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false

cannot be used as generators"

The yield keyword cannot be used within an arrow function's body except when used within generator functions further nested within an arrow function.

call(), apply(), bind() works similar to Traditional functions.