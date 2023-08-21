let declarations are block-scoped
var declarations are function-scoped and global - scoped
const declarations are block-scoped

** Variables created without declaration keyword are always global even if they are created inside a function **

Function-Scope: Visibility is limited to the function.

function myFn() {
    var x = 10;
    console.log(x); //prints 10
}

console.log(x); // ReferenceError: x is not defined


Block-Scope: Visibility is limited to the block of code.

if(true) {
    let x = 10;
    console.log(x); //prints 10
}

console.log(x); // ReferenceError: x is not defined

let a = 1;
console.log('The value of a is ', a); // prints 1 in console.
a = 5;
console.log('The value of a is ', a); // prints 5 in console.

var b = 10;
b = 20;
console.log('The value of b is ', b); // prints 20 in console.

const c = 15;
c = 25;
console.log('The value of c is ', c); // prints 15 in console since the values of const variables cannot be changed.

/**
 * Hoisiting
    is a mechanism where variables and function declarations are moved to the top of their scope before code execution.
    
    Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
    Variables declared using let are hoisted to the top of their scope but are not initialized with any value.
    Variables declared using const are hoisted to the top of their scope but are not initialized with any value.

    In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. 
    Basically, it gives us an advantage that no matter where functions and variables are declared, 
    they are moved to the top of their scope regardless of whether their scope is global or local. 
    It allows us to call functions before even writing them in our code. 
*/
function codeHoist() {
    a = 10;
    let b = 50;
}
codeHoist();

console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

/**
 * Primitive data types
 * Number
 * String
 * Undefined
 * Boolean
 * Null
 * BigInt - numbers greater than 2^53 -1
 * Symbol
 */
Properties & methods of Primitive datatypes in Javascript cannot be changed.

const fname = 'Senthil';

fname = 'Kumar';
console.log(fname); // not allowed as const variable cannot be reassigned.

/**
 * Non-Primitive data types
 * Object
 * Array
 */
Properties & methods of Non-Primitive datatypes in Javascript can be changed.
const SomeOb = {
	id: 233,
	name: null,
};

// allowed
SomeOb.name = "John Doe";

// not allowed as variable cannot be reassigned
SomeOb = 10;


*Counter Dilemma
