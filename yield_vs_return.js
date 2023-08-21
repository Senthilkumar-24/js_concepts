/**
 * yield operator
 * syntax: 
 *  yield
 *  yield expression
 *  
 *  - is used to pause and resume a generator function
 */

function* func1() {
    yield 42;
  }
  
  function* func2() {
    yield* func1();
  }
  
  const iterator = func2();
  
  console.log(iterator.next().value);
  // Expected output: 42
  console.log(iterator.next().value);
  // Expected output: undefined  

/**
 * yield* operator
 *  - Returns the value returned by that iterator when it's closed (when done is true).
 */
function* g3(...args) {
    yield* [1, 2];
    yield* "34";
    yield* args;
  }
  
  const gen = g3(5, 6);
  
  console.log(gen.next()); // {value: 1, done: false}
  console.log(gen.next()); // {value: 2, done: false}
  console.log(gen.next()); // {value: "3", done: false}
  console.log(gen.next()); // {value: "4", done: false}
  console.log(gen.next()); // {value: 5, done: false}
  console.log(gen.next()); // {value: 6, done: false}
  console.log(gen.next()); // {value: undefined, done: true}

