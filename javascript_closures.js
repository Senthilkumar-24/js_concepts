/**
 * Javascript Closures -- Self-invoking functions
 * ---------------------
 *   A closure is a function having access to the parent scope, even after the parent function has closed.
 *   A closure is a combination of functions bundled together(enclosed) with references to its surrounding state(the lexical environment). 
 * - Provides access to an outer function's scope from the inner function.
 * - for object data privacy.
 * - Closures are created in javascript everytime a function is created, at function creation time.
 * 
 * - A closure is the combination of function and the lexical environment within which the function was declared.
 * -- Global variables can be made local(private or abstract) using closures.
 */

/**
 * Sample 1
 * init() creates a local variable called name and a function called displayName(). 
 * The displayName() function is an inner function that is defined inside init() and is available only within the body of the init() function. 
 * Note that the displayName() function has no local variables of its own. 
 * However, since inner functions have access to the variables of outer functions, 
 * displayName() can access the variable name declared in the parent function, init().
 */
// Closures created at the time of function declaration.
function init() {
    var name = 'Senthil';

    function displayName() {
        console.log(name);
    };

    displayName();
}

// Calling closure
init();

/**
 * Sample 2
 */
const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter }
})();

add();
add();
add();

// The variable add is assigned to the return value of the self-invoking function.

// The self-invoking function runs once. It sets the counter to 0 and returns the function expression.
// This way the add becomes a function. It can access the counter in the parent scope.

// The counter is protected by the anonymous function and can be only accessed and changed using the add function.


/**
 * Sample 3
 */

function makeFunc() {
    const name = "Senthilkumar";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// While executing the myFunc(), the 'Senthilkumar' will be accessed and printed in the console from the displayName function.

/**
 * We can nest a function within another function. The nested(inner) function is private to its containing (outer) function.
 * It also forms a closure.
 * A closure is an expression that can have free variables together with an environment that binds those variables.
 * 
 * Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. 
 * In other words, the inner function contains the scope of the outer function.
 */

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

// The inner function can be accessed only from statements in the outer function.
// The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.