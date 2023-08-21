/**
 * Iterators:-
 *  - is an object which defines a sequence and returns a value 
 *  - is any object that implements iterator protocol by having next() method that returns an object with two properties:- 
 *      * value - the next value in the sequence
 *      * done - This will be true if the last value in the sequence is already consumed
 */
const it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

/**
 * Generator Functions:-
 * It is a special type of function which does not return a single value. It returns an iterator object with a sequence of values.
 * It consists of the yield statement rather than a return statement
 *   Syntax: function* function_name(args) {...}
 *  Declaring a generator function creates a generator object. 
 */
function* generator(i) {
    yield i;
    yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
  // Expected output: 20

console.log(gen.next().value); 
    // returns undefined since the yield method reached the last value of the generator function.



function* idMaker() {
    let index = 0;
    while (true) {
      yield index++;
    }
  }
  
  const generateID = idMaker();
  
  console.log(generateID.next().value); // 0
  console.log(generateID.next().value); // 1
  console.log(generateID.next().value); // 2
  console.log(generateID.next().value); // 3
  // …