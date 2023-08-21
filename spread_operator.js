/**
 * Spread syntax(...)
 *  - allows us to quickly copy all or part of the existing array 
 *    or object into another array or object.
 */
const even_numbers = [2, 4, 6, 8];
const odd_numbers = [1, 3, 5, 7, 9];
const zeroNum = [0];

// often used in combination with destructuring!

const numbersArr = [...zeroNum, ...even_numbers, ...odd_numbers];

console.log(numbersArr);
// [2, 4, 6, 8, 1, 3, 5, 7, 9, 0]

// We can use the spread operator to combine objects too.
// The properties that did not match were combined, but the property which match in both objects, then it will be overwritten by the last object's value.
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
};

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
};
  
const myNewVehicle = {
    ...myVehicle, 
    ...updateMyVehicle
};

console.log(myNewVehicle);
/**
 * {
 *      brand: 'Ford',
 *      model: 'Mustang',
 *      type: 'car',
 *      year: 2021,
 *      color: 'yellow'
 * }
 */